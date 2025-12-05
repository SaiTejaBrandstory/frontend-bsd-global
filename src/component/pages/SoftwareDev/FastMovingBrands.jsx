import React from 'react'
import CommonCard from '../common/CommonCard'

export const FastMovingBrands = ()=>{
  const boxHeight = "230px";
    const seoData = [
      {
        title: "Healthcare",
        desc: "HIPAA-Compliant Patient Portals And Secure Telehealth Systems Designed With A Strong Focus On Data Security And Custom Software Engineering.",
        icon: "/images/SoftwareDev/is-1.png", 
        background:"url('/images/ppc/bg-1.png')",
        height: boxHeight
      },
      {
        title:"Retail",
        desc:"Inventory Management Systems And Customer-Facing Mobile Apps That Enhance Operational Efficiency And Deliver Seamless Shopping Experiences.",
        icon:"/images/SoftwareDev/is-2.png", 
        background:"url('/images/ppc/bg-2.png')",
        height: boxHeight
      },
      {
        title:"Media",
        desc:"Scalable OTT Platforms And High-Performance Video Streaming Solutions Engineered For Rich Content Delivery.",
        icon:"/images/SoftwareDev/is-3.png", 
        background:"url('/images/ppc/bg-3.png')",
        height: boxHeight
      },
      {
        title:"Travel & Hospitality",
        desc:"Smart Booking Engines And Itinerary Planning Tools Built On Robust, User-First Custom Software Frameworks.",
        icon:"/images/SoftwareDev/is-4.png", 
        background:"url('/images/ppc/bg-1.png')",
        height: boxHeight
      },
      {
        title:"E-Commerce",
        desc:"CMS Integrations, Product Personalization Engines, And Enterprise-Grade Custom Solutions That Drive Conversions And Simplify Content Management.",
        icon:"/images/SoftwareDev/is-5.png", 
        background:"url('/images/ppc/bg-2.png')",
        height: boxHeight
      }
    ];

    
    return <CommonCard 
        seoData={seoData} 
        heding="Industry-Specific Expertise That Goes Beyond the Brief"
        description="We design Custom Applications with deep Domain Expertise across key verticals:<br /><b class='highlited-text'>We Specialize in:<br/></b>"
        footer="Our Industry Software expertise makes us the partner of choice for business-critical platforms."
    />
}