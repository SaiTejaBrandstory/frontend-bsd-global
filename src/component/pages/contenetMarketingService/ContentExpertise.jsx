import CommonTwoImgDesc from "../common/CommonTwoImgDesc"

export const ContentExpertise = () => {
    const data = {
        heading: "Multi-Format Content Expertise",
        subHeading: "Different Goals Need Different Content. Some People Read Blogs. Some Watch Videos. Some Respond To Infographics.",
        rows: [{
            img: "/images/contentMarketingService/content-expertise.png",
            alt: "Multi-Format Content Expertise",
            text: [
                "We Create:",
                "<ul><li>Blogs, Articles, And Whitepapers: For In-Depth, Educational Writing.</li></ul>",
                "<ul><li>Case Studies And Client Testimonials: Actual Instances That Highlight The Worth Of Your Brand.</li></ul>",
                "<ul><li>Podcasts And Videos: Captivating Mediums For Spreading Your Message And Drawing In Listeners.</li></ul>",
                "<ul><li>Infographics And Social Media Content: Quick, Visually Appealing Materials That People Enjoy Sharing.</li></ul>",
                "<ul><li>Emails And Landing Page Copy: Persuasive Materials That Encourage Leads To Take Action.</li></ul>",
                "Every Format Is Chosen Based On What Your Audience Prefers And What Drives Results. We Adapt The Tone And Style To Match Your Brand Personality, Keeping Your Message Consistent And Clear."
            ],
            reverse: true
        }]
    };

    return (
        <CommonTwoImgDesc data={data} />
    );
};