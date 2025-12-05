import React from 'react'
import CommonCard from '../common/CommonCard'

export const MarketingEnterprise = ()=>{
  const boxHeight = "230px";
    const seoData = [
      {
        title: "Social Media",
        desc: "To get in the right audience, we believe in updating content, sharing insights, putting out advertisements and interacting with the community.",
        icon: "/images/ppc/1.png",
        background:"url('/images/ppc/bg-1.png')",
        height: boxHeight
      },
      {
        title:"Google Ads",
        desc:"For right customers to reach you, we create ads that they can see when they search something similar to what you sell.",
        icon:"/images/ppc/2.png",
        background:"url('/images/ppc/bg-2.png')",
        height: boxHeight
      },
      {
        title:"Influencer Marketing",
        desc:"Create awareness about your product or service by teaming up with the influencers",
        icon:"/images/ppc/3.png",
        background:"url('/images/ppc/bg-3.png')",
        height: boxHeight
      },
      {
        title:"Content Marketing",
        desc:"Giving engaging blogs, posts, and articles to add value to your readers.",
        icon:"/images/ppc/4.png",
        background:"url('/images/ppc/bg-1.png')",
        height: boxHeight
      },
      {
        title:"Email Marketing",
        desc:"Talking to your customers directly through email and keeping them updated and involved.",
        icon:"/images/ppc/5.png",
        background:"url('/images/ppc/bg-2.png')",
        height: boxHeight
      },
      {
        title:"Video Ads",
        desc:"Making short videos that show your company, your story, helping increase the viewers.",
        icon:"/images/B2CMarketing/6.png",
        background:"url('/images/ppc/bg-3.png')",
        height: boxHeight
      },
      {
        title:"Retail Promotions",
        desc:"Persuasive campaigns that drive your customers to the store or direct them to an online purchase.",
        icon:"/images/B2CMarketing/7.png",
        background:"url('/images/ppc/bg-1.png')",
        height: boxHeight
      }
    ];

    return (
        <>
            <CommonCard seoData={seoData} heding="Multi-Channel Consumer Marketing Expertise"/>
            <p className='max-w-[1200px] mx-auto text-center pb-20'>Using marketing on many channels, we help your brand reach more people, engage them in meaningful ways, and get consistent results. Each campaign is designed to create awareness, spark interest, and encourage customers to take action. Using omnichannel B2C campaigns, we deliver consistent and integrated cross-platform consumer marketing results.</p>
        </>
    )
}