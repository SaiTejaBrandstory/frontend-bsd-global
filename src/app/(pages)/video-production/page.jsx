import CommonDivider from '@/component/pages/common/CommonDivider';
import { Banner } from "@/component/pages/VideoProduction/Banner"
import { WhyInvest } from "@/component/pages/VideoProduction/WhyInvest"
import { TailoredVideo } from "@/component/pages/VideoProduction/TailoredVideo"
import { FromCorporate } from "@/component/pages/VideoProduction/FromCorporate"
import { OurSmooth } from "@/component/pages/VideoProduction/OurSmooth"
import { OurWork } from "@/component/pages/VideoProduction/OurWork"
import { IndustriesWeServe } from "@/component/pages/VideoProduction/IndustriesWeServe"
import { WhyChooseUs } from "@/component/pages/VideoProduction/WhyChooseUs"
import { WhatClientSay } from "@/component/pages/VideoProduction/WhatClientSay"
import { Faq } from "@/component/pages/VideoProduction/Faq"
import { Adv } from "@/component/pages/VideoProduction/Adv"

const page = ()=>{
    return(
        <>
            <Banner />
            <CommonDivider /><WhyInvest />
            <CommonDivider /><TailoredVideo />
            <CommonDivider /><FromCorporate />
            <CommonDivider /><OurSmooth />
            <CommonDivider /><OurWork />
            <CommonDivider /><IndustriesWeServe />
            <CommonDivider /><WhyChooseUs />
            <CommonDivider /><WhatClientSay />
            <CommonDivider /><Faq />
            <CommonDivider /><Adv />
        </>
    )
}

export default page;