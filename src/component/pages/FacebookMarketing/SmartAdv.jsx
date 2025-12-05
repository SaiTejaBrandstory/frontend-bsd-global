import CommonStatsSection from '../common/CommonStats';

export const SmartAdv =()=>{
    return(
        <CommonStatsSection
      title="Smart Facebook Advertising<br/> Starts with Strategy"
      description={[
        "Running ads is about knowing where, when, and how to spend it. That’s why our work as a Facebook advertising agency always starts with strategy. We build a solid Facebook ad strategy. One that’s grounded in real audience research. We study who your customers are, what they care about, and how they move across platforms.",
        "<span class='highlited-text'>Then we map every campaign across the full journey from awareness to engagement to conversion. Each stage has its own message, creative, and intent.</span>",
        "<ul><li>To Make It Work Better, We Run A/B Tests, Try Different Formats, And Use Dynamic Ad Sets To See What Clicks.</li><li>We Also Make Sure We Are Reaching People At The Right Time Using Retargeting Techniques And Lookalike Audiences.</li><li>Everything Is Tracked Through Meta Business Suite, Giving Us The Insights Needed To Optimize For Better Results.</li><li>This Is Where Audience Targeting Meets Conversion Optimization And Where Better Planning Leads To Better Outcomes.</li></ul>"
      ]}
      stats={[
        { value: "500+", label: "Campaigns executed across 20+ industries" },
        { value: "3.6x", label: "Average ROAS for e-commerce clients" },
        { value: "3,200+", label: "verified leads generated for real estate campaigns" },
      ]}
      />
    )
}