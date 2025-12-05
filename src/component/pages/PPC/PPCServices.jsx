
import CommonArrowGrid from '@/component/pages/common/CommonArrowGrid'

export const PPCServices = () => {
    const heading = "Our Full Range of PPC Services"
    const description ="We provide a wide range of PPC services to support the online expansion of your company:"

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
        size: "md"
    },
  ];
  
    return (
    <CommonArrowGrid
    heading={heading}
    descripton={description}
    boxes={boxesData} />
    );    
}
