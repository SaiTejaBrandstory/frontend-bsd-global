import FAQs from '@/component/pages/common/CommonFAQ'

export const OrmFaq = () => {
    const data = [
        {
            title: "How long does it take to fix or improve my online reputation?",
            description: "Minor issues, like a few negative reviews or small search results, can often be fixed within a few weeks. Larger challenges, such as widespread negative content, may take three to six months. After we audit your brand, we provide a clear and realistic timeline so you know what to expect."
        },
        {
            title: "Is it possible to completely remove negative reviews or search results?",
            description: "Content that violates platform policies can sometimes be removed. For everything else, we use suppression techniques and promote positive content to improve your overall online presence and reputation."
        },
        {
            title: "Do you only provide crisis recovery, or do you also offer proactive reputation management?",
            description: "We handle both. Our strategies prevent potential issues before they escalate, while our crisis management approach quickly restores your brand image if something goes wrong."
        },
        {
            title: "How do you monitor my brand’s online reputation?",
            description: "We use advanced tools to track mentions across search engines, social media, review sites, and news portals. Real-time alerts let us respond immediately to any negative mentions or emerging issues."
        },
        {
            title: "Is Online Reputation Management only for large brands?",
            description: "Not at all. Startups, SMBs, and even individuals can benefit from ORM. We create tailored strategies that protect credibility, build trust, and strengthen your presence online regardless of business size."
        },
        {
            title: "How do you measure the success of ORM campaigns?",
            description: "We track key indicators such as brand sentiment, review ratings, and search result changes. Every month, we provide reports showing measurable improvements and actionable insights to keep your reputation strong."
        }
    ];

    return (
        <FAQs data={data}/>
    )
}