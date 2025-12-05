import React from 'react'
import CommonTwoCard from '../common/CommonTwoCard'

export const GrowthJourney =()=>{
    // Data updated to match the content from the "What Makes Us the Right Partner for Your Growth Journey" image
    const data = {
    heading: "What Makes Us the Right Partner for",
    // highlight: "Your Growth Journey",
    subheading:
      "Choosing The Right Technology Partner Can Define Your Business Trajectory. Here’s Why Forward-Looking Organizations Trust Us To Drive Meaningful Outcomes:",
    cards: [
            {
              title: "Experience You Can Trust",
              description:
                "We’ve Worked With Businesses In Over 20 Industries – From Healthcare And Finance To ECommerce And Tech. This Means We Understand Your World And Can Create Solutions That Actually Fit Your Needs.",
            },
            {
              title: "Always On, Always Reliable",
              description:
                "With A 95%+ On-Time Delivery Rate, We Value Your Time As Much As You Do. Our Processes Are Built To Get Things Done Quickly, Without Cutting Corners On Quality.",
            },
            {
              title: "Smart, Future-Ready Solutions",
              description:
                "By Using AI And Working With Top Cloud And Tech Partners, We Make Your Software Faster, Smarter, And Ready To Grow With Your Business.",
            },
            {
              title: "Security And Support That Lasts",
              description:
                "Your Data Is Always Protected With Enterprise-Grade Security, And We Don't Stop At Launch – We Stay With You To Keep Things Running Smoothly, Making Sure Your Investment Keeps Delivering Value.",
            },
        ],
    };

    return (
        <>
            <CommonTwoCard {...data}/>
            <p className='max-w-[1200px] text-center mx-auto mb-30'>We Are Trusted Developers And Certified Experts Who Deliver Measurable Software Solutions—Not Just Code.</p>
        </>
    )
}
