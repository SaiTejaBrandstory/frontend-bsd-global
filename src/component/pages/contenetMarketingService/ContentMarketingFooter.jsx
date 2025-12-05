import FAQs from '@/component/pages/common/CommonFAQ';

export const ContentMarketingFooter = () => {
  const data = [
    {
      title: "What is content marketing and how does it work?",
      description: "Content marketing is about creating useful, engaging material that attracts, informs, and converts your audience. It works by answering questions, building trust, and guiding people toward your brand."
    },
    {
      title: "What industries do you specialize in?",
      description: "We work with B2B, E-commerce, SaaS, Healthcare, Real Estate, Hospitality, and more. Each strategy is tailored to the audience and goals of the industry."
    },
    {
      title: "How do you measure ROI from content marketing?",
      description: "We track traffic, engagement, leads, and conversions. Every campaign has clear KPIs so you can see what’s driving growth."
    },
    {
      title: "What types of content marketing services do you offer?",
      description: "Blogs, whitepapers, videos, podcasts, social content, infographics, landing page copy, email sequences — everything your brand needs to connect and convert."
    },
    {
      title: "Can you handle global content marketing?",
      description: "Yes. We create content that adapts to local markets and scales internationally, maintaining your brand voice across cultures and languages."
    },
    {
      title: "How experienced is your content marketing team?",
      description: "Our team has worked with 500+ clients across 30+ industries. We combine strategy, creativity, and data to deliver measurable results every time."
    }
  ];

  return (
    <FAQs data={data} />
  );
};