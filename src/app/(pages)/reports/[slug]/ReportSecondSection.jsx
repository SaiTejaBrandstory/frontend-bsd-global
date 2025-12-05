'use client'

import { motion } from 'framer-motion'
import { SectionHeader } from '@/component/seo-report/SectionHeader'
import { Card } from '@/component/seo-report/ui/card'

export default function ReportSecondSection({ secondSection }) {
  if (!secondSection) return null

  const heading = secondSection.heading
  const descriptionItems = secondSection.description || []

  // Helper function to render a description item (paragraph)
  // Segments are rendered in sequence, allowing highlighted text to appear inline with normal text
  const renderDescriptionItem = (item, index) => {
    if (!item.segments || item.segments.length === 0) return null

    return (
      <p key={index} className="text-gray-700 mb-4 text-lg group-hover:text-gray-900 transition-colors">
        {item.segments.map((segment, segIndex) => {
          // Render highlighted segments with red bold styling
          if (segment.isHighlighted) {
            return (
              <strong key={segIndex} className="text-red-600 text-xl">
                {segment.text}
              </strong>
            )
          }
          // Render normal segments as regular text
          return <span key={segIndex}>{segment.text}</span>
        })}
      </p>
    )
  }

  return (
    <motion.section 
      className="mb-20 flex flex-col"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      {heading && <SectionHeader title={heading} />}
      <Card className="p-8 border-2 border-gray-200 bg-gradient-to-br from-gray-50 to-white hover:shadow-2xl transition-all duration-500 cursor-pointer group flex-1 flex flex-col">
        <div className="prose max-w-none flex-1">
          {descriptionItems.map((item, index) => renderDescriptionItem(item, index))}
        </div>
      </Card>
    </motion.section>
  )
}

