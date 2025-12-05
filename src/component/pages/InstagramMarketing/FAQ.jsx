import FAQs from '@/component/pages/common/CommonFAQ'


export const FAQ = () => {
  const data = [
    {
      title: "How Soon Will I See Results From Instagram Campaigns?", 
      description: "Results vary depending on your goals and ad spend. **Awareness campaigns** can generate impressions and reach within days, while **conversion-focused campaigns** typically show measurable ROI within 2–4 weeks as we optimize targeting, creative, and bidding strategies based on performance data."
    },
    {
      title: "Do You Offer Both Organic And Paid Instagram Strategies?",  
      description: "Yes. We offer **both organic growth strategies** (content calendars, Reels, engagement tactics) and **paid advertising** (Instagram Ads, Story Ads, Reels Ads). For the best results, we recommend a **blended approach** that combines consistent organic content with targeted paid campaigns to maximize reach and conversions."
    },
    {
      title: "How Do You Measure Success For Instagram Marketing?", 
      description: "We track **key performance indicators (KPIs)** tailored to your objectives, including reach, engagement rate, follower growth, click-through rate (CTR), cost per click (CPC), cost per lead (CPL), and **return on ad spend (ROAS)**. You'll receive detailed monthly reports with insights and recommendations for continuous improvement."
    },
    {
      title: "Can You Help With Influencer Partnerships And User-Generated Content?", 
      description: "Absolutely. We help identify and **connect you with relevant influencers** in your niche, negotiate partnerships, and create **UGC (User-Generated Content) campaigns** that build trust and authenticity. UGC performs exceptionally well in ads and helps lower content production costs while increasing engagement."
    },
    {
      title: "What Industries Do You Specialize In For Instagram Marketing?", 
      description: "We work across multiple industries including **ecommerce, D2C brands, service businesses, real estate, education, healthcare, and hospitality**. Each industry requires a unique approach, and we customize our strategies based on your target audience, platform behavior, and business goals."
    },
    {
      title: "How Do You Ensure Content Fits My Brand Style And Messaging?", 
      description: "Before we start, we conduct a **brand discovery session** to understand your tone, visual identity, and messaging guidelines. All content goes through a **review and approval process** where you can request revisions. We also maintain a content calendar so you're always aware of what's being posted and when."
    }
  ];


  return (
    <FAQs data={data}/>
  )
}
