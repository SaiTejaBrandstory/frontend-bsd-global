import CommonArrowGrid from '@/component/pages/common/CommonArrowGrid'

export const OrmArrowGrid = () => {
    const heading = "More on Our Content Marketing Services"
    const description = "Explore Related Services To Boost Your Content Strategy:"
    const boxesData = [
    {
        title: "Social Media Reputation Monitoring",
        description: "Track Conversations, Reviews, And Mentions To Protect And Enhance Your Brand's Image Online.",
        theme: "light",
        size: "sm"
    },
    {
        title: "Personal Reputation Management",
        description: "Build And Maintain A Positive Digital Presence For Business Leaders, Executives, Or Professionals.",
        theme: "dark",
        size: "md"
    },
    {
        title: "LinkedIn Profile Management",
        description: "Optimize And Manage Profiles To Strengthen Credibility, Visibility, And Professional Influence.",
        theme: "dark",
        size: "sm"
    },
    {
        title: "Social Media For B2C",
        description: "Create Engaging, Customer-Focused Content That Builds Trust And Drives Stronger Brand Connections.",
        theme: "dark",
        size: "sm"
    },
    {
        title: "Social Listening",
        description: "Monitor Industry Trends And Customer Sentiment To Proactively Manage Your Brand Reputation.",
        theme: "dark",
        size: "sm"
    },
  ];
  
    return (
    <CommonArrowGrid boxes={boxesData} heading={heading} descripton={description}/>
    );    
}