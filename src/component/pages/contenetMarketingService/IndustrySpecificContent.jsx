import React from 'react'
import CommonCard from '../common/CommonCard'

export const IndustrySpecificContent = () => {
  const seoData = [
    {
      title: "B2B",
      desc: "Businesses Invest In Solutions. Long-Form Guides, Case Studies, And Whitepapers Give Them The Confidence They Need To Understand Their Challenges And Can Deliver Real Results.",
      icon: "/images/contentMarketingService/im-1.png",
      background: "url('/images/MarketingAutomation/lc-bg-1.png')", 
      height: '250px',
    },
    {
      title: "E-Commerce",
      desc: "Online Shoppers Move Fast. To Catch Their Eye, We Create Product Videos, Quick Posts, And Social Content That Spark Interest And Push Them To Hit 'Buy Now.'",
      icon: "/images/contentMarketingService/im-2.png",
      background: "url('/images/MarketingAutomation/lc-bg-2.png')", 
      height: '250px'
    },
    {
      title: "SaaS",
      desc: "Software Can Feel Complicated. Clear Tutorials, Simple How-Tos, And Demo Content Help People See Value Quickly And Actually Use What They Signed Up For.",
      icon: "/images/contentMarketingService/im-3.png",
      background: "url('/images/MarketingAutomation/lc-bg-3.png')", 
      height: '250px'
    },
    {
      title: "Healthcare",
      desc: "Trust Matters Most. Educational Resources And Approachable Content Help Patients And Professionals Alike Make Informed Decisions And Feel Confident In Your Expertise.",
      icon: "/images/contentMarketingService/im-4.png",
      background: "url('/images/MarketingAutomation/lc-bg-1.png')", 
      height: '250px'
    },
    {
      title: "Real Estate",
      desc: "Buying A Home Is Personal. Visual Storytelling, Local Market Insights, And Neighborhood Guides Help People Picture Their Life In A New Space Before They Even Step Through The Door.",
      icon: "/images/contentMarketingService/im-5.png",
      background: "url('/images/MarketingAutomation/lc-bg-2.png')", 
      height: '250px'
    },
  ];

  return (
    <CommonCard 
      seoData={seoData} 
      heding="Industry-Specific Content Marketing" 
      description="The Way You Talk To A B2B Decision-Maker Isn't The Same As How You Convince Someone To Buy A Pair Of Shoes Online. That's Why Your Content Has To Be Tailored To Your Audience And Their World." 
      footer="We Create The Right Content For Your Industry. Every Article, Video, Or Campaign Is Designed To Feel Familiar To Your Audience, Answer Their Questions, And Move Them Closer To Choosing You." 
    />
  );
};
