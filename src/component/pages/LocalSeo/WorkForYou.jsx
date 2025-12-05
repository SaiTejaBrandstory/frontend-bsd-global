import React from 'react'
import CommonCard from '../common/CommonCard'


export const WorkForYou = ()=>{
  const boxHeight = "220px";
    const seoData = [
      {
        title: "Google Business Profile Optimization", 
        desc: "We Update Your Profile With Clear Info, High-Quality Photos, And Keywords That Help Google Trust And Rank Your Listing.",
        icon: "/images/round-index/1.png", 
        background:"url('/images/ppc/bg-1.png')",
        height: boxHeight
      },
      {
        title:"Local Citation Building", 
        desc:"We List Your Business In Important Local Directories With Consistent Name, Address, Phone (NAP) Details To Improve Credibility.",
        icon:"/images/round-index/2.png", 
        background:"url('/images/ppc/bg-2.png')",
        height: boxHeight
      },
      {
        title:"Location-Based Keywords", 
        desc:"We Include Your City, Neighborhood, And Local Intent Keywords In Your Website Content To Match What People Are Searching.",
        icon:"/images/round-index/3.png", 
        background:"url('/images/ppc/bg-3.png')",
        height: boxHeight
      },
      {
        title:"Map Pack Placement", 
        desc:"We Help Your Business Show Up In Google's Top 3 Local Results Also Known As The Local Pack.",
        icon:"/images/round-index/4.png", 
        background:"url('/images/ppc/bg-1.png')",
        height: boxHeight
      },
      {
        title:"Reputation Signals", 
        desc:"We Guide You On Getting Authentic Customer Reviews. These Help Boost Visibility And Trust With New Customers.",
        icon:"/images/round-index/5.png", 
        background:"url('/images/ppc/bg-1.png')",
        height: boxHeight
      },
    ];


    return <CommonCard 
        seoData={seoData} 
        heding="How We Make Local SEO Work for You"
        description="Local SEO Services Focus On Helping Your Business Appear In Local Searches Especially The Ones With Buying Intent. These Are Searches From People In Your Area, Looking For What You Offer Right Now."
    />
}
