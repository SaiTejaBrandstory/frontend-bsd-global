import CommonTwoCard from '../common/CommonTwoCard'

export const LeadingBrands =()=>{
    const data = {
    heading: "Why Leading Brands Choose Our SEO Team",
    subheading:
      "BrandStory Helps Big Websites Grow Fast And Get Results. We Make SEO Simple, Modern, And Effective For Today’s Fast-Moving Businesses.",
    subheadingMaxWidth:"900px",
      cards: [
            {
              title: "Helping Large Websites Grow Effectively",
              description:
                "BrandStory Works With Big Websites To Attract More Visitors And Get Measurable Results. We Improve Search Rankings, Fix Technical Issues, And Make Sure Content Is Easy For Both People And Search Engines To Find.",
            },
            {
              title: "Making SEO Simple And Practical",
              description:
                "We Focus On Clear, Actionable Strategies. Using Smart Tools And AI Where It Helps, We Remove Unnecessary Steps And Make SEO Work For Fast-Moving Businesses Without Overcomplicating The Process.",
            },
            {
              title: "Fast Implementation With Cloud-Based Tools",
              description:
                "Our Cloud-Based Workflows Let Teams Collaborate Smoothly And Track Progress In Real Time, So Improvements Are Applied Quickly So Your Business Can See Results Without Delays.",
            },
            {
              title: "Direct Access To Experienced Strategists",
              description:
                "Every Client Works Directly With A Senior Strategist Who Understands Technical SEO, Large Websites, And Business Goals. There Are No Handoffs To Junior Staff, No Miscommunication—Just Clear Guidance From Someone Who Knows What Works.",
            },
            {
              title: "Predictable Timelines And Transparent Delivery",
              description:
                "We Deliver SEO Audits Within 48 Hours, Provide Weekly Progress Updates, And Hold Quarterly Reviews To Adjust Strategy As Needed. You Always Know What's Happening And Can Track The Growth Of Your Website Clearly.",
            },
            {
              title: "Trusted By Leading Brands",
              description:
                "BrandStory Is A Google Partner And Uses Tools Like SEMrush And Ahrefs. We've Been Recognized With The Clutch Newcomer Award And Are Relied On By Growth Teams For SEO That Delivers Real Results, Not Just Theory.",
            },
        ],
    };

    return (
        <>
            <CommonTwoCard {...data}/>
            {/* The concluding paragraph was removed as it does not appear in the screenshot's context. */}
        </>
    )
}