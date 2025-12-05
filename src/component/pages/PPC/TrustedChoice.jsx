import CommonTwoImgDesc from "../common/CommonTwoImgDesc"

export const TrustedChoice = ()=>{
    const data = {
  heading: "Trusted Choice for Smarter PPC Campaigns",
  subHeading: "Brands Choose BrandStory Because We Deliver PPC Campaigns That Drive Real Results. Our Full-Funnel Approach Covers Every Step, From Initial Targeting To Final Conversion, So Your Ads Work Smarter, Not Just Harder.",
  rows: [
    {
      img: "/images/ppc/ppc-ads.jpg",
      alt: "PPC Campaign",
      text: [
        "<b>Full-Funnel PPC Advertising Services:</b> We Design Campaigns That Convert Awareness Into Action By Reaching Out To Clients At Each Step Of The Purchasing Process.<br/><br/>",
        "<b>Conversion-Focused Ad Copy And Creative:</b> Every Headline, Image, And Call-To-Action Aims To Draw In Viewers And Encourage Clicks That Result In Conversions.<br/><br/>",
        "<b>Daily Budget Optimizations And Bid Adjustments:</b> In Order To Maximize Results And Cut Down On Waste, We Track Your Campaigns And Modify Bids And Expenditures.<br/>"
      ],
      reverse: false
    },
    {
      img: "/images/ppc/ppc-report.jpg",
      alt: "PPC Report",
      text: [
        "<b>Real-Time Campaign Performance Monitoring:</b> To Make Sure That A Campaign Is Always Operating At Its Best, We Monitor Its Performance In Real Time.<br/><br/>",
        "<b>Transparent Reports With Key Metrics:</b> Clear Insights Into CPL, ROAS, CTR, And Other Crucial Data Allow You To Assess How Well Your Campaigns Are Performing.<br/><br/>",
        "<b>Proven Experience Across Industries:</b> Through Clever PPC Management, We Have Helped Businesses In A Variety Of Industries, Including Healthcare, SaaS, B2B, And E-Commerce, Achieve Measurable Growth.<br/><br/>",
        "Our PPC Experts Combine Experience, Precision, And Measurable Outcomes."
      ],
      reverse: true
    }
  ]
};

    return(
        <CommonTwoImgDesc data={data}/>
    )
}