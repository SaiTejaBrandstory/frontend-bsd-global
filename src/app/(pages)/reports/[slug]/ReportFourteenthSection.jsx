'use client'

import { SectionHeader } from '@/component/seo-report/SectionHeader'
import { Card } from '@/component/seo-report/ui/card'
import * as LucideIcons from 'lucide-react'
import { motion } from 'framer-motion'

export default function ReportFourteenthSection({ fourteenthSection }) {
  if (!fourteenthSection) {
    return null
  }

  const { number, heading, cards = [] } = fourteenthSection

  // Helper function to get icon component from string name
  const getIcon = (iconName) => {
    if (!iconName) return LucideIcons.Target // Default icon
    // Try exact match first
    const IconComponent = LucideIcons[iconName]
    if (IconComponent) return IconComponent
    // Try capitalizing first letter
    const Capitalized = LucideIcons[iconName.charAt(0).toUpperCase() + iconName.slice(1)]
    return Capitalized || LucideIcons.Target // Fallback to Target
  }

  const cardsArray = Array.isArray(cards) 
    ? cards 
    : cards?.data || []

  return (
    <motion.section 
      className="mb-20"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <SectionHeader number={number} title={heading} />
      
      {cardsArray.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cardsArray.map((card, index) => {
            const Icon = getIcon(card.icon)
            const iconColor = card.iconColor === 'red' ? 'text-red-600' : 'text-black'
            
            const listItems = Array.isArray(card.listItems) 
              ? card.listItems 
              : card.listItems?.data || []
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="h-full"
              >
                <Card className="p-6 border-2 border-gray-200 h-full flex flex-col">
                  <div className="flex items-center gap-3 mb-4">
                    <Icon className={`h-6 w-6 ${iconColor}`} />
                    <h3 className="text-gray-900">{card.heading || ''}</h3>
                  </div>
                  
                  {listItems.length > 0 && (
                    <ul className="space-y-2 text-gray-900 recommendations-list flex-1">
                      {listItems.map((item, itemIndex) => {
                        const text = item?.text || item?.attributes?.text || ''
                        return (
                          <li key={itemIndex}>{text}</li>
                        )
                      })}
                    </ul>
                  )}
                </Card>
              </motion.div>
            )
          })}
        </div>
      )}
    </motion.section>
  )
}

