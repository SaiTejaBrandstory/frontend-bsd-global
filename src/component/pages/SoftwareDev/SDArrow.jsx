import CommonArrowGrid from '@/component/pages/common/CommonArrowGrid'

export const SDArrow = () => {
    
    // Updated Heading and Description based on the screenshot
    const heading = "Comprehensive Development Services — All Under One Roof"
    const description = "Our Extended Offerings Include:"
    
    
    const boxesData = [
    {   
        // 01. Software Development Services
        title: "Software Development Services",
        description: "Custom-Built Software Tailored To Meet Your Operational, Analytical, And Business-Specific Needs. From Enterprise Platforms To SaaS Products, We Help You Scale With Confidence.",
        theme: "light", // Assuming the light background box from the screenshot is 'light'
        size: "sm" // Changed size to 'lg' to represent the large box 01
    },
    {
        // 02. UI/UX Design
        title: "UI/UX Design",
        description: "Intuitive And User-First Design Systems That Improve Engagement, Reduce Churn, And Align Your Digital Product With Brand Expectations.",
        theme: "dark", // Dark background
        size: "md" // Medium box 02
    },
    {   
        // 03. Web App Development
        title: "Web App Development",
        description: "High-Performance Web Applications Engineered For Responsiveness, Security, And Long-Term Usability.",
        theme: "dark", // Dark background
        size: "sm" 
    },
    {   
        // 04. Website Design
        title: "Website Design",
        description: "Mobile-First, UX-Led Websites Crafted To Convert, Combining Aesthetics, Usability, And SEO Best Practices.",
        theme: "dark", // Dark background
        size: "sm" 
    },
    {   
        // 05. Full Stack Development
        title: "Full Stack Development",
        description: "Robust Front-End And Back-End Architecture That Supports Dynamic Business Applications With Future-Ready Scalability.",
        theme: "dark", // Dark background
        size: "sm" 
    },
  ];
  
    return (
    <CommonArrowGrid boxes={boxesData} heading={heading} descripton={description}/>
    );    
}