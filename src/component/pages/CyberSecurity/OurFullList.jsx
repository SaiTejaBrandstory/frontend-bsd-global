import CommonAccordion2 from '../common/CommonAccordion2';

export const OurFullList = () => {
  const accordionData = [
    {
      title: "Comprehensive Cybersecurity Assessment",
      content:
        "Through thorough <b>cybersecurity assessment services</b>, we uncover hidden vulnerabilities and blind spots across your systems. You get a full threat and vulnerability review, network and application gap analysis, and a maturity report that provides clear next steps and confidence in your defenses.",
    },
    {
      title: "IT Security Audits And Compliance",
      content:
        "Our <b>IT security audits</b> ensure your business meets HIPAA, ISO, GDPR, SOC2, and other regulatory standards. We provide a full evaluation of your risk posture, comprehensive checklists, and expert reports, so your operations remain secure and audit-ready.",
    },
    {
      title: "Real-World Penetration Testing",
      content:
        "With targeted penetration testing, we simulate real world attack scenarios to expose weaknesses before they can be exploited. Our ethical hacking and red team exercises provide actionable insights, improving resilience and trust across your organization.",
    },
    {
      title: "Managed Cybersecurity Solutions",
      content:
        "Our 24/7 managed <b>cybersecurity services</b> keep your systems regularly monitored and protected. From incident detection to rapid response, we operate a dedicated managed SOC, ensuring your business runs smoothly while we handle the security.",
    },
    {
      title: "Ongoing Vulnerability Management",
      content:
        "We help businesses stay ahead of threats with ongoing vulnerability management. By prioritizing critical risks, applying regular patches, and implementing zero-day protection, we strengthen your defenses and reduce exposure to cyber attacks.",
    },
    {
      title: "Tailored Compliance Support",
      content:
        "Every industry faces unique regulations. Our cybersecurity consulting services provide customized compliance plans, audit ready documentation, and guidance for HIPAA, ISO, SOC2, GDPR, and more, keeping your business secure and regulation-ready.",
    },
  ];

  return (
    <CommonAccordion2
      title="Explore Our Full List of Cybersecurity Services"
      description="Sometimes, The Biggest Risks Are The Ones You Don't Even Know About. We Offer A Full Range Of Cybersecurity Services That Go Beyond Just Protection. Each Service Is Designed To Cover A Specific Part Of Your Business Safety Net."
      items={accordionData}
      splitRatio={0.45}
    />
  );
};