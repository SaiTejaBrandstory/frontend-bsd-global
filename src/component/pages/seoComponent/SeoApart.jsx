import React from 'react'
import CommonCard from '../common/CommonCard'

const SEOApart = () => {
  const seoData = [ 
  {
    title: "Full SEO Team On Every Project",
    desc: "Strategists, Content Writers, Technical SEO Specialists, And Analytics Experts Work Together To Cover: Every Part Of Your Campaign.",
    icon: "/images/seo/full-seo-icon.png",
    background:"url('/images/seo/full-seo-bg.webp')",
  },
  {
    title:"Clear, transparent reporting",
    desc:"Easy-to-read reports showing the progress that matters: qualified traffic, stronger rankings, and higher conversions.",
    icon:"/images/seo/clear-transparent-reporting-icon.png",
    background:"url('/images/seo/clear-transparent-reporting-bg.webp')",
  },
  {
    title:"Industry-focused campaigns",
    desc:"Every strategy is built after studying your market, your competitors, and your audience for maximum relevance.",
    icon:"/images/seo/industry-focused-campaigns-icon.png",
    background:"url('/images/seo/industry-focused-campaigns-bg.webp')",
  },
  {
    title:"Integrated marketing approach",
    desc:"SEO connects seamlessly with paid ads, email marketing, and social media to create a consistent growth plan.",
    icon:"/images/seo/integrated-marketing-approach-icon.png",
    background:"url('/images/seo/full-seo-bg.webp')",
  },
  {
    title:"100% Google-compliant methods",
    desc:"Safe, proven white label SEO services that protect your site and deliver long-term results without risk.",
    icon:"/images/seo/100-google-compliant-methods-icon.png",
    background:"url('/images/seo/clear-transparent-reporting-bg.webp')",
  }
  
  

];
  return (
  <CommonCard seoData={seoData} heding="What Sets Our SEO Apart in a Crowded Market"/>
  )
}

export default SEOApart