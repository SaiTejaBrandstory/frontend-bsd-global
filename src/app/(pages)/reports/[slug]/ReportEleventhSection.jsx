'use client'

import { SectionHeader } from '@/component/seo-report/SectionHeader'
import { Card } from '@/component/seo-report/ui/card'
import { Separator } from '@/component/seo-report/ui/separator'
import { CheckCircle2, ArrowRight } from 'lucide-react'
import * as LucideIcons from 'lucide-react'
import { motion } from 'framer-motion'

export default function ReportEleventhSection({ eleventhSection }) {
  if (!eleventhSection) {
    return null
  }

  const { 
    number, 
    heading, 
    cards = [],
    bottomItems = []
  } = eleventhSection

  // Helper function to get icon component from string name
  const getIcon = (iconName) => {
    const IconComponent = LucideIcons[iconName] || LucideIcons.Gauge
    return IconComponent
  }

  const cardsArray = Array.isArray(cards) 
    ? cards 
    : cards?.data || []
  
  const bottomItemsArray = Array.isArray(bottomItems) 
    ? bottomItems 
    : bottomItems?.data || []

  return (
    <motion.section 
      className="mb-20"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <SectionHeader number={number} title={heading} />
      
      {/* Cards */}
      {cardsArray.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {cardsArray.map((card, index) => {
            const IconComponent = getIcon(card.icon || 'Gauge')
            const cardColor = card.cardColor === 'red' 
              ? 'bg-gradient-to-br from-red-50 to-white border-red-200' 
              : 'bg-gradient-to-br from-gray-50 to-white border-gray-200'
            const textColor = card.cardColor === 'red' ? 'text-red-900' : 'text-gray-900'
            const iconColor = card.cardColor === 'red' ? 'text-red-700' : 'text-gray-900'
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="h-full"
              >
                <Card className={`p-8 text-center border-2 ${cardColor} h-full flex flex-col`}>
                  <div className="flex-1 flex flex-col justify-center">
                    <IconComponent className={`h-8 w-8 mx-auto mb-3 ${iconColor}`} />
                    <p className={`${textColor} mb-2 font-semibold text-xl`}>
                      {card.highlightedText || ''}
                    </p>
                    <p className="text-sm text-gray-600">
                      {card.description || ''}
                    </p>
                  </div>
                </Card>
              </motion.div>
            )
          })}
        </div>
      )}
      
      {/* Bottom Card with Lists */}
      {bottomItemsArray.length > 0 && (
        <Card className="p-6 border-2 border-gray-200">
          {bottomItemsArray.map((bottomItem, itemIndex) => {
            const itemHeading = bottomItem?.heading || bottomItem?.attributes?.heading || ''
            const itemListItems = Array.isArray(bottomItem?.listItems) 
              ? bottomItem.listItems 
              : bottomItem?.listItems?.data || []
            
            return (
              <div key={itemIndex}>
                {itemIndex > 0 && (
                  <Separator className="my-6 bg-gray-300" />
                )}
                
                {itemHeading && (
                  <h3 className="mb-4 text-gray-900">
                    {itemHeading}
                  </h3>
                )}
                
                {itemListItems.length > 0 && (
                  <>
                    {itemIndex === 0 ? (
                      // First item: alternating icons (CheckCircle2, ArrowRight, CheckCircle2, ArrowRight...)
                      <div className="space-y-4">
                        {itemListItems.map((listItem, listIndex) => {
                          const text = listItem?.text || listItem?.attributes?.text || ''
                          const isEven = listIndex % 2 === 0
                          const IconComponent = isEven ? CheckCircle2 : ArrowRight
                          const iconColor = isEven ? 'text-gray-900' : 'text-red-600'
                          
                          return (
                            <div key={listIndex} className="flex items-center gap-4">
                              <IconComponent className={`h-5 w-5 ${iconColor}`} />
                              <span className="text-sm text-gray-900">{text}</span>
                            </div>
                          )
                        })}
                      </div>
                    ) : (
                      // Other items: plain list without icons
                      <ul className="space-y-2 text-gray-900 technical-seo-list" style={{ marginLeft: '-15px' }}>
                        {itemListItems.map((listItem, listIndex) => {
                          const text = listItem?.text || listItem?.attributes?.text || ''
                          return (
                            <li key={listIndex}>{text}</li>
                          )
                        })}
                      </ul>
                    )}
                  </>
                )}
              </div>
            )
          })}
        </Card>
      )}
    </motion.section>
  )
}

