'use client'

import { SectionHeader } from '@/component/seo-report/SectionHeader'
import { Card } from '@/component/seo-report/ui/card'
import { Progress } from '@/component/seo-report/ui/progress'

export default function ReportSixthSection({ sixthSection }) {
  if (!sixthSection) return null

  const number = sixthSection.number
  const heading = sixthSection.heading
  const cards = sixthSection.cards || []
  const subHeading = sixthSection.subHeading
  const keywordIntent = sixthSection.keywordIntent || []

  // Map styling based on index (red, gray, red pattern)
  const getCardStyles = (index) => {
    const isRed = index % 3 === 0 || index % 3 === 2
    return {
      bgColor: isRed ? 'bg-gradient-to-br from-red-50 to-white' : 'bg-gradient-to-br from-gray-50 to-white',
      borderColor: isRed ? 'border-red-200' : 'border-gray-200',
      textColor: isRed ? 'text-red-900' : 'text-black'
    }
  }

  return (
    <section className="mb-20">
      {heading && <SectionHeader number={number} title={heading} />}
      {cards.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {cards.map((card, index) => {
            const styles = getCardStyles(index)
            return (
              <Card key={index} className={`p-8 text-center ${styles.bgColor} border-2 ${styles.borderColor} h-full flex flex-col`}>
                <div className="flex-1 flex flex-col justify-center">
                  <p className={`${styles.textColor} mb-2 text-2xl font-semibold`}>{card.number || ''}</p>
                  <p className="text-sm text-gray-600">{card.description || ''}</p>
                </div>
              </Card>
            )
          })}
        </div>
      )}
      
      {subHeading && keywordIntent.length > 0 && (
        <Card className="p-6 border-2 border-gray-200">
          <h3 className="mb-4 text-gray-900">{subHeading}</h3>
          <div className="space-y-4">
            {keywordIntent.map((item, index) => (
              <div key={index}>
                <div className="flex justify-between mb-2">
                  <span className="text-sm text-gray-900">{item.title || ''}</span>
                  <span className="text-sm text-gray-900">{item.percentage || 0}%</span>
                </div>
                <Progress value={item.percentage || 0} className="h-2" />
              </div>
            ))}
          </div>
        </Card>
      )}
    </section>
  )
}
