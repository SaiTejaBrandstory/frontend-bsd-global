'use client'

import { SectionHeader } from '@/component/seo-report/SectionHeader'
import { Card } from '@/component/seo-report/ui/card'
import { Badge } from '@/component/seo-report/ui/badge'
import { CheckCircle2 } from 'lucide-react'
import * as LucideIcons from 'lucide-react'
import { motion } from 'framer-motion'

export default function ReportTenthSection({ tenthSection }) {
  if (!tenthSection) {
    return null
  }

  const { number, heading, cards = [] } = tenthSection

  // Helper function to get icon component from string name
  const getIcon = (iconName) => {
    const IconComponent = LucideIcons[iconName] || LucideIcons.MapPin
    return IconComponent
  }

  return (
    <motion.section 
      className="mb-20"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <SectionHeader number={number} title={heading} />
      
      {cards.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cards.map((card, index) => {
            const IconComponent = getIcon(card.icon || 'MapPin')
            const iconBgColor = card.iconBgColor === 'black' ? 'bg-black' : 'bg-red-600'
            const cardBgColor = card.cardBgColor === 'red' ? 'bg-red-50 border-red-200' : 'border-gray-200'
            const hasIcon = card.icon && card.cardType !== 'list'
            
            const keyValues = Array.isArray(card.keyValues) 
              ? card.keyValues 
              : card.keyValues?.data || []
            
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
                <Card className={`p-6 border-2 ${cardBgColor} h-full flex flex-col`}>
                  {hasIcon && (
                    <div className={`${iconBgColor} p-3 rounded-lg inline-block mb-4`}>
                      <IconComponent className="h-6 w-6 text-white" />
                    </div>
                  )}
                  
                  <h3 className="mb-2 text-gray-900" style={{ fontSize: '24px' }}>{card.heading}</h3>
                  
                  {card.description && (
                    <p className="text-sm text-gray-700 mb-3">{card.description}</p>
                  )}
                  
                  {card.badgeText && (
                    <Badge variant="secondary" className="text-gray-700 bg-gray-100">
                      {card.badgeText}
                    </Badge>
                  )}
                  
                  {card.cardType === 'keyValue' && keyValues.length > 0 && (
                    <div className="space-y-2 flex-1">
                      {keyValues.map((item, itemIndex) => {
                        const key = item?.key || item?.attributes?.key || ''
                        const value = item?.value || item?.attributes?.value || ''
                        return (
                          <div key={itemIndex} className="flex items-center justify-between">
                            <span className="text-sm text-gray-600">{key}</span>
                            <span className="text-gray-900">{value}</span>
                          </div>
                        )
                      })}
                    </div>
                  )}
                  
                  {card.cardType === 'list' && listItems.length > 0 && (
                    <ul className="space-y-2 text-gray-900 flex-1 list-none" style={{ marginLeft: '-15px' }}>
                      {listItems.map((item, itemIndex) => {
                        const text = item?.text || item?.attributes?.text || ''
                        return (
                          <li key={itemIndex} className="flex items-end gap-2" style={{ fontSize: '12px' }}>
                            <CheckCircle2 className="h-4 w-4 text-red-600 flex-shrink-0" />
                            <span>{text}</span>
                          </li>
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

