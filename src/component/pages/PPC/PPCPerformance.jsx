import React from 'react'
import CommonCard from '../common/CommonCard'

export const PPCPerformance = ()=>{
  const boxHeight = "232px"; 
    const seoData = [   
      {
        title: "Proven Experienced Certified PPC Specialists",
        desc: "Our Staff Has Effectively Handled Campaigns In A Variety Of Sectors.",
        icon: "/images/ppc/p-ico-1.png",
        background:"url('/images/ppc/p-bg-1.png')",
        height: boxHeight
      },
      {
        title:"Personalized Plans Based On Your Objectives",
        desc:"Every Campaign Is Tailored To Fit Your Target Audience And Company Goals.",
        icon:"/images/ppc/p-ico-2.png",
        background:"url('/images/ppc/p-bg-2.png')",
        height: boxHeight
      },
      {
        title:"Transparent, Actionable Reporting",
        desc:"Clear Data And Insights Are Provided, Which Lets You Know Just How Well Your Efforts Are Doing.",
        icon:"/images/ppc/p-ico-3.png",
        background:"url('/images/ppc/p-bg-3.png')",
        height: boxHeight
      },
      {
        title:"Performance-First Methodology ROI-Focused",
        desc:"We Drive Conversions, Leads, And Income A Higher Priority Than Merely Clicks Or Impressions.",
        icon:"/images/ppc/p-ico-4.png",
        background:"url('/images/ppc/p-bg-1.png')",
        height: boxHeight
      },
      {
        title:"Multi-Industry Knowledge",
        desc:"We Know What Works In Every Industry, From E-Commerce To B2B And SaaS.",
        icon:"/images/ppc/p-ico-5.png",
        background:"url('/images/ppc/p-bg-2.png')",
        height: boxHeight
      }
    ];

    return <CommonCard seoData={seoData} heding="BrandStory: The Choice Brands Make for PPC Performance"/>
}