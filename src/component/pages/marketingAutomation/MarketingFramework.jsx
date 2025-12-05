import CommonTwoCard from '../common/CommonTwoCard'

export const MarketingFramework =()=>{
    const data = {
    heading: "The BrandStory Automated Marketing Framework",
    highlight: "From Awareness to Repeat Purchases",
    subheading:
      "Our Marketing Automation Strategy Covers The Full Journey Of Your Customer.",
    cards: [
            {
              title: "Lead Capture",
              description:
                "Say Hello To New Leads Automatically And Start The Conversation Right Away.",
            },
            {
              title: "Lead Nurturing",
              description:
                "To Keep People Interested And Involved, Send Them Useful Advice, Emails, Or Guides.",
            },
            {
              title: "Conversion Optimization",
              description:
                "To Promote Sales, Remind Customers Of Their Preferences, Offer Extras, Or Share Exclusive Deals.",
            },
            {
              title: "Retention",
              description:
                "Offer Discounts Or Messages To Devoted Clients To Encourage Them To Return.",
            },
        ],
    };
    
    return (
        <>
            <CommonTwoCard {...data}/>
            <p className='max-w-[900px] text-center mx-auto mb-30'>With Customer Journey Automation, Nothing Gets Missed. Every Step Counts.</p>
        </>
    )
}