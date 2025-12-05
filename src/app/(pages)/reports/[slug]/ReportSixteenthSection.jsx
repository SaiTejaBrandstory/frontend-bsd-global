'use client'

import Image from 'next/image'
import { Separator } from '@/component/seo-report/ui/separator'
import { motion } from 'framer-motion'

// Helper function to get image URL from Strapi media object
function getImageUrl(imageData) {
  if (!imageData) return '/images/brandstory-logo.png'
  
  // Try different possible structures for Strapi v5
  let url = null
  if (imageData?.data?.attributes?.url) {
    url = imageData.data.attributes.url
  } else if (imageData?.attributes?.url) {
    url = imageData.attributes.url
  } else if (imageData?.url) {
    url = imageData.url
  } else if (typeof imageData === 'string') {
    url = imageData
  }
  
  if (!url) return '/images/brandstory-logo.png'
  
  // If URL already includes http, return as is, otherwise prepend Strapi URL
  if (url.startsWith('http')) return url
  
  const strapiUrl = process.env.NEXT_PUBLIC_STRAPI_URL || process.env.STRAPI_URL || 'http://localhost:1337'
  return `${strapiUrl}${url}`
}

export default function ReportSixteenthSection({ sixteenthSection }) {
  if (!sixteenthSection) {
    return null
  }

  const { logo, heading, description, copyrightText } = sixteenthSection
  const logoUrl = getImageUrl(logo)

  return (
    <motion.footer 
      className="bg-black text-white py-12 border-t-4 border-red-600"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {logoUrl && (
          <Image 
            src={logoUrl} 
            alt="Brandstory" 
            width={120} 
            height={32} 
            className="h-8 mx-auto mb-4 brightness-0 invert" 
          />
        )}
        {heading && (
          <h3 className="mb-2 text-white">{heading}</h3>
        )}
        {description && (
          <p className="text-gray-400 mb-4">{description}</p>
        )}
        <Separator className="my-6 bg-gray-700" />
        {copyrightText && (
          <p className="text-sm text-gray-500">{copyrightText}</p>
        )}
      </div>
    </motion.footer>
  )
}

