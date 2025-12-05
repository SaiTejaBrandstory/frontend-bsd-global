import CommonAccordion from '@/component/pages/common/CommonAccordion'

export const SecondSection = ({
  heading,
  highlightedText,
  paragraph1,
  paragraph2,
  secondSectionCards,
}) => {
  const subheadingParts = [
    highlightedText ? `<b class="highlited-text">${highlightedText}</b>` : null,
    paragraph1,
  ].filter(Boolean)

  const items = Array.isArray(secondSectionCards)
    ? secondSectionCards.map((card, index) => ({
        title: card?.title ?? `Item ${index + 1}`,
        content: card?.description ?? '',
      }))
    : []

  return (
    <CommonAccordion
      title={heading ?? ''}
      subheding2={subheadingParts.join('<br/>')}
      items={items}
      footer={paragraph2 ?? ''}
    />
  )
}
