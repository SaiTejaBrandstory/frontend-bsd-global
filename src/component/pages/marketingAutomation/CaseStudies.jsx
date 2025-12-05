import CommonAccordion2 from '../common/CommonAccordion2';

export const CaseStudies = () => {
  const accordionData = [
    {
      title: "E-commerce client",
      content:
        "Emails were opened 40% more, and sales from abandoned carts doubled. People who almost left without buying came back and completed their orders, showing how reminders and helpful messages work.",
    },
    {
      title: "B2B Client",
      content:
        "Lead conversion improved by 35%, and demo sign-ups went up 50%. Automated follow-ups guided potential customers to take the next step and learn more about the product.",
    },
    {
      title: "Retail client",
      content:
        "Loyalty campaigns increased repeat purchases by 20%. Customers felt valued and appreciated, which made them come back to shop again.",
    },
  ];

  return (
    <CommonAccordion2
      title="Automation Case Studies That Prove ROI"
      description="<b class='highlited-text'>Here’s how automation changes results:</b>"
      items={accordionData}
    />
  );
};