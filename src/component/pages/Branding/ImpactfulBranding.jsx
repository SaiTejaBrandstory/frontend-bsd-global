import React from 'react'
import CommonCard from '../common/CommonCard'

export const ImpactfulBranding = () => {
  // Update seoData to reflect the 5 points from the screenshot
  const seoData = [
    {
      title: "Strategy-First Approach",
      desc: "We Start By Thorough Research Of Your Brand Business Goal. Every Step, Right From Messaging To Design, Is Built For Your Brand's Growth And Long-Term Success.",
      // Placeholder icons/backgrounds are used since the original path names are generic
      icon: "/images/Branding/ib-1.png", 
      background: "url('/images/MarketingAutomation/lc-bg-1.png')", 
      height: '240px',
    },
    {
      title: "Creative Excellence",
      desc: "We Create Campaigns And Designs In Such A Way That It Is Unique, Stays In People's Mind, Makes Them Notice And Remember Your Brand.",
      icon: "/images/Branding/ib-2.png", 
      background: "url('/images/MarketingAutomation/lc-bg-2.png')", 
      height: '240px'
    },
    {
      title: "Data-Backed Decisions",
      desc: "Each And Every Step We Take Involves In-Depth Research And Gaining Market Insights Beforehand. This Ensures Your Brand Speaks To The Right Audience, At The Right Time, In The Right Way.",
      icon: "/images/Branding/ib-3.png", 
      background: "url('/images/MarketingAutomation/lc-bg-3.png')", 
      height: '240px'
    },
    {
      title: "Local And Global Experience",
      desc: "Either It Is Targeting Local Markets Or Expanding The Brand Globally, We Are Well Versed In Making Your Brand Feel Relevant, Known And Trusted Globally.",
      icon: "/images/Branding/ib-4.png", 
      background: "url('/images/MarketingAutomation/lc-bg-1.png')", 
      height: '240px'
    },
    {
        title: "Smooth Collaboration",
        desc: "Teaming Up With Us Is Very Simple. We Keep You Involved, Updated And Stay Right On Track With Your Vision.",
        icon: "/images/Branding/ib-5.png", // Added a new placeholder icon for the 5th item
        background: "url('/images/MarketingAutomation/lc-bg-2.png')", // Reusing a background
        height: '240px'
    }
  ];

  return (
    <CommonCard 
      seoData={seoData}
      heding="BrandStory: The Choice for Brands Seeking Impactful Branding" 
      description="Brands Choose BrandStory Because We Mix Creativity, Strategy, And Insight In A Way That Truly Helps Your Business Grow. Every Decision We Make Is Purposeful, And Every Creative Idea Has A Reason Behind It." 
      footer="With BrandStory, Your Brand Connects With People, Builds Trust, And Grows Stronger Over Time." 
    />
  );
};