import { Fragment } from 'react'
import CommonDivider from '@/component/pages/common/CommonDivider'
import { FirstSection } from '@/component/sections/FirstSection'
import { SecondSection } from '@/component/sections/SecondSection'
import { ThirdSection } from '@/component/sections/ThirdSection'
import { FourthSection } from '@/component/sections/FourthSection'
import { FifthSection } from '@/component/sections/FifthSection'
import { SixthSection } from '@/component/sections/SixthSection'
import { SeventhSection } from '@/component/sections/seventhSection'
import { EighthSection } from '@/component/sections/EighthSection'
import { NinthSection } from '@/component/sections/NinthSection'
import { TenthSection } from '@/component/sections/TenthSection'
import { EleventhSection } from '@/component/sections/EleventhSection'
import { TwelfthSection } from '@/component/sections/TwelfthSection'
import { ThirteenthSection } from '@/component/sections/ThirteenthSection'

const SECTION_COMPONENTS = {
  'sections.first-section': FirstSection,
  'sections.second-section': SecondSection,
  'sections.third-section': ThirdSection,
  'sections.fourth-section': FourthSection,
  'sections.fifth-section': FifthSection,
  'sections.sixth-section': SixthSection,
  'sections.seventh-section': SeventhSection,
  'sections.eighth-section': EighthSection,
  'sections.ninth-section': NinthSection,
  'sections.tenth-section': TenthSection,
  'sections.eleventh-section': EleventhSection,
  'sections.twelfth-section': TwelfthSection,
  'sections.thirteenth-section': ThirteenthSection,
}

export function SectionRenderer({ sections = [] }) {
  if (!Array.isArray(sections) || sections.length === 0) {
    return null
  }

  return (
    <>
      {sections.map((section, index) => {
    const Component = SECTION_COMPONENTS[section?.__component]
    if (!Component) {
      return null
    }

    const key = `${section.__component}-${section?.id ?? index}`

    return (
      <Fragment key={key}>
        {index > 0 && <CommonDivider />}
        <Component {...section} />
      </Fragment>
    )
      })}
    </>
  )
}
