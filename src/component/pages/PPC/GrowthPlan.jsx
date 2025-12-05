import CommonTwoCard from '../common/CommonTwoCard'

export const GrowthPlan =()=>{
    const data = {
    heading: "PPC Growth Plan",
    highlight: "From Strategy to Scaling",
    subheading:
      "Our four-stage framework ensures campaigns improve continuously:",
    cards: [
            {
              title: "Strategy",
              description:
                "<ul><li>Keyword Research Aligned With Audience Intent</li><li>Competitor Analysis For Smarter Targeting</li><li>Funnel Mapping To Optimize The Customer Journey</li></ul>",
            },
            {
              title: "Launch",
              description:
                "<ul><li>Campaign Activation Across Multiple Channels</li><li>A/B Testing Of Ad Creatives And Copy</li><li>Audience Segmentation For Precise Targeting</li></ul>",
            },
            {
              title: "Optimization",
              description:
                "<ul><li>Bid Adjustments And Budget Reallocations</li><li>Ad Performance Monitoring And Fine-Tuning</li><li>CRO Techniques Applied To Landing Pages</li></ul>",
            },
            {
              title: "Scaling",
              description:
                "<ul><li>Expand Profitable Campaigns</li><li>Target New Markets And Segments</li><li>Increase Ad Spend With Predictable ROI</li></ul>",
            },
        ],
    };
    
    return (
        <>
            <CommonTwoCard {...data}/>
            <p className='max-w-[900px] text-center mx-auto mb-30'>This PPC strategy ensures campaigns evolve with performance, not assumptions.</p>
        </>
    )
}