import CommonDivider from '@/component/pages/common/CommonDivider'
import { SoftwareDevBanner } from '@/component/pages/SoftwareDev/SoftwareDevBanner'
import { StarategicInnovation } from '@/component/pages/SoftwareDev/StarategicInnovation'
import { TrackRecord } from '@/component/pages/SoftwareDev/TrackRecord'
import { SoftwareSolutions } from '@/component/pages/SoftwareDev/SoftwareSolutions'
import { GrowthJourney } from '@/component/pages/SoftwareDev/GrowthJourney'
import { FlexibleTech } from '@/component/pages/SoftwareDev/FlexibleTech'
import { FastMovingBrands } from '@/component/pages/SoftwareDev/FastMovingBrands'
import { SecurityCode } from '@/component/pages/SoftwareDev/SecurityCode'
import { SuccessStories } from '@/component/pages/SoftwareDev/SuccessStories'
import { BehindTech } from '@/component/pages/SoftwareDev/BehindTech'
import { SDFaq } from '@/component/pages/SoftwareDev/SDFaq'
import { SDArrow } from '@/component/pages/SoftwareDev/SDArrow'
import { SDAdv } from '@/component/pages/SoftwareDev/SDAdv'

const page = () => {
  return (
    <>
      <SoftwareDevBanner />
      <CommonDivider /><StarategicInnovation />
      <CommonDivider /><TrackRecord />
      <CommonDivider /><SoftwareSolutions />
      <CommonDivider /><GrowthJourney />
      <CommonDivider /><FlexibleTech />
      <CommonDivider /><FastMovingBrands />
      <CommonDivider /><SecurityCode />
      <CommonDivider /><SuccessStories />
      <CommonDivider /><BehindTech />
      <CommonDivider /><SDFaq />
      <CommonDivider /><SDArrow />
      <CommonDivider /><SDAdv />
    </>
  )
}

export default page