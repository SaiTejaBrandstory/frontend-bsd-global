import CommonAccordion2 from '../common/CommonAccordion2';

export const EcomSeoIncludes = () => {
  const accordionData = [
    {
      title: "Keyword Research for Products",
      content:
        "We build fast, responsive, and intuitive user interfaces (UIs) using modern frameworks like React, Angular, or Vue.js, ensuring an excellent user experience across all devices.",
    },
    {
      title: "Technical SEO & Site Fixes",
      content:
        "Product & Category Page SEO",
    },
    {
      title: "Product & Category Page SEO",
      content:
        "Integrate intelligent features like predictive analytics, personalized recommendations, and sophisticated data processing to make your application smarter and more adaptive.",
    },
    {
      title: "Clean URLs & Internal Links",
      content:
        "Seamlessly connect your application with third-party services, payment gateways, and external data sources using secure and efficient RESTful or GraphQL APIs.",
    },
    {
      title: "Mobile Optimization",
      content:
        "We handle the selection, setup, and optimization of relational (e.g., PostgreSQL, MySQL) and NoSQL (e.g., MongoDB) databases to ensure fast, scalable, and secure data storage.",
    },
    {
      title: "Content & Blog Strategy",
      content:
        "Leverage the power of MongoDB, Express.js, Angular, and Node.js for rapid, full-stack, JavaScript-based development, ideal for building dynamic web applications.",
    },
    {
      title: "Conversion Rate Optimization",
      content:
        "Implement continuous integration and continuous deployment (CI/CD) pipelines, automated testing, and infrastructure-as-code (IaC) to speed up development and ensure reliable releases.",
    },
    {
      title: "Monthly Reports",
      content:
        "Implement continuous integration and continuous deployment (CI/CD) pipelines, automated testing, and infrastructure-as-code (IaC) to speed up development and ensure reliable releases.",
    },
  ];

  return (
    <CommonAccordion2
      // Title and Description updated to match the style and content of the screenshot
      title="What Do Our eCommerce SEO Services Include?"
      description="Our eCommerce SEO services give your online store everything it needs to grow. We don’t use fixed plans because every store is different. We shape our services to match your goals, platform, and audience."
      items={accordionData}
      splitRatio={0.5}
    />
  );
};