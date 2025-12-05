import CommonDivider from '@/component/pages/common/CommonDivider';
import {MobBanner} from '@/component/pages/MobDev/MobBanner'
import {VisonaryBrands} from '@/component/pages/MobDev/VisonaryBrands'
import {CoreCapabilities} from '@/component/pages/MobDev/CoreCapabilities'
import {TechStack} from '@/component/pages/MobDev/TechStack'
import {Technologies} from '@/component/pages/MobDev/Technologies'
import {DigitalTransformation} from '@/component/pages/MobDev/DigitalTransformation'
import {Approach} from '@/component/pages/MobDev/Approach'
import {Services} from '@/component/pages/MobDev/Services'
import {ExpertPartners} from '@/component/pages/MobDev/ExpertPartners'
import {MobFaq} from '@/component/pages/MobDev/MobFaq'
import {MobArrow} from '@/component/pages/MobDev/MobArrow'
import {MobFooter} from '@/component/pages/MobDev/MobFooter'

const page= ()=>{
    return(
        <>
            <MobBanner />
            <CommonDivider /><VisonaryBrands />
            <CommonDivider /><CoreCapabilities />
            <CommonDivider /><TechStack />
            <CommonDivider /><Technologies />
            <CommonDivider /><DigitalTransformation />
            <CommonDivider /><Approach />
            <CommonDivider /><Services />
            <CommonDivider /><ExpertPartners />
            <CommonDivider /><MobFaq />
            <CommonDivider /><MobArrow />
            <CommonDivider /><MobFooter />
        </>
    )
}

export default page;