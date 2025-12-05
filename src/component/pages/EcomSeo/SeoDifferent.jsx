import React from 'react'
import CommonCard from '../common/CommonCard'

export const SeoDifferent = ()=>{
  const boxHeight = "340px";
    const seoData = [
      {
        title: "ECommerce SEO Specialists With Platform Expertise",
        desc: "We've Already Worked On Shopify, WooCommerce, Magento, BigCommerce, Wix, Squarespace, And A Few Custom Ones Too. Whether Your Store Is Plug-And-Play Or Highly Customized, We Know How To Get The SEO Right Without Breaking Your Setup.",
        icon: "/images/EcomSeo/sd-1.png", 
        background:"url('/images/ppc/bg-1.png')",
        height: boxHeight
      },
      {
        title:"Transparent, Data-Driven SEO Campaigns",
        desc:"You'll Always Know What We're Working On, What It's For, And What It's Helping You Achieve. We Explain Things In Plain Terms, No Hiding Behind Jargon Or Long Reports That Say Nothing. Everything We Do Is Backed By Data, And Every Result Is Shared Openly.",
        icon:"/images/EcomSeo/sd-2.png", 
        background:"url('/images/ppc/bg-2.png')",
        height: boxHeight
      },
      {
        title:"Custom Strategies For Every Industry",
        desc:"Selling Furniture Is Not The Same As Selling Skincare. We Study Your Category, Your Customers, And Your Competitors Before We Build Your SEO Roadmap. Whether You're In Fashion, Electronics, Home Goods, Food Delivery, Or Any Other Space, Your Plan Is Built Just For You, Not Copied From Someone Else's.",
        icon:"/images/EcomSeo/sd-3.png", 
        background:"url('/images/ppc/bg-3.png')",
        height: boxHeight
      },
      {
        title:"Proven Track Record With Real Results",
        desc:"We've Helped Over 500 eCommerce Brands Grow Their Visibility, Traffic, And Sales, From Startups To Well-Known Names. Our Clients Have Seen Real Change In Rankings And Revenue. If You Want, We Can Show You Exactly What We Did And The Results It Brought In Your Industry.",
        icon:"/images/EcomSeo/sd-4.png", 
        background:"url('/images/ppc/bg-1.png')",
        height: boxHeight
      },
    ];

    return <CommonCard 
        seoData={seoData} 
        heding="What Makes Our eCommerce SEO Different"
        // description="REST APIs Offer Flexibility, Scalability, And Stateless Communication – Ideal For Microservices And Hybrid Systems.<br/><br /><b class='highlited-text'>Here's Why REST APIs Power The Majority Of Today's Digital Platforms:</b>" 
        // footer="REST APIs are the foundation for flexible, high-performing digital platforms, ensuring your architecture is modern, scalable, and cost-effective for long-term growth and innovation."
    />
}