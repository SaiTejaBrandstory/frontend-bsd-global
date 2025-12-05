import CommonDivider from '@/component/pages/common/CommonDivider';
import { BrandingBanner } from "@/component/pages/Branding/BrandingBanner";
import { VisionToReality } from "@/component/pages/Branding/VisionToReality";
import {BrandingSuccess} from "@/component/pages/Branding/BrandingSuccess";
import BrandIdentity from "@/component/pages/Branding/BrandIdentity";
import {SuccessStories} from "@/component/pages/Branding/SuccessStories";
import {BrandingTools} from "@/component/pages/Branding/BrandingTools";
import {ImpactfulBranding} from "@/component/pages/Branding/ImpactfulBranding";
import {BrandingFaq} from "@/component/pages/Branding/BrandingFaq";
import {BrandingArrow} from "@/component/pages/Branding/BrandingArrow";
import {BrandingAdv} from "@/component/pages/Branding/BrandingAdv";

const page =()=>{
    return(
        <>
            <BrandingBanner />
            <CommonDivider /><VisionToReality />
            <CommonDivider /><BrandingSuccess />
            <CommonDivider /><BrandIdentity />
            <CommonDivider /><SuccessStories />
            <CommonDivider /><BrandingTools />
            <CommonDivider /><ImpactfulBranding />
            <CommonDivider /><BrandingFaq />
            <CommonDivider /><BrandingArrow />
            <CommonDivider /><BrandingAdv />
        </>
    )
}

export default page;