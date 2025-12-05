import { CommonBwCrd } from "../common/CommonBwCard"

export const SMMCommonBwCard = () =>{
    const title = "Creating Communities Through Powerful Storytelling"
    const description = "People remember stories, not ads. Our social media storytelling makes your brand relatable and interesting. We use real-life situations, trends, and customer experiences to create content that people connect with."
    const footer = "The idea is to make your followers feel like part of your brand, not just spectators. When people connect emotionally, they engage more, share more, and trust your brand."
    const data = [
        {
            "title" : "User-generated content (UGC)",
            "description": "Customers themselves can sometimes tell the best stories about your brand. Real consumer experiences, reviews, images, and videos are encouraged and shared. This increases brand authenticity and relatability while also fostering trust."
        },
        {
            "title" : "Influencers",
            "description": "We match content producers and influencers with your brand who actually appeal to your target market. Whether you're a local micro-influencer, lifestyle blogger, or specialized specialist, we help you connect with people who are more likely to interact, trust, and buy."
        }
    ]
    return (
        <CommonBwCrd title={title} description={description} footer={footer} cardData={data}/>
    )
}