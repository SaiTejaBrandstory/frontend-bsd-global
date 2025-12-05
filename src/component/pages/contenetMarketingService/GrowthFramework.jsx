import CommonTwoCard from '../common/CommonTwoCard'

export const GrowthFramework =()=>{
    const data = {
    heading: "The BrandStory Content Growth Framework",
    highlight: "From Idea to Impact",
    subheading:
      "We follow a simple, practical system to make content effective:",
    cards: [
            {
              title: "Research",
              description:
                "We start by learning about your target market, your rivals, and the trends in your sector. This aids in our comprehension of what people desire and what will capture their interest.",
            },
            {
              title: "Creation",
              description:
                "Next, we create content that aligns with your brand and is useful and simple to understand. All of your content, blogs, social media posts, and videos are made to engage your audience.",
            },
            {
              title: "Distribution",
              description:
                "High-quality content must be viewed. To ensure that it reaches the right people at the right time, we share it on the platforms that your audience frequents, such as websites, email, and social media.",
            },
            {
              title: "Optimization",
              description:
                "After the content goes live, we continue to work on it. We monitor its performance, determine what works best, and make adjustments to achieve even greater outcomes.",
            },
        ],
    };
    
    return (
        <>
            <CommonTwoCard {...data}/>
            <p className='max-w-[900px] text-center mx-auto mb-30'>This framework ensures your content isn’t just published. It actually grows your brand.</p>
        </>
    )
}