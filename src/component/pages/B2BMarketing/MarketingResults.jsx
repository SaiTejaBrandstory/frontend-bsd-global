import { CommonBigIndex } from "../common/CommonBigIndex"

export const MarketingResults = () => {
  const heading = "Proven B2B Marketing Results"
  const description = "Numbers tell the story better than words. Our B2B marketing case studies demonstrate tangible results for clients across sectors:"

  const cases = [
    {
      title: "SaaS Client",
      description: "We helped the client get three times more qualified leads in 6 months. We did this by focusing on the right accounts and sharing helpful content that spoke to their needs."
    },
    {
      title: "Manufacturing Brand",
      description: "We made the sales process faster for the client. Their sales cycle became 25% shorter because we focused on the right accounts and reached the right people with targeted campaigns."
    },
    {
      title: "Professional Services Firm",
      description: "We helped the client grow the value of their pipeline by 40%. We used thought-leadership campaigns and stayed in touch with leads until they were ready to buy."
    },
  ]
  
  const footer = "Each success reflects strategic planning, expert execution, and measurable ROI, proof that our B2B marketing services make a real impact."
  
  return <CommonBigIndex 
    data={cases}
    description={description}
    heading={heading}
    footer={footer}
  />
}