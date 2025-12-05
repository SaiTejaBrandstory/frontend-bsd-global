import React from 'react'
import CommonAccordion from '../common/CommonAccordion';

const ContentMarketingTools = () => {
  const accordionData = [
    {
      title: "1. Research & SEO",
      content:
        "Platforms Like SEMrush, Ahrefs, And BuzzSumo Help Us Understand What Your Audience Is Searching For, Spot Content Gaps, And Identify Topics That Are Mostly Searched.",
    },
    {
      title: "2. Analytics",
      content:
        "We use advanced analytics tools like Google Analytics, SEMrush, and custom dashboards to track performance metrics, measure engagement rates, monitor conversion paths, and identify which content drives the most valuable traffic to your business.",
    },
    {
      title: "3. Creation & Design",
      content:
        "Our creative toolkit includes Canva Pro, Adobe Creative Suite, and Figma for visual content creation. We also use AI-powered writing assistants, content management systems, and collaborative platforms to produce high-quality articles, infographics, videos, and interactive content.",
    },
    {
      title: "4. Distribution & Tracking",
      content:
        "We leverage social media management platforms like Hootsuite and Buffer, email marketing tools like Mailchimp and HubSpot, and content distribution networks to ensure your content reaches the right audience. Advanced tracking helps us monitor performance across all channels.",
    },
  ];

  return (
    <>
      <CommonAccordion
        title="Our Content Marketing Tools & Technology"
        subheding1=" "
        subheding2="Tools Help Us Scale, But Strategy Drives Results. Every Tool We Use Has One Purpose: Make Your Content Work Harder For Your Business."
        items={accordionData} 
      />

    </>
  )
}

export default ContentMarketingTools
