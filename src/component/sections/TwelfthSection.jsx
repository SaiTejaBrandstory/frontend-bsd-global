import CommonAdvertise from "../pages/common/CommonAdvertise"

export const TwelfthSection = (props) => {
  // Return null if no data from Strapi
  if (!props?.heading && !props?.description && !props?.button1 && !props?.button2) {
    return null
  }

  // Map Strapi fields to CommonAdvertise format
  const title1 = props?.heading ?? ''
  const title2 = '' // Not in Strapi schema, keeping empty
  const description = props?.description ?? ''
  const btn1 = props?.button1 ?? ''
  const btn2 = props?.button2 ?? ''
  const btnOneLink = props?.button1link ?? '#'
  const btnTwoLink = props?.button2link ?? '#'
  const footerText = '' // Not in Strapi schema, keeping empty

  return (
    <CommonAdvertise 
      title1={title1}
      title2={title2}
      description={description}
      btn1={btn1}
      btn2={btn2}
      btnOneLink={btnOneLink}
      btnTwoLink={btnTwoLink}
      footerText={footerText}
    />
  );
};
