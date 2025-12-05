'use client'

import { SectionHeader } from '@/component/seo-report/SectionHeader'
import { Card } from '@/component/seo-report/ui/card'
import { SearchVolumeCharts } from '@/component/seo-report/SearchVolumeCharts'
import { motion } from 'framer-motion'

export default function ReportEighthSection({ eighthSection }) {
  if (!eighthSection) {
    return null
  }

  const { number, heading, cardsHeading, cards = [], tabs = [] } = eighthSection

  // Helper function to determine card styling based on index
  const getCardStyle = (index) => {
    const isRed = index % 2 === 0
    return {
      bgColor: isRed ? 'bg-red-50' : 'bg-gray-50',
      borderColor: isRed ? 'border-red-100' : 'border-gray-200',
      textColor: isRed ? 'text-red-900' : 'text-black'
    }
  }

  // Transform tabs data for SearchVolumeCharts
  const transformedTabs = (tabs || []).map((tab) => {
    // Handle Strapi data structure - graphData might be an array or nested
    const graphDataArray = Array.isArray(tab.graphData) 
      ? tab.graphData 
      : tab.graphData?.data || []
    
    // Generate value from label (lowercase, replace spaces/special chars with hyphens)
    const generateValue = (label) => {
      if (!label) return ''
      return label
        .toLowerCase()
        .trim()
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/^-+|-+$/g, '')
    }
    
    const tabLabel = tab.tabLabel || ''
    const tabValue = generateValue(tabLabel)
    
    return {
      label: tabLabel,
      value: tabValue,
      graphTitle: tab.graphTitle || '',
      graphDescription: tab.graphDescription || '',
      yAxisLabel: tab.yAxisLabel || `Volume (${tab.volumeUnit || 'K'})`,
      volumeUnit: tab.volumeUnit || 'K',
      tooltipSuffix: tab.tooltipSuffix || 'searches/month',
      graphData: graphDataArray.map((point) => ({
        name: point?.xValue || point?.attributes?.xValue || '',
        volume: point?.yValue || point?.attributes?.yValue || 0
      }))
    }
  }).filter(tab => tab.label && tab.value) // Filter out tabs without a label

  return (
    <motion.section 
      className="mb-20"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <SectionHeader number={number} title={heading} />
      
      {/* Pan-India Trends */}
      {cards.length > 0 && (
        <Card className="p-6 mb-8 border-2 border-gray-200">
          <h3 className="mb-4 text-gray-900">{cardsHeading}</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {cards.map((card, index) => {
              const style = getCardStyle(index)
              return (
                <div 
                  key={index} 
                  className={`p-4 ${style.bgColor} rounded-lg border ${style.borderColor} h-full flex flex-col`}
                >
                  <p className="text-sm text-gray-600 mb-1">{card.title}</p>
                  <p className={`${style.textColor} mb-1 text-lg font-semibold`}>{card.highlightedText}</p>
                  <p className="text-xs text-gray-600 flex-1">{card.description}</p>
                </div>
              )
            })}
          </div>
        </Card>
      )}
      
      {/* City-Specific Charts */}
      {tabs.length > 0 && <SearchVolumeCharts tabs={transformedTabs} />}
    </motion.section>
  )
}

