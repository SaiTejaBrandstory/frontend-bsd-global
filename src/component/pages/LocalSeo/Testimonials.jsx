import { CommonWhiteRedCard } from "../common/CommonWhiteRedCard"

export const Testimonials = () => {
  const storiesData = {
    title: "Testimonials & Social Proof",
    cards: [
      {
        name: "Sarah M",
        role: "Retail Store Owner, Toronto",
        testimonial: "Brandstory put us on the map.literally. We went from nowhere to top 3 in the local search."
      },
      {
        name: "Rahul P",
        role: "Legal Consultant, London",
        testimonial: "We started getting more local calls within weeks. They made it easy to understand and even easier to trust."
      },
      {
        name: "Priya D.",
        role: "Salon Owner, Bangalore",
        testimonial: "Foot traffic doubled in 3 months. Their SEO strategy worked like a charm."
      },
      {
        name: "Jason T.",
        role: "Regional Manager, Cleaning Services, Canada",
        testimonial: "We manage 6 locations and needed a plan that scaled. They handled it without a hitch."
      },
      {
        name: "Jason T.",
        role: "Regional Manager, Cleaning Services, Canada",
        testimonial: "We manage 6 locations and needed a plan that scaled. They handled it without a hitch."
      }
    ]
  }

  return <CommonWhiteRedCard title={storiesData.title} cards={storiesData.cards} />
}
