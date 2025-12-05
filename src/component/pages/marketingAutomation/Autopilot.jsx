import { CommonThreeCardBlur } from "../common/CommonThreeCardBlur"

export const Autopilot = ()=>{
    const data = [
        {
            logo: "images/MarketingAutomation/a-1.png", 
            title: "Lead Scoring",
            description: "Not every lead is ready to buy right away. We keep track of who is most interested and ready to take action, and who needs more nurturing. This makes sure your sales team talks to the right people at the right time, so no opportunity is missed.",
            bg: "/images/three-card-blur-bg-1.png"
        },
        {
            logo: "images/MarketingAutomation/a-2.png", 
            title: "Instructional and Informative Sequences",
            description: "Step-by-step messages show exactly how your products or services solve their problems. These messages teach leads what they need to know and help them see the value your brand provides.",
            bg: "/images/three-card-blur-bg-2.png"
        },
        {
            logo: "images/MarketingAutomation/a-3.png", 
            title: "Lead Scoring",
            description: "Not every lead is ready to buy right away. We keep track of who is most interested and ready to take action, and who needs more nurturing. This makes sure your sales team talks to the right people at the right time, so no opportunity is missed.",
            bg: "/images/three-card-blur-bg-3.png"
        }
    ]

    return (
       <CommonThreeCardBlur
       heading="Autopilot Lead Nurturing That Boosts Sales"
       subheading="Leads can go cold fast. Automated lead nurturing keeps them engaged."
       data={data}
       footer="This moves leads faster through your pipeline and boosts sales."
       />
    )
}