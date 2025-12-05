import CommonDivider from '@/component/pages/common/CommonDivider'
import {Banner} from '@/component/pages/ItConsultingServices/Banner'
import {LeadingBusiness} from '@/component/pages/ItConsultingServices/LeadingBusiness'
import {HighImpact} from '@/component/pages/ItConsultingServices/HighImpact'
import {WeDoBest} from '@/component/pages/ItConsultingServices/WeDoBest'
import {TalentThatDelivers} from '@/component/pages/ItConsultingServices/TalentThatDelivers'
import {OperationalExpense} from '@/component/pages/ItConsultingServices/OperationalExpense'
import {ConsultingExperience} from '@/component/pages/ItConsultingServices/ConsultingExperience'
import {WeGrow} from '@/component/pages/ItConsultingServices/WeGrow'
import {WhyUs} from '@/component/pages/ItConsultingServices/WhyUs'
import {CaseStudies} from '@/component/pages/ItConsultingServices/CaseStudies'
import {Faq} from '@/component/pages/ItConsultingServices/Faq'
import {Adv} from '@/component/pages/ItConsultingServices/Adv'

const page = () =>{
    return(
        <>
            <Banner />
            <CommonDivider /><LeadingBusiness />
            <CommonDivider /><HighImpact />
            <CommonDivider /><WeDoBest />
            <CommonDivider /><TalentThatDelivers />
            <CommonDivider /><OperationalExpense />
            <CommonDivider /><ConsultingExperience />
            <CommonDivider /><WeGrow />
            <CommonDivider /><WhyUs />
            <CommonDivider /><CaseStudies />
            <CommonDivider /><Faq/>
            <CommonDivider /><Adv />
        </>
    )
}
 
export default page;