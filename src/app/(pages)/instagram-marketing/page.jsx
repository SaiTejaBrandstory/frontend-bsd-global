import CommonDivider from '@/component/pages/common/CommonDivider'
import {Banner} from '@/component/pages/InstagramMarketing/Banner'
import {SmartFacebokAdv} from '@/component/pages/InstagramMarketing/SmartFacebokAdv'
import {StarategyFirst} from '@/component/pages/InstagramMarketing/StarategyFirst'
import {InstagramCampaigns} from '@/component/pages/InstagramMarketing/InstagramCampaigns'
import {Industries} from '@/component/pages/InstagramMarketing/Industries'
import {Adv} from '@/component/pages/InstagramMarketing/Adv'
import {FAQ} from '@/component/pages/InstagramMarketing/FAQ'

const page = () =>{
    return(
        <>
            <Banner />
            <CommonDivider /><SmartFacebokAdv />
            <CommonDivider /><StarategyFirst />
            <CommonDivider /><InstagramCampaigns />
            <CommonDivider /><Industries />
            <CommonDivider /><FAQ />
            <CommonDivider /><Adv />
        </>
    )
}
 
export default page;