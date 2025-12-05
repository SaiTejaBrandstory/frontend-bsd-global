import CommonAccordion2 from '../common/CommonAccordion2';

export const FirstSteps = () => {
  const accordionData = [
    {
      title: "Digital Maturity Assessment",
      content:
        "Our digital transformation consultants begin by evaluating your current digital capabilities, infrastructure, and workflow efficiency — identifying areas with the highest potential for innovation and ROI.",
    },
    {
      title: "Strategic Roadmapping",
      content:
        "We align your digital strategy with core business objectives. Whether you’re modernizing legacy systems or adopting cloud-native platforms, our roadmap ensures clarity, focus, and cross-functional buy-in.",
    },
    {
      title: "Agile Implementation at Scale",
      content:
        "Our digital transformation services are executed in sprints — allowing rapid deployment, stakeholder feedback, and continuous optimization without disrupting daily operations.",
    },
    {
      title: "Outcome Measurement and Optimization",
      content:
        "We don’t just deliver; we track. From improved customer experiences to increased operational efficiency, every phase is tied to KPIs and business value.",
    },
  ];

  return (
    <CommonAccordion2
      title="From First Steps to Full Scale — How We Make It Happen"
      description="At Brandstory, we offer digital transformation consulting services that bridge the gap between “where you are” and “where your business needs to go”.</br></br>Our approach goes beyond surface-level change — we deliver structured, high-impact transformation that’s tailored to your industry, operational model, and growth goals.</br></br><span class='highlited-text'>Here’s how we make transformation work:</span>"
      items={accordionData}
    />
  );
};
