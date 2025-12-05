import CommonDivider from '@/component/pages/common/CommonDivider';
import { Banner } from "@/component/pages/CyberSecurity/Banner"
import { WhyCS } from "@/component/pages/CyberSecurity/WhyCS"
import { WhatYouCanExpect } from "@/component/pages/CyberSecurity/WhatYouCanExpect"
import { Consulting } from "@/component/pages/CyberSecurity/Consulting"
import { OurFullList } from "@/component/pages/CyberSecurity/OurFullList"
import { CsSolution } from "@/component/pages/CyberSecurity/CsSolution"
import { RealTimeThreat } from "@/component/pages/CyberSecurity/RealTimeThreat"
import { WhatMakesUs } from "@/component/pages/CyberSecurity/WhatMakesUs"
import { CaseStudies } from "@/component/pages/CyberSecurity/CaseStudies"
import { Faq } from "@/component/pages/CyberSecurity/Faq"
import { Adv } from "@/component/pages/CyberSecurity/Adv"

const page = ()=>{
    return(
        <>
            <Banner />
            <CommonDivider /><WhyCS />
            <CommonDivider /><WhatYouCanExpect />
            <CommonDivider /><Consulting />
            <CommonDivider /><OurFullList />
            <CommonDivider /><CsSolution />
            <CommonDivider /><RealTimeThreat />
            <CommonDivider /><WhatMakesUs />
            <CommonDivider /><CaseStudies />
            <CommonDivider /><Faq />
            <CommonDivider /><Adv />
        </>
    )
}

export default page;