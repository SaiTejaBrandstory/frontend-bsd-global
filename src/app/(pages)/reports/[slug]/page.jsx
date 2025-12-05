import { fetchFromStrapi } from '@/lib/strapi'
import { notFound } from 'next/navigation'
import ReportHeroSection from './ReportHeroSection'
import ReportSecondSection from './ReportSecondSection'
import ReportThirdSection from './ReportThirdSection'
import ReportFourthSection from './ReportFourthSection'
import ReportFifthSection from './ReportFifthSection'
import ReportSixthSection from './ReportSixthSection'
import ReportSeventhSection from './ReportSeventhSection'
import ReportEighthSection from './ReportEighthSection'
import ReportNinthSection from './ReportNinthSection'
import ReportTenthSection from './ReportTenthSection'
import ReportEleventhSection from './ReportEleventhSection'
import ReportTwelfthSection from './ReportTwelfthSection'
import ReportThirteenthSection from './ReportThirteenthSection'
import ReportFourteenthSection from './ReportFourteenthSection'
import ReportFifteenthSection from './ReportFifteenthSection'
import ReportSixteenthSection from './ReportSixteenthSection'
import '../../seo-intelligence-report/report.css'

async function getReportPageData(slug) {
  const decodedSlug = decodeURIComponent(slug)
  
  // Populate dynamic zone for all sections
  const populateParams = new URLSearchParams({
    'populate[reportPageComponents][on][report-page-component.report-first-section]': '*',
    'populate[reportPageComponents][on][report-page-component.report-second-section][populate][description][populate][segments]': '*',
    'populate[reportPageComponents][on][report-page-component.report-third-section][populate][cards]': '*',
    'populate[reportPageComponents][on][report-page-component.report-fourth-section][populate][cards]': '*',
    'populate[reportPageComponents][on][report-page-component.report-fifth-section][populate][cards]': '*',
    'populate[reportPageComponents][on][report-page-component.report-sixth-section][populate][cards]': '*',
    'populate[reportPageComponents][on][report-page-component.report-sixth-section][populate][keywordIntent]': '*',
    'populate[reportPageComponents][on][report-page-component.report-seventh-section][populate][tableRows]': '*',
    'populate[reportPageComponents][on][report-page-component.report-seventh-section][populate][cards]': '*',
    'populate[reportPageComponents][on][report-page-component.report-eigth-section][populate][cards]': '*',
    'populate[reportPageComponents][on][report-page-component.report-eigth-section][populate][tabs][populate][graphData]': '*',
    'populate[reportPageComponents][on][report-page-component.report-ninth-section][populate][cards][populate][items]': '*',
    'populate[reportPageComponents][on][report-page-component.report-tenth-section][populate][cards][populate][keyValues]': '*',
    'populate[reportPageComponents][on][report-page-component.report-tenth-section][populate][cards][populate][listItems]': '*',
    'populate[reportPageComponents][on][report-page-component.report-eleventh-section][populate][cards]': '*',
    'populate[reportPageComponents][on][report-page-component.report-eleventh-section][populate][bottomItems][populate][listItems]': '*',
    'populate[reportPageComponents][on][report-page-component.report-twelfth-section][populate][cards]': '*',
    'populate[reportPageComponents][on][report-page-component.report-thirteenth-section][populate][cards][populate][exampleQueries]': '*',
    'populate[reportPageComponents][on][report-page-component.report-thirteenth-section][populate][cards][populate][listItems]': '*',
    'populate[reportPageComponents][on][report-page-component.report-fourteenth-section][populate][cards][populate][listItems]': '*',
    'populate[reportPageComponents][on][report-page-component.report-fifteenth-section][populate][cards][populate][listItems]': '*',
    'populate[reportPageComponents][on][report-page-component.report-sixteenth-section][populate][logo][fields]': 'url',
  })
  
  // Query by slug field - try exact match first
  let reportPage = await fetchFromStrapi(
    `/api/report-pages?filters[slug][$eq]=${encodeURIComponent(decodedSlug)}&${populateParams.toString()}`,
    { revalidate: 0 }
  )

  // If not found, try case-insensitive match
  if (!reportPage?.data?.[0] && !reportPage?.[0]) {
    reportPage = await fetchFromStrapi(
      `/api/report-pages?filters[slug][$eqi]=${encodeURIComponent(decodedSlug)}&${populateParams.toString()}`,
      { revalidate: 0 }
    )
  }

  // Handle Strapi v5 response structure
  const pageData = reportPage?.data?.[0]?.attributes 
    ? { ...reportPage.data[0].attributes, id: reportPage.data[0].id }
    : reportPage?.data?.[0] 
    ? reportPage.data[0]
    : reportPage?.[0]?.attributes
    ? { ...reportPage[0].attributes, id: reportPage[0].id }
    : reportPage?.[0] || null

  return pageData
}

