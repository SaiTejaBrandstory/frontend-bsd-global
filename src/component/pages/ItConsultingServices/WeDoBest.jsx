import React from 'react'
import CommonAccordion from '../common/CommonAccordion';

export const WeDoBest = () => {
     const accordionData = [
    {
      title: "1. Vision first IT strategy planning ",
      content:
        "We help you define exactly where your business is headed — and engineer the technology architecture to take you there. Our approach puts your long-term goals at the core, so every IT investment fuels strategic progress. Whether you're modernizing legacy systems or entering new markets, we ensure your tech is a growth enabler, not a cost center or constraint.",
    },
    {
      title: "2. Cross-functional digital roadmap development",
      content:
        "Digital transformation isn't just about IT — it's about unifying your entire organization around a shared vision. We work closely with stakeholders across departments to develop integrated roadmaps that bridge C-suite ambitions, business unit KPIs, and technological capabilities. The result? A clearly prioritized, milestone-driven execution plan that accelerates digital maturity without internal friction.",
    },
    {
      title: "3. Outcome-led, business-aligned IT initiatives",
      content:
        "Every solution we design, deploy, or recommend is tied to real, measurable business outcomes. From boosting operational efficiency and reducing technical debt to unlocking new revenue streams or customer experiences, our focus is always on delivering tangible value. No overengineering. No unnecessary tools. Just purposeful execution and visible impact.",
    }
  ];
  return (
    <>
    <CommonAccordion
    title="What We Do Best: Outcome-Driven IT Consulting"
    // subheding1="We plan your social media to guide people from first seeing your brand to becoming loyal fans. Our social media strategy has four steps:"
    subheding2="Every breakthrough starts with a better question. Our IT consultation services are built to align your tech with where your business is headed — not where it’s been. We specialize in:"
     items={accordionData} 
     footer=""
     />
    </>
  )
}
