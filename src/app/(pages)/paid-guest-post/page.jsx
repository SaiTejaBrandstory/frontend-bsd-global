import CommonDivider from '@/component/pages/common/CommonDivider'
import {Banner} from '@/component/pages/PaidGuestPost/Banner'
import {PostingBenifits} from '@/component/pages/PaidGuestPost/PostingBenifits'
import {PaidGuest} from '@/component/pages/PaidGuestPost/PaidGuest'
import {FivePhase} from '@/component/pages/PaidGuestPost/FivePhase'
import {GetPostingService} from '@/component/pages/PaidGuestPost/GetPostingService'
import {Clients} from '@/component/pages/PaidGuestPost/Clients'
import {Adv} from '@/component/pages/PaidGuestPost/Adv'

const page = () =>{
    return(
        <>
            <Banner />
            <CommonDivider /><PostingBenifits />
            <CommonDivider /><PaidGuest />
            <CommonDivider /><FivePhase />
            <CommonDivider /><GetPostingService />
            <CommonDivider /><Clients />
            <CommonDivider /><Adv />
        </>
    )
}
 
export default page;