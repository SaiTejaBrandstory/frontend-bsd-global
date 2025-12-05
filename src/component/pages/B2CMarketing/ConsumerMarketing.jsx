import React from 'react'
import CommonCard from '../common/CommonCard'

export const ConsumerMarketing = ()=>{
  const boxHeight = "230px";
   const seoData = [
      {
        title: "Retail & E-Commerce",
        desc: "We create marketing campaigns that attract consumers, highlight products, and boost in-person and online sales.",
        icon: "/images/B2CMarketing/cm-1.png",
        background:"url('/images/ppc/bg-1.png')",
        height: boxHeight
      },
      {
        title:"FMCG",
        desc:"We produce advertising that quickly reaches average consumers and keeps your brand well-known.",
        icon:"/images/B2CMarketing/cm-2.png",
        background:"url('/images/ppc/bg-2.png')",
        height: boxHeight
      },
      {
        title:"Travel & Hospitality",
        desc:"We develop marketing strategies that persuade consumers to select your offerings and book reservations.",
        icon:"/images/B2CMarketing/cm-3.png",
        background:"url('/images/ppc/bg-3.png')",
        height: boxHeight
      },
      {
        title:"Food & Beverage",
        desc:"We develop advertising campaigns that attract customers and encourage brand loyalty.",
        icon:"/images/B2CMarketing/cm-4.png",
        background:"url('/images/ppc/bg-1.png')",
        height: boxHeight
      },
      {
        title:"Lifestyle Brands",
        desc: "We help brands connect with consumers through relatable stories, styles, and experiences.",
        icon:"/images/B2CMarketing/cm-5.png",
        background:"url('/images/ppc/bg-2.png')",
        height: boxHeight
      },
    ];

    return (
        <>
            <CommonCard seoData={seoData} 
                heding="Industry-Specific Consumer Marketing"
                description="Different sectors require different approaches. Our sector-specific B2C marketing knowledge includes:"    
            />
            <p className='max-w-[1200px] mx-auto text-center pb-20'>We plan every campaign to match the tone, needs, and behavior of each industry. Retail brand marketing, e-commerce B2C strategy, and FMCG consumer campaigns are designed for real results. Each campaign is customized to get the most engagement and increase sales.</p>
        </>
    )
}