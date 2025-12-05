import { fetchFromStrapi } from '@/lib/strapi'
import { SectionRenderer } from '@/component/sections/SectionRenderer'
import { notFound } from 'next/navigation'

async function getServicePageData(slug) {
  // Decode the slug to handle URL-encoded characters
  const decodedSlug = decodeURIComponent(slug)
  
  // For Strapi v5, explicitly populate sections dynamic zone and all nested components with images
  // For dynamic zones, use 'on' parameter to target specific components, then populate their nested fields
  const populateParams = new URLSearchParams({
    'populate[sections][on][sections.first-section]': '*',
    'populate[sections][on][sections.fifth-section][populate][fifthSectionCards][populate][image][fields]': 'url',
    'populate[sections][on][sections.fifth-section][populate][fifthSectionCards][populate][cardSubSections]': '*',
    'populate[sections][on][sections.second-section][populate][secondSectionCards]': '*',
    'populate[sections][on][sections.fourth-section][populate][fourthSectionCards]': '*',
    'populate[sections][on][sections.third-section][populate][thirdSectionCards]': '*',
    'populate[sections][on][sections.sixth-section][populate][sixthSectionCards][populate][icon][fields]': 'url',
    'populate[sections][on][sections.seventh-section][populate][seventhSectionCards][populate][logo][fields]': 'url',
    'populate[sections][on][sections.eighth-section][populate][eighthSectionCards]': '*',
    'populate[sections][on][sections.ninth-section][populate][ninthSectionOptions]': '*',
    'populate[sections][on][sections.tenth-section][populate][tenthSectionCards][populate][logo][fields]': 'url',
    'populate[sections][on][sections.eleventh-section][populate][eleventhSectionOptions][populate][listItems]': '*',
    'populate[sections][on][sections.twelfth-section]': '*',
    'populate[sections][on][sections.thirteenth-section][populate][thirteenthSectionFaqs]': '*',
  })
  
  // Query by slug field (changed from UID to Text type in Strapi)
  // First, try exact match with slug field
  let servicePage = await fetchFromStrapi(
    `/api/service-pages?filters[slug][$eq]=${encodeURIComponent(decodedSlug)}&${populateParams.toString()}`,
    { revalidate: 0 }
  )

  // If not found, try case-insensitive match
  if (!servicePage?.data?.[0] && !servicePage?.[0]) {
    servicePage = await fetchFromStrapi(
      `/api/service-pages?filters[slug][$eqi]=${encodeURIComponent(decodedSlug)}&${populateParams.toString()}`,
      { revalidate: 0 }
    )
  }

  // Handle Strapi v5 response structure
  const pageData = servicePage?.data?.[0]?.attributes 
    ? { ...servicePage.data[0].attributes, id: servicePage.data[0].id }
    : servicePage?.data?.[0] 
    ? servicePage.data[0]
    : servicePage?.[0]?.attributes
    ? { ...servicePage[0].attributes, id: servicePage[0].id }
    : servicePage?.[0] || null

  return pageData
}

export async function generateMetadata({ params }) {
  const { slug } = await params
  const pageData = await getServicePageData(slug)
  
  if (!pageData) {
    return {
      title: 'Page Not Found',
      description: 'The page you are looking for does not exist.',
    }
  }

  const metaTitle = pageData?.metaTitle || 'BrandStory Global'
  const metaDescription = pageData?.metaDescription || 'Everything Your Brand Needs to Grow — In One Digital Agency'

  return {
    title: metaTitle,
    description: metaDescription,
  }
}

export default async function SlugPage({ params }) {
  // Next.js 15 requires awaiting params
  const { slug } = await params

  const pageData = await getServicePageData(slug)

  if (!pageData) {
    notFound()
  }

  // Extract sections from the page data
  // In Strapi v5, sections in dynamic zones should be an array
  const sections = pageData.sections || []
  
  // Debug: Log sections to see what we're getting (remove in production)
  if (process.env.NODE_ENV === 'development') {
    console.log('Sections data:', JSON.stringify(sections, null, 2))
  }

  return <SectionRenderer sections={sections} />
}