export async function generateMetadata({ params }) {
  const { slug } = await params
  const pageData = await getReportPageData(slug)
  
  if (!pageData) {
    return {
      title: 'Page Not Found',
      description: 'The page you are looking for does not exist.',
    }
  }

  return {
    title: pageData?.metaTitle,
    description: pageData?.metaDescription,
  }
}

export default async function ReportSlugPage({ params }) {
  const { slug } = await params
  const pageData = await getReportPageData(slug)

  if (!pageData) {
    notFound()
  }

  // Extract sections from dynamic zone
  const reportPageComponents = pageData.reportPageComponents || []
  const firstSection = reportPageComponents.find(
    (component) => component.__component === 'report-page-component.report-first-section'
  )
  // Get all second sections (can be used for Executive Summary, Second Section, etc.)
  const secondSections = reportPageComponents.filter(
    (component) => component.__component === 'report-page-component.report-second-section'
  )
  const thirdSection = reportPageComponents.find(
    (component) => component.__component === 'report-page-component.report-third-section'
  )
  const fourthSection = reportPageComponents.find(
    (component) => component.__component === 'report-page-component.report-fourth-section'
  )
  const fifthSection = reportPageComponents.find(
    (component) => component.__component === 'report-page-component.report-fifth-section'
  )
  const sixthSection = reportPageComponents.find(
    (component) => component.__component === 'report-page-component.report-sixth-section'
  )
  const seventhSection = reportPageComponents.find(
    (component) => component.__component === 'report-page-component.report-seventh-section'
  )
  const eighthSection = reportPageComponents.find(
    (component) => component.__component === 'report-page-component.report-eigth-section'
  )
  const ninthSection = reportPageComponents.find(
    (component) => component.__component === 'report-page-component.report-ninth-section'
  )
  const tenthSection = reportPageComponents.find(
    (component) => component.__component === 'report-page-component.report-tenth-section'
  )
  const eleventhSection = reportPageComponents.find(
    (component) => component.__component === 'report-page-component.report-eleventh-section'
  )
  const twelfthSection = reportPageComponents.find(
    (component) => component.__component === 'report-page-component.report-twelfth-section'
  )
  const thirteenthSection = reportPageComponents.find(
    (component) => component.__component === 'report-page-component.report-thirteenth-section'
  )
  const fourteenthSection = reportPageComponents.find(
    (component) => component.__component === 'report-page-component.report-fourteenth-section'
  )
  const fifteenthSection = reportPageComponents.find(
    (component) => component.__component === 'report-page-component.report-fifteenth-section'
  )
  const sixteenthSection = reportPageComponents.find(
    (component) => component.__component === 'report-page-component.report-sixteenth-section'
  )

  return (
    <div className="min-h-screen bg-white scroll-smooth seo-report-page">
      {/* Hero Section - First Section from Strapi */}
      <ReportHeroSection firstSection={firstSection} />

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        {/* Second Sections from Strapi (can be Executive Summary, Second Section, etc.) */}
        {secondSections.map((section, index) => (
          <ReportSecondSection key={index} secondSection={section} />
        ))}

        {/* Third Section from Strapi */}
        <ReportThirdSection thirdSection={thirdSection} />

        {/* Fourth Section from Strapi */}
        <ReportFourthSection fourthSection={fourthSection} />

        {/* Fifth Section from Strapi */}
        <ReportFifthSection fifthSection={fifthSection} />

        {/* Sixth Section from Strapi */}
        <ReportSixthSection sixthSection={sixthSection} />

        {/* Seventh Section from Strapi */}
        <ReportSeventhSection seventhSection={seventhSection} />

        {/* Eighth Section from Strapi */}
        <ReportEighthSection eighthSection={eighthSection} />

        {/* Ninth Section from Strapi */}
        <ReportNinthSection ninthSection={ninthSection} />

        {/* Tenth Section from Strapi */}
        <ReportTenthSection tenthSection={tenthSection} />

        {/* Eleventh Section from Strapi */}
        <ReportEleventhSection eleventhSection={eleventhSection} />

        {/* Twelfth Section from Strapi */}
        <ReportTwelfthSection twelfthSection={twelfthSection} />

        {/* Thirteenth Section from Strapi */}
        <ReportThirteenthSection thirteenthSection={thirteenthSection} />

        {/* Fourteenth Section from Strapi */}
        <ReportFourteenthSection fourteenthSection={fourteenthSection} />

        {/* Fifteenth Section from Strapi */}
        <ReportFifteenthSection fifteenthSection={fifteenthSection} />

      </div>

      {/* Sixteenth Section (Footer) from Strapi */}
      <ReportSixteenthSection sixteenthSection={sixteenthSection} />
    </div>
  )
}

