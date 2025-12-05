import CommonArrowGrid from '@/component/pages/common/CommonArrowGrid'

export const BrandingArrow = () => {
    // Updated Heading
    const heading = "Professional Services for Branding"
    // Updated Description
    const description = "Explore Related Services To Boost Your Content Strategy:"
    const boxesData = [
    {
        // Updated data for box 1
        title: "Brand Strategy & Positioning",
        description: "Define Your Brand's Purpose, Values, And Unique Market Position.",
        theme: "light",
        size: "sm"
    },
    {
        // Updated data for box 2
        title: "Brand Identity Design",
        description: "Create Logos, Colors, Typography, And Guidelines That Reflect Your Brand Personality.",
        theme: "dark",
        size: "md"
    },
    {
        // Updated data for box 3
        title: "Rebranding Services",
        description: "Refresh Your Visuals And Messaging To Stay Relevant And Trusted.",
        theme: "dark",
        size: "sm"
    },
    {
        // Updated data for box 4
        title: "Logo Design",
        description: "Craft Memorable And Versatile Logos That Represent Your Brand Effectively.",
        theme: "dark",
        size: "sm"
    },
    {
        // Updated data for box 5
        title: "Packaging & Product Design",
        description: "Design Packaging And Products That Attract Attention And Tell Your Brand Story.",
        theme: "dark",
        size: "sm"
    },
  ];
  
    return (
    <CommonArrowGrid boxes={boxesData} heading={heading} descripton={description}/>
    );    
}