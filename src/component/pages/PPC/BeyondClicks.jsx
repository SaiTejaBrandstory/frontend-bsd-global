
import CommonStatsSection from '../common/CommonStats';

export const BeyondClicks =()=>{
    return(
        <CommonStatsSection
      title="Beyond Clicks: Ads That<br />Multiply Your Returns"
      subtitle="<p>Many brands waste budgets on low-quality clicks. We believe PPC isn’t about clicks, it’s about conversions.</p>"
      description={[
        "<p>Our Approach Combines:</p><ul> <li>Audience Targeting That Reaches The Right Buyers</li>  <li>Continuous Ad Copy Testing For Maximum Engagement</li>  <li>Landing Page Optimization To Boost Conversion Rates</li></ul><br /><p>  With BrandStory, Your Ad Spend Fuels Revenue Growth, Not Guesswork. Our ROI-Focused PPC Methodology Ensures Every Rupee Is Invested In Results.</p>"
      ]}
      stats={[
        { value: "2M+", label: "Monthly Ad Clicks Managed" },
        { value: "₹100Cr+", label: "Ad Revenue Generated" },
        { value: "4.8x", label: "Average ROAS Across Clients" },
      ]}
      />
    )
}