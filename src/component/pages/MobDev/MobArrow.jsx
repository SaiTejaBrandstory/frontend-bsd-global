import CommonArrowGrid from '@/component/pages/common/CommonArrowGrid'

export const MobArrow = () => {
    const heading = "Comprehensive Development Services – All Under One Roof"
    const description = "Our Extended Offerings Include:"
    const boxesData = [
    {
        title: "Software Development Services",
        description: "Custom-Built Software Tailored To Meet Your Operational, Analytical, And Business-Specific Needs. From Enterprise Platforms To SaaS Products, We Help You Scale With Confidence.",
        size: "sm",
        height:"480"
    },
    {
        title: "UI/UX Design",
        description: "Intuitive And User-First Design Systems That Improve Engagement, Reduce Churn, And Align Your Digital Product With Brand Expectations.",
        size: "md",
        height: "480"
    },
    {
        title: "Web App Development",
        description: "High-Performance Web Applications Engineered For Responsiveness, Security, And Long-Term Usability.",
        size: "sm",
        height:"360"
    },
    {
        title: "Website Design",
        description: "Mobile-First, UX-Led Websites Crafted To Convert, Combining Aesthetics, Usability, And SEO Best Practices.",
        size: "sm",
        height:"360"
    },
    {
        title: "Full Stack Development",
        description: "Robust Front-End And Back-End Architecture That Supports Dynamic Business Applications With Future-Ready Scalability.",
        size: "sm",
        height:"360"
    },
  ];

    return (
        <>
            <CommonArrowGrid boxes={boxesData} heading={heading} descripton={description}/>
            <p className='max-w-[1200px] mx-auto text-[18px] pb-20 text-center md: px-5 text-xs'>
                Our capabilities go beyond web app development, we power your entire digital transformation journey.
            </p>
        </>
    );    
}