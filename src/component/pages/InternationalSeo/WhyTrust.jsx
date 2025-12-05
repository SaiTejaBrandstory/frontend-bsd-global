import CommonFourCardStats from '../common/CommonFourCardStats';

export const WhyTrust =()=>{
    const data = {
    // Updated Heading and Subheading based on the image
    heading: "Why Global Brands Trust Our International SEO Services",
    subheading: "Not All Link Building Is The Same. Some People Take Shortcuts, Others Play Games With Search Engines. We Don't Do That. We Focus On What's Real, What Works, And What Lasts. Our Approach Is Simple, Build Strong Links The Right Way.", 
    // Updated Card content based on the image's four main points
    cards: [
            {
              title: "Optimize By Country",
              description:
                "People In Different Countries May Speak The Same Language But Search In Completely Different Ways. That's Why We Go Beyond Simple Translation. We Shape Your SEO Strategy Based On How People In Each Country Think, Search, And Make Decisions, So Your Content Feels Natural, Relevant, And Local.",
            },
            {
              title: "Global SEO Setup",
              description:
                "From Setting Up The Best Domain Structure To Applying Hreflang Tags Properly, We Handle The Behind-The-Scenes Technical Work That Makes Sure Your Content Shows Up In The Right Country's Search Results. It's All About Getting The Right Version Of Your Site To The Right People.",
            },
            {
              title: "Keyword Research",
              description:
                "We Don't Rely On Software Alone To Pick Keywords. Native Speakers And Local SEO Experts Help Us Understand The Intent, Tone, And Cultural Nuances Behind Each Search Term. This Makes Your Content Not Only Rank Higher But Also Feel More Authentic To Your Audience.",
            },
            {
              title: "Content Localization & Optimization",
              description:
                "We Ensure Every Piece Of Content Resonates With Local Audiences, From Adapting Messaging To Cultural Preferences To Aligning With Local Search Behavior. We Make Sure Your Content Speaks The Right Language, Literally And Figuratively, So It Drives Engagement, Conversions, And Global Brand Loyalty.",
            }
        ],
    };
    
    return (
        <>
            <CommonFourCardStats 
                {...data}
                stats={[
                  { value: "12+", label: "<b>countries optimized</b> with end-to-end international SEO campaigns" },
                  { value: "25+", label: "<b>languages localized</b> through native experts and ISO-certified partners" },
                  { value: "300M+", label: "<b>international visitors delivered</b> across global markets" },
                ]}
            />
        </>
    )
}