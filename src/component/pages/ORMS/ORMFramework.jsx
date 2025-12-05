import React from 'react'
import CommonAccordion from '../common/CommonAccordion';

const ORMFramework = () => {
  const accordionData = [
    {
      title: "1. Reputation Monitoring",
      content:
        "Track mentions across search engines, social media, and reviews. Detect issues early.",
    },
    {
      title: "2. Content Suppression & Removal",
      content:
        "Remove policy-violating content and reduce the visibility of harmful mentions.",
    },
    {
      title: "3. Positive Content Promotion",
      content:
        "Share testimonials, blogs, and PR content to highlight good work.",
    },
    {
      title: "4. Long-Term Brand Strengthening",
      content:
        "Keep building credibility through ongoing content and campaigns.",
    },
  ];

  return (
    <>
      <CommonAccordion
        title="The BrandStory ORM Framework"
        subheding1="Monitor. Manage. Restore. Grow."
        subheding2="Our reputation management strategy is simple but effective. It has four key stages:"
        items={accordionData} 
        footer="This ORM process ensures your brand is always protected and growing."
      />
    </>
  )
}

export default ORMFramework
