import React from 'react'
import CommonCard from '../common/CommonCard'

export const SuccessPlan = ()=>{
  const boxHeight = "330px"; 
    const seoData = [ 
      {
        title: "Analyse & Consultation",
        desc: "We begin by carefully looking at your competitors, the performance of your funnel, and your current ads. This lets us find gaps, see chances, and figure out what works. We can use this information to make a PPC plan that reaches the right people and gets the best results.",
        icon: "/images/ppc/1.png",
        background:"url('/images/ppc/bg-1.png')",
        height: boxHeight
      },
      {
        title:"Strategy & Keyword Research",
        desc:"Then we make a keyword strategy based on what the user wants. We make sure that the right people see your ads at the right time, with the right message by matching keywords to your audience and where they are in the buying process.",
        icon:"/images/ppc/2.png",
        background:"url('/images/ppc/bg-2.png')",
        height: boxHeight
      },
      {
        title:"Campaign Launch & A/B Testing",
        desc:"We run A/B tests and set up campaigns to see which combinations of headlines, graphics, and calls to action get the most clicks, engagement, and conversions. This method makes sure that your campaigns are as good as they can be from the start.",
        icon:"/images/ppc/3.png",
        background:"url('/images/ppc/bg-3.png')",
        height: boxHeight
      },
      {
        title:"Performance Tracking & Optimization",
        desc:"We keep an eye on every campaign in real time. We change bids, improve targeting, and make creatives better every day to lower your cost per lead (CPL) and raise your return on ad spend (ROAS). This keeps your campaigns running at their best.",
        icon:"/images/ppc/4.png",
        background:"url('/images/ppc/bg-1.png')",
        height: boxHeight
      },
      {
        title:"Scaling & Growth",
        desc:"We make promising campaigns bigger. This could mean entering new markets, spending more on ads for campaigns that work, or trying out new ad formats to help your business grow steadily and in a way that lasts.",
        icon:"/images/ppc/5.png",
        background:"url('/images/ppc/bg-2.png')",
        height: boxHeight
      }
    ];

    return <CommonCard seoData={seoData} heding="The BrandStory 5-Step PPC Success Plan"/>
}