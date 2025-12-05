import CommonArrowGrid from '@/component/pages/common/CommonArrowGrid'

export const ApiArrwow = () => {
    const heading = "Complementary Digital Transformation Services"
    const description = "APIs are just the beginning. We also help brands scale with:"
    const boxesData = [
    {
        title: "Application Development",
        description: "Build secure, scalable web and mobile apps tailored to your workflows and customer journeys.",
        size: "sm",
        height:"380"
    },
    {
        title: "Application Integration",
        description: "Connect systems and unify your tech stack for seamless data flow and communication.",
        size: "sm",
        height: "380"
    },
    {
        title: "Application Modernization",
        description: "Update legacy software with modern architecture, improved UX, and cloud-ready performance.",
        size: "sm",
        height:"380"
    }
  ];

    return (
        <>
            <CommonArrowGrid boxes={boxesData} heading={heading} descripton={description}/>
            <p className='max-w-[1200px] mx-auto text-[18px] pb-20 text-center md: px-5 text-xs'>
                Our capabilities go beyond web app development, we power your entire digital transformation journey.
            </p>
        </>
    );    
}