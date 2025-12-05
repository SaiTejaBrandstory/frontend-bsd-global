import { CommonBwThreeCard } from "../common/CommonBwThreeCard";

export const HighImpact = () => {
    // Content updated based on the provided image
    const title = "How We Deliver High-Impact IT Consulting Solutions";
    const description = "Not Your Average IT Consulting Services Company — We Operate As Your Extended Strategic Arm, Your Outside Brain Trust. With Our Battle-Tested IT Consultancy Services, You Get More Than Advice — You Get Direction, Execution, And Measurable Business Outcomes. Here's How We Make That Happen.";
    const footer = "We Don't Just Talk About Digital Transformation. We Deliver It. Every Engagement Is Backed By Insight, Precision, And Relentless Commitment To Value Creation.";

    const data = [
        {
            title: "Strategic foresight from top IT consultants who don't just follow trends",
            description: `
                they forecast them. Our consultants combine deep technical know-how with domain-specific understanding to align emerging technologies with your long-term business strategy. Whether it's AI, automation, cloud, or cybersecurity, we help you choose the right innovations — and apply them where they'll move the needle most.
            `
        },
        {
            title: "Complete, end-to-end IT solutions that span your ecosystem",
            description: `
                from foundational infrastructure and cloud-native architectures to enterprise-grade applications, data lifecycle management, and future-ready security protocols. We don't operate in silos. Every piece is integrated, every decision aligned to your goals, ensuring speed, reliability, and scalability at every layer of your technology stack.
            `
        },
        {
            title: "Always-on tech advisory that's as agile as your market",
            description: `
                In today's volatile business environment, passive support won't cut it. Our consultants operate as embedded strategic partners — constantly scanning the horizon for shifts in regulation, user behavior, and competitive pressure. We ensure you're not just adapting to change but capitalizing on it before others see it coming.
            `
        }
    ];

    return (
        <CommonBwThreeCard 
            title={title} 
            description={description} 
            footer={footer} 
            cardData={data} 
        />
    );
};