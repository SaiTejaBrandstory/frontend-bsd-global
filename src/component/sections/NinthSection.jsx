import { CommonOptionSelector2 } from "../pages/common/CommonOptionSelector2";

export const NinthSection = (props) => {
  // Return null if no data from Strapi
  if (!props?.title && (!props?.ninthSectionOptions || props.ninthSectionOptions.length === 0)) {
    return null
  }

  // Map Strapi ninthSectionOptions to CommonOptionSelector2 format
  const options = props?.ninthSectionOptions && props.ninthSectionOptions.length > 0
    ? props.ninthSectionOptions.map((opt) => ({
        heading: opt?.heading ?? '',
        description: opt?.description ?? '',
      }))
    : []

  // Return null if no options data
  if (options.length === 0) {
    return null
  }

  const title = props?.title ?? ''

  return (
    <CommonOptionSelector2
      title={title}
      description=""
      options={options}
      splitRatio={0.4}
    />
  );
};