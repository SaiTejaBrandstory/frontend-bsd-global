import React from 'react'
import CommonCard from '../common/CommonCard'


export const Industries = ()=>{
  const boxHeight = "240px";
    const data = [
      {
        title: "Instagram For Ecommerce", 
        desc: "We Use Dynamic Product Carousels, Reels, And Retargeting Funnels To Turn Discovery Into Purchase. One Beauty Brand Doubled Sales In 60 Days Using This Approach.",
        icon: "/images/rounded-icons/r7.png", 
        background:"url('/images/ppc/bg-1.png')",
        height: boxHeight
      },
      {
        title:"Service Brands", 
        desc:"From Salons To SaaS, We Drive Inbound Leads Using DM-Focused Ads, Lead Forms, And Stories With Strong CTA Flows. A Consulting Firm Saw A 40% Increase In Qualified Inquiries.",
        icon:"/images/rounded-icons/r8.png", 
        background:"url('/images/ppc/bg-2.png')",
        height: boxHeight
      },
      {
        title:"Real Estate", 
        desc:"Story Ads And Walk-Through Videos Showcase Listings With Location Targeting. One Real Estate Developer Received 1900+ Verified Leads In 6 Weeks.",
        icon:"/images/rounded-icons/r9.png", 
        background:"url('/images/ppc/bg-3.png')",
        height: boxHeight
      },
      {
        title:"D2C", 
        desc:"We Build Full-Funnel Campaigns Using Product Reels, Testimonials, And Influencer UGC. A Fashion Label Hit 3.5x ROAS By Blending UGC And Lookalike Targeting.",
        icon:"/images/rounded-icons/r3.png", 
        background:"url('/images/ppc/bg-1.png')",
        height: boxHeight
      },
      {
        title:"Education", 
        desc:"We Craft Lead-Gen Campaigns Using Quizzes, Testimonials, And Interactive Lead Forms. An EdTech Client Cut Cost-Per-Lead By 37% Within A Single Quarter.",
        icon:"/images/rounded-icons/r1.png", 
        background:"url('/images/ppc/bg-1.png')",
        height: boxHeight
      },
    ];

    return <CommonCard 
        seoData={data} 
        heding="Industries We Grow on Instagram"
        description="Instagram works across industries, but how you use it depends on who you are speaking to. We personalize every campaign to fit your vertical, your audience, and your growth objectives."
        footer="No matter whether you are B2B or B2C, we adapt your Instagram strategy to fit your category delivering results that speak your industry’s language. Let’s build your next success story."
    />
}