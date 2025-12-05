import FAQs from '@/component/pages/common/CommonFAQ'

export const ApiFaq = () => {
  const data = [
    {
      title: "What industries do you serve with your API services?",
      description: "We’ve delivered tailored API solutions for eCommerce, SaaS, healthcare, finance, logistics, and more. Each project is customized to meet sector-specific compliance, scalability, and integration needs."
    },
    {
      title: "Can you modernize our existing API infrastructure?",
      description: "Yes. We help upgrade legacy APIs to meet modern performance, security, and scalability benchmarks — whether you're migrating to RESTful APIs, decoupling monoliths, or moving to cloud-native architecture."
    },
    {
      title: "Do you support post-deployment maintenance?",
      description: "Absolutely. Our support includes 24/7 monitoring, version upgrades, bug fixes, and documentation support — all under robust SLA-backed maintenance plans for long-term performance."
    },
    {
      title: "How do you ensure the security of APIs?",
      description: "We follow OWASP security guidelines, use industry-standard protocols like OAuth 2.0 and JWT, and regularly conduct security audits and penetration testing to safeguard your data and systems."
    },
    {
      title: "What’s your typical project turnaround time?",
      description: "Timelines depend on complexity, but most MVP-level integrations are delivered in 4–6 weeks. More complex, enterprise-grade API ecosystems typically take 10–16 weeks from planning to deployment."
    },
  ];

  return (
    <FAQs data={data} />
  );
};