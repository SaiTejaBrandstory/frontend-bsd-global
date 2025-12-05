import CommonDivider from '@/component/pages/common/CommonDivider'
import {Banner} from '@/component/pages/DTS/Banner'
import {WhatReallyMean} from '@/component/pages/DTS/WhatReallyMean'
import {Strategy} from '@/component/pages/DTS/Strategy'
import {Innovation} from '@/component/pages/DTS/Innovation'
import {ProfessionalService} from '@/component/pages/DTS/ProfessionalService'
import {ROI} from '@/component/pages/DTS/ROI'
import {LeadingBrands} from '@/component/pages/DTS/LeadingBrands'
import {FirstSteps} from '@/component/pages/DTS/FirstSteps'
import {Technology} from '@/component/pages/DTS/Technology'
import {ClientsAchivement} from '@/component/pages/DTS/ClientsAchivement'
import {Faq} from '@/component/pages/DTS/Faq'
import {Adv} from '@/component/pages/DTS/Adv'

const page = () =>{
    return(
        <>
            <Banner />
            <CommonDivider /><WhatReallyMean />
            <CommonDivider /><Strategy />
            <CommonDivider /><Innovation />
            <CommonDivider /><ProfessionalService />
            <CommonDivider /><ROI />
            <CommonDivider /><LeadingBrands />
            <CommonDivider /><FirstSteps />
            <CommonDivider /><Technology />
            <CommonDivider /><ClientsAchivement />
            <CommonDivider /><Faq />
            <CommonDivider /><Adv />
        </>
    )
}
 
export default page;