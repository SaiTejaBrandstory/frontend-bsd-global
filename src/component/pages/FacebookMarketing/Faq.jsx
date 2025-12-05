import FAQs from '@/component/pages/common/CommonFAQ'

export const Faq = () => {
    const data = [
        {
            title: "How much budget do I need for Facebook Ads?",
            description: "" 
        },
        {
            title: "How soon can I see results?",
            description: "" 
        },
        {
            title: "What if my ads don’t work?",
            description: "" 
        },
        {
            title: "Is ad design included?",
            description: "" 
        },
        {
            title: "Can I run Instagram ads too?",
            description: "" 
        }
    ];

    return (
        <FAQs
            data={data}
        />
    )
}