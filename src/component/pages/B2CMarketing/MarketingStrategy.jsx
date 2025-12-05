import CommonAccordion2 from '../common/CommonAccordion2';

export const MarketingStrategy = () => {
  const accordionData = [
    {
      title: "Data-Driven Consumer Insights",
      content:
        "We use tools like Meta Ads Manager, Google Analytics, Shopify Analytics, and SEMrush to understand consumer behavior. These insights help us identify the right audience, predict buying patterns, and create campaigns that deliver better results.",
    },
    {
      title: "Emotional Storytelling That Sells",
      content:
        "We craft stories, lifestyle branding, and videos that connect with your audience on an emotional level. This approach makes your brand more relatable, builds stronger connections, and drives higher engagement and sales.",
    },
    {
      title: "Conversion-Focused Campaigns",
      content:
        "Our campaigns are designed to maximize ROI through smart planning, targeted offers, influencer collaborations, and seamless user experiences. From landing pages to checkout, every detail is optimized to boost conversions and customer loyalty.",
    },
    {
      title: "Influencer & Community Marketing",
      content:
        "We partner with influencers, encourage user-generated content, and build brand communities. These efforts increase credibility, spark real conversations, and create long-term brand loyalty.",
    },
  ];

  return (
    <CommonAccordion2
      title="B2C Marketing Strategies That Drive Growth"
      description=""
      items={accordionData}
    />
  );
};
