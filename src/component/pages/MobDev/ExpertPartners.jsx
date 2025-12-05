import { CommonBwThreeCard } from "../common/CommonBwThreeCard"

export const ExpertPartners = () => {
    const title = "Why Partner with Experts for Mobile App Development?";
    const description = "At BrandStory, We Combine Design Thinking, Engineering Excellence, And Digital Marketing Acumen To Build Apps That Perform.";
    const footer = "With BrandStory As Your App Development Company, You’re Not Just Outsourcing A Task—You’re Gaining A Strategic Partner Focused On Long-Term Success.";
    const data = [
        {
            "title": "Security & Compliance",
            "description": `
                From fintech to healthcare, our apps adhere to the highest industry security and data protection standards.
            `
        },
        {
            "title": "Scalable Engagement Models",
            "description": `
                Whether you need android app development services for a startup idea or a large enterprise solution, we offer the flexibility to match.
            `
        },
        {
            "title": "Post-Launch Support",
            "description": `
                Our work doesn’t end at deployment. From updates to optimization, we ensure your app continues to thrive.
            `
        }
    ];
    return (
        <CommonBwThreeCard title={title} description={description} footer={footer} cardData={data} />
    );
}