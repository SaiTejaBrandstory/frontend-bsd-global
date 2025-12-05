import CommonDivider from '@/component/pages/common/CommonDivider';
import { B2CBanner } from "@/component/pages/B2CMarketing/B2CBanner";
import { CustomerLifecycle } from "@/component/pages/B2CMarketing/CustomerLifecycle";
import B2CGrowth from "@/component/pages/B2CMarketing/B2CGrowth";
import { MarketingEnterprise } from "@/component/pages/B2CMarketing/MarketingEnterprise";
import { MarketingStrategy } from "@/component/pages/B2CMarketing/MarketingStrategy";
import { ConsumerMarketing } from "@/component/pages/B2CMarketing/ConsumerMarketing";
import { SuccessStories } from "@/component/pages/B2CMarketing/SuccessStories";
import { B2CTechStack } from "@/component/pages/B2CMarketing/B2CTechStack";
import { WhyChooseB2C } from "@/component/pages/B2CMarketing/WhyChooseB2C";
import { B2CFaq } from "@/component/pages/B2CMarketing/B2CFaq";
import { B2CArrowGrid } from "@/component/pages/B2CMarketing/B2CArrowGrid";
import { B2CAdvertise } from "@/component/pages/B2CMarketing/B2CAdvertise";

const page =()=>{
    return(
        <>
            <B2CBanner />
            <CommonDivider /><CustomerLifecycle />
            <CommonDivider /><B2CGrowth />
            <CommonDivider /><MarketingEnterprise />
            <CommonDivider /><MarketingStrategy />
            <CommonDivider /><ConsumerMarketing />
            <CommonDivider /><SuccessStories />
            <CommonDivider /><B2CTechStack />
            <CommonDivider /><WhyChooseB2C />
            <CommonDivider /><B2CFaq />
            <CommonDivider /><B2CArrowGrid />
            <CommonDivider /><B2CAdvertise />
        </>
    )
}

export default page;