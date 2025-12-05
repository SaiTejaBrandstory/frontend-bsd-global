import CommonArrowGrid from '@/component/pages/common/CommonArrowGrid'

export const ContentMarketingArrowGrid = () => {
    const heading = "More on Our Content Marketing Services"
    const description = "Explore Related Services To Boost Your Content Strategy:"
    const boxesData = [
    {
        title: "Content Promotion",
        description: "We Ensure Your Content Reaches The Right Audience Through Paid Campaigns, Social Media, Email Marketing, And Outreach.",
        theme: "light",
        size: "sm"
    },
    {
        title: "Content Writing",
        description: "Clear, Engaging, And Brand-Focused Writing That Builds Authority And Keeps Your Audience Interested.",
        theme: "dark",
        size: "md"
    },
    {
        title: "Content Strategy",
        description: "A Roadmap That Aligns Your Content With Business Goals, Customer Needs, And Market Opportunities.",
        theme: "dark",
        size: "sm"
    },
    {
        title: "Content Development",
        description: "From Blogs And Videos To Case Studies And Infographics, We Create Diverse Formats Tailored To Your Audience.",
        theme: "dark",
        size: "sm"
    },
    {
        title: "Content Optimization",
        description: "Continuous Improvements With SEO, Analytics, And Performance Tracking To Get The Most Out Of Every Asset.",
        theme: "dark",
        size: "sm"
    },
  ];
  
    return (
    <CommonArrowGrid boxes={boxesData} heading={heading} descripton={description}/>
    );    
}
