import React from 'react'
import CommonAccordion from '../common/CommonAccordion';
import CommonAccordion2 from '../common/CommonAccordion2';

const SeoMethodology = () => {
     const accordionData = [
    {
      title: "1. Advanced Keyword Research",
      content:
        "Find search terms that match your audience’s intent and have the best chance of bringing in results.",
    },
    {
      title: "2. Content Creation Plans",
      content:
        "Plan content that answers questions your competitors have missed, giving your site a real advantage.",
    },
    {
      title: "3. Competitor Tracking",
      content:
        "Monitor competitor activity closely so we can act quickly and stay ahead in search rankings.",
    },
    {
      title: "4. Predictive Insights",
      content:
        "Spot changes in search demand early and adjust your strategy before the competition notices.",
    },
  ];
  return (
    <CommonAccordion
    title="AI-Driven SEO Methodology for Smarter, Faster Results"
    subheding1="Turning Raw Data into Clear Actions"
    subheding2="AI technology makes SEO optimization services faster and more precise. It processes huge volumes of data in seconds, uncovering opportunities that would otherwise take months to find."
     items={accordionData} />

  )
}

export default SeoMethodology