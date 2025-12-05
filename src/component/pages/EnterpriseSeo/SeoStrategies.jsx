import React from 'react'
import CommonCard from '../common/CommonCard'

export const SeoStrategies = ()=>{
  const boxHeight = "260px";

    const seoData = [
      {
        title: "B2B",
        desc: "We Help Businesses Reach The Right Decision-Makers. Our SEO Strategies Make Sure Your Website Attracts The People Who Can Take Action. We Create Content That Generates Leads And Track The Keywords That Bring Real Results.",
        icon: "/images/EnterpriseSeo/ss-1.png", 
        background:"url('/images/ppc/bg-1.png')",
        height: boxHeight
      },
      {
        title:"ECommerce",
        desc:"For Online Stores, We Improve Product Pages, Category Pages, And Site Navigation So Shoppers Can Find What They Need Quickly. We Create Content That Attracts People Ready To Buy And Help Your Store Get More Sales.",
        icon:"/images/FullStack/i-2.png", 
        background:"url('/images/ppc/bg-2.png')",
        height: boxHeight
      },
      {
        title:"SaaS",
        desc:"We Help Software Companies Get More Sign-Ups And Free Trials. Our SEO Targets People Looking For Solutions Like Yours And Optimizes Landing Pages So Visitors Become Leads. We Also Track Results To See What Drives Growth.",
        icon:"/images/EnterpriseSeo/ss-3.png", 
        background:"url('/images/ppc/bg-3.png')",
        height: boxHeight
      },
      {
        title:"Healthcare",
        desc:"We Help Doctors, Hospitals, And Patients Find The Right Information. Our SEO Makes Content Easy To Discover And Trustworthy. We Optimize For Local Searches, Answer Common Questions, And Build Credibility With Reliable Links.",
        icon:"/images/FullStack/i-4.png", 
        background:"url('/images/ppc/bg-1.png')",
        height: boxHeight
      },
      {
        title:"Real Estate",
        desc: "We Help Real Estate Companies Reach Buyers And Renters. Our SEO Improves Local Search Visibility, Highlights Property Listings Clearly, And Attracts People Who Are Ready To Make A Decision.",
        icon:"/images/EnterpriseSeo/ss-5.png", 
        background:"url('/images/ppc/bg-2.png')",
        height: boxHeight
      }
    ];

    return <CommonCard 
        seoData={seoData} 
        
        heding="Enterprise SEO Strategies by Industry" 
        
        // description="Our Work Cuts Across Categories – And Consistently Delivers Results." 
        
        // footer="A Consulting Brand Recently Saw A 65% Jump In Lead Quality After We Revamped Their Entire Product Stack To Improve Speed And Flow."
    />
}