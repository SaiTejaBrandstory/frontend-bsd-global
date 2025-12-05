import FAQs from '@/component/pages/common/CommonFAQ';

export const BrandingFaq = () => {
    const data = [
        {
            title: "How long does the branding process take?",
            description: "Most projects take about 4–8 weeks, depending on how big the project is. After our discovery phase, we share a clear timeline so you know exactly what to expect."
        },
        {
            title: "Do you handle both visual and verbal brand identity?",
            description: "Yes. We create a complete brand identity that includes logos, color palettes, fonts, tone of voice, and messaging. This ensures your brand is consistent and professional everywhere."
        },
        {
            title: "Can you refresh my existing brand without doing a full rebrand?",
            description: "Absolutely. Our brand refresh updates your visual identity and messaging to feel modern and relevant, while keeping the core values your audience already trusts."
        },
        {
            title: "Do you work with startups as well as big companies?",
            description: "Yes. We design branding solutions for startups, small and medium businesses, and global enterprises. Every strategy is tailored to your size, goals, and audience."
        },
        {
            title: "How do you make sure my brand stands out from competitors?",
            description: "We use research, competitor analysis, and strategic positioning to highlight what makes your brand unique. This helps your brand get noticed and remembered."
        },
        {
            title: "Will I get a brand guidelines document?",
            description: "Yes. Every project comes with a detailed brand book. It helps you apply your brand consistently across all channels, from digital to print."
        }
    ];

    return (
        <FAQs data={data} />
    );
};