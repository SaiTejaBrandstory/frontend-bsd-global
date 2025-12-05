import React from 'react'
import CommonStatsSection from '../common/CommonStats'

const SeoStats = () => {
  return (
      <CommonStatsSection
      title="The Advantage of Our Complete OmniSEO <br>Approach"
      subtitle="Why Traditional SEO Is No Longer Enough"
      description={[
        "Search Has Expanded Beyond Google. People Now Use Bing, AI-Driven Engines, And In-App Searches. OmniSEO Keeps Your Brand Present Across All Of Them.",
        "A Wider Reach Protects Your Online Presence From Algorithm Changes And Opens More Paths For Customers To Find You. This Approach Builds Long-Term Stability And A Broader Flow Of Potential Leads.",
      ]}
      stats={[
        { value: "1M+", label: "keywords tracked and ranked" },
        { value: "500M+", label: "organic visits delivered" },
        { value: "$1.5B+", label: "client revenue generated" },
      ]}
    />
  )
}

export default SeoStats