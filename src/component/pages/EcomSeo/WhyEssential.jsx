import { CommonBwThreeCard } from "../common/CommonBwThreeCard"

export const WhyEssential = () => {
    const title = "Why eCommerce SEO Is Essential for Online Success";
    const description = "";
    const footer = "";
    const data = [
        {
            "title": "High Intent Traffic That Converts",
            "description": `
                People using search engines are already looking for something. With the right relevant keywords, you show up at the exact moment they want to buy.
            `
        },
        {
            "title": "Long-Term ROI vs. Paid Ads",
            "description": `
                SEO builds long-term visibility. While ads stop the moment you pause spending, SEO keeps working in the background.
            `
        },
        {
            "title": "Visibility on Google, Amazon & Marketplaces",
            "description": `
                We help you appear on Google Shopping, marketplace search, and voice assistants using optimized product feeds and schemas.
            `
        }
    ];
    return (
        <CommonBwThreeCard rightPadding="50px" title={title} description={description}  footer={footer} cardData={data} />
    );
}