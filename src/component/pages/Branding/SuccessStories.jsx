import { CommonBigIndex } from "../common/CommonBigIndex"

export const SuccessStories = () => {
  const heading = "Branding Success Stories"
  const description =
    "We Measure Our Work By Real Results. Our Branding Case Studies Show How Brands Gain Awareness, Engagement, And Growth Through Strategic Branding."

  const cases = [
    {
      title: "Tech Startup Awareness",
      description:
        "Before Our Work, The Startup’s Brand Was Unclear. Only 15% Of Their Audience Recognized Them. After A Rebranding, With A New Visual Identity And Consistent Messaging:<br /><br />• Brand Recall Rose To 65%<br />• Social Media Engagement Grew 120%<br />• Website Visits Increased By 90%",
    },
    {
      title: "Retail Brand Preference",
      description:
        "A Retail Client Wanted To Attract Younger Customers. Through Updated Logo, Packaging, And Campaigns:<br /><br />• Customer Preference Increased By 35%<br />• Repeat Purchases Went Up 25%<br />• Market Share Grew 10%",
    },
    {
      title: "FMCG Brand Refresh",
      description:
        "An Established FMCG Brand Needed A Modern Look While Keeping Loyal Customers. With A Refreshed Logo, Messaging, And Visuals:<br /><br />• Brand Recognition Improved By 40%<br />• Social Media Engagement Rose 80%<br />• Positive Customer Feedback Grew 50%",
    },
  ]

  const footer =
    "These Stories Show The Power Of Branding Services Done Right—Mixing Strategy, Creativity, And Insights For Real Business Results."

  return (
    <CommonBigIndex
      data={cases}
      description={description}
      heading={heading}
      footer={footer}
      caseLabel="Case"
    />
  )
}
