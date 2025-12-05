import CommonTwoCard from '../common/CommonTwoCard'

export const IndustryNeeds =()=>{
    const data = {
    heading: "Marketing That Fits Your Industry’s Unique Needs",
    subheading:
      "Different industries demand different approaches. Our industry-specific B2B marketing expertise allows us to craft campaigns that speak the language of your sector.",
    cards: [
            {
              title: "Technology & SaaS",
              description:
                "We show your product to people through demos. We run LinkedIn campaigns to reach the right audience. We also hold webinars where your experts can talk about new ideas and innovation. This helps people understand your product and see your brand as a leader.",
            },
            {
              title: "Manufacturing",
              description:
                "We help you show your work at trade shows. We write case studies that explain how you solve hard problems. We also create useful content that teaches people about your solutions. This makes your brand trusted as a problem-solver.",
            },
            {
              title: "Professional Services",
              description:
                "We make content that shows your knowledge. We write whitepapers that explain your expertise. We run referral campaigns that bring new clients. All of this helps build trust with important clients.",
            },
            {
              title: "Healthcare",
              description:
                "We create campaigns that follow rules and regulations. We send messages to the right people in your industry. We share expert insights that show your knowledge. This helps decision-makers trust your brand and feel confident working with you.",
            },
        ],
    };
    
    return (
        <>
            <CommonTwoCard {...data}/>
            <p className='max-w-[900px] text-center mx-auto mb-30'>We adapt strategies for each sector to resonate with your target audience and deliver measurable results.</p>
        </>
    )
}