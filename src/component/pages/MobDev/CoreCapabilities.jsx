import React from 'react'
import CommonCard from '../common/CommonCard'

export const CoreCapabilities = ()=>{
  const boxHeight = "330px";
    const seoData = [
      {
        title: "Android App Development",
        desc: "Our Android App Development Services Focus On Performance, Scalability, And Device Compatibility. We Build Apps That Run Seamlessly Across The Vast Android Ecosystem – From Smartphones To Smart TVs – Using Modern Tech Stacks Like Kotlin, Jetpack Compose, And Firebase.",
        icon: "/images/Webdev/ws-1.png", 
        background:"url('/images/ppc/bg-1.png')",
        height: boxHeight
      },
      {
        title:"iOS App Development",
        desc:"With Our iOS App Development Services, You Get Sleek, Secure, And High-Performing Apps That Align With Apple's Rigorous Design And UI Standards. Built On Swift And Swift UI, Our Apps Deliver Exceptional Performance Across iPhones, iPads, And Apple Watch.",
        icon:"/images/Webdev/ws-2.png", 
        background:"url('/images/ppc/bg-2.png')",
        height: boxHeight
      },
      {
        title:"Cross-Platform App Development",
        desc:"Reduce Development Time Without Compromising Quality. We Use Frameworks Like Flutter And React Native To Create Apps That Share One Codebase And Run Beautifully On Both iOS And Android, Helping You Reach A Broader Audience Faster.",
        icon:"/images/Webdev/ws-3.png", 
        background:"url('/images/ppc/bg-3.png')",
        height: boxHeight
      },
      {
        title:"Hybrid Mobile App Development",
        desc:"Combining The Speed Of Web Apps With The Functionality Of Native Apps, Hybrid Development Is Ideal For Businesses Looking To Validate MVPs Quickly Or Deploy Internal Tools Efficiently.",
        icon:"/images/Webdev/ws-4.png", 
        background:"url('/images/ppc/bg-1.png')",
        height: boxHeight
      },
      {
        title:"App Store Optimization (ASO)",
        desc:"Visibility Is Key. Our ASO Specialists Enhance Your App's Discoverability With Keyword-Rich Titles, Strategic Descriptions, And Conversion-Optimized Visuals That Help You Rank Higher In App Store Searches.",
        icon:"/images/Webdev/ws-5.png", 
        background:"url('/images/ppc/bg-2.png')", 
        height: boxHeight
      },
      {
        title:"App Maintenance & Support",
        desc:"We Don't Stop At Launch. Our Team Provides Continuous Monitoring, Regular Updates, And Technical Support To Ensure Your App Remains Secure, Compatible, And High-Performing Over Time.",
        icon:"/images/Webdev/ws-3.png", 
        background:"url('/images/ppc/bg-3.png')", 
        height: boxHeight
      }
    ];

    return <CommonCard 
        seoData={seoData} 
        heding="Our Core Capabilities"
        description="" 
        footer="From Delivering 1.5B+ Revenue For 500+ Clients To Helping A Tech Company Rank 80+ Keywords On Page 1, Our Solutions Are Rooted In Results. Work With A Website Development Company That Understands Your Industry, Audience, And Ambition."
    />
}