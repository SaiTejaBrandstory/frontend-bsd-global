import React from 'react'
import CommonCard from '../common/CommonCard'

export const ORMTechStack = () => {
  const seoData = [
    {
      title: "Brandwatch",
      desc: "Real-Time Brand Sentiment Analysis Is Possible",
      icon: "/images/ORMS/ts-1.png", // You will need to use the correct icon for Brandwatch
      background: "url('/images/MarketingAutomation/lc-bg-1.png')", // You may need to adjust the background image to match the provided one
      height: '190px',
    },
    {
      title: "Meltwater",
      desc: "Keep An Eye On Social Media Conversations And Media Mentions",
      icon: "/images/ORMS/ts-2.png", // You will need to use the correct icon for Meltwater
      background: "url('/images/MarketingAutomation/lc-bg-2.png')", // You may need to adjust the background image to match the provided one
      height: '190px'
    },
    {
      title: "Mention",
      desc: "Quickly Listen In On Online Discussions About Your Brand",
      icon: "/images/ORMS/ts-3.png", // You will need to use the correct icon for Mention
      background: "url('/images/MarketingAutomation/lc-bg-3.png')", // You may need to adjust the background image to match the provided one
      height: '190px'
    },
    {
      title: "Google Alerts",
      desc: "Receive Notifications Whenever Someone Mentions Your Brand Online",
      icon: "/images/ORMS/ts-4.png", // You will need to use the correct icon for Google Alerts
      background: "url('/images/MarketingAutomation/lc-bg-1.png')", // You may need to adjust the background image to match the provided one
      height: '190px'
    },
    {
      title: "Ahrefs & SEMrush",
      desc: "Monitor Website Mentions, Backlinks, And Search Results",
      icon: "/images/ORMS/ts-5.png", // You will need to use the correct icon for Ahrefs & SEMrush
      background: "url('/images/MarketingAutomation/lc-bg-2.png')", // You may need to adjust the background image to match the provided one
      height: '190px'
    },
  ];

  return (
    <CommonCard 
      seoData={seoData} 
      heding="Our ORM Tools & Technology Stack" 
      description="We rely on the best ORM tools to track, measure, and manage online presence:" 
      footer="These tools allow fast detection of risks, accurate sentiment tracking, and effective campaign measurement." 
    />
  );
};
