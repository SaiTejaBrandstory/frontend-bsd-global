import FAQs from '@/component/pages/common/CommonFAQ'

export const Faq = () => {
    const data = [
        {
            title: "What do IT consulting services include?",
            description: "Our consulting covers strategy, architecture design, systems integration, cloud transformation, cybersecurity, IT staffing, and ongoing performance optimization—tailored to your business needs."
        },
        {
            title: "How are IT consulting and IT services different?",
            description: "IT consulting provides strategic direction—defining what, why, and how. IT services handle execution—implementing the roadmap with tools, teams, and technologies."
        },
        {
            title: "What industries benefit from IT consultancy services?",   
            description: "We serve clients across healthcare, finance, retail, education, e-commerce, manufacturing, and other sectors that rely on digital infrastructure for growth and compliance."
        },
        {
            title: "How do you deliver IT strategy and roadmapping?",   
            description: "We start with deep-dive discovery, followed by gap analysis and future-state mapping—all aligned to your KPIs and transformation goals."
        },
        {
            title: "Can I hire consultants for short-term needs?",   
            description: "Absolutely. Whether you need a quick system audit, interim leadership, or project-based consulting, our flexible engagement models scale to your timeline."
        },
        {
            title: "What makes you a top-tier IT consulting partner?",   
            description: "Clients choose us for our proven outcomes, strategy-first mindset, and consistent delivery. We don’t just consult—we help you achieve measurable, scalable results."
        },
    ];

    return (
        <FAQs data={data}/>
    )
}