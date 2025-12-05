import CommonDivider from '@/component/pages/common/CommonDivider'
import { WebDevBanner } from '@/component/pages/WebDev/WebDevBanner'
import { RightWebSolution } from '@/component/pages/WebDev/RightWebSolution'
import { WebsiteService } from '@/component/pages/WebDev/WebsiteService'
import { HighPerformance } from '@/component/pages/WebDev/HighPerformance'
import { DevelopmentProcess } from '@/component/pages/WebDev/DevelopmentProcess'
import { ShapingBrands } from '@/component/pages/WebDev/ShapingBrands'
import { Difference } from '@/component/pages/WebDev/Difference'
import { WebFaq } from '@/component/pages/WebDev/WebFaq'
import { WebArrow } from '@/component/pages/WebDev/WebArrow'
import { WebFooter } from '@/component/pages/WebDev/WebFooter'

const page =()=>{
    return (
        <>
            <WebDevBanner />
            <CommonDivider /><RightWebSolution />
            <CommonDivider /><WebsiteService />
            <CommonDivider /><HighPerformance />
            <CommonDivider /><DevelopmentProcess />
            <CommonDivider /><ShapingBrands />
            <CommonDivider /><Difference />
            <CommonDivider /><WebFaq />
            <CommonDivider /><WebArrow />
            <CommonDivider /><WebFooter />
        </>
    )
}

export default page 