// components/Stories.jsx
import { CommonWhiteRedCard } from "../common/CommonWhiteRedCard"

export const Clients = () => {
  const storiesData = {
    // Updated title based on the image content
    title: "What Our Clients Say",
    // Updated cards array to reflect the two testimonials in the image
    cards: [
      {
        name: "Marie",
        role: "Head of SEO, D2C Brand (France)",
        testimonial: "With their multilingual SEO, we finally ranked on Google.de and .fr with native content."
      },
      {
        name: "Kenji",
        role: "eCom Director (Japan)",
        testimonial: "From hreflang to local link building, they handled everything with precision."
      }
    ]
  }

  return <CommonWhiteRedCard title={storiesData.title} cards={storiesData.cards} />
}