import { CommonBwThreeCard } from "../common/CommonBwThreeCard"

export const CustomerFeedbackLoops = () => {
    const title = "Review Management and Customer Feedback Loops";
    const description = "Customer reviews impact choices, foster trust, and mold the image of your company. We at BrandStory help turn reviews to your advantage.";
    const footer = "We assist you in strengthening your brand, gaining devoted clients, and upholding a positive online image that fosters trust at every turn by establishing an organized feedback loop.";
    const data = [
        {
            "title": "Automated <br/> Review Requests",
            "description": `
                We contact clients at the appropriate time to get candid feedback and highlight satisfying experiences.
            `
        },
        {
            "title": "Professional Response Techniques",
            "description": `
                Complaints and unfavorable reviews are handled with consideration and promptness, transforming possible problems into chances to demonstrate concern.
            `
        },
        {
            "title": "Tracking and Insights",
            "description": `
                We use cutting-edge technologies to track ratings and spot patterns in order to continuously enhance your goods, services, and clientele's experience.
            `
        }
    ];
    return (
        <CommonBwThreeCard title={title} description={description} footer={footer} cardData={data} />
    );
}
