import { CommonThreeCardBlur } from "../pages/common/CommonThreeCardBlur"

// Helper function to get image URL from Strapi media object
const getImageUrl = (image) => {
  if (!image) {
    return null
  }

  // Handle different possible structures for Strapi v5
  let url = null

  if (image?.data?.attributes?.url) {
    url = image.data.attributes.url
  } else if (image?.data?.url) {
    url = image.data.url
  } else if (image?.attributes?.url) {
    url = image.attributes.url
  } else if (image?.url) {
    url = image.url
  } else if (typeof image === 'string') {
    url = image
  }

  if (!url) {
    return null
  }

  // If URL already includes http/https, return as is
  if (typeof url === 'string' && (url.startsWith('http://') || url.startsWith('https://'))) {
    return url
  }

  // Otherwise prepend Strapi URL
  const strapiUrl = process.env.NEXT_PUBLIC_STRAPI_URL || process.env.STRAPI_URL || 'http://localhost:1337'
  const cleanUrl = url.startsWith('/') ? url : `/${url}`
  return `${strapiUrl}${cleanUrl}`
}

export const TenthSection = (props) => {
  // Return null if no data from Strapi
  if (!props?.heading && (!props?.tenthSectionCards || props.tenthSectionCards.length === 0)) {
    return null
  }

  // Map Strapi tenthSectionCards to CommonThreeCardBlur format
  const data = props?.tenthSectionCards && props.tenthSectionCards.length > 0
    ? props.tenthSectionCards.map((card) => {
        // Extract logo URL from Strapi media object
        const logoUrl = getImageUrl(card?.logo)

        return {
          logo: logoUrl || null, // Use extracted URL or null
          title: card?.title ?? '',
          description: card?.description ?? '',
          bg: '', // bg is managed in frontend only
        }
      })
    : []

  // Return null if no cards data
  if (data.length === 0) {
    return null
  }

  const heading = props?.heading ?? ''
  const subheading = props?.subheading ?? ''
  const footer = props?.footer ?? null

    return (
       <CommonThreeCardBlur
      heading={heading}
      subheading={subheading}
       data={data}
      footer={footer}
       />
  );
};