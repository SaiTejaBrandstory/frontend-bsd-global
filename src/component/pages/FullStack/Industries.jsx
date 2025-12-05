import React from 'react'
import CommonCard from '../common/CommonCard'

export const Industries = ()=>{
  const boxHeight = "260px";
    const seoData = [
      {
        title: "Fintech Solutions",
        desc: "Secure, Scalable Apps That Blend Innovation With Regulatory Compliance – Enabling Faster Transactions, Seamless KYC, And Real-Time Analytics.",
        icon: "/images/FullStack/i-1.png", 
        background:"url('/images/ppc/bg-1.png')",
        height: boxHeight
      },
      {
        title:"ECommerce Platforms",
        desc:"High-Conversion Storefronts With Robust Backends – Optimized For Peak Performance, Dynamic Inventory, And Integrated Payment Systems.",
        icon:"/images/FullStack/i-2.png", 
        background:"url('/images/ppc/bg-2.png')",
        height: boxHeight
      },
      {
        title:"EdTech Dashboards",
        desc:"Smart, Adaptive Learning Environments Built To Track, Personalize, And Scale – Enhancing Both Student Outcomes And Admin Efficiency.",
        icon:"/images/FullStack/i-3.png", 
        background:"url('/images/ppc/bg-3.png')",
        height: boxHeight
      },
      {
        title:"Healthcare Tools",
        desc:"HIPAA-Aligned Platforms Engineered With Airlight Data Security, Patient-First UX, And System Interoperability At The Core.",
        icon:"/images/FullStack/i-4.png", 
        background:"url('/images/ppc/bg-1.png')",
        height: boxHeight
      },
      {
        title:"Logistics & Supply Chain Systems",
        desc:"AI/ML-Driven Automation For Tracking, Fulfillment, And Operations – Cutting Manual Overhead And Streamlining Real-Time Decision-Making.",
        icon:"/images/FullStack/i-5.png", 
        background:"url('/images/ppc/bg-2.png')",
        height: boxHeight
      },
      {
        title:"SaaS Products",
        desc:"Modular, API-First Platforms That Grow With Your Users – Supporting Continuous Feature Rollouts, Multi-Tenancy, And Third-Party Integrations.",
        icon:"/images/FullStack/i-6.png", 
        background:"url('/images/ppc/bg-3.png')",
        height: boxHeight
      }
    ];

    return <CommonCard 
        seoData={seoData} 
        
        heding="Across Industries, Across<br />Challenges – We Deliver" 
        
        description="Our Work Cuts Across Categories – And Consistently Delivers Results." 
        
        footer="A Consulting Brand Recently Saw A 65% Jump In Lead Quality After We Revamped Their Entire Product Stack To Improve Speed And Flow."
    />
}