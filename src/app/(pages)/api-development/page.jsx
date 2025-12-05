import CommonDivider from '@/component/pages/common/CommonDivider';
import {ApiBanner} from '@/component/pages/ApiDev/ApiBanner'
import {SclableApis} from '@/component/pages/ApiDev/SclableApis'
import {Precision} from '@/component/pages/ApiDev/Precision'
import {RestApi} from '@/component/pages/ApiDev/RestApi'
import {Expertise} from '@/component/pages/ApiDev/Expertise'
import {ApiExpertise} from '@/component/pages/ApiDev/ApiExpertise'
import {TrustedPartner} from '@/component/pages/ApiDev/TrustedPartner'
import {UnlockValue} from '@/component/pages/ApiDev/UnlockValue'
import {IntegrateApi} from '@/component/pages/ApiDev/IntegrateApi'
import {ApiFaq} from '@/component/pages/ApiDev/ApiFaq'
import {ApiArrwow} from '@/component/pages/ApiDev/ApiArrwow'
import {ApiAd} from '@/component/pages/ApiDev/ApiAd'

const page =()=>{
    return (
        <>
            <ApiBanner />
            <CommonDivider /><SclableApis />
            <CommonDivider /><Precision />
            <CommonDivider /><RestApi />
            <CommonDivider /><Expertise />
            <CommonDivider /><TrustedPartner />
            <CommonDivider /><UnlockValue />
            <CommonDivider /><IntegrateApi />
            <CommonDivider /><ApiExpertise />
            <CommonDivider /><ApiFaq />
            <CommonDivider /><ApiArrwow />
            <CommonDivider /><ApiAd />
        </>
    )
}

export default page