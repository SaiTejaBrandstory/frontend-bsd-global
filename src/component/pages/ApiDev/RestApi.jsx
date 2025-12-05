import React from 'react'
import CommonCard from '../common/CommonCard'

export const RestApi = ()=>{
  const boxHeight = "380px";
    const seoData = [
      {
        // Title from the image: "Simplified Mobile and Web App Development"
        title: "Simplified Mobile and Web App Development",
        // Description derived from the content in the image
        desc: "REST APIs Use Lightweight Protocols Like HTTP And Standard Data Formats Such As JSON Or XML, Which Significantly Streamline Communication Between Frontend And Backend Systems. This Makes Them Ideal For Mobile Apps, Single-Page Applications (SPAs), And Web Platforms That Demand Real-Time Responsiveness And Fast Loading Speeds.",
        icon: "/images/Webdev/ws-1.png", 
        background:"url('/images/ppc/bg-1.png')",
        height: boxHeight
      },
      {
        // Title from the image: "Improved System Modularity and Team Efficiency"
        title:"Improved System Modularity and Team Efficiency",
        // Description derived from the content in the image
        desc:"RESTful Architecture Emphasizes A Clear Separation Between Client And Server. Each Endpoint Is Independently Developed And Maintained, Allowing Teams To Build, Test, And Deploy Features In Parallel – Without Causing Disruption To The Overall System. This Modularity Reduces Development Bottlenecks And Supports Smoother Collaboration Across Teams.",
        icon:"/images/ApiDev/r-2.png", 
        background:"url('/images/ppc/bg-2.png')",
        height: boxHeight
      },
      {
        // Title from the image: "Faster and More Agile Deployment Cycles"
        title:"Faster and More Agile Deployment Cycles",
        // Description derived from the content in the image
        desc:"With REST APIs, New Services And Updates Can Be Rolled Out Without Overhauling Existing Infrastructure. This Flexibility Supports Agile Methodologies, Enabling Iterative Development, Faster Go-to-Market Timelines, And Seamless Integration With Legacy Systems Or Third-Party Platforms.",
        icon:"/images/Webdev/ws-3.png", 
        background:"url('/images/ppc/bg-3.png')",
        height: boxHeight
      },
      {
        // Title from the image: "Reduced Development and Maintenance Costs"
        title:"Reduced Development and Maintenance Costs",
        // Description derived from the content in the image
        desc:"REST APIs Are Language-Agnostic And Reusable Across Multiple Projects Or Environments. Once Built, They Can Be Consumed By Various Applications Without The Need For Duplication. This Not Only Speeds Up Development But Also Simplifies Debugging, Scaling, And Long-Term Maintenance – Ultimately Lowering Operational Costs.",
        icon:"/images/ApiDev/r-4.png", 
        background:"url('/images/ppc/bg-1.png')",
        height: boxHeight
      },
    ];

    return <CommonCard 
        seoData={seoData} 
        // Heading changed to reflect the main question in the image
        heding="Why Businesses Choose REST APIs for Modern Architecture"
        // Description changed to reflect the subtitle in the image
        description="REST APIs Offer Flexibility, Scalability, And Stateless Communication – Ideal For Microservices And Hybrid Systems.<br/><br /><b class='highlited-text'>Here's Why REST APIs Power The Majority Of Today's Digital Platforms:</b>" 
        // Footer adjusted to a generic but relevant closing statement
        footer="REST APIs are the foundation for flexible, high-performing digital platforms, ensuring your architecture is modern, scalable, and cost-effective for long-term growth and innovation."
    />
}