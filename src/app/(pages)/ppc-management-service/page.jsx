import { PPCBanner } from "@/component/pages/PPC/PPCBanner"
import {AccelerateGrowth} from '@/component/pages/PPC/AccelerateGrowth'
import {BeyondClicks} from '@/component/pages/PPC/BeyondClicks'
import {GrowthPlan} from '@/component/pages/PPC/GrowthPlan'
import {TrustedChoice} from '@/component/pages/PPC/TrustedChoice'
import {SuccessPlan} from '@/component/pages/PPC/SuccessPlan'
import {Omnichannel} from '@/component/pages/PPC/Omnichannel'
import {AudienceTargeting} from '@/component/pages/PPC/AudienceTargeting'
import {ConversionRate} from '@/component/pages/PPC/ConversionRate'
import {PPCCampaigns} from '@/component/pages/PPC/PPCCampaigns'
import {PPCCaseStudies} from '@/component/pages/PPC/PPCCaseStudies'
import {PPCFaq} from '@/component/pages/PPC/PPCFaq'
import {PPCServices} from '@/component/pages/PPC/PPCServices'
import {PPCFooter} from '@/component/pages/PPC/PPCFooter'
import {PPCPerformance} from '@/component/pages/PPC/PPCPerformance'
import CommonDivider from '@/component/pages/common/CommonDivider'

const page = () => {
  return (
    <>
        <PPCBanner/>
        <CommonDivider /><AccelerateGrowth />
        <CommonDivider /><BeyondClicks />
        <CommonDivider /><GrowthPlan />
        <CommonDivider /><TrustedChoice />
        <CommonDivider /><SuccessPlan />
        <CommonDivider /><Omnichannel />
        <CommonDivider /><AudienceTargeting />
        <CommonDivider /><ConversionRate />
        <CommonDivider /><PPCCampaigns />
        <CommonDivider /><PPCCaseStudies />
        <CommonDivider /><PPCPerformance />
        <CommonDivider /><PPCFaq/>
        <CommonDivider /><PPCServices />
        <CommonDivider /><PPCFooter />
    </>
  )
}

export default page