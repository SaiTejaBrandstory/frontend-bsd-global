import React from 'react'
import CommonAccordion from '../common/CommonAccordion';

export const DigitalSuccess = () => {
     const accordionData = [
    {
      title: "1. Faster Go-to-Market, Lower Costs",
      content:
        "When there's no back-and-forth between multiple vendors or handoffs across siloed teams, timelines shrink and budgets stretch further. Fewer dependencies mean fewer delays — and that translates directly into cost-efficiency and speed.",
    },
    {
      title: "2. A Cohesive, Future-Proof Codebase",
      content:
        "A full-stack team brings consistency in architecture, naming conventions, data handling, and security standards. That translates to fewer bugs, seamless updates, and easier maintenance as your platform evolves.",
    },
    {
      title: "3. Greater Visibility, Total Accountability",
      content:
        "With one team overseeing the entire project lifecycle, there’s no confusion over responsibilities. You get real-time visibility into progress, clearer communication, and a strategic partner who understands how every layer of your platform connects.",
    },
    {
      title: "4. Modular Architecture for Long-Term Growth",
      content:
        "Leveraging RESTful APIs, MVC frameworks, and modern development patterns, our full-stack builds are designed for flexibility. Add new features, scale across regions, or integrate third-party platforms — without restructuring your core foundation.",
    },
    {
      title: "5. Data-First Engineering",
      content:
        "From day one, we architect your solution around clean, scalable data models that support real-time analytics, personalization, and performance insights — giving you the tools to make smarter business decisions.",
    },
  ];
  return (
        <CommonAccordion
        title="Accelerate Digital Success with Expert Full-Stack Development"
            // subheding1 is commented out in the original and will remain so.
            subheding2="When one team owns the entire stack, everything runs smoother — and smarter.<br/><b class='highlited-text'>Choose From Our Full-Spectrum Web Development Solutions:</b>"
            items={accordionData} 
            footer="A major interior brand tripled conversions and saw a 350% organic traffic surge by switching to our modular full stack setup."
        />
    )
}
