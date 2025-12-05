import CommonAccordion2 from '../common/CommonAccordion2';

export const ShapingBrands = () => {
  const accordionData = [
    {
      title: "E-Commerce Website – Retail Brand",
      content:
        "Built a scalable, mobile-first e-commerce platform with secure checkout, advanced filtering, and personalized recommendations to boost engagement and sales. <br/><br/>Services: E-commerce Development, Web Design, Maintenance",
    },
    {
      title: "Professional Services Website Revamp",
      content:
        "Redesigned a B2B consulting site to improve structure, UX, speed, and SEO for better user flow and visibility.<br/><br/>Services: Website Revamp, Web Design, SEO",
    },
    {
      title: "Fintech Landing Pages",
      content:
        "Created responsive, conversion-focused landing pages integrated with marketing automation and optimized for Google Ads.<br/><br/>Services: Landing Page Development, Web Design, SEO",
    },
    {
      title: "Healthcare Platform Support",
      content:
        "Ongoing maintenance, updates, and monitoring to ensure 24/7 uptime, security, and performance. <br/><br/>Services: Web Maintenance, Performance Optimization",
    },
    {
      title: "Product Launch Microsite",
      content:
        "Developed a fast, interactive microsite with strong CTAs to enhance campaign visibility and engagement.<br/><br/>Services: Web Design, Landing Page Development, Maintenance",
    },
  ];

  return (
    <CommonAccordion2
      title="Shaping Brands Through Web Development"
      description="We bring strategy, design, and technology together to create digital experiences that perform. While some of our work is under NDA, here’s a glimpse into the kind of solutions we’ve successfully delivered for clients across industries:"
      items={accordionData}
      button="View Portfolio"
      buttonLink=""
    />
  );
};
