import CommonDivider from '@/component/pages/common/CommonDivider';
import { CMSbanner } from "@/component/pages/contenetMarketingService/CMSbanner"
import { WordsToRevenue } from "@/component/pages/contenetMarketingService/WordsToRevenue"
import { GrowthFramework } from "@/component/pages/contenetMarketingService/GrowthFramework"
import { ContentExpertise } from "@/component/pages/contenetMarketingService/ContentExpertise"
import { ContentMarketing } from "@/component/pages/contenetMarketingService/ContentMarketing"
import { Storytelling } from "@/component/pages/contenetMarketingService/Storytelling"
import { EffectiveSEO } from "@/component/pages/contenetMarketingService/EffectiveSEO"
import { NurturesLeads } from "@/component/pages/contenetMarketingService/NurturesLeads"
import { IndustrySpecificContent } from "@/component/pages/contenetMarketingService/IndustrySpecificContent"
import { ContentMarketingFAQ } from "@/component/pages/contenetMarketingService/ContentMarketingFAQ"
import ContentMarketingTools from "@/component/pages/contenetMarketingService/ContentMarketingTools"
import {WhyChooseBrandStory} from "@/component/pages/contenetMarketingService/WhyChooseBrandStory"
import {ContentMarketingFooter} from "@/component/pages/contenetMarketingService/ContentMarketingFooter"
import {ContentMarketingArrowGrid} from "@/component/pages/contenetMarketingService/ContentMarketingArrowGrid"
import {ContentMarketingAdvFooter} from "@/component/pages/contenetMarketingService/ContentMarketingAdvFooter"
import {HowWeMakeContent} from "@/component/pages/contenetMarketingService/HowWeMakeContent"

const page = ()=>{
    return(
        <>
            <CMSbanner />
            <CommonDivider /><WordsToRevenue />
            <CommonDivider /><GrowthFramework />
            <CommonDivider /><HowWeMakeContent />
            <CommonDivider /><IndustrySpecificContent />
            <CommonDivider /><ContentMarketingFAQ />
            <CommonDivider /><ContentMarketingTools />
            <CommonDivider /><WhyChooseBrandStory />
            {/* <CommonDivider /><ContentExpertise /> */}
            {/* <CommonDivider /><ContentMarketing /> */}
            {/* <CommonDivider /><Storytelling /> */}
            {/* <CommonDivider /><EffectiveSEO /> */}
            {/* <CommonDivider /><NurturesLeads /> */}
            <CommonDivider /><ContentMarketingFooter />
            <CommonDivider /><ContentMarketingArrowGrid />
            <CommonDivider /><ContentMarketingAdvFooter />
        </>
    )
}

export default page;