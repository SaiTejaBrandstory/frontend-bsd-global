import CommonArrowGrid from '@/component/pages/common/CommonArrowGrid'

export const B2CArrowGrid = () => {
    
    const heading = "More on Our B2C Services"
    const description = "Explore Adjacent Services To Complement Your Growth:"
    
    
    const boxesData = [
    {   
        title: "Conversion Rate Optimization",
        description: "Improve Website Performance To Turn More Visitors Into Paying Customers.",
        theme: "light",
        size: "sm" 
    },
    {
        
        title: "Ecommerce Growth Marketing",
        description: "Scale Your Online Store With Strategies That Drive Traffic And Sales.",
        theme: "dark",
        size: "md" 
    },
    {   
        title: "SEO For B2C",
        description: "Boost Visibility And Reach The Right Customers Through Targeted Search Optimization.",
        theme: "dark",
        size: "sm" 
    },
    {   
        title: "Social Media For B2C",
        description: "Engage And Grow Your Audience With Tailored Social Media Campaigns.",
        theme: "dark",
        size: "sm" 
    },
    {   
        title: "Performance Marketing For B2C",
        description: "Maximize ROI With Data-Driven Campaigns Focused On Measurable Results.",
        theme: "dark",
        size: "sm" 
    },
  ];
  
    return (
    <CommonArrowGrid boxes={boxesData} heading={heading} descripton={description}/>
    );    
}