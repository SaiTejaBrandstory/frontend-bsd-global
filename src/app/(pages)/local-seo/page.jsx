import CommonDivider from '@/component/pages/common/CommonDivider'
import {Banner} from '@/component/pages/LocalSeo/Banner'
import {WhyMatter} from '@/component/pages/LocalSeo/WhyMatter'
import {WorkForYou} from '@/component/pages/LocalSeo/WorkForYou'
import {SmarterLocalSeo} from '@/component/pages/LocalSeo/SmarterLocalSeo'
import {FivePhase} from '@/component/pages/LocalSeo/FivePhase'
import {LocalSeoGrowth} from '@/component/pages/LocalSeo/LocalSeoGrowth'
import {WhatYouGet} from '@/component/pages/LocalSeo/WhatYouGet'
import {CaseStudies} from '@/component/pages/LocalSeo/CaseStudies'
import {Testimonials} from '@/component/pages/LocalSeo/Testimonials'
import {Pricing} from '@/component/pages/LocalSeo/Pricing'
import {Adv} from '@/component/pages/LocalSeo/Adv'

const page = () =>{
    return(
        <>
            <Banner />
            <CommonDivider /><WhyMatter />
            <CommonDivider /><WorkForYou />
            <CommonDivider /><SmarterLocalSeo />
            <CommonDivider /><FivePhase />
            <CommonDivider /><LocalSeoGrowth />
            <CommonDivider /><WhatYouGet />
            <CommonDivider /><CaseStudies />
            <CommonDivider /><Testimonials />
            <CommonDivider /><Pricing />
            <CommonDivider /><Adv />
        </>
    )
}
 
export default page;