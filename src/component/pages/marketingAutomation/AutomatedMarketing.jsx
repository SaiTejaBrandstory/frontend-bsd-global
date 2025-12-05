import { CommonThreeCardBlur } from "../common/CommonThreeCardBlur"

export const AutomatedMarketing = ()=>{
    const data = [
        {
            logo: "images/MarketingAutomation/am-1.png", 
            title: "Segment your audience",
            description: "We split your audience into groups so each person sees messages that matter most to them. This way, people get information that is useful and relevant, not random.",
            bg: "/images/three-card-blur-bg-1.png"
        },
        {
            logo: "images/MarketingAutomation/am-2.png", 
            title: "Trigger actions based on behavior",
            description: "Our system initiates the subsequent action automatically when a user clicks a link, makes a purchase, or visits your website. For instance, it could display a special offer or send a helpful email without human intervention.",
            bg: "/images/three-card-blur-bg-2.png"
        },
        {
            logo: "images/MarketingAutomation/am-3.png", 
            title: "Personalize messages",
            description: "Each one seems as though it was written especially for the recipient. They are more likely to act if it mentions their name, displays goods they like, or makes offers that align with their interests.",
            bg: "/images/three-card-blur-bg-3.png"
        }
    ]

    return (
       <CommonThreeCardBlur
       heading="Automated Marketing Guided by Real Data"
       subheading="<b class='highlited-text' style='margin-bottom:10px'> Automation is strong. Data makes it smart. </b> <br /> 
                With data-driven marketing automation, we can do many things: <br /><br/>"
       data={data}
       footer="<span>Klaviyo</span>, <span>Salesforce</span>, <span>ActiveCampaign</span>, and <span>HubSpot</span> are some of the tools we use to achieve this. We can learn what works and what doesn't from the numbers. We continuously monitor the results and make adjustments to the campaigns to ensure that your marketing continues to improve and produce quantifiable outcomes."
       />
    )
}