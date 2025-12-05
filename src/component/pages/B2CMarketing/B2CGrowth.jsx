import React from 'react'
import CommonAccordion from '../common/CommonAccordion';

const B2CGrowth = () => {
  const accordionData = [
    {
      title: "Awareness",
      content:
        "We help people notice your brand. We do this with influencers, social media contests, and ads that catch attention.",
    },
    {
      title: "Engagement",
      content: "We get people to interact with your brand. We use content, videos, and emails to do this.", 
    },
    {
      title: "Conversion",
      content: "We turn interest into sales. We use landing pages, clear buttons to click, and special offers.", 
    },
    {
      title: "Retention",
      content: "We keep customers coming back. We give rewards, exclusive programs, and follow-up messages to show you care.",
    },
  ];

  return (
    <>
      <CommonAccordion
        title="The BrandStory B2C Growth Framework"
        subheding1=""
        subheding2="Our B2C marketing strategy works across four stages:"
        items={accordionData}
        footer="This framework strengthens the consumer sales funnel and creates lasting relationships through structured B2C campaign planning."
      />
    </>
  )
}

export default B2CGrowth
