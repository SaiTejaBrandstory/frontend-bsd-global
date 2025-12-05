import FAQs from '@/component/pages/common/CommonFAQ'

export const Faq = () => {
    const data = [
        {
            title: "What types of consulting services do you offer?",
            description: "We provide end-to-end consulting across strategy, marketing, operations, and technology. Each service is tailored to meet your specific industry, goals, and growth challenges."
        },
        {
            title: "How do I know if I need a consultant?",
            description: "If your business is experiencing stagnation, operational inefficiencies, or unclear strategic direction, a consultant can bring in external expertise and a structured, data-driven plan to move forward."
        },
        {
            title: "How soon can I expect results?",
            description: "While timelines vary by project, most clients begin seeing measurable improvements within 30 to 90 days, especially in lead quality, operational efficiency, or digital performance."
        },
        {
            title: "Are your services customizable?",
            description: "Absolutely. Every engagement is built around your business goals, team capabilities, and market conditions—ensuring a fully tailored solution, not a one-size-fits-all approach."
        },
        {
            title: "Is the first consultation free?",
            description: "Yes. We offer a complimentary 30-minute strategy session to assess your current position and explore how we can help drive your business forward."
        },
    ];

    return (
        <FAQs data={data}/>
    )
}
