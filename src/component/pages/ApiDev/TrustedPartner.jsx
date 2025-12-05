import { CommonBigIndex } from "../common/CommonBigIndex"

export const TrustedPartner = () => {
  const heading = "Your Trusted Partner in Building API-First Digital Systems"
  const description = "We Don't Just Code APIs. We Design Ecosystems. Our API Partnerships Are Built On:"

  const cases = [
    {
      title: "Enterprise-Grade Security & Scalability",
      description: "Our APIs Are Built To Scale Securely, From OAuth 2.0 To Rate Limiting And Audit Logging. Every Integration Is Designed With Compliance, Performance, And Resilience In Mind – Ready To Handle Enterprise-Level Workloads And Evolving Security Standards."
    },
    {
      title: "Clear, Comprehensive Documentation",
      description: "We Don't Leave Your Teams Guessing. Every API Is Delivered With Detailed, Developer-Friendly Documentation – Accelerating Onboarding, Reducing Implementation Time, And Making Handovers Seamless Across Internal Or Third-Party Teams."
    },
    {
      title: "Certified API Specialists",
      description: "Our Team Includes Certified API Developers, Cloud Architects, And Systems Integrators With Hands-On Experience Across Domains Like Finance, Healthcare, SaaS, Logistics, And E-commerce – Ensuring That Your Solution Is Not Just Functional, But Context-Aware."
    },
    {
      title: "Customer-Centric Support",
      description: "From Initial Consultation To Post-Launch Maintenance, We Stay Embedded In Your Journey. Whether It’s Troubleshooting, Iterative Upgrades, Or Scaling Support, Our Commitment Extends Well Beyond Deployment Day."
    },
    {
      title: "End-to-End Project Ownership",
      description: "We’re More Than Just Service Providers – We’re Your API Partners. We Take Complete Ownership From Architecture To Deployment And Continuous Improvement, Aligning With Your Goals And Adapting As Your Needs Evolve."
    },
    {
      title: "Solution Architects You Can Trust",
      description: "Behind Every Successful API Integration Is A Team That Thinks Ahead. Our Senior Consultants, Developers, And QA Engineers Bring Strategic Oversight, Industry Insight, And Deep Technical Proficiency – Delivering Solutions That Drive Measurable Business Outcomes."
    },
  ]
  
  const footer = "With over 11+ years of creative intelligence and one clear goal — your business growth, we’ve built long-term partnerships that scale with our clients." // Footer remains empty as it's not present in the screenshot
  
  return <CommonBigIndex 
    data={cases}
    description={description}
    heading={heading}
    footer={footer}
  />
}
