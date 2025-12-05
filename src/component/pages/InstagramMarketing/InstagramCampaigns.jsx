import { CommonBigIndex } from "../common/CommonBigIndex"

export const InstagramCampaigns = () => {
  const heading = "Instagram Campaigns with Real Business Results"
  const description = "We Don’t Just Talk Performance—We Deliver It. These Instagram Marketing Case Studies Highlight How The Right Mix Of Content, Targeting, And Funnel Strategy Drives Strong ROI And Measurable Business Outcomes."
  const footer = "Let Us Show You What Your Next Campaign Could Look Like"
  const cases = [
    {
      title: "D2C Beauty Brand",
      description: `
        <b>Goal:</b><br/>
        Improve Return On Ad Spend and Scale Conversions Across A New Product Line.<br/><br/>
        <b>Solution:</b><br/>
        Reels-First Strategy With Trend-Aligned Video Creatives And Retargeting Flows.<br/><br/>
        <b>Result:</b><br/>
        ROAS increased from 1.8x To 4.3x Within Just 45 Days.
      `
    },
    {
      title: "Real Estate Developer",
      description: `
        <b>Goal:</b><br/>
        Generate High-Quality Leads For A Mid-Tier Housing Project in Metro India.<br/><br/>
        <b>Solution:</b><br/>
        Story-Based Walkthrough Ads Combined With Lead-Gen Forms And Location Targeting.<br/><br/>
        <b>Result:</b><br/>
        Delivered Over 1,900+ Verified Leads At Below-Industry Average CPL.
      `
    },
    {
      title: "EdTech Startup",
      description: `
        <b>Goal:</b><br/>
        Lower Acquisition Costs For Course Registrations among Working Professionals.<br/><br/>
        <b>Solution:</b><br/>
        Carousel Lead-Gen Campaigns Featuring Influencer-Backed Testimonials.<br/><br/>
        <b>Result:</b><br/>
        Achieved A 37% Decrease In CPA And A 2x Lift In Lead Quality.
      `
    },
  ]
  
  return (
    <>
        <CommonBigIndex 
            caseLabel="Case Study"
            data={cases}
            description={description}
            heading={heading}
            footer={footer}
            paddingBottom={0}
        />
      {/* The button section, centered and responsive */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 mt-12 px-4 pb-20 max-w-4xl mx-auto">
            
            {/* Button 1: Book Free Strategy Call (Solid Red/Orange) */}
            <button
                className="
                    w-full md:w-auto 
                    bg-red-600 
                    text-white text-[20px]
                    py-4 px-10 
                    rounded-[20px]
                    whitespace-nowrap
                "
                style={{ backgroundColor: '#E73D26', border: 'none' }}
                aria-label="Book a Free Strategy Call"
            >
                Book Free Strategy Call
            </button>

            {/* Button 2: Get Custom Quote (Bordered) */}
            <button
                className="
                    w-full md:w-auto
                    bg-black 
                    text-white text-[20px]
                    py-4 px-10 
                    rounded-[20px]
                    border border-white
                    whitespace-nowrap
                "
                aria-label="Get a Custom Quote"
            >
                Get Custom Quote
            </button>
        </div>
    </>
  )
}