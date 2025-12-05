import React from 'react'
import CommonCard from '../common/CommonCard'

export const Technology = ()=>{
  const boxHeight = "250px";
    const seoData = [
      {
        title: "Enterprise-grade platforms", 
        desc: "the digital muscle behind seamless operations and scalable innovation",
        icon: "/images/rounded-icons/r23.png", 
        background:"url('/images/ppc/bg-1.png')",
        height: boxHeight
      },
      {
        title:"Certified transformation consultants", 
        desc:"We build authority for software brands with thought leadership articles, guest posts, and niche placements that bring in both links and qualified leads.",
        icon:"/images/rounded-icons/r24.png", 
        background:"url('/images/ppc/bg-2.png')",
        height: boxHeight
      },
      {
        title:"Built-in automation and AI", 
        desc:"turning data into decisions, and workflows into intelligent, self-optimizing systems",
        icon:"/images/rounded-icons/r9.png", 
        background:"url('/images/ppc/bg-3.png')",
        height: boxHeight
      }
    ];

    return <CommonCard 
        seoData={seoData} 
        heding="The Technology, Teams, and Tools Powering Your Transformation"
        description="At Brandstory, we fuse strategy with execution, tech with talent, and ambition with architecture. As one of the top digital transformation services companies, we build the machinery for modern growth — and keep it running.</br></br><b class='highlited-text'>Our digital transformation services and solutions bring together:</b>"
        footer="This is transformation with intent — grounded in clarity, built for resilience, and wired for continuous evolution."
    />
}