import { CommonThreeCardBlur } from "../common/CommonThreeCardBlur"

export const AudienceTargeting = ()=>{
    const data = [
        {
            logo: "/images/ppc/3-card-1.png",
            title: "Custom And Lookalike Audiences",
            description: "Focus On Those That Resemble Your Most Loyal Clients.",
            bg: "/images/three-card-blur-bg-1.png"
        },
        {
            logo: "/images/ppc/3-card-2.png",
            title: "In-Market Segments & Behavioral Targeting",
            description: "Reach Consumers Who Are Actively Looking For Goods Or Services Similar To Yours.",
            bg: "/images/three-card-blur-bg-2.png"
        },
        {
            logo: "/images/ppc/3-card-3.png",
            title: "Sequential Remarketing & Dynamic Ads",
            description: "Re–Engage Previous Visitors With Personalized Messages That Entice Them To Come Back And Convert.",
            bg: "/images/three-card-blur-bg-3.png"
        }
    ]

    return (
       <CommonThreeCardBlur
       heading="Advanced Audience Targeting & Remarketing"
       subheading="We Use Advanced PPC Audience Targeting To Make Sure Your Ads Reach The People Most Likely To Take Action. Our Techniques Include:"
       data={data}/>
    )
}