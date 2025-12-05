import CommonDivider from '@/component/pages/common/CommonDivider'
import {LbBanner} from '@/component/pages/LinkBuilding/LbBanner'
import {LinkBuildingServices} from '@/component/pages/LinkBuilding/LinkBuildingServices'
import {Process} from '@/component/pages/LinkBuilding/Process'
import {WhatWeDo} from '@/component/pages/LinkBuilding/WhatWeDo'
import {FlexibleLink} from '@/component/pages/LinkBuilding/FlexibleLink'
import {Stories} from '@/component/pages/LinkBuilding/Stories'
import {IndustriesWeHelp} from '@/component/pages/LinkBuilding/IndustriesWeHelp'
import {CertifiedExperts} from '@/component/pages/LinkBuilding/CertifiedExperts'
import {LbFaq} from '@/component/pages/LinkBuilding/LbFaq'
import {LbAdv} from '@/component/pages/LinkBuilding/LbAdv'

const page = () =>{
    return(
        <>
            <LbBanner />
            <CommonDivider /><LinkBuildingServices />
            <CommonDivider /><Process />
            <CommonDivider /><WhatWeDo />
            <CommonDivider /><FlexibleLink />
            <CommonDivider /><Stories />
            <CommonDivider /><IndustriesWeHelp />
            <CommonDivider /><CertifiedExperts />
            <CommonDivider /><LbFaq />
            <CommonDivider /><LbAdv />
        </>
    )
}
 
export default page;