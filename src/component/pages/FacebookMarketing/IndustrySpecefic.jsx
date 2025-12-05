import React from 'react'
import CommonTwoCard from '../common/CommonTwoCard'


export const IndustrySpecefic =()=>{
    const data = {
    heading: "Industry-Specific Facebook Ads Solutions",
    subheading:
      "Your Industry, Audience, And Goals Matter. Every Brand Has A Different Audience, A Different Goal, And A Different Journey. Our Campaigns Are Built To Fit Your Industry, So Your Message Lands Exactly Where It Should.",
    cards: [
            {
              title: "Facebook Ads For E-Commerce & D2C",
              description:
                "We Design Product-Focused Funnels Using Dynamic Creatives And Catalog Ads. Our Ecommerce Clients See An Average 3.6x ROAS From Personalized, Conversion-Led Campaigns.",
            },
            {
              title: "Real Estate Facebook Marketing",
              description:
                "From Builder Promotions To Project-Specific Lead Gen, We Craft Hyper-Local Campaigns Capturing Qualified Leads, Boost Inquiries, And Nurture Long-Term Interest.",
            },
            {
              title: "Secure And Flexible Engagement Models",
              description:
                "Work With Confidence. Our Contracts Are Transparent, Risk-Managed, And Adaptable To Your Operational Needs.",
            },
            {
              title: "Cost-Efficient Development Without Compromises",
              description:
                "We Optimize Performance And Cost With Lean, Agile Processes — Delivering High-Quality Builds On Time And Within Budget.",
            },
            {
              title: "FB Ads For Education & Online Courses",
              description:
                "We Run Full-Funnel Campaigns Focused On Awareness, Sign-Ups, And Enrollments. Our Ad Strategy Includes Interest Targeting, Remarketing, And Lookalike Audiences To Drive High Quality Student Leads.",
            },
            {
              title: "Beauty & Wellness",
              description:
                "We Help Clinics, Salons, And Wellness Brands Boost Visibility And Bookings Through Scroll-Stopping Offers And Location-Based Targeting.",
            },
            {
              title: "Events & Entertainment",
              description:
                "For Concerts, Expos, And Local Experiences, We Create Geo-Targeted Ads That Drive RSVPs, Ticket Purchases, And Real-Time Engagement.",
            },
            {
              title: "Tech & SaaS",
              description:
                "Our Ads Help SaaS Brands Reach Decision Makers, Push Demo Sign-Ups, And Nurture Interest Through Layered Retargeting And Platform Specific Messaging.",
            },
        ],
    };


    return (
        <>
            <CommonTwoCard {...data} titleClass="text-center" cardLayout="two-col"/>
            <p className='max-w-[1200px] text-center mx-auto mb-30 text-[#FF6347]'>We Have Done It Before And We Can Do It Better For You.</p>
        </>
    )
}
