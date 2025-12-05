import React from 'react'
import CommonCard from '../common/CommonCard'

export const OptimizedTools = () => {
  const seoData = [
    {
      title: "LinkedIn Sales Navigator",
      desc: "For Precision Targeting And Account Insights",
      icon: "/images/ORMS/ts-1.png", 
      background: "url('/images/MarketingAutomation/lc-bg-1.png')", 
      height: '190px',
    },
    {
      title: "HubSpot & Pardot",
      desc: "For Lead Management And Automation",
      icon: "/images/ORMS/ts-2.png", 
      background: "url('/images/MarketingAutomation/lc-bg-2.png')", 
      height: '190px'
    },
    {
      title: "Zoominfo & Marketo",
      desc: "For Account-Based Marketing And Outreach",
      icon: "/images/ORMS/ts-3.png", 
      background: "url('/images/MarketingAutomation/lc-bg-3.png')", 
      height: '190px'
    },
    {
      title: "SEMrush & Google Analytics",
      desc: "For Performance Measurement And SEO Insights",
      icon: "/images/ORMS/ts-4.png", 
      background: "url('/images/MarketingAutomation/lc-bg-1.png')", 
      height: '190px'
    }
  ];

  return (
    <CommonCard 
      seoData={seoData} 
      heding="Optimized Tools & Platforms for B2B Marketing" 
      description="Our campaigns leverage the best B2B marketing tools to research, execute, and track results effectively:" 
      footer="Using the right tools ensures every campaign is data-backed, measurable, and optimized for maximum performance." 
    />
  );
};
