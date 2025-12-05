import CommonDivider from '@/component/pages/common/CommonDivider'
import {EcomBanner} from '@/component/pages/EcomSeo/EcomBanner'
import {EcomMainstreme} from '@/component/pages/EcomSeo/EcomMainstreme'
import {GetClients} from '@/component/pages/EcomSeo/GetClients'
import {EcomSeoIncludes} from '@/component/pages/EcomSeo/EcomSeoIncludes'
import {WhyEssential} from '@/component/pages/EcomSeo/WhyEssential'
import {SeoDifferent} from '@/component/pages/EcomSeo/SeoDifferent'
import {SeoServices} from '@/component/pages/EcomSeo/SeoServices'
import {VoiceSearch} from '@/component/pages/EcomSeo/VoiceSearch'
import {EcomCost} from '@/component/pages/EcomSeo/EcomCost'
import {Technologies} from '@/component/pages/EcomSeo/Technologies'
import {Faq} from '@/component/pages/EcomSeo/Faq'
import {Adv} from '@/component/pages/EcomSeo/Adv'

const page = () =>{
    return(
        <>
            <EcomBanner />
            <CommonDivider /><EcomMainstreme />
            <CommonDivider /><GetClients />
            <CommonDivider /><EcomSeoIncludes />
            <CommonDivider /><WhyEssential />
            <CommonDivider /><SeoDifferent />
            <CommonDivider /><SeoServices />
            <CommonDivider /><VoiceSearch />
            <CommonDivider /><EcomCost />
            <CommonDivider /><Technologies />
            <CommonDivider /><Faq />
            <CommonDivider /><Adv />
        </>
    )
}

export default page;