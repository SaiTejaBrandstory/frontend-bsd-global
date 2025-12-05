import CommonGridBox3 from "../common/CommonGridBox3";

export const Difference = ()=>{
    const title = "BrandStory vs. Others — The Difference Is in the Delivery";
    const description = "When you’re picking a development partner, you’re choosing more than code. You’re choosing business impact.";
    const footer= "Work with a team that knows how to turn pixels into pipelines. With “1 Goal: Your Business Growth”, everything else is strategy."
    const data = [
  {
    "title": "Strategy-First Approach",
    "description": "Every Project Begins With A Clear Understanding Of Your Business Goals To Ensure Alignment And Measurable Impact.",
    "bgcolor": "#6d3119",
    "logo": "/images/WebDev/d-1.png"
  },
  {
    "title": "SEO & Performance Built-In",
    "description": "Optimized For Speed, Structure, And Search Ranking From The Ground Up, With Conversion-Focused Performance.",
    "bgcolor": "#474574",
    "logo": "/images/WebDev/d-2.png"
  },
  {
    "title": "Reliable Post-Launch Support",
    "description": "Dedicated Team For Updates, Troubleshooting, And Ongoing Enhancements To Keep Your Digital Assets Running Smoothly.",
    "bgcolor": "#3e484b",
    "logo": "/images/WebDev/d-3.png"
  },
  {
    "title": "Enterprise-Grade Expertise",
    "description": "Proven Experience Delivering Solutions For 500+ Enterprise And Mid-Size Clients Across Industries.",
    "bgcolor": "#6d3119",
    "logo": "/images/WebDev/d-4.png"
  },
  {
    "title": "Results You Can Measure",
    "description": "Campaigns And Platforms Built To Deliver Tangible Business Outcomes, Including Leads, Engagement, And Growth.",
    "bgcolor": "#474574",
    "logo": "/images/WebDev/d-5.png"
  },
  {
    "title": "Growth-Centric Mindset",
    "description": "Every Line Of Code, Design, And Feature Is Built With One Goal: Your Business Growth.",
    "bgcolor": "#3e484b",
    "logo": "/images/WebDev/d-6.png"
  },
];
    return (
        <CommonGridBox3 
            title={title} 
            description={description} 
            data={data} 
            footer={footer}
        />
    );
}