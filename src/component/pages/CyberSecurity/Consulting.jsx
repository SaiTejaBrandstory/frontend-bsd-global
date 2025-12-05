import React from 'react'
import CommonCard from '../common/CommonCard'

export const Consulting = ()=>{
  const boxHeight = "230px";
    const seoData = [
      {
        title: "Build a long-term cybersecurity roadmap",
        desc: "One that grows with your business, step by step",
        icon: "/images/round-index/1.png", 
        background:"url('/images/ppc/bg-1.png')",
        height: boxHeight
      },
      {
        title:"Spot and fix current weaknesses",
        desc:"So you’re not exposed without even knowing it",
        icon:"/images/round-index/2.png", 
        background:"url('/images/ppc/bg-2.png')",
        height: boxHeight
      },
      {
        title:"Make sure you meet important regulations",
        desc:"Like ISO, SOC2, HIPAA, and others depending on your industry",
        icon:"/images/round-index/3.png", 
        background:"url('/images/ppc/bg-3.png')",
        height: boxHeight
      },
      {
        title:"Set up better processes for your team",
        desc:"So security becomes a daily habit, not just an IT issue",
        icon:"/images/round-index/4.png", 
        background:"url('/images/ppc/bg-1.png')",
        height: boxHeight
      }
    ];

    
    return <CommonCard 
        seoData={seoData} 
        heding="Cybersecurity Consulting That Makes Security Easy to Understand and Act On"
        description="Our cybersecurity consulting services are built to give you answers. Not just reports, but real, useful insights. We sit with you, understand your business, and show you how to protect it.<br/><br/>Here’s how we help:"
        footer="With our cybersecurity consultancy services, you get a true partner. Someone who’s in it with you, every step of the way.<br/><br/>With our cybersecurity consultancy services, you are not alone. We become your partner in defense."
    />
}