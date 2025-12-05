import { CommonWhiteRedCard } from "../common/CommonWhiteRedCard"

export const Stories = () => {
  const storiesData = {
    title: "Stories of Growth, Success, and Partnership",
    cards: [
      {
        name: "Samantha P.",
        role: "Business Head",
        testimonial: "Within two months, our domain authority jumped from 24 to 38. These links weren't just high DA—they were actually driving traffic."
      },
      {
        name: "David R.",
        role: "Startup Founder",
        testimonial: "Best investment we've made in off-page SEO. We went from chasing bloggers to being featured on top industry sites."
      }
    ]
  }

  return <CommonWhiteRedCard title={storiesData.title} cards={storiesData.cards} />
}
