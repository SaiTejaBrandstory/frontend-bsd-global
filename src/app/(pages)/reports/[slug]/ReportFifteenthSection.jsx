'use client'

import { SectionHeader } from '@/component/seo-report/SectionHeader'
import { Card } from '@/component/seo-report/ui/card'
import { motion } from 'framer-motion'

export default function ReportFifteenthSection({ fifteenthSection }) {
  if (!fifteenthSection) {
    return null
  }

  const { number, heading, cards = [] } = fifteenthSection

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
                  {card.heading && (
                    <h3 className="mb-4 text-gray-900 appendix-heading">{card.heading}</h3>
                  )}
                  
                  {listItems.length > 0 && (
                    <ul className="space-y-2 text-gray-900 appendix-list flex-1">
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

