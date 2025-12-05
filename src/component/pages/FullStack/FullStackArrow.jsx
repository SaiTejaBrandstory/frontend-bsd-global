import CommonArrowGrid from '@/component/pages/common/CommonArrowGrid'

export const FullStackArrow = () => {
    const heading = "More on Our Content Marketing Services"
    const description = "Explore Related Services To Boost Your Content Strategy:"
    const boxesData = [
    {
        title: "Custom Software Development",
        description: "Transform your unique business processes into scalable software solutions. From enterprise-grade platforms to purpose-built internal tools, we engineer applications that align with your operations, users, and long-term goals.",
        size: "sm"
    },
    {
        title: "Website Design & Development",
        description: "Your website is often your first impression. We combine user-centric design with performance-driven development to create responsive, secure, and visually compelling websites that drive engagement and deliver measurable results.",
        size: "sm"
    },
    {
        title: "Mobile App Development",
        description: "Tap into the mobile-first economy with robust iOS and Android applications. Whether native or cross-platform, we craft apps that are intuitive, fast, and built to deliver real business impact across user journeys.",
        size: "sm"
    }
  ];
  
    return (
    <CommonArrowGrid boxes={boxesData} heading={heading} descripton={description}/>
    );    
}
