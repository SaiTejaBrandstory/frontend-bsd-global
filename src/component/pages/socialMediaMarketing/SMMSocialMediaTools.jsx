import { CommonThreeCardBlur } from "../common/CommonThreeCardBlur"

export const SMMSocialMediaTools = ()=>{
    const data = [
        {
            logo: "/images/three-card-icon-1.png",
            title: "Hootsuite, Buffer, Sprout Social",
            description: "These help us post on time and see how posts perform.",
            bg: "/images/three-card-blur-bg-1.png"
        },
        {
            logo: "/images/three-card-icon-2.png",
            title: "Later, Canva",
            description: "These help us design nice pictures, videos, and plan content in advance.",
            bg: "/images/three-card-blur-bg-3.png"
        },
        {
            logo: "/images/three-card-icon-3.png",
            title: "Google Analytics",
            description: "This shows how social media brings people to your website and helps you see what turns into sales.",
            bg: "/images/three-card-blur-bg-2.png"
        }
    ]

    return (
       <CommonThreeCardBlur
       heading="Our Social Media Tools and Platforms"
       subheading="To manage campaigns efficiently, we use a mix of tools. 
                Our social media marketing tools help with scheduling, analytics, and content creation:"
       data={data}
       footer=" These tools let us save time, stay organized, and focus on strategies that bring results."
       />
    )
}
