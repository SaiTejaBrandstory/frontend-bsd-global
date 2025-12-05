import CommonAccordion2 from '../common/CommonAccordion2';

export const Solutions = () => {
  // New accordion data based on the screenshot titles
  const accordionData = [
    {
      title: "Front-End Development",
      content:
        "We create intuitive, responsive, and visually consistent user interfaces that work seamlessly across devices and browsers. With a focus on accessibility, speed, and user engagement, our front-end development ensures that your digital experience not only looks great but performs flawlessly.",
    },
    {
      title: "Back-End Development",
      content:
        "Our backend architectures are built for stability, security, and scalability. From API development and server logic to data processing and third-party integrations, we ensure your business logic runs efficiently and reliably, supporting high-performance applications under any load.",
    },
    {
      title: "AI/ML Integration",
      content:
        "Add intelligence to your digital products with AI-powered features like personalized recommendations, automated decision-making, predictive insights, and smart search. We help you integrate machine learning models and AI APIs that enhance user experiences and drive smarter business operations.",
    },
    {
      title: "API Integration",
      content:
        "Modern businesses rely on seamless system interoperability — and our API integration services deliver just that. We build and integrate RESTful and GraphQL APIs that connect your products with third-party tools, CRMs, payment gateways, analytics platforms, and internal systems securely and efficiently.",
    },
    {
      title: "Database Configuration",
      content:
        "Whether SQL or NoSQL, cloud-hosted or on-premise, our database experts design and configure data architectures that ensure high availability, fast retrieval, and data consistency. We tailor schemas and storage strategies to support your application’s scale and performance requirements.",
    },
    {
      title: "MEAN Stack Development",
      content:
        "For businesses looking to launch fast, scalable web applications, our MEAN stack solutions provide an agile, full-stack development approach. Using MongoDB, Express.js, Angular, and Node.js, we create modular, high-performance applications with rapid deployment cycles and real-time capabilities.",
    },
    {
      title: "DevOps Enablement",
      content:
        "We implement DevOps practices that accelerate development while maintaining quality and reliability. From CI/CD pipelines and automated testing to infrastructure as code and monitoring dashboards, we streamline your delivery pipeline to support continuous innovation with minimal downtime.",
    },
    {
      title: "UI/UX Design",
      content:
        "Design isn’t just about aesthetics — it’s about outcomes. Our UI/UX specialists craft user journeys that are intuitive, conversion-focused, and aligned with your brand voice. Through wireframes, prototypes, and usability testing, we create interfaces that drive user satisfaction and business results.",
    },
  ];

  return (
    <CommonAccordion2
      // Title and Description updated to match the style and content of the screenshot
      title="Solutions That Work as Hard as You Do"
      description="You Have Goals. We Have The Stack To Get You There."
      items={accordionData}
      splitRatio={0.5}
    />
  );
};