import React from 'react'
import CommonCard from '../pages/common/CommonCard'

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

export const SixthSection = (props) => {
  // Return null if no data from Strapi
  if (!props?.heading && !props?.description && (!props?.sixthSectionCards || props.sixthSectionCards.length === 0)) {
    return null
  }

  const boxHeight = "380px";

  // Map Strapi sixthSectionCards to CommonCard format
  const seoData = props?.sixthSectionCards && props.sixthSectionCards.length > 0
    ? props.sixthSectionCards.map((card, index) => {
        // Extract icon URL from Strapi media object
        const iconUrl = getImageUrl(card?.icon)
        
        // Use hardcoded background patterns (frontend only)
        const backgroundPatterns = [
          "url('/images/ppc/bg-1.png')",
          "url('/images/ppc/bg-2.png')",
          "url('/images/ppc/bg-3.png')",
          "url('/images/ppc/bg-1.png')",
        ];
        const background = backgroundPatterns[index % backgroundPatterns.length];
        
        return {
          title: card?.title ?? '',
          desc: card?.description ?? '',
          icon: iconUrl || null, // Use null instead of empty string
          background: background,
          height: boxHeight,
        }
      })
    : [];

  // Return null if no cards data
  if (seoData.length === 0) {
    return null
  }

  const heading = props?.heading ?? '';
  const description = props?.description ?? '';
  const footer = props?.footer ?? '';

  return (
    <CommonCard 
        seoData={seoData} 
      heding={heading}
      description={description}
      footer={footer}
    />
  );
}