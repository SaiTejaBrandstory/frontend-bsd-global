import { CommonThreeCardBlur } from "../common/CommonThreeCardBlur"

export const CrisisManagement = () => {
    const data = [
        {
            logo: "images/rounded-icons/r48.png", 
            title: "24/7 Monitoring",
            description: "In Order To Identify Unfavorable Mentions As Soon As They Surface, We Monitor Online Platforms Continuously",
            bg: "/images/three-card-blur-bg-1.png"
        },
        {
            logo: "images/MarketingAutomation/a-2.png", 
            title: "Quick Reaction",
            description: "Our Staff Acts Right Away To Resolve Issues, Dispel Rumors, And Lessen Damage To Our Reputation.",
            bg: "/images/three-card-blur-bg-2.png"
        },
        {
            logo: "images/MarketingAutomation/a-3.png",
            title: "Clear Escalation Procedures",
            description: "We Adhere To Structured Procedures In Critical Situations To Make Sure That No Issues Are Overlooked And That Each One Receives The Appropriate Amount Of Attention.",
            bg: "/images/three-card-blur-bg-3.png"
        }
    ]

    return (
       <CommonThreeCardBlur
       heading="Crisis Management and Rapid Response"
       subheading="We Don't Wait, And Neither Do Reputational Issues. Speed And Strategy Are Crucial When A Crisis Arises. BrandStory Assists Companies In Taking Swift, Composed, And Efficient Action To Safeguard Their Reputation."
       data={data}
       footer="We Have Assisted Brands In Swiftly Recovering, Reestablishing Trust, And Preserving Business Continuity In The Face Of Abrupt Waves Of Bad Press And Viral Complaints. You Won't Ever Have To Deal With A Reputation Crisis Alone When You Work With Us."
       />
    )
}