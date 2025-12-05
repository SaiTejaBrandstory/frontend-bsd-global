import { CommonBigIndex } from "../common/CommonBigIndex"

export const CaseStudies = () => {
  const heading = "Case Studies & Client Wins"
//   const description = "We produce quantifiable outcomes. Our case studies on B2C marketing show observable effects:"

  const cases = [
    {
      title: "Fintech",
      description: "Legacy systems slowed growth and product rollouts. We built a cloud native setup with automated compliance and DevSecOps." +
                   "<br /><br /><b>Result</b><br />67% faster response times, 40% cost savings, SOC 2 in 10 weeks."
    },
    {
      title: "Healthcare",
      description: "Disconnected systems hurt efficiency and engagement. We integrated EHR, launched a patient portal, and ensured HIPAA compliance." +
                   "<br /><br /><b>Result</b><br />3x faster onboarding, 50% fewer no-shows, compliant infra in 60 days."
    },
    {
      title: "Enterprise SaaS",
      description: "Disjointed IT slowed GTM and internal ops. We streamlined systems, automated workflows, and aligned infra for scale." +
                   "<br /><br /><b>Impact</b><br />2x MQL-to-SQL conversions, 32% better onboarding, $4.1M YoY growth."
    },
  ]
  
  const footer = "These outcomes demonstrate how our B2C ROI strategy aids brands in expanding and forging closer bonds with their clientele across sectors."
  
  return <CommonBigIndex 
    data={cases}
    // description={description}
    heading={heading}
    // footer={footer}
  />
}