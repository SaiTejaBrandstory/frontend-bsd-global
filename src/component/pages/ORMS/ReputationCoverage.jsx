import CommonTwoImgDesc from "../common/CommonTwoImgDesc"

export const ReputationCoverage = () => {
    const data = {
        heading: "Multi-Platform Reputation Coverage",
        subHeading: "Your brand’s most important asset is its reputation, which is visible everywhere online. At BrandStory, we make sure it stays positive, trustworthy, and consistent across all platforms.",
        rows: [{
            img: "/images/ORMS/reputation-coverage.png",
            alt: "Multi-Format Content Expertise",
            text: [
                "We Create:<br/><br/>",
                "<ul><li><b>Search Engines (Google, Bing):</b> We make sure that when people search for your brand, they see reliable and trustworthy information first.</li></ul><br/>",
                "<ul><li><b>Review Websites (Google Reviews, Yelp, Glassdoor):</b> We keep an eye on reviews, respond to them, and manage them to build trust with customers, partners, and employees.</li></ul><br/>",
                "<ul><li><b>Social Media (LinkedIn, Facebook, Instagram, Twitter):</b> We maintain a professional and active presence to protect your reputation on social media.</li></ul><br/>",
                "<ul><li><b>Forums & News Sites:</b> We watch for mentions of your brand and join conversations when needed to protect your image.</li></ul><br/>",
                // "<ul><li>Emails And Landing Page Copy: Persuasive Materials That Encourage Leads To Take Action.</li></ul>",
                "We handle both B2B and B2C reputations with a clear strategy. Every channel is watched and managed to keep your brand viewed positively."
            ],
            reverse: true
        }]
    };

    return (
        <CommonTwoImgDesc data={data} />
    );
};