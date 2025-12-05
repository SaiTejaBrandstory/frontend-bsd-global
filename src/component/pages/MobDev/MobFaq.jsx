import FAQs from '@/component/pages/common/CommonFAQ'

export const MobFaq = () => {
    const data = [
        {
            title: "What Does A Mobile App Development Company Do?",
            description: "A mobile app development company creates apps that meet business goals and user needs. At BrandStory, we design, build, and optimize apps that solve real-world problems while delivering intuitive experiences and measurable results."
        },
        {
            title: "How Long Does It Take To Build A Mobile App?",
            description: "Development timelines range from 4 weeks to 12 months, depending on complexity, custom features, integrations, and testing requirements."
        },
        {
            title: "How Much Does Custom Mobile App Development Cost?",
            description: "Costs vary based on project scope and business model. BrandStory provides transparent estimates after requirement analysis to ensure value at every stage."
        },
        {
            title: "What's The Difference Between Native And Cross-Platform Apps?",
            description: "Native apps are built for specific platforms (iOS or Android) with better performance and security. Cross-platform apps use a shared codebase, offering faster deployment and cost-efficiency across platforms."
        },
        {
            title: "Why Choose BrandStory?",
            description: "We build apps that drive outcomes. With agile execution, proven frameworks, and deep domain expertise, every feature, design, and strategy focuses on one goal: your business growth."
        },
    ];


    return (
        <FAQs data={data}/>
    )
}