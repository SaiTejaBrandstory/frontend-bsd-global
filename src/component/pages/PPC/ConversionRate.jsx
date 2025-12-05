import { CommonBigIndex } from "../common/CommonBigIndex"

export const ConversionRate =()=>{
  const heading = "Conversion Rate Optimization for PPC"
  const description =
    "High-Performing Campaigns Need Optimized Landing Pages. We Apply PPC Conversion Optimization Principles:"

  const cases = [
    {
      title: "Fast-Loading Pages With Clear Messaging",
      description:
        "Visitors Get The Information They Need Instantly, Reducing Drop-Offs."
    },
    {
      title: "Persuasive Calls-To-Action (CTAs) Aligned With Ad Copy",
      description:
        "Every CTA Encourages Users To Take The Next Step."
    },
    {
      title: "A/B Testing For Forms, Headlines, And Offers",
      description:
        "We Test Variations To Find The Combination That Delivers The Best Results."
    },
  ]
  const footer = "CRO Reduces Costs Per Lead And Maximizes Ad Effectiveness."
    return <CommonBigIndex 
        data={cases}
        description={description}
        heading={heading}
        footer={footer}
    />
}