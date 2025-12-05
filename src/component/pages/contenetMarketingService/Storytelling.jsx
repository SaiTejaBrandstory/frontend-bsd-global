import { CommonBigIndex } from "../common/CommonBigIndex"

export const Storytelling = () => {
  const heading = "Storytelling That Builds Trust"
  const description = "Stories Are Much More Memorable To People Than Advertisements. Stories Engage, Connect, And Humanize Your Brand. We Assist Brands In Telling Compelling Narratives To Their Target Market. These May Consist Of:"

  const cases = [
    {
      title: "Thoughtful Leadership Pieces",
      description: "Posts Or Articles That Showcase Your Knowledge And Perceptions, Establishing Your Company As A Reliable Resource."
    },
    {
      title: "Customer Success Stories",
      description: "These Are Actual Accounts Of How Your Product Or Service Benefited A Customer, Which Increases Credibility And Trust."
    },
    {
      title: "Short Brand Videos",
      description: "These Are Captivating Images That Evoke Strong Feelings And Convey Your Message Rapidly."
    },
  ]
  
  const footer = "Every Story We Write Aims To Accomplish More Than Merely Providing Information. It Draws In Customers, Fosters Trust, And Keeps Your Brand At The Forefront Of Their Minds. People Will Remember Your Story And Pick Your Brand When They're Ready To Take Action."
  
  return <CommonBigIndex 
    data={cases}
    description={description}
    heading={heading}
    footer={footer}
  />
}
