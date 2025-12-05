import CommonDivider from '@/component/pages/common/CommonDivider'
import {Banner} from '@/component/pages/Consulting/Banner'
import {StrategicConsulting} from '@/component/pages/Consulting/StrategicConsulting'
import {WhyTrust} from '@/component/pages/Consulting/WhyTrust'
import {TypesOfConsulting} from '@/component/pages/Consulting/TypesOfConsulting'
import {RightServices} from '@/component/pages/Consulting/RightServices'
import {IndustrySpecefic} from '@/component/pages/Consulting/IndustrySpecefic'
import {ClientSuccess} from '@/component/pages/Consulting/ClientSuccess'
import {Faq} from '@/component/pages/Consulting/Faq'
import {Adv} from '@/component/pages/Consulting/Adv'

const page = () =>{
    return(
        <>
            <Banner />
            <StrategicConsulting />
            <WhyTrust />
            <TypesOfConsulting />
            <RightServices />
            <IndustrySpecefic />
            <ClientSuccess />
            <Faq />
            <Adv />
        </>
    )
}
 
export default page;