import CommonDivider from '@/component/pages/common/CommonDivider';
import { B2BBanner } from "@/component/pages/B2BMarketing/B2BBanner";
import { BehindB2BSuccess } from "@/component/pages/B2BMarketing/BehindB2BSuccess";
import StructuredGrowth  from "@/component/pages/B2BMarketing/StructuredGrowth";
import { SmartB2BGrowth } from "@/component/pages/B2BMarketing/SmartB2BGrowth";
import { IndustryNeeds } from "@/component/pages/B2BMarketing/IndustryNeeds";
import { MarketingResults } from "@/component/pages/B2BMarketing/MarketingResults";
import { OptimizedTools } from "@/component/pages/B2BMarketing/OptimizedTools";
import { LeadingBrands } from "@/component/pages/B2BMarketing/LeadingBrands";
import { B2BFaq } from "@/component/pages/B2BMarketing/B2BFaq";
import { B2BArrow } from "@/component/pages/B2BMarketing/B2BArrow";
import { B2BFooter } from "@/component/pages/B2BMarketing/B2BFooter";

const page =()=>{
    return (
        <>
            <B2BBanner />
            <CommonDivider /><BehindB2BSuccess />
            <CommonDivider /><StructuredGrowth />
            <CommonDivider /><SmartB2BGrowth />
            <CommonDivider /><IndustryNeeds />
            <CommonDivider /><MarketingResults />
            <CommonDivider /><OptimizedTools />
            <CommonDivider /><LeadingBrands />
            <CommonDivider /><B2BFaq />
            <CommonDivider /><B2BArrow />
            <CommonDivider /><B2BFooter />
        </>
    )
}

export default page;

