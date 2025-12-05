'use client'

import * as LucideIcons from 'lucide-react'
import { SectionHeader } from '@/component/seo-report/SectionHeader'
import { StatsCard } from '@/component/seo-report/StatsCard'

export default function ReportFifthSection({ fifthSection }) {
  if (!fifthSection) return null

  const number = fifthSection.number
  const heading = fifthSection.heading
  const cards = fifthSection.cards || []

  // Helper function to get icon component from string name
  const getIcon = (iconName) => {
    if (!iconName) return LucideIcons.TrendingUp // Default icon
    // Try exact match first
    const IconComponent = LucideIcons[iconName]
    if (IconComponent) return IconComponent
    // Try capitalizing first letter
    const Capitalized = LucideIcons[iconName.charAt(0).toUpperCase() + iconName.slice(1)]
    return Capitalized || LucideIcons.TrendingUp // Fallback to TrendingUp
  }

  // Map variant based on index (primary, success, warning, default pattern)
  const getVariant = (index) => {
    const variants = ['primary', 'success', 'warning', 'default']
    return variants[index % variants.length]
  }

  return (
    <section className="mb-20">
      {heading && <SectionHeader number={number} title={heading} />}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {cards.map((card, index) => {
          const Icon = getIcon(card.icon)
          const variant = getVariant(index)

          return (
            <div key={index} className="h-full">
              <StatsCard
                icon={Icon}
                value={card.highlightedText || ''}
                label={card.title || ''}
                description={card.description || ''}
                variant={variant}
              />
            </div>
          )
        })}
      </div>
    </section>
  )
}
