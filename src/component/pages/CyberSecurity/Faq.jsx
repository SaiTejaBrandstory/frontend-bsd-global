import FAQs from '@/component/pages/common/CommonFAQ'

export const Faq = () => {
    const data = [
        {
            title: "What Is Included In Your Cybersecurity Services?",
            description: "We offer assessments, audits, <b>managed cybersecurity services</b>, compliance reviews, and testing. Everything is built for ongoing protection."
        },
        {
            title: "What Industries Do You Serve With Your Cybersecurity Consulting Services?",
            description: "We serve BFSI, healthcare, retail, SaaS, manufacturing, and more with <b>cybersecurity consulting services</b> built for each industry."
        },
        {
            title: "How Are Managed Cybersecurity Services Different From In-House Teams?",
            description: "With <b>managed cybersecurity services</b>, you get round-the-clock support and quicker threat response, without needing an internal team."
        },
        {
            title: "What’s The Purpose Of A Cybersecurity Assessment Service?",
            description: "It helps you find weak points, measure risks, and plan fixes. Our <b>cybersecurity assessment services</b> show what matters most."
        },
        {
            title: "Do You Provide Cybersecurity As A Service (CSaaS) For Small Businesses?",
            description: "Yes. We have simple <b>cybersecurity as a service</b> options for SMBs that are easy to start and scale as needed."
        },
        {
            title: "How Do I Know If I Need A Penetration Test?",
            description: "If you handle sensitive data or run an online platform, <b>penetration testing</b> is a must, especially before launching new features."
        }
    ];

    return (
        <FAQs data={data}/>
    )
}