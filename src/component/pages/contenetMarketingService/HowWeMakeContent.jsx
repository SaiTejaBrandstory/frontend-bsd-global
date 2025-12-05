import { CommonOptionSelector } from "../common/CommonOptionSelector"

export const HowWeMakeContent = () => {
  const title = "How We Make Content Work for You"
  const desc = "Good content should feel effortless to read and meaningful to the person on the other side of the screen. That’s why we focus on creating content that speaks to people and delivers results for your business."

  const options = [
    {
      heading: "Content in Every Format That Matters",
      description:
        "Not everyone learns the same way. Some like reading in-depth blogs, some prefer a quick scroll through social posts, while others would rather watch a short video. We create content in the formats your audience actually engages with blogs, whitepapers, videos, podcasts, infographics, emails, and more."
    },
    {
      heading: "Decisions Backed by Data",
      description:
        "Instead of guessing what might work, we look at the numbers, what people search for, click on, and share. With real insights, we shape content strategies that are smarter, more effective, and built to perform long term."
    },
    {
      heading: "Stories People Remember",
      description:
        "People don’t connect with brands, they connect with stories. We help you share stories that feel real, whether that’s customer success stories, thought leadership, or short brand videos that spark emotion and build trust."
    },
    {
      heading: "Making Sure You’re Found",
      description:
        "Great content won’t make an impact if nobody sees it. That’s where SEO comes in. We focus on the right keywords, clear page structures, and optimized formats, so your audience discovers you when they need you most."
    },
    {
      heading: "Guiding Leads, Step by Step",
      description:
        "Not everyone becomes a customer on the first visit. That’s why we create content that nurtures, like helpful guides, email sequences, and explainer videos to move people naturally from awareness to trust, and eventually, to action."
    }
  ]

  return (
    <CommonOptionSelector title={title} description={desc} options={options} />
  )
}
