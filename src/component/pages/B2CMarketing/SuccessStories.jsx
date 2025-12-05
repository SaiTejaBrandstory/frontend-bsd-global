import { CommonBigIndex } from "../common/CommonBigIndex"

export const SuccessStories = () => {
  const heading = "B2C Marketing Success Stories"
  const description = "We produce quantifiable outcomes. Our case studies on B2C marketing show observable effects:"

  const cases = [
    {
      title: "Retail Brand:",
      description: "In just three months, online sales increased by 45%. Running highly targeted social media advertisements that reached the right customers at the right time allowed us to accomplish this."
    },
    {
      title: "E-commerce Startup",
      description: "30% less money was spent on acquiring new customers. This occurred as a result of our conversion campaign optimization, which made it simpler for visitors to convert to customers."
    },
    {
      title: "Engagement with Lifestyle Brands",
      description: "This rose by 60%. In order to produce content that resonated with the audience, we collaborated with influencers and employed storytelling in campaigns."
    },
  ]
  
  const footer = "These outcomes demonstrate how our B2C ROI strategy aids brands in expanding and forging closer bonds with their clientele across sectors."
  
  return <CommonBigIndex 
    data={cases}
    description={description}
    heading={heading}
    footer={footer}
  />
}