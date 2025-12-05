import { CommonThreeCardBlur } from "../common/CommonThreeCardBlur"

export const SmartB2BGrowth = () => {
    const data = [
        {
            logo: "images/MarketingAutomation/a-1.png", 
            title: "Seamless Multi-Channel Marketing",
            description: "Your Buyers Don't Stick To Just One Platform. They Move Between LinkedIn, Google Searches, Emails, Webinars, And Industry Events. We Make Sure Your Brand Shows Up Consistently Across All Of These Channels. Every Touchpoint Is Designed To Reinforce Your Message, Build Familiarity, And Earn Trust, So Your Audience Remembers You When It's Time To Make A Decision.",
            bg: "/images/three-card-blur-bg-1.png"
        },
        {
            logo: "images/MarketingAutomation/a-2.png", 
            title: "Data-Driven Decisions",
            description: "Marketing Without Real Insights Is Guesswork. We Dig Into What Buyers Are Looking For, Monitor Competitors, And Spot The Best Opportunities For Your Business. Using Tools Like LinkedIn, HubSpot, SEMrush, And ZoomInfo, We Track Behavior, Refine Targeting, And Adjust Campaigns Along The Way. This Ensures Your Marketing Is Focused, Efficient, And Effective.",
            bg: "/images/three-card-blur-bg-2.png"
        },
        {
            logo: "images/MarketingAutomation/a-3.png", 
            title: "Building Authority That Converts",
            description: "Trust Is Everything In B2B. We Help Your Brand Become A Credible, Authoritative Voice By Creating Whitepapers, Hosting Webinars, Publishing Industry Reports, And Speaking At Events. When Buyers See Your Expertise, They Feel Confident Choosing Your Brand Over Competitors, And They're More Likely To Stay Loyal.",
            bg: "/images/three-card-blur-bg-3.png"
        },
        {
            logo: "images/B2BMarketing/b2b-complex-4.png", 
            title: "Account-Based Marketing",
            description: "Big Clients Require A Personal Touch. We Design Campaigns Specifically For High-Value Accounts, Crafting Messages And Content That Speak Directly To Their Challenges. This Approach Strengthens Relationships, Shortens Sales Cycles, And Increases Deal Sizes, Making Every Effort Count.",
            bg: "/images/three-card-blur-bg-2.png"
        },
        {
            logo: "images/B2BMarketing/b2b-complex-5.png", 
            title: "Lead Nurturing",
            description: "Not Every Lead Is Ready To Buy Immediately. We Keep Prospects Engaged With Helpful Emails, Targeted Ads, And Content That Provides Value At Each Stage Of Their Journey. Over Time, These Interactions Build Trust And Guide Leads Toward A Decision, Giving Your Sales Team Warmer, More Qualified Prospects Who Are Ready To Convert.",
            bg: "/images/three-card-blur-bg-3.png"
        }
    ]

    return (
       <CommonThreeCardBlur
       heading="Smart B2B Campaigns for Complex Sales Cycles"
       subheading=""
       data={data}
       />
    )
}