import { CommonBigIndex } from "../pages/common/CommonBigIndex"

// Helper function to get image URL from Strapi media object
const getImageUrl = (image) => {
  if (!image) {
    if (process.env.NODE_ENV === 'development') {
      console.log('FifthSection - No image provided')
    }
    return null
  }
  
  // Handle different possible structures for Strapi v5
  // Strapi v5 can return various structures:
  // - image.data.attributes.url (most common)
  // - image.data.url
  // - image.attributes.url
  // - image.url (direct)
  // - Direct string URL
  let url = null
  
  // Try different nested structures
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
    if (process.env.NODE_ENV === 'development') {
      console.log('FifthSection - Could not extract URL from image:', image)
    }
    return null
  }
  
  // If URL already includes http/https, return as is
  if (typeof url === 'string' && (url.startsWith('http://') || url.startsWith('https://'))) {
    return url
  }
  
  // Otherwise prepend Strapi URL
  const strapiUrl = process.env.NEXT_PUBLIC_STRAPI_URL || process.env.STRAPI_URL || 'http://localhost:1337'
  const cleanUrl = url.startsWith('/') ? url : `/${url}`
  const fullUrl = `${strapiUrl}${cleanUrl}`
  
  if (process.env.NODE_ENV === 'development') {
    console.log('FifthSection - Constructed image URL:', fullUrl)
  }
  
  return fullUrl
}

export const FifthSection = ({
  heading,
  description,
  footer,
  fifthSectionCards,
}) => {
  // Return null if no data from Strapi
  if (!heading && !description && (!fifthSectionCards || fifthSectionCards.length === 0)) {
    return null
  }
  
  // Map Strapi fifthSectionCards to CommonBigIndex format
  const cases = Array.isArray(fifthSectionCards) && fifthSectionCards.length > 0
    ? fifthSectionCards.map((card, index) => {
        // Map cardSubSections directly from Strapi (title and desc are grouped together)
        const cardSubSections = Array.isArray(card?.cardSubSections) && card.cardSubSections.length > 0
          ? card.cardSubSections.map((subSection) => ({
              cardSubTitle: subSection?.cardSubTitle ?? '',
              cardSubDesc: subSection?.cardSubDesc ?? '',
            }))
          : []
        
        // Extract image URL from Strapi
        const imageUrl = getImageUrl(card?.image)
        
        // Debug: Log full card data structure (remove in production)
        if (process.env.NODE_ENV === 'development') {
          console.log(`FifthSection - Card ${index + 1} full data:`, {
            caseStudyTitle: card?.caseStudyTitle,
            image: card?.image,
            imageUrl: imageUrl,
            cardSubSections: card?.cardSubSections,
            mappedCardSubSections: cardSubSections,
          })
        }
        
        return {
          title: card?.caseStudyTitle ?? `Case ${index + 1}`,
          label: card?.label ?? null, // Use label from Strapi for each card
          cardSubSections: cardSubSections.length > 0 ? cardSubSections : undefined,
          image: imageUrl, // Store image URL if available
        }
      })
    : []

  // Debug: Log final cases array
  if (process.env.NODE_ENV === 'development') {
    console.log('FifthSection - Final cases array:', cases)
  }
  
  return (
    <>
        <CommonBigIndex 
        data={cases}
        description={description ?? ''}
        heading={heading ?? ''}
        footer={footer ?? ''}
            paddingBottom={0}
        />
    </>
  )
}