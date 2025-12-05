import Seoabout from '@/component/pages/seoComponent/SeoAbout'
import SEOApart from '@/component/pages/seoComponent/SeoApart'
import { SeoBanner } from '@/component/pages/seoComponent/SeoBanner'
import SeoMethodology from '@/component/pages/seoComponent/SeoMethodology'
import SeoRoiSection from '@/component/pages/seoComponent/SeoRoiSection'
import SeoStats from '@/component/pages/seoComponent/SeoStats'
import SeoStrategies from '@/component/pages/seoComponent/SeoStrategies'
import SeoExpertise from '@/component/pages/seoComponent/SeoExpertise'
import SeoResults from '@/component/pages/seoComponent/SeoResults'
import {SeoFaq} from '@/component/pages/seoComponent/SeoFaq'
import React from 'react'
import SeoMarketingService from '@/component/pages/seoComponent/SeoMarketingService'
import CommonDivider from '@/component/pages/common/CommonDivider'
import { SeoFooter } from '@/component/pages/seoComponent/SeoFooter'
import { PathToProfit } from '@/component/pages/seoComponent/PathToProfit'


const page = () => {

  return (
    <>
    <SeoBanner/>
    <CommonDivider /><Seoabout/>

    <CommonDivider /><SeoStats/>
    
    <CommonDivider /><SeoMethodology/>

    <CommonDivider /><PathToProfit />
    
    <CommonDivider /><SEOApart/>
    
    <CommonDivider /><SeoRoiSection/>
    
    <CommonDivider /><SeoStrategies/>
    
    <CommonDivider /><SeoExpertise />
    
    <CommonDivider /><SeoResults />
    
    <CommonDivider /><SeoFaq />
    
    <CommonDivider /><SeoMarketingService />
    
    <SeoFooter />
    </>
  )
}

export default page