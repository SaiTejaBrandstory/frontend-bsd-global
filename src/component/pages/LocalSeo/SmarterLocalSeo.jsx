import CommonTwoCard from '../common/CommonTwoCard'


export const SmarterLocalSeo =()=>{
    const data = {
    heading: "Brandstory's Path to Smarter Local SEO",
    subheading:
      "We Don't Believe In Cookie-Cutter SEO. We Know That Every Neighborhood, Every Business, And Every City Works Differently. That's Why Our Approach To Local SEO Services Is Personal, Precise, And Fully Transparent.",
    cards: [
            {
              title: "Direct Access To Local SEO Experts",
              description:
                "Our Team Of Senior Strategists Has Years Of Experience Across Different Cities And Industries. You Won't Be Passed Around Or Handed Off To Juniors. You'll Work Directly With Experts Who Know How To Drive Results In Your Local Market.",
            },
            {
              title: "Transparent Reporting And Clear Updates",
              description:
                "Every Week, You'll Know Exactly What's Happening. We Send Updates. We Share Dashboards. We Explain Changes In Plain Language. You're Never Left In The Dark.",
            },
            {
              title: "Tailored Local SEO Strategies",
              description:
                "From Small Towns To Metro Cities, We Shape Your SEO Plan To Match Your Geography And Industry. That Includes Local Keywords, Audience Behavior, And Competition Level.",
            },
            {
              title: "Certified And Trusted",
              description:
                "We're A Google Partner, Featured By Clutch As A Top SEO Agency, And Work With Certified Experts Across SEO Tools And Platforms.",
            },
        ],
    };
    
    return (
        <>
            <CommonTwoCard {...data}/>
        </>
    )
}
