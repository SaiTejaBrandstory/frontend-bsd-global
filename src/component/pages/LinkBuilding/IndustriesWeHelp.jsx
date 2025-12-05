import React from 'react'
import CommonCard from '../common/CommonCard'

export const IndustriesWeHelp = ()=>{
  const boxHeight = "220px";
    const seoData = [
      {
        title: "ECommerce", 
        desc: "Products-focused content, influencer mentions, and guest posts help your store earn backlinks that boost rankings and drive sales.",
        icon: "/images/rounded-icons/r4.png", 
        background:"url('/images/ppc/bg-1.png')",
        height: boxHeight
      },
      {
        title:"SaaS", 
        desc:"We build authority for software brands with thought leadership articles, guest posts, and niche placements that bring in both links and qualified leads.",
        icon:"/images/rounded-icons/r6.png", 
        background:"url('/images/ppc/bg-2.png')",
        height: boxHeight
      },
      {
        title:"B2B Services", 
        desc:"Case studies, industry guides, and professional outreach campaigns earn trusted links that position your business as an expert in its field.",
        icon:"/images/rounded-icons/r5.png", 
        background:"url('/images/ppc/bg-3.png')",
        height: boxHeight
      },
      {
        title:"Healthcare", 
        desc:"We create informative content and build links on reputable healthcare and wellness platforms, improving visibility while maintaining trust and compliance.",
        icon:"/images/rounded-icons/r3.png", 
        background:"url('/images/ppc/bg-1.png')",
        height: boxHeight
      },
      {
        title:"Real Estate", 
        desc:"Local listings, niche directories, and partnerships with trusted blogs help real estate companies rank higher and attract serious buyers.",
        icon:"/images/rounded-icons/r1.png", 
        background:"url('/images/ppc/bg-1.png')",
        height: boxHeight
      },
      {
        title:"Hospitality", 
        desc:"Travel blog, review site, and influencer mentions bring valuable backlinks that increase visibility for hotels, resorts, and travel services.",
        icon:"/images/rounded-icons/r2.png", 
        background:"url('/images/ppc/bg-1.png')",
        height: boxHeight
      },
    ];

    return <CommonCard 
        seoData={seoData} 
        heding="Industries We Help Grow with Link Building"
        description="Our Link Building Services Work Across Many Industries. We Tailor Strategies To Match Your Audience, Platforms, And Growth Goals."
    />
}