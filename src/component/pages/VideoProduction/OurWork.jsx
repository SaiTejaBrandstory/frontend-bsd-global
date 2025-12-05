import { CommonThreeCardBlur } from "../common/CommonThreeCardBlur"

export const OurWork = ()=>{
    const data = [
        {
            logo: "/images/SoftwareDev/ft-1.png",
            title: "Tech SaaS Brand",
            description: "A product explainer video that increased views by 300% in 60 days",
            bg: ""
        },
        {
            logo: "/images/SoftwareDev/ft-2.png",
            title: "Retail Client",
            description: "Social campaign that boosted engagement 4x during the holiday season",
            bg: ""
        },
        {
            logo: "/images/SoftwareDev/ft-3.png",
            title: "EduTech Company",
            description: "Training series that reduced customer onboarding time by 40%",
            bg: ""
        }
    ]

    return (
       <CommonThreeCardBlur
            heading="Our Work"
            subheading="<b class='highlited-text'>Your vision. Our execution. Real results.</b><br/><br/>Explore our video production case studies where creativity meets ROI:"
            data={data}
            footer="Our video portfolio highlights impactful video production projects and measurable client success stories that prove the value of every pixel."
       />
    )
}