import React from 'react'
import CommonCard from '../common/CommonCard'

export const IndustriesWeServe = ()=>{
  const boxHeight = "330px";
    const seoData = [
      {
        title: "Technology",
        desc: "From sleek product launch videos to intuitive UX walkthroughs, we help tech brands explain and excite. Our industry video production in tech includes customer case studies and platform explainers that build user confidence. We simplify complex products into compelling business video content that educates and converts.",
        icon: "/images/rounded-icons/r3.png", 
        background:"url('/images/ppc/bg-1.png')",
        height: boxHeight
      },
      {
        title:"Healthcare",
        desc:"Whether it's doctor introductions, patient journeys, or procedural guides, we handle sensitive topics with clarity and care. We create informative, reassuring content for hospitals, clinics, and wellness brands. Our tailored video production services help healthcare providers build trust through real, relatable storytelling.",
        icon:"/images/rounded-icons/r1.png", 
        background:"url('/images/ppc/bg-2.png')",
        height: boxHeight
      },
      {
        title:"Finance",
        desc:"Simplify investments, insurance, and fintech products with videos that build credibility and inspire action. We produce investment explainer videos and corporate brand films reflecting financial integrity and expertise. Using brand storytelling, we make abstract concepts easy to understand and impossible to ignore.",
        icon:"/images/rounded-icons/r83.png", 
        background:"url('/images/ppc/bg-3.png')",
        height: boxHeight
      },
      {
        title:"Education",
        desc:"Showcase your institution's culture, curriculum, and success stories with compelling video narratives. We create eLearning modules, alumni highlights, and virtual campus tours that speak to students and stakeholders. Our professional video production services help educational brands inform and inspire across digital platforms.",
        icon:"/images/rounded-icons/r68.png", 
        background:"url('/images/ppc/bg-1.png')",
        height: boxHeight
      },
      {title:"Retail",
        desc:"From social campaigns to full-scale product showcases, we produce videos that drive foot traffic and online sales. We work with retail brands on influencer content, store experiences, and promo launches.  Each video is crafted as a sector-specific video solution, optimized for platforms like Instagram, YouTube, and in-store screens.",
        icon:"/images/rounded-icons/r8.png", 
        background:"url('/images/ppc/bg-2.png')",
        height: boxHeight
      },
      {title:"Travel",
        desc:"Bring destinations to life with immersive visuals and emotive narratives that inspire exploration. Our video production team captures scenic highlights, hospitality experiences, and customer testimonials with accurate detailing. Whether it’s luxury resorts or local gems, we craft marketing videos that make people want to pack their bags.",
        icon:"/images/rounded-icons/r83.png", 
        background:"url('/images/ppc/bg-3.png')",
        height: boxHeight
      }
    ];

    
    return <CommonCard 
        seoData={seoData} 
        heding="Industries We Serve"
        description="Every industry has a story; let’s tell yours with impact. Our deep-rooted expertise in video production spans multiple sectors, allowing us to craft messages that resonate with the right audience and align with your business goals."
        // footer="Our Video Production expertise makes us the partner of choice for business-critical platforms."
    />
}   