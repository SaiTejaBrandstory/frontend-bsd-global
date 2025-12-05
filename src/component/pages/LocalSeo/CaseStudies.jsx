import CommonTwoImgDesc from "../common/CommonTwoImgDesc"


export const CaseStudies = ()=>{
    const data = {
  heading: "Case Studies",
  subHeading: "Here's A Look At How:",
  rows: [
    {
      img: "/images/LocalSeo/cs1.png",
      alt: "Local SEO Success",
      text: [
        "<b>A Boutique Retailer In Toronto</b>",
        "+65% Increase In Local Traffic Within 4 Months",
        "40% Growth In Walk-In Customers",
        "Ranked Top 3 For 12 Location-Based Keywords",
        "\"They Helped Us Go From Barely Visible To Being The First Option Customers See.\"",
        "",
        "<b>A Law Firm In Manchester</b>",
        "Doubled Inbound Call Inquiries In 6 Months",
        "Built Citation Authority Across UK Legal Directories",
        "Improved Online Reputation From 3.6 To 4.7 Stars"
      ],
      reverse: false
    },
    {
      img: "/images/LocalSeo/cs2.png",
      alt: "Local SEO Results",
      text: [
        "<b>A Restaurant Chain In India</b>",
        "Ranked #1 On Google For Key Terms Across 5 Cities",
        "Local Reviews Jumped From 250 To 800+ Within A Year",
        "Added New Location Pages That Brought In Organic Traffic City-Wise",
        "",
        "<b>A Cleaning Services Company In Ontario</b>",
        "50% More Local Leads Month Over Month",
        "Google Business Profile Views Increased By 3x",
        "Built Community Partnerships For Strong Local Backlinks",
        "",
        "If It Can Work For Them, It Can Work For Your Business Too."
      ],
      reverse: true
    }
  ]
};


    return(
        <CommonTwoImgDesc data={data}/>
    )
}
