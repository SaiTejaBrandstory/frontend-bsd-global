import React from 'react'
import CommonCard from '../common/CommonCard'


export const WhyTrust = ()=>{
  const boxHeight = "380px";
    const data = [
  {
    title: "Certified Expert Consultants With Cross-Industry Specialization",
    desc: "We help you modernize your technology landscape — from optimizing infrastructure and system architecture to enhancing overall IT performance. Our experts ensure that your digital foundation supports both current needs and future growth.",
    icon: "/images/rounded-icons/r23.png", 
    background: "url('/images/ppc/bg-1.png')", 
    height: boxHeight
  },
  {
    title: "Proven Track Record Of Performance",
    desc: "Our Results Speak For Themselves. A Recent Engagement With A Leading Pharmaceutical Brand Resulted In A 300% Increase In Organic Traffic Within Just Seven Months, Demonstrating Our Ability To Translate Strategy Into Tangible Success.",
    icon: "/images/rounded-icons/r24.png", 
    background: "url('/images/ppc/bg-2.png')", 
    height: boxHeight
  },
  { 
    title: "Tailored, Data-Driven Strategies That Eliminate Guesswork",
    desc: "Every Solution We Offer Is Rooted In Data, Not Assumptions. We Work Closely With Stakeholders To Develop Custom Transformation Roadmaps That Improve Process Efficiency, Customer Engagement, And Bottom-Line Performance — All While Minimizing Operational Risk.",
    icon: "/images/rounded-icons/r9.png", 
    background: "url('/images/ppc/bg-3.png')", 
    height: boxHeight
  },
  {
    title: "Exceptional Client Retention Across Long-Term Engagements",
    desc: "With A 90% Client Retention Rate, Our Partners Are Built On Consistent Delivery, Strategic Alignment, And Proactive Communication. Clients Trust Us Not Just For One Project, But For Continuous Innovation Across Multiple Phases Of Transformation.",
    icon: "/images/rounded-icons/r25.png", 
    background: "url('/images/ppc/bg-1.png')", 
    height: boxHeight
  },
  {
    title: "Recognized By Enterprises For Strategic Agility And Innovation",
    desc: "From Fortune 500 Companies To Fast-Growing Mid-Market Firms, We're Known For Our Ability To Execute Complex, Multi-Layered Initiatives With Precision And Agility — Helping Businesses Evolve Faster, Smarter In Today's Digital-First Economy.",
    icon: "/images/rounded-icons/r26.png", 
    background: "url('/images/ppc/bg-1.png')", 
    height: boxHeight
  },
];


    return <CommonCard
        seoData={data}
        heding="Why Industry Leaders Trust Our<br/>Expert Consultants"
        description="At the core of our consulting model is a commitment to delivering value that drives lasting impact across industries. Here’s why enterprises continue to choose and recommend us:<br /><br /><b class='highlited-text'>Here’s why REST APIs power the majority of today’s digital platforms:</b>"
        footer=""
    />
}