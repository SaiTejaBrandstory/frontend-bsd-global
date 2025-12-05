import CommonGridBox3 from "../pages/common/CommonGridBox3";

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

export const SeventhSection = (props) => {
  // Return null if no data from Strapi
  if (!props?.title && (!props?.seventhSectionCards || props.seventhSectionCards.length === 0)) {
    return null
  }

  // Map Strapi seventhSectionCards to CommonGridBox3 format
  const data = props?.seventhSectionCards && props.seventhSectionCards.length > 0
    ? props.seventhSectionCards.map((card) => {
        // Extract logo URL from Strapi media object
        const logoUrl = getImageUrl(card?.logo)

        return {
          title: card?.title ?? '',
          description: card?.description ?? '',
          bgcolor: card?.bgcolor ?? '',
          logo: logoUrl || null, // Use extracted URL or null
        }
      })
    : []

  // Return null if no cards data
  if (data.length === 0) {
    return null
  }

  const title = props?.title ?? ''
  const footer = props?.footer ?? null

    return (
    <CommonGridBox3 title={title} data={data} footer={footer} />
  )
}