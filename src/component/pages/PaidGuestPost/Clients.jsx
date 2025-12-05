// components/Stories.jsx
import { CommonWhiteRedCard } from "../common/CommonWhiteRedCard"

export const Clients = () => {
  const storiesData = {
    // Updated title based on the image content
    title: "What Our Clients Say",
    // Updated cards array to reflect the two testimonials in the image
    cards: [
      {
        name: "Marketing Director",
        role: "B2B SaaS Company",
        testimonial: "“Before working with them, we were buying low-quality links and getting nowhere. Now, we’re seen as a trusted voice in our industry. Their team knows what quality means and how to get it.”"
      },
      {
        name: "SEO Manager",
        role: "Fintech Brand",
        testimonial: "“We’ve worked with dozens of agencies. Most lost steam after the first few months. This team stayed consistent, transparent, and results-driven. Our rankings keep improving, and so does our domain strength.”"
      }
    ]
  }

  return <CommonWhiteRedCard title={storiesData.title} cards={storiesData.cards} />
}