import CommonDivider from '@/component/pages/common/CommonDivider'
import {ESBanner} from '@/component/pages/EnterpriseSeo/ESBanner'
import {SeoResults} from '@/component/pages/EnterpriseSeo/SeoResults'
import {FiveStep} from '@/component/pages/EnterpriseSeo/FiveStep'
import {CloserLook} from '@/component/pages/EnterpriseSeo/CloserLook'
import {SeoStrategies} from '@/component/pages/EnterpriseSeo/SeoStrategies'
import {ClientGrowth} from '@/component/pages/EnterpriseSeo/ClientGrowth'
import {LeadingBrands} from '@/component/pages/EnterpriseSeo/LeadingBrands'
import {ESFaq} from '@/component/pages/EnterpriseSeo/ESFaq'
import {EsAdv} from '@/component/pages/EnterpriseSeo/EsAdv'

const page =()=>{
    return (
        <>
            <ESBanner />
            <CommonDivider/><SeoResults />
            <CommonDivider/><FiveStep />
            <CommonDivider/><CloserLook />
            <CommonDivider/><SeoStrategies />
            <CommonDivider/><ClientGrowth />
            <CommonDivider/><LeadingBrands />
            <CommonDivider/><ESFaq />
            <CommonDivider/><EsAdv />
        </>
    )
}

export default page