'use client'

import { SectionHeader } from '@/component/seo-report/SectionHeader'
import { Card } from '@/component/seo-report/ui/card'
import { CheckCircle2, ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'

export default function ReportNinthSection({ ninthSection }) {
  if (!ninthSection) {
    return null
  }

  const { number, heading, cards = [] } = ninthSection

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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {cards.map((card, index) => {
            const isRed = card.cardType === 'red'
            const items = Array.isArray(card.items) ? card.items : card.items?.data || []
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className={`p-6 border-2 ${isRed ? 'bg-red-50 border-red-200' : 'bg-gray-50 border-gray-300'}`}>
                  <h3 className={`mb-4 ${isRed ? 'text-red-900' : 'text-black'}`}>
                    {card.heading}
                  </h3>
                  <ul className="space-y-3">
                    {items.map((item, itemIndex) => {
                      const itemText = item?.text || item?.attributes?.text || ''
                      return (
                        <li key={itemIndex} className="flex items-start gap-2">
                          {isRed ? (
                            <ArrowRight className="h-5 w-5 text-red-600 mt-0.5 flex-shrink-0" />
                          ) : (
                            <CheckCircle2 className="h-5 w-5 text-black mt-0.5 flex-shrink-0" />
                          )}
                          <span className="text-sm text-gray-700">{itemText}</span>
                        </li>
                      )
                    })}
                  </ul>
                </Card>
              </motion.div>
            )
          })}
        </div>
      )}
    </motion.section>
  )
}

