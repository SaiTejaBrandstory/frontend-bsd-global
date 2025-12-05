import React from 'react'
import CommonAccordion from '../common/CommonAccordion';

export const UnlockValue = () => {
  const accordionData = [
    {
      title: "Third-Party API Integrations",
      content:
        "Seamlessly connect your ecosystem with powerful third-party tools. Whether you're integrating CRMs like Salesforce or Zoho, ERPs such as SAP or Oracle, or secure payment gateways like Stripe and Razorpay — we ensure smooth, stable, and secure connectivity across platforms. Our integrations are designed to enhance functionality while keeping your workflows intact and user experience uninterrupted.",
    },
    {
      title: "API Maintenance & Support",
      content:
        "APIs aren’t “set-and-forget.” Our support team provides 24/7 real-time monitoring, version control, patch management, and performance tuning. We proactively detect issues, ensure zero downtime, and enforce best-in-class security protocols to keep your systems agile, compliant, and customer-ready.",
    },
    {
      title: "Cloud-Based API Solutions",
      content:
        "Built for distributed architecture, our cloud-first API solutions support high availability, scalability, and speed. Whether you're launching a SaaS platform or scaling an enterprise application, our APIs are optimized for load balancing, multi-region deployment, and cloud-native performance — ensuring your backend stays fast and fail-proof.",
    },
    {
      title: "Microservices Consulting",
      content:
        "Break free from rigid, monolithic systems. Our experts help you transition to a microservices architecture that enhances modularity, accelerates development, and reduces deployment risks. We assist with service discovery, containerization, orchestration (e.g., Kubernetes), and API gateway setup — enabling your business to scale faster and innovate with confidence.",
    },
  ];

  return (
    <CommonAccordion
      title="Unlock Value Faster with Brandstory APIaaS"
      subheding2="Our Brandstory API-as-a-Service (APIaaS) solutions deliver the infrastructure, maintenance, and innovation you need — on-demand."
      items={accordionData}
    />
  );
};