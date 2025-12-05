import React from 'react'
import CommonCard from '../common/CommonCard'

export const LeadingCompanies = () => {
  const seoData = [
    {
      title: "Strategy That Works From Start To Finish",
      desc: "We Carefully Plan Every Step Of Your Marketing Campaigns, From The First Message To The Last Follow-Up, Everything Is Designed to Reach The Right People At The Right Time. This Ensures Your Leads Stay Engaged And Move Smoothly Through Your Sales Funnel.",
      icon: "/images/MarketingAutomation/lc-1.png",
      background: "url('/images/MarketingAutomation/lc-bg-1.png')", 
      height: '350px',
    },
    {
      title: "Deep Knowledge Of Major Platforms",
      desc: "We Know How To Use Tools Like HubSpot, Marketo, And Klaviyo The Right Way For Your Business. This Means Your Emails, Messages, And Campaigns Run Efficiently And Give The Best Possible Results.",
      icon: "/images/MarketingAutomation/lc-2.png",
      background: "url('/images/MarketingAutomation/lc-bg-2.png')", 
      height: '350px'
    },
    {
      title: "Creative Campaigns That Drive Results",
      desc: "We Create Emails, Sequences, And Messages That Grab Attention, Show Value, And Encourage Action. Every Message Is Designed To Teach, Guide, Or Remind Leads, Helping Them Become Loyal Customers.",
      icon: "/images/MarketingAutomation/lc-3.png",
      background: "url('/images/MarketingAutomation/lc-bg-3.png')", 
      height: '350px'
    },
    {
      title: "Continuous Improvement For Better ROI",
      desc: "We Track Every Result, See What Works, And Make Your Campaigns Better Over Time. This Means More Leads Convert Into Sales, Your Ad Spend Works Harder, And Your Marketing Keeps Improving Every Day.",
      icon: "/images/MarketingAutomation/lc-4.png",
      background: "url('/images/MarketingAutomation/lc-bg-1.png')", 
      height: '350px'
    },
  ];

  return (
    <CommonCard seoData={seoData} heding="Why Leading Companies Turn to BrandStory for Automation" description="Businesses Work With Us Because We Are Marketing Automation Experts" footer="We make sure your content fits your audience and works for the platforms they use the most." />
  );
};