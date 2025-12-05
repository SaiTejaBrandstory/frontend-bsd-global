import { CommonBwThreeCard } from "../common/CommonBwThreeCard"

export const B2CTechStack = () => {
    // Updated based on the main heading and sub-heading from the image
    const title = "Our B2C Marketing Tools & Technology Stack";
    const description = "We Use Advanced Tools To Make Campaigns Precise And Effective:";
    // Updated based on the footer text in the image
    const footer = "These Platforms Help Us Automate Tasks, Design Creative Campaigns, Target Audiences Carefully, And Track Every Step. Our B2C Marketing Tools Make Sure Every Strategy Is Guided By Data, So Campaigns Are Measurable, Scalable, And Deliver Real Results.";
    // Updated based on the three cards in the image
    const data = [
        {
            "title": "Google Ads, <br/> Meta Ads Manager",
            "description": `
                To run ads that reach the right people at the right time.
            `
        },
        {
            "title": "Klaviyo, <br/> Shopify, HubSpot",
            "description": `
                To manage email campaigns, e-commerce, and customer relationships smoothly.
            `
        },
        {
            "title": "SEMrush, <br/> Canva",
            "description": `
                To plan strategies, track performance, and create engaging visuals.
            `
        }
    ];
    return (
        <CommonBwThreeCard title={title} description={description} footer={footer} cardData={data} />
    );
}