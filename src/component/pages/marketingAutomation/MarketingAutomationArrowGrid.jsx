import CommonArrowGrid from "../common/CommonArrowGrid"

export const MarketingAutomationArrowGrid = () =>{
    const heading = "Our Full Range of PPC Services"
    const descripton = "We provide a wide range of PPC services to support the online expansion of your company:"
     const boxesData = [
    {
        title: "Email Marketing",
        description: "Create automated email campaigns that nurture leads, engage customers, and drive measurable conversions.",
        theme: "light",
        size: "sm"
    },
    {
        title: "WhatsApp Marketing",
        description: "Reach your audience instantly with personalized, real-time messages that strengthen customer relationships.",
        theme: "dark",
        size: "sm"
    },
    {
        title: "Tool-Based Marketing Automation",
        description: "Simplify workflows using advanced tools and integrations that make your marketing smarter and more efficient.",
        theme: "dark",
        size: "sm"
    },
  ];
    return (
        <CommonArrowGrid 
        heading={heading}
        descripton={descripton}
         boxes={boxesData}
        />
    )
}