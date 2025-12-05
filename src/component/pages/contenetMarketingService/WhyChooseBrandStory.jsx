import CommonGridBox3Scrollable from "../common/CommonGridBox3Scrollable";

export const WhyChooseBrandStory = () => {
    const title = "Why Brands Choose BrandStory";
    const description = "Clients Stick With Us Because We Deliver Results They Can See And Measure:";
    const data = [
        {
            "title": "Strategy With Purpose",
            "description": "Every Campaign Is Built Around Your Business Goals, Not Just Keywords Or Trends. We Ensure Your Content Moves The Needle Where It Matters Most.",
            "bgcolor": "#6d3119",
            "logo": "/images/seo/expertise-1.webp"
        },
        {
            "title": "Multi-Format Expertise",
            "description": "From Blogs And Case Studies To Videos, Podcasts, And Social Campaigns, We Know How To Adapt Content To The Right Channel And Audience.",
            "bgcolor": "#474574",
            "logo": "/images/seo/expertise-2.webp"
        },
        {
            "title": "Data-Driven Decisions",
            "description": "Our Strategies Are Powered By Insights. We Constantly Analyze Performance To Double Down On What Works.",
            "bgcolor": "#3e484b",
            "logo": "/images/seo/expertise-3.webp"
        },
        {
            "title": "Results That Matter",
            "description": "Whether It's More Traffic, Stronger Leads, Or Higher Conversions, We Focus On Outcomes You Can Measure, Not Vanity Metrics.",
            "bgcolor": "#6d3119",
            "logo": "/images/contentMarketingService/wc-4.png"
        }
    ];
    
    return (
        <CommonGridBox3Scrollable title={title} description={description} data={data} />
    );
}
