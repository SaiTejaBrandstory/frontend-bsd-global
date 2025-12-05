import CommonAccordion2 from '../common/CommonAccordion2';

export const WhyUs = () => {
  const accordionData = [
    {
      title: "Proven ROI Across Verticals",
      content:
        "From healthcare to fintech, retail to manufacturing, our solutions consistently drive real-world impact. We don’t just suggest what’s possible — we execute strategies that measurably increase efficiency, reduce costs, and accelerate growth across industries.",
    },
    {
      title: "Elite Execution + Clear Communication",
      content:
        "Our teams don’t just bring technical expertise — they bring delivery precision. Expect structured execution, transparent reporting, and zero jargon. With us, there’s no guesswork — just clear plans, proactive updates, and tangible milestones.",
    },
    {
      title: "A People-First Team With Results on Repeat",
      content:
        "We build partnerships, not just projects. Our client-centric culture means you’ll always work with dedicated experts who understand your business, anticipate challenges, and deliver consistent, high-impact results — every single time.",
    },
  ];

  return (
    <CommonAccordion2
      title="Why Us? Because<br/>We Don’t Just<br/>Consult — We<br/>Deliver Outcomes"
      description="There are hundreds of IT consulting services company pages online.  Here’s why brands choose us again and again:"
      items={accordionData}
    />
  );
};