import { CommonWhiteRedCard } from "../pages/common/CommonWhiteRedCard"

export const EighthSection = (props) => {
  // Return null if no data from Strapi
  if (!props?.title && (!props?.eighthSectionCards || props.eighthSectionCards.length === 0)) {
    return null
  }

  // Map Strapi eighthSectionCards to CommonWhiteRedCard format
  const cards = props?.eighthSectionCards && props.eighthSectionCards.length > 0
    ? props.eighthSectionCards.map((card) => ({
        name: card?.name ?? '',
        role: card?.role ?? '',
        testimonial: card?.testimonial ?? '',
      }))
    : []

  // Return null if no cards data
  if (cards.length === 0) {
    return null
  }

  const title = props?.title ?? ''
  const footer = props?.footer ?? null

  return <CommonWhiteRedCard title={title} cards={cards} footer={footer} />
}