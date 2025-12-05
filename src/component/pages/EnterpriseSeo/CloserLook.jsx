import CommonAccordion2 from '../common/CommonAccordion2';

export const CloserLook = () => {
  const accordionData = [
    {
      title: "Make Your Site Work in Every Country and Language",
      content:
        "We build fast, responsive, and intuitive user interfaces (UIs) using modern frameworks like React, Angular, or Vue.js, ensuring an excellent user experience across all devices.",
    },
    {
      title: "Fix Speed, Errors, and Site Structure",
      content:
        "Our team designs and develops robust server-side logic, APIs, and scalable architecture (Node.js, Python, Java) to handle complex business rules and high-traffic loads reliably.",
    },
    {
      title: "Plan, Write, and Organize Content",
      content:
        "Integrate intelligent features like predictive analytics, personalized recommendations, and sophisticated data processing to make your application smarter and more adaptive.",
    },
    {
      title: "Get the Right Links From Trusted Sites",
      content:
        "Seamlessly connect your application with third-party services, payment gateways, and external data sources using secure and efficient RESTful or GraphQL APIs.",
    },
    {
      title: "Move or Rebuild Your Site Without Losing Rankings",
      content:
        "We handle the selection, setup, and optimization of relational (e.g., PostgreSQL, MySQL) and NoSQL (e.g., MongoDB) databases to ensure fast, scalable, and secure data storage.",
    },
    {
      title: "Protect Your Brand in Search",
      content:
        "Leverage the power of MongoDB, Express.js, Angular, and Node.js for rapid, full-stack, JavaScript-based development, ideal for building dynamic web applications.",
    },
    {
      title: "Understand What’s Working With Data",
      content:
        "Implement continuous integration and continuous deployment (CI/CD) pipelines, automated testing, and infrastructure-as-code (IaC) to speed up development and ensure reliable releases.",
    },
  ];

  return (
    <CommonAccordion2
      // Title and Description updated to match the style and content of the screenshot
      title="A Closer Look at What We Offer and How It Helps"
      description="BrandStory’s SEO services are complete and easy to use. We help big websites work better, faster, and grow over time."
      items={accordionData}
      splitRatio={0.5}
    />
  );
};