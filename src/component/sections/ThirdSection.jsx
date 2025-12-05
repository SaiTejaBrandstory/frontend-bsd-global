import CommonAccordion2 from '@/component/pages/common/CommonAccordion2';

export const ThirdSection = ({
  heading,
  description,
  thirdSectionCards,
  splitRatio,
  button,
  buttonLink,
}) => {
  // Map Strapi data to accordion items
  const accordionItems = Array.isArray(thirdSectionCards) && thirdSectionCards.length > 0
    ? thirdSectionCards.map((card, index) => ({
        title: card?.title ?? `Item ${index + 1}`,
        content: card?.description ?? '',
      }))
    : [];

  return (
    <CommonAccordion2
      title={heading ?? ''}
      description={description ?? ''}
      items={accordionItems}
      splitRatio={splitRatio ?? 0.5}
      button={button}
      buttonLink={buttonLink}
    />
  );
};