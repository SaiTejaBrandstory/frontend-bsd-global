import { CommonThreeCardBlur } from "../common/CommonThreeCardBlur"

export const FlexibleTech = ()=>{
    const data = [
        {
            logo: "/images/SoftwareDev/ft-1.png",
            title: "Backend",
            description: ".NET, Java, PHP",
            bg: ""
        },
        {
            logo: "/images/SoftwareDev/ft-2.png",
            title: "Frontend",
            description: "Angular, React",
            bg: ""
        },
        {
            logo: "/images/SoftwareDev/ft-3.png",
            title: "Database",
            description: "SQL Server, MySQL, MongoDB",
            bg: ""
        }
    ]

    return (
       <CommonThreeCardBlur
       heading="Flexible Tech for Fast-Moving Brands"
       subheading="From frontend agility to backend strength, we build your product on tech that scales."
       data={data}
       footer="Whether it’s robust Backend Solutions, dynamic Frontend Tools, or choosing the right Tech Stack, our team builds it right."
       />
    )
}