import CommonTwoCard from '../common/CommonTwoCard'

export const GrowingBrands =()=>{
    const data = {
    heading: "Why Growing Brands Trust Brandstory",
    subheading:
      "We’re Not Just Another Agency. We’re A High-Performance Partner.",
    cards: [
            {
              title: "400+ Successful Deliveries",
              description:
                "Proven Track Record Across Industries, With Solutions Deployed For Enterprises, Startups, And Global Brands.",
            },
            {
              title: "Business-Aligned, Custom Solutions",
              description:
                "We Architect Every Product To Align With Your Unique Objectives – Ensuring Relevance, Scalability, And Long-Term Value.",
            },
            {
              title: "Secure And Flexible Engagement Models",
              description:
                "Work With Confidence. Our Contracts Are Transparent, Risk-Managed, And Adaptable To Your Operational Needs.",
            },
            {
              title: "Cost-Efficient Development Without Compromises",
              description:
                "We Optimize Performance And Cost With Lean, Agile Processes – Delivering High-Quality Builds On Time And Within Budget.",
            },
            {
              title: "Enterprise-Grade Quality Assurance",
              description:
                "From Day One, Our QA Processes Are Integrated Into Every Sprint Cycle To Ensure Stability, Usability, And Zero-Defect Releases.",
            },
            {
              title: "Transparent, Dedicated Development Teams",
              description:
                "Gain Complete Control And Real-Time Visibility With Teams That Operate As An Extension Of Your Internal Capabilities.",
            },
            {
              title: "Full-Stack Expertise, Legacy To Modern",
              description:
                "From Legacy Systems To Cloud-Native Applications, Our Engineers Are Proficient Across A Wide Range Of Technologies And Platforms.",
            },
            {
              title: "24/7 Technical Support & Maintenance",
              description:
                "Post-Launch, We Ensure Uninterrupted Performance With Proactive Monitoring, Regular Updates, And Round-The-Clock Support.",
            },
        ],
    };
    
    return (
        <>
            <CommonTwoCard {...data}/>
            {/* The concluding paragraph was removed as it does not appear in the screenshot's context. */}
        </>
    )
}