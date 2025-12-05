import CommonDivider from '@/component/pages/common/CommonDivider'
import {Banner} from '@/component/pages/FacebookMarketing/Banner'
import {SmartAdv} from '@/component/pages/FacebookMarketing/SmartAdv'
import {WhatInclude} from '@/component/pages/FacebookMarketing/WhatInclude'
import {Process} from '@/component/pages/FacebookMarketing/Process'
import {WhyTrust} from '@/component/pages/FacebookMarketing/WhyTrust'
import {IndustrySpecefic} from '@/component/pages/FacebookMarketing/IndustrySpecefic'
import {AdvancedTargeting} from '@/component/pages/FacebookMarketing/AdvancedTargeting'
import {DeliverResults} from '@/component/pages/FacebookMarketing/DeliverResults'
import {ProvenResults} from '@/component/pages/FacebookMarketing/ProvenResults'
import {Faq} from '@/component/pages/FacebookMarketing/Faq'
import {Adv} from '@/component/pages/FacebookMarketing/Adv'

const page = () =>{
    return(
        <>
            <Banner />
            <CommonDivider /><SmartAdv />
            <CommonDivider /><WhatInclude />
            <CommonDivider /><Process />
            <CommonDivider /><WhyTrust />
            <CommonDivider /><IndustrySpecefic />
            <CommonDivider /><AdvancedTargeting />
            <CommonDivider /><DeliverResults />
            <CommonDivider /><ProvenResults />
            <CommonDivider /><Faq />
            <CommonDivider /><Adv />
        </>
    )
}
 
export default page;