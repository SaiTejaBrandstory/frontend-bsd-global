import CommonTwoCard from '../common/CommonTwoCard'

export const BrandingSuccess =()=>{
    const data = {
    heading: "The BrandStory Approach to Branding Success",
    subheading:
      "Our Branding Services Follow A Clear Framework. This Makes Sure Your Brand Fits Your Goals And Connects With Your Audience.",
    cards: [
            {
              title: "Brand Discovery & Research",
              description:
                "We Dive Deep Into Your Business, Your Competitors, And Your Audience. We Look For Chances To Grow And Problems To Fix. What We Find Here Guides All The Next Steps.",
            },
            {
              title: "Strategy & Positioning",
              description:
                "We Define Your Brand Voice, Promise, And Market Positioning. Every Decision And Message Is Based On This.",
            },
            {
              title: "Visual & Verbal Identity Design",
              description:
                "Your Logo, Colors, Fonts, And Tone Of Voice All Work Together. This Makes Your Brand Easy To Recognize And Remember.",
            },
            {
              title: "Brand Experience & Rollout",
              description:
                "We Bring Your Brand To Life Everywhere, Websites, Social Media, Packaging, Events, And Ads. Everything Is Consistent And Makes A Strong Impression.",
            },
        ],
    };
    
    return (
        <>
            <CommonTwoCard {...data}/>
            <p className='max-w-[900px] text-center mx-auto mb-30'>
              At Each Stage, We Give Clear Results. You Get Research Reports, Strategy Papers, And Full Brand Guidelines So You Can See Your Brand Grow.
            </p>
        </>
    )
}
