import { CommonBigIndex } from "../common/CommonBigIndex"

export const CaseStudies = () => {
  const heading = "Case Studies & Client Success"
  const description = "Our successful client stories demonstrate real-world application of our expertise and the measurable value we deliver across various industries." // Updated general description

  const cases = [
    {
      title: "Fintech | Managed Cybersecurity Services",
      // Combining the challenge, solution, and results into the description field for the component structure
      description: 
        "<b>Challenge</b><br/>Needed Full Time Protection And PCI-DSS Compliance. <br/><br/>" +
        "<b>Solution:</b><br/>Built A Managed SOC, Added Endpoint & Network Security, Integrated Real-Time Threat Intel. <br/><br/>" +
        "<b>Results:</b><br/>3,000+ Attacks Blocked In 90 Days, PCI-DSS Passed, Zero Breaches In Year One."
    },
    {
      title: "Healthcare | Security Audit & Compliance",
      description: 
        "<b>Challenge</b><br/>Failed HIPAA Audits, Weak Access Control.<br/><br/>" +
        "<b>Solution</b><br/>Conducted IT Security Audit, Updated Policies, Built Compliance Dashboard.<br/><br/>" +
        "<b>Results</b><br/>HIPAA Passed In 60 Days, 30% Less Audit Workload, Stronger Patient Data Security."
    },
    {
      title: "SaaS | Penetration Testing",
      description: 
        "<b>Challenge:</b><br/>Security Check Required Before Fundraising.<br/><br/>" +
        "<b>Solution:</b><br/>Ran Penetration Tests, Fixed Critical CVEs, Delivered Investor-Ready Report.<br/><br/>" +
        "<b>Results:</b><br/>22 Issues Resolved, Secured Series A In 3 Months, 20% Higher Customer Trust."
    },
  ]
  
  const footer = "These examples highlight our commitment to delivering tangible security outcomes and compliance assurance for businesses in demanding sectors." // Updated general footer
  
  return <CommonBigIndex 
    data={cases}
    description={description}
    heading={heading}
    footer={footer}
  />
}