import { CommonBwThreeCard } from "../common/CommonBwThreeCard"

export const FlexibleLink = () => {
    const title = "Flexible Link Building Packages Tailored to Your Goals";
    const description = "We offer flexible engagement models to suit different needs and budgets:<br/><br/><b class='highlited-text'>Sample Packages:</b>";
    const footer = "";
    const data = [
        {
            "title": "Starter Plan",
            "description": `
                Ideal for early-stage brands or focused campaigns.
                <br/>
                Includes 10 quality backlinks per month from trusted sources.
            `
        },
        {
            "title": "Growth Plan",
            "description": `
                For growing businesses that need links and content.
                </br/>
                Includes 30 backlinks per month plus outreach-driven content creation.
            `
        },
        {
            "title": "Authority Plan",
            "description": `
                Designed for brands aiming to lead in their space.
                <br/>
                Includes 50+ backlinks per month, high-authority placements, and digital PR support.
            `
        }
    ];
    return (
        <CommonBwThreeCard rightPadding="50px" title={title} description={description}  footer={footer} cardData={data} />
    );
}