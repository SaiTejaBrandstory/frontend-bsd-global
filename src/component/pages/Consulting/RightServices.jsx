import CommonAccordion2 from '../common/CommonAccordion2';

export const RightServices = () => {
  const accordionData = [
    {
      title: "Reduce Operational Costs By Up To 30%",
      content:
        "Through in-depth process audits and strategic realignment, we help organizations identify hidden inefficiencies across their operations. Our consultants redesign workflows and eliminate redundancies to create leaner, more agile systems — enabling teams to do more with less, without compromising performance or quality.",
    },
    {
      title: "Gain Competitive Advantage",
      content:
        "We equip businesses with powerful tools such as advanced analytics, real-time data dashboards, and predictive models. By turning insights into action, we help you sharpen market positioning, personalize customer engagement, and stay ahead of emerging trends — all while strengthening your core business strategy.",
    },
    {
      title: "Accelerate Go-To-Market Strategies",
      content:
        "Whether you're launching a new product or expanding into new markets, our consultants help reduce time-to-market with well-defined roadmaps and agile execution. We navigate complexity with precision — enabling faster deployment, smarter resource allocation, and resilience in volatile, high-stakes environments.",
    },
    {
      title: "Scale With Precision",
      content:
        "Whether you're launching a new product or expanding into new markets, our consultants help reduce time-to-market with well-defined roadmaps and agile execution. We navigate complexity with precision — enabling faster deployment, smarter resource allocation, and resilience in volatile, high-stakes environments.",
    },
  ];

  return (
    <CommonAccordion2
      title="How the Right</br>Consulting Services</br>Drive Business<br />Transformation"
      description="The Importance Of Consulting Services Lies In Their Ability To Catalyze Growth When Internal Strategies Plateau. Whether It's Unlocking Hidden Efficiencies Or Fueling Business Transformation, Our Expert Advice Empowers Organizations To:"
      items={accordionData}
    />
  );
};
