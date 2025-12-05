import React from 'react'
import CommonCard from '../common/CommonCard'


export const Process = ()=>{
  const boxHeight = "270px";
    const data = [
      {
        
        title: "Audit & Research",
        desc: "We start with a complete review of your past campaigns, competitors, and audience behavior. We help us identify gaps, opportunities, and define clear goals.",
        icon: "/images/round-index/1.png", 
        background: "url('/images/ppc/bg-1.png')", 
        height: boxHeight
      },
      {
        
        title: "Campaign Strategy & Planning",
        desc: "Next, we shape the funnel—awareness to conversion. We choose ad formats, define audience segments, and plan the budget. This is the backbone of your campaign workflow.",
        icon: "/images/round-index/2.png", 
        background: "url('/images/ppc/bg-2.png')", 
        height: boxHeight
      },
      {
        
        title: "Creative Development",
        desc: "We design visuals, write compelling ad copy, and test variations. Each creative is matched to the stage of the funnel for better engagement and flow.",
        icon: "/images/round-index/3.png", 
        background: "url('/images/ppc/bg-3.png')", 
        height: boxHeight
      },
      {
        
        title: "Launch & Monitor",
        desc: "We launch your ads with tight control on targeting and spend. Daily checks help us catch issues early and spot what’s performing.",
        icon: "/images/round-index/4.png", 
        background: "url('/images/ppc/bg-1.png')", 
        height: boxHeight
      },
      {
        
        title: "Optimize & Improve",
        desc: "Using live data and Facebook Pixel insights, we refine targeting, creatives, and placements. These optimization steps are what keep your ROAS growing over time.",
        icon: "/images/round-index/5.png", 
        background: "url('/images/ppc/bg-1.png')", 
        height: boxHeight
      },
      {
        
        title: "Measure & Report",
        desc: "Every week, we send a clear report—showing results, learnings, and next steps. You will always know where your money is going and what it’s bringing back.",
        icon: "/images/round-index/6.png", 
        background: "url('/images/ppc/bg-1.png')", 
        height: boxHeight
      },
    ];

    return <CommonCard
        seoData={data}
        heding="Our Proven Facebook Ad Process"
        description="Great results don’t happen by accident. They come from a clear plan, precise execution, and ongoing improvement. Our Facebook ads process is built to guide your campaign from idea to impact, step by step."
        footer="From setup to scaling, it’s all managed in sync."
    />
}