import FAQs from '@/component/pages/common/CommonFAQ'

export const SeoFaq = () => {
    const data = [
        {
            title: "How long do SEO services take to show results?",
            description: "Most businesses start noticing improvements within three to six months. The exact timing depends on your industry, how healthy your website is now, and how competitive your market is. In highly competitive spaces, results may take longer but are often more sustainable once achieved."
        },
        {
            title: "What do your SEO services include?",
            description: "Our work covers the full scope of optimisation, detailed technical audits, on-page improvements, targeted content creation, link building, local and international SEO strategies, and performance tracking through Google Analytics. Each element is tailored to your business goals."
        },
        {
            title: "Will I have a dedicated SEO specialist managing my account?",
            description: "Yes. You'll have a dedicated strategist who understands your business and goals, supported by a full SEO team that handles strategy, writing, technical fixes, and analytics."
        },
        {
            title: "Do SEO services replace paid advertising?",
            description: "No. SEO and paid advertising work best together. SEO builds steady, long-term growth, while paid ads deliver quick, short-term visibility. Many of our clients run both for balanced results."
        },
        {
            title: "Are your SEO services compliant with Google guidelines?",
            description: "Yes. We use white label SEO services that follow Google best practices. This ensures sustainable rankings and protects your website from penalties."
        },
        {
            title: "Can your SEO services support multi-language or global websites?",
            description: "Yes. We manage global SEO campaigns with hreflang tags, localised content strategies, and keyword mapping for different regions and languages."
        },
        {
            title: "Will blogging help my SEO strategy?",
            description: "Yes. Publishing blogs regularly can improve internal linking, strengthen your topic authority, and bring in steady organic traffic over time, especially when optimised for search intent."
        }
    ];

    return (
        <FAQs data={data}/>
    )
}
