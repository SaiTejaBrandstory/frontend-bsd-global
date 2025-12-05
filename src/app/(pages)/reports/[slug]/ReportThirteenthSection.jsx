'use client'

import { SectionHeader } from '@/component/seo-report/SectionHeader'
import { Card } from '@/component/seo-report/ui/card'
import { Separator } from '@/component/seo-report/ui/separator'
import { motion } from 'framer-motion'

export default function ReportThirteenthSection({ thirteenthSection }) {
  if (!thirteenthSection) {
    return null
  }

  const { number, heading, cards = [] } = thirteenthSection

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
            const cardColor = card.cardColor === 'red' 
              ? 'bg-gradient-to-br from-red-50 to-white border-red-200' 
              : 'bg-gradient-to-br from-gray-50 to-white border-gray-200'
            
            const exampleQueries = Array.isArray(card.exampleQueries) 
              ? card.exampleQueries 
              : card.exampleQueries?.data || []
            
            const listItems = Array.isArray(card.listItems) 
              ? card.listItems 
              : card.listItems?.data || []
            
            const hasExampleQueries = exampleQueries.length > 0
            const hasListItems = listItems.length > 0
            const showSeparator = hasExampleQueries && (card.subHeading || hasListItems)
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="h-full"
              >
                <Card className={`p-6 border-2 ${cardColor} h-full flex flex-col`}>
                  <div className="flex-1 flex flex-col">
                    <h3 className="mb-4 text-gray-900">{card.heading || ''}</h3>
                    
                    {card.description && (
                      <p className="text-sm text-gray-700 mb-4">
                        {card.description}
                      </p>
                    )}
                    
                    {hasExampleQueries && (
                      <div className="space-y-3 mb-4">
                        {exampleQueries.map((query, queryIndex) => {
                          const label = query?.label || query?.attributes?.label || 'Example Query'
                          const queryText = query?.query || query?.attributes?.query || ''
                          return (
                            <div key={queryIndex} className="p-3 bg-white rounded border border-red-200">
                              <p className="text-xs text-gray-600 mb-1">{label}</p>
                              <p className="text-sm text-gray-900">{queryText}</p>
                            </div>
                          )
                        })}
                      </div>
                    )}
                    
                    {showSeparator && (
                      <Separator className="my-4 bg-gray-300" />
                    )}
                    
                    {card.subHeading && (
                      <h4 className="mb-2 text-gray-900">{card.subHeading}</h4>
                    )}
                    
                    {hasListItems && (
                      <ul className="space-y-2 text-gray-900 aeo-geo-list">
                        {listItems.map((item, itemIndex) => {
                          const text = item?.text || item?.attributes?.text || ''
                          return (
                            <li key={itemIndex}>{text}</li>
                          )
                        })}
                      </ul>
                    )}
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

