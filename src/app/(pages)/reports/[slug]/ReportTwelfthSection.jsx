'use client'

import { SectionHeader } from '@/component/seo-report/SectionHeader'
import { Card } from '@/component/seo-report/ui/card'
import { Badge } from '@/component/seo-report/ui/badge'
import * as LucideIcons from 'lucide-react'
import { motion } from 'framer-motion'

export default function ReportTwelfthSection({ twelfthSection }) {
  if (!twelfthSection) {
    return null
  }

  const { number, heading, cards = [] } = twelfthSection

  // Helper function to get icon component from string name
  const getIcon = (iconName) => {
    const IconComponent = LucideIcons[iconName] || LucideIcons.Brain
    return IconComponent
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {cardsArray.map((card, index) => {
            const IconComponent = getIcon(card.icon || 'Brain')
            const iconBgColor = card.iconBgColor === 'black' ? 'bg-black' : 'bg-red-600'
            const borderColor = card.borderColor === 'black' ? 'border-l-black' : 'border-l-red-600'
            
            // Badge styling
            let badgeVariant = 'outline'
            let badgeClassName = ''
            if (card.badgeColor === 'red') {
              badgeVariant = 'default'
              badgeClassName = 'bg-red-600 text-white border-transparent'
            } else if (card.badgeColor === 'black') {
              badgeVariant = 'default'
              badgeClassName = 'bg-black text-white border-transparent'
            } else {
              badgeVariant = 'outline'
              badgeClassName = 'border-gray-300 text-gray-900'
            }
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="h-full"
              >
                <Card className={`p-6 border-2 border-gray-200 border-l-4 ${borderColor} h-full flex flex-col`}>
                  <div className="flex items-start gap-4 flex-1">
                    <div className={`${iconBgColor} p-3 rounded-lg flex-shrink-0`}>
                      <IconComponent className="h-6 w-6 text-white" />
                    </div>
                    <div className="flex-1 flex flex-col">
                      <h3 className="mb-2 text-gray-900">{card.heading || ''}</h3>
                      <p className="text-sm text-gray-700 mb-3 flex-1">
                        {card.description || ''}
                      </p>
                      {card.badgeText && (
                        <Badge 
                          variant={badgeVariant}
                          className={badgeClassName}
                        >
                          {card.badgeText}
                        </Badge>
                      )}
                    </div>
                  </div>
                </Card>
              </motion.div>
            )
          })}
        </div>
      )}
    </motion.section>
  )
}

