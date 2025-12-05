
import CommonArrowGrid from '@/component/pages/common/CommonArrowGrid'

const SeoMarketingService = () => {
    const heading = "Explore More of Our SEO Marketing Services"
    const description ="Our expertise covers every area of search optimisation. Depending on your business goals, you may also want to explore:"
    const boxesData = [
    {
        title: "Enterprise SEO",
        description: "Scalable Strategies For Large, Complex Websites With Multiple Markets Or Locations.",
        theme: "light",
        size: "sm"
    },
    {
        title: "E-Commerce SEO",
        description: "Product-Focused Optimisation To Increase Visibility, Improve User Experience, And Drive More Online Sales.",
        theme: "dark",
        size: "md"
    },
    {
        title: "Link Building",
        description: "Quality Backlink Strategies That Build Authority And Strengthen Search Rankings.",
        theme: "dark",
        size: "sm"
    },
    {
        title: "Local SEO",
        description: "Targeted Optimisation To Improve Your Presence In Map Listings And Local Search Results.",
        theme: "dark",
        size: "sm"
    },
    {
        title: "AEO Optimisation",
        description: "Fine-Tuning Your Site For Answer Engines And Voice Search To Capture Emerging Search Opportunities.",
        theme: "dark",
        size: "sm"
    },
    {
        title: "SEO For LLM",
        description: "Optimising For Large Language Models To Ensure Your Content Is Surfaced By AI-Driven Search Tools.",
        theme: "dark",
        size: "lg"
    }
  ];
  
    return (
    <CommonArrowGrid boxes={boxesData} heading={heading} descripton={description}/>
    );    
}

export default SeoMarketingService;