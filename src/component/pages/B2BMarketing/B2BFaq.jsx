import FAQs from '@/component/pages/common/CommonFAQ'

export const B2BFaq = () => {
  const data = [
    {
      title: "How long before I see results from B2B marketing?",
      description: "Results can be different for each business and strategy. Most clients start to see growth in their sales pipeline within three to six months."
    },
    {
      title: "Do you work with both SMBs and enterprises?",
      description: "Yes. Our marketing services can work for small businesses as well as large enterprises. We adjust our approach depending on the size of your company."
    },
    {
      title: "Can you target specific companies or job titles?",
      description: "Yes. We use Account-Based Marketing and target the right decision-makers. This way, your campaigns reach the people who matter most."
    },
    {
      title: "How do you measure campaign success?",
      description: "We look at key numbers like qualified leads, conversions, and return on investment. We use analytics and reports to show exactly how the campaigns are performing."
    },
    {
      title: "Do you provide content creation for B2B campaigns?",
      description: "Yes. We make thought-leadership content, case studies, email sequences, and social media content. All of this works together as part of your marketing plan."
    },
  ];

  return (
    <FAQs data={data} />
  );
};