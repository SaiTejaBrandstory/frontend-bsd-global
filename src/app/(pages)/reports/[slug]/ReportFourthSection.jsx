'use client'

import { motion } from 'framer-motion'
import * as LucideIcons from 'lucide-react'
import { SectionHeader } from '@/component/seo-report/SectionHeader'
import { OpportunityCard } from '@/component/seo-report/OpportunityCard'

export default function ReportFourthSection({ fourthSection }) {
  if (!fourthSection) return null

  const number = fourthSection.number
  const heading = fourthSection.heading
  const cards = fourthSection.cards || []

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

  // Map color based on index (blue, green, purple pattern)
  const getColor = (index) => {
    const colors = ['blue', 'green', 'purple']
    return colors[index % colors.length]
  }

  return (
    <section className="mb-20">
      {heading && <SectionHeader number={number} title={heading} />}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {cards.map((card, index) => {
          const Icon = getIcon(card.icon)
          const color = getColor(index)

          return (
            <div key={index} className="h-full">
              <OpportunityCard
                icon={Icon}
                title={card.title || ''}
                subtitle={card.subtitle || ''}
                description={card.description || ''}
                color={color}
              />
            </div>
          )
        })}
      </div>
    </section>
  )
}

