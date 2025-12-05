import CommonTwoCard from '../pages/common/CommonTwoCard'
import styles from '@/style/common/commonTwoCard.module.css'

export const FourthSection = ({
  heading,
  description1,
  highlightedText,
  fourthSectionCards,
  description2,
}) => {
  // Map Strapi cards to CommonTwoCard format
  const cards = Array.isArray(fourthSectionCards) && fourthSectionCards.length > 0
    ? fourthSectionCards.map((card, index) => ({
        title: card?.title ?? `Item ${index + 1}`,
        description: card?.description ?? '',
      }))
    : []

  // Don't render if no data is provided
  if (!heading && !description1 && cards.length === 0) {
    return null
  }

  const data = {
    heading: heading ?? '',
    highlight: highlightedText ?? '',
    subheading: description1 ?? '',
    cards: cards,
  }

  return (
    <>
      <CommonTwoCard {...data} />
      {description2 && (
        <div className={styles.description2Wrapper}>
          <p dangerouslySetInnerHTML={{ __html: description2 }} />
        </div>
      )}
    </>
  )
}