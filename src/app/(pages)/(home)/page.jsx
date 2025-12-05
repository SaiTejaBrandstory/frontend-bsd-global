import Banner from '@/component/pages/homeComponent/Banner'
import Bloglist from '@/component/pages/homeComponent/Bloglist'
import ClientLogosSection from '@/component/pages/homeComponent/ClientLogosSection'
import ClientStories from '@/component/pages/homeComponent/ClientStories'
import HeroSection from '@/component/pages/homeComponent/HeroSection'
import HowWeWork from '@/component/pages/homeComponent/HowWeWork'
import ImpactStats from '@/component/pages/homeComponent/ImpactStats'
import IndustriesServed from '@/component/pages/homeComponent/IndustriesServed'
import MarketingServices from '@/component/pages/homeComponent/MarketingServices'
import ServicesSlider from '@/component/pages/homeComponent/ServicesSlider'
import SoftwareSolutions from '@/component/pages/homeComponent/SoftwareSolutions'
import StatsCard from '@/component/pages/homeComponent/StatsCard'
import StoriesSection from '@/component/pages/homeComponent/StoriesSection'
import TechTabs from '@/component/pages/homeComponent/TechTabs'
import WhyBrandStory from '@/component/pages/homeComponent/WhyBrandStory'
import Footer from '@/component/partial/Footer'
import Header from '@/component/partial/Header'
import { fetchFromStrapi } from '@/lib/strapi'
import React from 'react'

async function getHomePageData() {
  try {
    // Populate all fields including nested component media
    // For Strapi v5, we need to explicitly populate media fields in components
    const params = new URLSearchParams({
      'populate[firstSection][populate][bannerList]': '*',
      'populate[secondSection]': '*',
      'populate[thirdSection][populate][topRightImage][fields]': 'url',
      'populate[thirdSection][populate][leftBottomImage][fields]': 'url',
      'populate[fourthSection][populate][fourthSectionCards][populate][image][fields]': 'url',
      'populate[fifthSection][populate][services]': '*',
      'populate[sixthSection][populate][tabs][populate][icon][fields]': 'url',
      'populate[sixthSection][populate][tabs][populate][tools][populate][icon][fields]': 'url',
      'populate[seventhSection][populate][industries]': '*',
      'populate[eighthSection][populate][banners]': '*',
      'populate[ninthSection][populate][cards][populate][image][fields]': 'url',
      'populate[tenthSection][populate][cards][populate][image][fields]': 'url',
      'populate[tenthSection][populate][cards][populate][list]': '*',
      'populate[eleventhSection][populate][cards][populate][image][fields]': 'url',
      'populate[twelfthSection][populate][cards][populate][image][fields]': 'url',
      'populate[thirteenthSection][populate][rows][populate][images][populate][image][fields]': 'url',
      'populate[fourteenthSection][populate][posts]': '*',
      'populate[fifteenthSection][populate][testimonials]': '*',
    })
    const url = `/api/home-page?${params.toString()}&publicationState=live`
    const response = await fetchFromStrapi(url, { revalidate: 0 })
    
    // If response is null (404/unpublished), return null
    if (!response) {
      return null
    }
    
    // For singleType, data is directly in response.data
    const entry = response?.data || null
    
    // Check if content is published (has publishedAt)
    if (!entry || !entry.publishedAt) {
      return null
    }
    const title = entry?.title
    const metaDescription = entry?.metaDescription
    const firstSection = entry?.firstSection
    const secondSection = entry?.secondSection || []
    const thirdSection = entry?.thirdSection
    const fourthSection = entry?.fourthSection
    const fifthSection = entry?.fifthSection
    const sixthSection = entry?.sixthSection
    const seventhSection = entry?.seventhSection
    const eighthSection = entry?.eighthSection
    const ninthSection = entry?.ninthSection
    const tenthSection = entry?.tenthSection
    const eleventhSection = entry?.eleventhSection
    const twelfthSection = entry?.twelfthSection
    const thirteenthSection = entry?.thirteenthSection
    const fourteenthSection = entry?.fourteenthSection
    const fifteenthSection = entry?.fifteenthSection
    return { title, metaDescription, firstSection, secondSection, thirdSection, fourthSection, fifthSection, sixthSection, seventhSection, eighthSection, ninthSection, tenthSection, eleventhSection, twelfthSection, thirteenthSection, fourteenthSection, fifteenthSection }
  } catch (error) {
    console.error('Error fetching home page data:', error)
    return null
  }
}

export async function generateMetadata() {
  const homePageData = await getHomePageData()
  const title = homePageData?.title
  const metaDescription = homePageData?.metaDescription
  
  return {
    title: title || 'BrandStory - Full-Stack Digital Agency',
    description: metaDescription || 'A Full-Stack Digital Agency with 11+ Years of experience. 250+ Clients. 50+ Industries. Software Development, Digital Marketing, and Creative Services.',
  }
}

const page = async () => {
  const homePageData = await getHomePageData()
  const firstSectionData = homePageData?.firstSection
  const secondSectionData = homePageData?.secondSection
  const thirdSectionData = homePageData?.thirdSection
  const fourthSectionData = homePageData?.fourthSection
  const fifthSectionData = homePageData?.fifthSection
  const sixthSectionData = homePageData?.sixthSection
  const seventhSectionData = homePageData?.seventhSection
  const eighthSectionData = homePageData?.eighthSection
  const ninthSectionData = homePageData?.ninthSection
  const tenthSectionData = homePageData?.tenthSection
  const eleventhSectionData = homePageData?.eleventhSection
  const twelfthSectionData = homePageData?.twelfthSection
  const thirteenthSectionData = homePageData?.thirteenthSection
  const fourteenthSectionData = homePageData?.fourteenthSection
  const fifteenthSectionData = homePageData?.fifteenthSection

  return (
    <>
   <Banner data={firstSectionData} /> 
   <StatsCard data={secondSectionData} />
   <HeroSection data={thirdSectionData} />
   <WhyBrandStory data={fourthSectionData} />
   <ServicesSlider data={fifthSectionData} />
   <TechTabs data={sixthSectionData} />
   <IndustriesServed data={seventhSectionData} />
   <HowWeWork data={eighthSectionData} />
   <ImpactStats data={ninthSectionData} />
   <MarketingServices data={tenthSectionData} />
   <SoftwareSolutions data={eleventhSectionData} />
   <StoriesSection data={twelfthSectionData} />
   <ClientLogosSection data={thirteenthSectionData} />
   <Bloglist data={fourteenthSectionData} />
   <ClientStories data={fifteenthSectionData} />
    </>

  )
}

export default page

export const dynamic = 'force-dynamic'
export const revalidate = 0