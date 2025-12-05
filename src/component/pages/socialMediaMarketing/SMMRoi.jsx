import React from 'react'
import CommonCard from '../common/CommonCard'

export const SMMRoi = () => {
  const seoData = [ 
  {
    title: "E-Commerce",
    desc: "Instagram And Pinterest Posts With Product Visuals, Short TikTok Videos Showing Products",
    icon: "/images/SMM/ecom.webp",
    background:"url('/images/SMM/ecom-bg.webp')",
  },
  {
    title:"Hospitality",
    desc:"Facebook And Instagram Stories Showcasing Experiences, Influencer Mentions",
    icon:"/images/SMM/hospitality.webp",
    background:"url('/images/SMM/hospitality-bg.webp')",
  },
  {
    title:"B2B Services",
    desc:"LinkedIn Articles, Case Study Posts, Webinars Shared On Social Platforms",
    icon:"/images/SMM/b2b.png",
    background:"url('/images/SMM/b2b-bg.png')",
  },
  {
    title:"Healthcare",
    desc:"Informative Posts On Facebook, Instagram Reels With Tips, LinkedIn Updates For Professionals",
    icon:"/images/SMM/health.png",
    background:"url('/images/SMM/health-bg.png')",
  },
  {
    title:"Real Estate",
    desc:"YouTube Property Walkthrough Videos, Instagram Carousel Posts, Client Testimonials",
    icon:"/images/SMM/real.png",
    background:"url('/images/SMM/real-bg.png')",
  }
  
  

];
  return (
  <CommonCard seoData={seoData} heding="Social Media Strategies That Fit Your Industry" description="Different industries need different approaches. Our industry-specific social media strategies are made for your type of business." footer="We make sure your content fits your audience and works for the platforms they use the most."/>
  )
}