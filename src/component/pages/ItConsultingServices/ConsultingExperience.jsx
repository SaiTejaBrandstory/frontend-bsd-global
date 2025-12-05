import React from 'react'
import CommonTwoCard from '../common/CommonTwoCard'

export const ConsultingExperience =()=>{
    // Data updated to match the content from the "What Makes Us the Right Partner for Your Growth Journey" image
    const data = {
    heading: "Consulting That’s Built on Experience, Not Assumptions",
    highlight: "",
    subheading:
      "With our IT consultant service, you’re not hiring a vendor — you’re gaining a strategic partner. One that’s seen scale, lives complexity, and knows how to navigate both. Our IT services consultant team helps you unlock:",
    cards: [
            {
              title: "C-Suite-Ready Insights",
              description:
                "Get reporting and recommendations that speak the language of outcomes — not just operations. From performance metrics to risk assessments, we deliver insights that fuel better, faster executive decision-making.",
            },
            {
              title: "Enterprise IT Consulting Without Enterprise Bloat",
              description:
                "You get high-caliber expertise without the red tape. Our lean, agile approach to enterprise IT consulting prioritizes speed, focus, and real-world deliverables — not theoretical frameworks or inflated timelines.",
            },
            {
              title: "Custom, Project-Based Consulting Services",
              description:
                "Need targeted help for a cloud migration, ERP rollout, or digital upgrade? Our project-based consulting services plug directly into your workflows with clarity, accountability, and ROI-driven results.",
            },
            {
              title: "Strategic Oversight With CIO-Level Guidance",
              description:
                "From architecture to innovation strategy, you gain access to CIO-level advisory that keeps your technology aligned with your growth ambitions. We don’t just advise — we help you plan, lead, and scale with intent.",
            },
        ],
    };

    return (
        <CommonTwoCard {...data}/>
    )
}
