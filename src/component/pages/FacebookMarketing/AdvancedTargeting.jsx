import CommonAccordion2 from '../common/CommonAccordion2';

export const AdvancedTargeting = () => {
  const accordionData = [
    {
      title: "Facebook audience targeting that’s built on intent",
      content:
        "Utilize advanced technology and data analytics to gain deep insights into consumer behavior and preferences, informing your marketing decisions.",
    },
    {
      title: "Lookalike audiences that scale your best customers",
      content:
        "Craft compelling narratives that resonate with your audience on an emotional level, building brand loyalty and driving sales.",
    },
    {
      title: "Facebook Pixel for full-funnel visibility",
      content:
        "Design and execute campaigns optimized to convert leads into customers, with a focus on clear calls-to-action and streamlined user journeys.",
    },
    {
      title: "Real-time data for cost-efficient campaigns",
      content:
        "Partner with key influencers and build a strong brand community to amplify your message and foster organic growth through trusted voices.",
    },
  ];

  return (
    <CommonAccordion2
      title="Advanced Targeting & Smarter Facebook Campaigns"
      description="Good targeting doesn’t mean showing up everywhere. It means showing up where it matters. We use data, behavior, and intent to make sure your ads reach the right people at the right time."
      items={accordionData}
    />
  );
};
