import { CommonBigIndex } from "../common/CommonBigIndex"

export const LeadingBrands = () => {
  const heading = "Why Leading Brands Choose Us As Their Digital Transformation Partner?"
  const description = "We Are More Than A Digital Transformation Services Provider. We Are A Strategic Ally For CMOs, CTOs, And Brand Leaders Seeking Tangible Growth. Our Approach Combines Deep Domain Expertise, Agile Execution, And Design Excellence To Deliver Measurable Results. Every Initiative Focuses On Outcomes That Move The Needle. From CX Redesign To Legacy System Modernization, Our Transformation Solutions Are Customized For Your Industry And Your Business."

  const cases = [
    {
      title: "Award Winning UX & CX Design",
      description: "Our UX And CX Design Aligns User Expectations With Business Goals, Creating Seamless And Intuitive Digital Journeys, Exceptional Design Drives Adoption, Engagement, And Customer Satisfaction."
    },
    {
      title: "Agile Delivery Across Platforms",
      description: "We Utilize Agile Delivery For Rapid Prototyping, Faster Rollouts, And Continuous Optimization. Our Approach Ensures Your Initiatives Scale Efficiently While Adapting To Evolving Business Needs."
    },
    {
      title: "Measurable Business Impact",
      description: "From Improved Lead Flow To Enhanced Customer Satisfaction, We Focus On KPIs That Matter. Every Project Is Designed To Deliver Tangible Outcomes And Measurable Growth."
    },
    {
      title: "Proven Industry Specific Strategy",
      description: "We Craft Industry Specific Digital Strategies For Fintech, Fashion, Manufacturing, Healthcare, And Retail. Our Solutions Are Aligned With Workflows, Customer Behavior, And Compliance Mandates For Maximum Impact."
    },
    {
      title: "Deep Domain Expertise & Vertical-Led CX",
      description: "Our Teams Bring Deep Domain Expertise To Ensure Faster Ramp Up And Smarter Execution. Vertical-Led CX Means Transformation Tailored Journeys And Analytics To Each Sector's Unique Requirements."
    },
  ]
  
  const footer = "With BrandStory, Transformation Isn’t Generic. It Is Strategic, Scalable, And Built To Deliver Measurable Growth For Your Industry. Every Initiative Drives Impact."
  
  return <CommonBigIndex 
    data={cases}
    description={description}
    heading={heading}
    footer={footer}
  />
}