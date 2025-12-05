import FAQs from '@/component/pages/common/CommonFAQ'

export const Faq = () => {
    const data = [
        {
            title: "What Are Digital Transformation Services?",
            description: "<b>Digital transformation services</b> refer to the strategic use of technology to improve business operations, enhance customer experiences, and drive innovation. These services often include cloud transformation, legacy system modernization, data analytics, and process automation." 
        },
        {
            title: "What Does A Digital Transformation Consulting Services Company Do?",
            description: "A <b>digital transformation consulting services</b> company helps businesses assess their current digital maturity, create a transformation roadmap, and implement new technologies to achieve scalable growth and efficiency." 
        },
        {
            title: "How Do I Choose The Right Digital Transformation Service Provider?",
            description: "Look for a <b>digital transformation services provider</b> with industry experience, a proven track record, certified technology partnerships, and a customized approach that aligns with your business goals." 
        },
        {
            title: "What Industries Benefit Most From Digital Business Transformation Services?",
            description: "Industries such as finance, healthcare, manufacturing, retail, education, and professional services benefit greatly from <b>business digital transformation services</b> through automation, compliance, and customer-centric innovation." 
        },
        {
            title: "What's The Difference Between Digital Transformation As A Service And Traditional IT Consulting?",
            description: "<b>Digital transformation as a service</b> (DXaaS) offers continuous, cloud-based, and scalable digital enablement, while traditional IT consulting often focuses on project-based or infrastructure-specific solutions." 
        },
        {
            title: "How Long Does It Take To Implement Digital Transformation Services?",
            description: "The timeline depends on the scope and complexity of your project. Small-scale <b>digital transformation services</b> can take a few weeks, while enterprise-wide transformations may span several months to a year." 
        }
    ];

    return (
        <FAQs data={data}/>
    )
}