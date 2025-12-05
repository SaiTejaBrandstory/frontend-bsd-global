import FAQs from '@/component/pages/common/CommonFAQ'

export const B2CFaq = () => {
    const data = [
        {
            title: "How Long Does It Take For B2C Marketing To Show Results?",
            description: "The audience you want to reach, the type of campaigns, and the industry all influence the result .Though most of the brands see measurable outcomes in the first 3 months, in the form of leads, sales and engagement ."
        },
        {
            title: "Do You Conduct Consumer Campaigns Offline As Well As Online?",
            description: "Indeed. To increase reach, we offer both digital and physical channels for our B2C marketing services. From influencer and social media marketing to retail activations and events, we make sure your brand reaches customers wherever they are."
        },
        {
            title: "Can You Assist With A New Product's Launch?",   
            description: "Of course. We create focused launch campaigns that integrate influencer support, creative storytelling, and direct-to-consumer marketing. Our objective is to create anticipation, encourage initial purchases, and lay the groundwork for future expansion."
        },
        {
            title: "Which Platforms Are Most Effective For My Target Audience?",   
            description: "Your brand and consumer behavior will determine which platforms work best for you. Whether it's social media, Google Ads, email, or influencer networks, we use data to determine where your audience spends their time and then design a channel mix that will have the biggest impact."
        },
        {
            title: "How Is The Success Of A Campaign Measured?",   
            description: "Clear metrics like ROI, engagement rates, conversions, and customer retention are how we monitor performance. You can see the direct value and growth that each campaign generates with regular reporting."
        },
    ];

    return (
        <FAQs data={data}/>
    )
}