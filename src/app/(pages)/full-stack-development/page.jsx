import CommonDivider from '@/component/pages/common/CommonDivider'
import { FullstackBanner } from '@/component/pages/FullStack/FullstackBanner'
import { TechTeam } from '@/component/pages/FullStack/TechTeam'
import { Solutions } from '@/component/pages/FullStack/Solutions'
import { Industries } from '@/component/pages/FullStack/Industries'
import { SmartStack } from '@/component/pages/FullStack/SmartStack'
import { DigitalSuccess } from '@/component/pages/FullStack/DigitalSuccess'
import { Arsenal } from '@/component/pages/FullStack/Arsenal'
import { GrowingBrands } from '@/component/pages/FullStack/GrowingBrands'
import { Standout } from '@/component/pages/FullStack/Standout'
import { FullStackFaq } from '@/component/pages/FullStack/FullStackFaq'
import { FullStackArrow } from '@/component/pages/FullStack/FullStackArrow'
import { FullStackAdv } from '@/component/pages/FullStack/FullStackAdv'

const page = () =>{
    return(
        <>
            <FullstackBanner />
            <CommonDivider /><TechTeam />
            <CommonDivider/><Solutions />
            <CommonDivider/><Industries />
            <CommonDivider/><SmartStack />
            <CommonDivider/><DigitalSuccess />
            <CommonDivider/><Arsenal />
            <CommonDivider/><GrowingBrands />
            <CommonDivider/><Standout />
            <CommonDivider/><FullStackFaq />
            <CommonDivider/><FullStackArrow />
            <CommonDivider/><FullStackAdv />
        </>
    )
}

export default page;