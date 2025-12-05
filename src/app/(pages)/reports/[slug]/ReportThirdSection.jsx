'use client'

import { motion } from 'framer-motion'
import * as LucideIcons from 'lucide-react'
import { SectionHeader } from '@/component/seo-report/SectionHeader'
import { Card } from '@/component/seo-report/ui/card'

export default function ReportThirdSection({ thirdSection }) {
  if (!thirdSection) return null

  const number = thirdSection.number
  const heading = thirdSection.heading
  const cards = thirdSection.cards || []

  // Helper function to get icon component from string name
  const getIcon = (iconName) => {
    if (!iconName) return LucideIcons.Search // Default icon
    // Try exact match first
    const IconComponent = LucideIcons[iconName]
    if (IconComponent) return IconComponent
    // Try capitalizing first letter
    const Capitalized = LucideIcons[iconName.charAt(0).toUpperCase() + iconName.slice(1)]
    return Capitalized || LucideIcons.Search // Fallback to Search
  }

  return (
    <section className="mb-20">
      {heading && <SectionHeader number={number} title={heading} />}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {cards.map((card, index) => {
          const Icon = getIcon(card.icon)
          const isEven = index % 2 === 0
          const borderColor = isEven ? 'border-l-red-600' : 'border-l-black'
          const iconBg = isEven ? 'bg-red-50' : 'bg-gray-100'
          const iconColor = isEven ? 'text-red-600' : 'text-black'
          const animationX = isEven ? -30 : 30
          const hoverX = isEven ? 5 : -5
          const delay = index >= 2 ? 0.1 : 0

          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: animationX }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay }}
              whileHover={{ scale: 1.02, x: hoverX }}
            >
              <Card className={`p-6 border-2 border-gray-200 border-l-4 ${borderColor} h-full hover:shadow-xl transition-shadow cursor-pointer flex flex-col`}>
                <div className="flex items-start gap-4 flex-1">
                  <motion.div 
                    className={`${iconBg} p-3 rounded-lg flex-shrink-0`}
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <Icon className={`h-6 w-6 ${iconColor}`} />
                  </motion.div>
                  <div className="flex-1">
                    {card.heading && (
                      <h3 className="mb-2 text-xl text-gray-900">{card.heading}</h3>
                    )}
                    {card.description && (
                      <p className="text-sm text-gray-700">{card.description}</p>
                    )}
                  </div>
                </div>
              </Card>
            </motion.div>
          )
        })}
      </div>
    </section>
  )
}

