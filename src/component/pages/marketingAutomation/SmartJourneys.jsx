import { CommonBigIndex } from "../common/CommonBigIndex"

export const SmartJourneys =()=>{
  const heading = "Smart Journeys Designed for Maximum Conversions"
  const description =
    "Customers Often Ignore Messages That Are The Same For Everyone. Personalized Marketing Automation Makes Every Message Special, So People Pay Attention."

  const cases = [
    {
      title: "Product Suggestions Based On Past Purchases",
      description:
        "If Someone Bought Shoes Before, We Can Show Them Matching Socks, New Shoe Styles, Or Accessories They Might Like. This Helps Them Discover More Items They Want."
    },
    {
      title: "Offers For A Customer’s Location",
      description:
        "People See Deals Or Promotions That Are Nearby Or Relevant To Where They Live. Local Offers Feel More Useful And Get Better Responses."
    },
    {
      title: "Messages That Match The Customer’s Stage In Journey",
      description:
        "Someone Who Is Just Learning About Your Brand Gets A Simple Introduction, While A Customer Ready To Buy Receives A Special Offer Or Reminder. Each Message Fits What The Customer Needs At That Moment."
    },
  ]
  const footer = "When Messages Feel Personal, People Notice Them. They Click More, Buy More, And Remember Your Brand. Over Time, This Builds Trust, Loyalty, And Long-Term Relationships With Your Customers. Personalized Marketing Turns Ordinary Messages Into Real Connections That Grow Your Business."
    return <CommonBigIndex 
        data={cases}
        description={description}
        heading={heading}
        footer={footer}
    />
}