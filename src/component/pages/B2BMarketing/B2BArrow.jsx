import CommonArrowGrid from '@/component/pages/common/CommonArrowGrid'

export const B2BArrow = () => {
    const heading = "Explore More B2B Services"
    const description = "Explore related services to boost your content strategy:"
    const boxesData = [
    {
        title: "Account-Based Marketing (ABM)",
        description: "Target High-Value Accounts With Personalized Campaigns That Address Their Unique Needs And Drive Stronger Sales Outcomes.",
        theme: "light",
        size: "sm"
    },
    {
        title: "B2B Lead Generation",
        description: "Capture Quality Leads Through Data-Driven Strategies That Connect You With The Right Decision-Makers.",
        theme: "dark",
        size: "md"
    },
    {
        title: "Social Media For B2B",
        description: "Build Thought Leadership And Engage Professionals On Platforms Like LinkedIn, Twitter, And Niche Communities.",
        theme: "dark",
        size: "sm"
    },
    {
        title: "B2B Content Marketing",
        description: "Create Whitepapers, Blogs, Case Studies, And Reports That Establish Authority And Support The Buyer Journey.",
        theme: "dark",
        size: "sm"
    },
    {
        title: "Performance & Paid Media For B2B",
        description: "Run Highly Targeted Ad Campaigns Across Search, Display, And Social Channels To Maximize ROI.",
        theme: "dark",
        size: "sm"
    },
  ];
  
    return (
    <CommonArrowGrid boxes={boxesData} heading={heading} descripton={description}/>
    );    
}