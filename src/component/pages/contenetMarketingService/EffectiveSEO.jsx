import { CommonThreeCardBlur } from "../common/CommonThreeCardBlur"

export const EffectiveSEO = () => {
    const data = [
        {
            logo: "images/MarketingAutomation/a-1.png", 
            title: "Selecting The Appropriate Keywords",
            description: "This Will Make It Easier For People Looking For Your Goods Or Services To Find You.",
            bg: "/images/three-card-blur-bg-1.png"
        },
        {
            logo: "images/MarketingAutomation/a-2.png", 
            title: "Clear Page Structure",
            description: "Content Should Be Arranged To Make It Easy For Both Humans And Search Engines To Read And Comprehend.",
            bg: "/images/three-card-blur-bg-2.png"
        },
        {
            logo: "images/MarketingAutomation/a-3.png", 
            title: "Optimisation",
            description: "Ensuring That All Formats, Blogs, Landing Pages, Videos, And More Are Optimized To Reach The Appropriate Audience.",
            bg: "/images/three-card-blur-bg-3.png"
        }
    ]

    return (
       <CommonThreeCardBlur
       heading="SEO That Is Effective"
       subheading="The Value Of Great Content Depends On Its Accessibility. We Ensure That Your Content Is Seen. This Comprises:"
       data={data}
       footer="The Outcome? Increased Website Traffic, More Business Leads, And Actual, Quantifiable Growth."
       />
    )
}
