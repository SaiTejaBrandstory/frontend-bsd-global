import FAQs from '../pages/common/CommonFAQ'

export const ThirteenthSection = (props) => {
  // Return null if no data from Strapi
  if (!props?.thirteenthSectionFaqs || props.thirteenthSectionFaqs.length === 0) {
    return null
  }

  // Map Strapi thirteenthSectionFaqs to CommonFAQ format
  const data = props.thirteenthSectionFaqs.map((faq) => ({
    title: faq?.title ?? '',
    description: faq?.description ?? '',
  }))

  // Return null if no valid data
  if (data.length === 0) {
    return null
  }

  return (
    <FAQs data={data} />
  );
};