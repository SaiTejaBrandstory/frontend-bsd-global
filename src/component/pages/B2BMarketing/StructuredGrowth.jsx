import React from 'react'
import CommonAccordion from '../common/CommonAccordion';

const StructuredGrowth = () => {
  const accordionData = [
    {
      title: "Awareness",
      content:
        "Getting your brand in front of decision-makers through social media campaigns, content marketing, and trade journals.",
    },
    {
      title: "Consideration",
      content: "Take into account case studies, whitepapers, and retargeting campaigns that show off your experience and establish your credibility.",
    },
    {
      title: "Conversion",
      content: "Campaigns with a conversion focus, lead nurturing, and targeted outreach are intended to motivate potential customers to take action.", 
    },
    {
      title: "Retention",
      content: "Thought-leadership touchpoints, loyalty programs, and campaigns for repeat engagement that keep your customers coming back.", 
    },
  ];

  return (
    <>
      <CommonAccordion
        title="Structured B2B Growth with BrandStory"
        subheding1=""
        subheding2="We Structure B2B Marketing Strategy Around Four Stages:"
        items={accordionData}
        footer="Consistent growth, improved pipeline health, and increased industry brand recognition are all guaranteed by this framework."
      />
    </>
  )
}

export default StructuredGrowth
