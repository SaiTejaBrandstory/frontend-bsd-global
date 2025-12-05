import CommonDivider from '@/component/pages/common/CommonDivider'
import {IsBanner} from '@/component/pages/InternationalSeo/IsBanner'
import {WhyTrust} from '@/component/pages/InternationalSeo/WhyTrust'
import {FivePhase} from '@/component/pages/InternationalSeo/FivePhase'
import {Multilingual} from '@/component/pages/InternationalSeo/Multilingual'
import {CaseStudies} from '@/component/pages/InternationalSeo/CaseStudies'
import {SamplePackages} from '@/component/pages/InternationalSeo/SamplePackages'
import {Clients} from '@/component/pages/InternationalSeo/Clients'
import {Faq} from '@/component/pages/InternationalSeo/Faq'
import {Adv} from '@/component/pages/InternationalSeo/Adv'

const page = () =>{
    return(
        <>
            <IsBanner />
            <CommonDivider /><WhyTrust />
            <CommonDivider /><FivePhase />
            <CommonDivider /><Multilingual />
            <CommonDivider /><CaseStudies />
            <CommonDivider /><SamplePackages/>
            <CommonDivider /><Clients />
            <CommonDivider /><Faq />
            <CommonDivider /><Adv />
        </>
    )
}
 
export default page;