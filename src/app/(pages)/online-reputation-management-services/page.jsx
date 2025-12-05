import CommonDivider from '@/component/pages/common/CommonDivider';
import { ORMSBanner } from "@/component/pages/ORMS/ORMSBanner"
import { ReputationManagement } from "@/component/pages/ORMS/ReputationManagement"
import ORMFramework from "@/component/pages/ORMS/ORMFramework"
import { ReputationCoverage } from "@/component/pages/ORMS/ReputationCoverage"
import { BrandSentiment } from "@/component/pages/ORMS/BrandSentiment"
import { CrisisManagement } from "@/component/pages/ORMS/CrisisManagement"
import { PositiveContent } from "@/component/pages/ORMS/PositiveContent"
import { CustomerFeedbackLoops } from "@/component/pages/ORMS/CustomerFeedbackLoops"
import ORMIndividuals from "@/component/pages/ORMS/ORMIndividuals"
import {ORMSuccessStories} from "@/component/pages/ORMS/ORMSuccessStories"
import {ORMTechStack} from "@/component/pages/ORMS/ORMTechStack"
import {SelectionOfOrm} from "@/component/pages/ORMS/SelectionOfOrm"
import {OrmFaq} from "@/component/pages/ORMS/OrmFaq"
import {OrmArrowGrid} from "@/component/pages/ORMS/OrmArrowGrid"
import {OrmFooter} from "@/component/pages/ORMS/OrmFooter"

const page = ()=>{
    return(
        <>
            <ORMSBanner />
            <CommonDivider /><ReputationManagement />
            <CommonDivider /><ORMFramework />
            <CommonDivider /><ReputationCoverage />
            <CommonDivider /><BrandSentiment />
            <CommonDivider /><CrisisManagement />
            <CommonDivider /><PositiveContent />
            <CommonDivider /><CustomerFeedbackLoops />
            <CommonDivider /><ORMIndividuals />
            <CommonDivider /><ORMSuccessStories />
            <CommonDivider /><ORMTechStack />
            <CommonDivider /><SelectionOfOrm />
            <CommonDivider /><OrmFaq />
            <CommonDivider /><OrmArrowGrid />
            <CommonDivider /><OrmFooter />
        </>
    )
}

export default page;