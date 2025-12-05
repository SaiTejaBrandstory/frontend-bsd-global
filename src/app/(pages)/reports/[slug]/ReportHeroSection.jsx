'use client'

import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { Badge } from '@/component/seo-report/ui/badge'

export default function ReportHeroSection({ firstSection }) {
  // If no first section data, don't render
  if (!firstSection) return null

  // Extract fields from Strapi (btnText, heading, description)
  const btnText = firstSection.btnText || firstSection.badgeText
  const heading = firstSection.heading || firstSection.title
  const description = firstSection.description

  return (
    <div className="bg-black text-white border-b-4 border-red-600 relative overflow-hidden" style={{ paddingTop: '8rem', paddingBottom: '2rem' }}>
      <motion.div 
        className="absolute inset-0 opacity-10"
        animate={{
          backgroundPosition: ["0% 0%", "100% 100%"],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          repeatType: "reverse"
        }}
        style={{
          backgroundImage: "linear-gradient(45deg, #dc2626 25%, transparent 25%, transparent 75%, #dc2626 75%, #dc2626), linear-gradient(45deg, #dc2626 25%, transparent 25%, transparent 75%, #dc2626 75%, #dc2626)",
          backgroundSize: "60px 60px",
          backgroundPosition: "0 0, 30px 30px"
        }}
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 relative z-10">
        <div className="text-center max-w-5xl mx-auto">
          {btnText && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
            >
              <Badge className="mb-8 bg-red-600 hover:bg-red-700 text-white border-0 text-lg px-4 py-2 shadow-lg">
                {btnText}
              </Badge>
            </motion.div>
          )}
          {heading && (
            <motion.h1 
              className="text-white mb-8 text-5xl md:text-6xl lg:text-7xl leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {heading}
            </motion.h1>
          )}
          {description && (
            <motion.p 
              className="text-2xl md:text-3xl text-gray-300 max-w-4xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              {description}
            </motion.p>
          )}
          <motion.div
            className="mt-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
          >
            <ChevronDown className="mx-auto h-8 w-8 text-red-600 animate-bounce" />
          </motion.div>
        </div>
      </div>
    </div>
  )
}

