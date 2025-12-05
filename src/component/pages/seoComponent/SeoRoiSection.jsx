"use client";

import CommonTwoImgDesc from "../common/CommonTwoImgDesc";

const SeoRoiSection = () => { 
  const data = {
    heading: "SEO ROI: Building Value That Keeps Paying Off",
    subHeading: "SEO Builds Assets That Keep Working Long After The Campaign Starts. Unlike Paid Ads, Traffic Doesn’t Stop When You Stop Spending.",
    rows: [
      {
        img: "/images/seo/seo-graph.webp",
        alt: "SEO Graph",
        text: [
          "Long-Term Asset – Paid Ads Stop The Moment You Pause The Budget. SEO Services Keep Delivering Value Over Time. A Well-Optimised Page That Ranks Can Attract Visitors For Months Or Even Years Without Additional Spending. This Makes SEO A Lasting Asset Rather Than A Temporary Cost.",
          "Cost-Effective Lead Generation – High-Quality Organic Traffic Often Comes At A Lower Cost Compared To Paid Advertising. Once Strong Rankings Are Achieved, You Continue To Receive Targeted Visitors Without Paying For Each Click, Allowing Your Budget To Work Harder For Longer."
        ],
        reverse: false
      },
      {
        img: "/images/seo/seo-ads.webp",
        alt: "SEO Ads",
        text: [
          "Brand Authority & Trust – Being Seen At The Top Of Organic Search Results Positions Your Business As A Trusted Leader In Your Field. Consistent Visibility Not Only Builds Brand Recognition But Also Gives Potential Customers The Confidence To Choose You Over Competitors.",
          "Case Study – One Client Saw A 131% Increase In Leads Within Six Months. This Was Achieved By Focusing On In-Depth Keyword Research To Target High-Intent Searches, Improving Content Creation To Address Customer Needs, And Optimising Site Pages To Guide Visitors Towards Taking Action."
        ],
        reverse: true
      }
    ]
  };

  return <CommonTwoImgDesc data={data} />;
};

export default SeoRoiSection;
