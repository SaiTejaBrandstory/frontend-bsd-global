import { CommonBigIndex } from '../common/CommonBigIndex'

export const SMMCaseBoxes = () => {
  const heading = "Success Stories From Our Social Media Campaigns"
  const description =
    "Seeing is believing. Here are some examples of our social media marketing case studies:"

  const cases = [
    {
      title: "E-Commerce Brand",
      description:
        "We collaborated with an online retailer looking to increase sales and following. Through the use of imaginative product videos, targeted advertisements, and interesting posts, we:",
      points: [
        "Gained 120k more followers in just six months.",
        "Improved targeting, resulting in a 35% increase in ad click-through rates.",
        "Increased overall social media campaign revenue by 50%",
      ],
    },
    {
      title: "Hospitality Chain",
      description:
        "A hotel chain aimed to increase bookings by establishing a connection with tourists. To increase brand awareness, we implemented Instagram clips, stories, and influencer partnerships. Consequently:",
      points: [
        "On Instagram, their engagement rate doubled.",
        "More direct reservations were facilitated by retargeting advertisements.",
        "Influencer partnerships helped them establish a more powerful brand presence in new markets.",
      ],
    },
    {
      title: "B2B Service Company",
      description:
        "This business aimed to produce high-quality leads and gain the trust of experts. With thought-leadership material, webinars, and LinkedIn campaigns, we:",
      points: [
        "Increased participation on LinkedIn by 80%.",
        "Increased social media channel leads by three times.",
        "Paid advertisements were used to increase webinar registrations and requests for demos.",
      ],
    },
  ]
  const footer = "Every campaign is meticulously designed with the client's particular objectives and target demographic in mind. We monitor the results, figure out what works, and keep refining so that each month produces greater results."

  return (
    <CommonBigIndex 
      heading={heading} 
      description={description} 
      data={cases} 
      footer={footer}
      showCaseLabel={true}
    />
  )
}
