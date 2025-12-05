import {MABanner} from '@/component/pages/marketingAutomation/MABanner'
import { MarketingFramework } from '@/component/pages/marketingAutomation/MarketingFramework';
import {MeasurableResults} from '@/component/pages/marketingAutomation/MeasurableResults'
import { MultiChannelMarketing } from '@/component/pages/marketingAutomation/MultiChannelMarketing';
import { AutomatedMarketing } from '@/component/pages/marketingAutomation/AutomatedMarketing';
import { SmartJourneys } from '@/component/pages/marketingAutomation/SmartJourneys';
import { Autopilot } from '@/component/pages/marketingAutomation/Autopilot';
import { B2BAutomation } from '@/component/pages/marketingAutomation/B2BAutomation';
import { CaseStudies } from '@/component/pages/marketingAutomation/CaseStudies';
import { TechStackAutomation } from '@/component/pages/marketingAutomation/TechStackAutomation';
import { LeadingCompanies } from '@/component/pages/marketingAutomation/LeadingCompanies';
import { MarketingAutomationFAQ } from '@/component/pages/marketingAutomation/MarketingAutomationFAQ';
import { MarketingAutomationArrowGrid } from '@/component/pages/marketingAutomation/MarketingAutomationArrowGrid';
import { MarketingAutomationFooter } from '@/component/pages/marketingAutomation/MarketingAutomationFooter';
import CommonDivider from '@/component/pages/common/CommonDivider';

const page = ()=>{
    return (
        <>
            <MABanner />
            <CommonDivider /><MeasurableResults />
            <CommonDivider /><MarketingFramework />
            <CommonDivider /><MultiChannelMarketing />
            <CommonDivider /><AutomatedMarketing />
            <CommonDivider /><SmartJourneys />
            <CommonDivider /><Autopilot />
            <CommonDivider /><B2BAutomation />
            <CommonDivider /><CaseStudies />
            <CommonDivider /><TechStackAutomation />
            <CommonDivider /><LeadingCompanies />
            <CommonDivider /><MarketingAutomationFAQ/>
            <CommonDivider /><MarketingAutomationArrowGrid />
            <CommonDivider /><MarketingAutomationFooter />            
        </>
    )
}


export default page;