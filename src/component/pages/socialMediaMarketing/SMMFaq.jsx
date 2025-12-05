import FAQs from '@/component/pages/common/CommonFAQ';

export const SMMFaq = () => {
    const data = [
        {
            title: "What is the ideal platform for my company?",
            description: "Who you wish to reach will determine this. Facebook has wide reach across age groups, LinkedIn is ideal for professionals, while Instagram and TikTok are ideal for younger consumers."
        },
        {
            title: "How frequently ought I to publish?",
            description: "The secret is consistency. Posting three to five times a week is effective for the majority of businesses; however, the precise frequency will vary depending on your platform and audience."
        },
        {
            title: "What distinguishes sponsored social media from organic social media?",
            description: "Free organic posts gradually foster a devoted following. Conversely, paid advertisements enable you to target particular individuals and get leads or purchases more quickly."
        },
        {
            title: "How long until I see results?",
            description: "You may start seeing engagement within weeks, but steady growth and measurable sales usually take a few months of consistent effort."
        },
        {
            title: "Do you handle content creation?",
            description: "Yes. We design graphics, videos, posts, and ad creatives that align with your brand and support your overall strategy."
        }
    ];

    return (
        <FAQs data={data} />
    );
};