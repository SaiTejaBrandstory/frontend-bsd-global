import CommonAccordion2 from '../common/CommonAccordion2';

export const Precision = () => {
  const accordionData = [
    {
      title: "API Consulting Services",
      content:
        "Define the right API strategy — what to build, integrate, or retire — based on your business and tech goals.",
    },
    {
      title: "API Design & Implementation",
      content:
        "Architect RESTful or GraphQL APIs that align with your infrastructure, performance benchmarks, and scalability needs.",
    },
    {
      title: "API Security Testing",
      content:
        "Identify vulnerabilities early with proactive testing and compliance-driven protocols to safeguard your systems.",
    },
    {
      title: "API Integration Solutions",
      content:
        "Connect legacy and modern systems seamlessly — from CRMs to analytics platforms and partner tools.",
    },
    {
      title: "API Automation",
      content:
        "Streamline internal operations by automating repetitive data flows and reducing manual dependencies.",
    },
    {
      title: "API Management",
      content:
        "Implement full-scale monitoring, versioning, rate limiting, and analytics to ensure complete control and visibility.",
    },
    {
      title: "API Configuration",
      content:
        "Optimize endpoint structures, payloads, and rate efficiency for faster and more reliable performance.",
    },
    {
      title: "Ongoing Support & Maintenance",
      content:
        "Ensure continuous improvement, bug fixes, and compatibility as your stack evolves.",
    },
  ];

  return (
    <CommonAccordion2
      title="Designed for Precision, Built for Scale:<br/>Our Full-Spectrum API Services"
      description="
        Modern enterprises don’t need generic integrations. They need API ecosystems engineered for performance, security, and longevity.
        <br/><br />
        Our capabilities span the full API lifecycle:
        <br/><br />
        <span class='highlited-text'>At Brandstory, we offer end-to-end API services that cover the full lifecycle:</span>
      "
      items={accordionData}
      splitRatio={0.5}
    />
  );
};