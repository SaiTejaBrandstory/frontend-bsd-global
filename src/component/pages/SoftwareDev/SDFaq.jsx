import FAQs from '@/component/pages/common/CommonFAQ'

export const SDFaq = () => {
    const data = [
        {
            title: "How long does it take to build custom software?",
            description: "Most of our custom software projects take between 8 to 20 weeks, depending on the features, third-party integrations, and overall complexity. Timelines are always discussed and aligned upfront to match your business goals."
        },
        {
            title: "How much does a software project cost?",
            description: "Project costs vary based on your specific requirements—such as platform selection, number of features, and delivery timelines. We offer flexible pricing models to ensure cost-efficiency without compromising quality."
        },
        {
            title: "Can I see the progress regularly?",   
            description: "Yes. With our Agile delivery approach, you'll receive regular sprint demos, progress updates, and review cycles. This ensures full transparency and allows timely feedback throughout the development process."
        },
        {
            title: "What tech stack do you use?",   
            description: "We choose the technology stack based on your business objectives and scalability needs. Our expertise spans across React, Angular, .NET, Java, SQL, MongoDB, and other modern enterprise software platforms."
        },
        {
            title: "Will I get post-launch support?",   
            description: "Absolutely. We provide full-cycle support that includes performance monitoring, troubleshooting, software updates, and adding new features—ensuring your product evolves with your business."
        },
    ];

    return (
        <FAQs data={data}/>
    )
}