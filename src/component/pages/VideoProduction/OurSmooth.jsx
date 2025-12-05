import { CommonBigIndex } from "../common/CommonBigIndex"

export const OurSmooth = () => {
  const heading = "Our Smooth 5-Step Production Process"
  const description = "We bring structure to creativity with a refined, goal-driven video production process. Each project is guided by a clear video project workflow that balances innovation with precision, ensuring your vision is executed flawlessly."

  const cases = [
    {
      title: "Discovery & Strategy",
      description: "We begin by understanding your brand identity, target audience, and campaign objectives. This critical pre-production stage lays the strategic groundwork for impactful storytelling."
    },
    {
      title: "Scriptwriting & Storyboarding",
      description: "Our writers and visual artists collaborate to develop engaging scripts and detailed storyboards defining the structure of your marketing videos. It’s where brand storytelling truly begins."
    },
    {
      title: "Filming & Production",
      description: "Equipped with industry-grade gear and a skilled crew, we handle all aspects of on-location or in-studio shooting. This is where creative planning meets hands-on video production excellence."
    },
    {
      title: "Editing & Post-Production",
      description: "Our post team enhances the raw footage through expert color grading, motion graphics, and sound mixing. We add branded overlays, voiceovers, and transitions to deliver high quality video content that captures attention and drives action."
    },
    {
      title: "Delivery & Distribution",
      description: "We also support distribution strategy, whether it's YouTube, LinkedIn, or paid channels, maximizing reach and return. This final phase ensures your video production process delivers on every front."
    },
  ]
  
  const footer = "Our proven process supports every phase of the journey. Our pre-production insights and polished post-production execution make your investment in video smooth, strategic, and scalable."
  
  return <CommonBigIndex 
    data={cases}
    description={description}
    heading={heading}
    footer={footer}
    caseLabel='Step'
  />
}