import CommonTwoCard from '../common/CommonTwoCard'

export const SelectionOfOrm =()=>{
    const data = {
    heading: "The Reasons Behind BrandStory's Selection for ORM",
    subheading:
      "We At BrandStory Are Your Partners In Establishing Credibility And Trust Online, Not Just Reputation Managers. Here's Why Companies Depend On Us:",
    cards: [
            {
              title: "Proactive Monitoring",
              description:
                "We Keep A Close Eye On What People Are Saying About Your Brand Online. By Spotting Potential Issues Early, We Can Stop Problems Before They Grow.",
            },
            {
              title: "Quick, Discreet Crisis Management",
              description:
                "If Any Negative Situation Arises, We Act Fast And Professionally To Protect Your Reputation And Limit Damage.",
            },
            {
              title: "B2B And B2C Tailored Campaigns",
              description:
                "Every Strategy Is Customized For Your Audience, Industry, And Business Goals. This Ensures The Approach Fits Your Brand Perfectly.",
            },
            {
              title: "Measurable Outcomes",
              description:
                "We Track Improvements In Search Results, Review Scores, And Overall Brand Sentiment. This Way, You Can See Tangible Results From Our Efforts.",
            },
        ],
    };
    
    return (
        <>
            <CommonTwoCard {...data}/>
            <p className='max-w-[900px] text-center mx-auto mb-30'>BrandStory Is Chosen By Brands Because We Actively Build Credibility, Cultivate Trust, And Protect Long-Term Brand Value Rather Than Merely Solving Issues.</p>
        </>
    )
}