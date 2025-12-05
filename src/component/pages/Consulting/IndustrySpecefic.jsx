import CommonTwoImgDesc from "../common/CommonTwoImgDesc"

export const IndustrySpecefic = () => {
    const data = {
  heading: "Industry-Specific Consulting That Speaks Your Business Language",
  subHeading: "Our Consulting Team Brings Niche-Specific Expertise Across Diverse Sectors. Each Engagement Is Built On Tailored Strategies For That Domain.",
  rows: [
    {
      img: "/images/Consulting/1.png",
      alt: "Industry Consulting Services",
      text: [
        "<b>IT Consulting</b>",
        "We Help IT Companies Scale Efficiently By Modernizing Delivery Systems, Optimizing Infrastructure, And Designing Future-Proof Architectures For Faster Go-To-Market.",
        "</br>",
        "<b>Retail Consulting</b>",
        "We Enable Retailers To Grow Omnichannel, Optimize Inventory, Streamline Customer Journeys, And Unify Backend And Front-End Operations To Maximize Engagement And Lifetime Value.",
        "</br>",
        "<b>Healthcare Consulting</b>",
        "We Support Care Providers And Digital Health Platforms In Improving Patient Journeys, Streamlining Workflows, Ensuring Regulatory Compliance, And Integrating Legacy And Modern Systems Seamlessly."
      ],
      reverse: false
    },
    {
      img: "/images/Consulting/2.png",
      alt: "Business Consulting Expertise",
      text: [
        "<b>Manufacturing Consulting</b>",
        "We Help Manufacturers Reduce Costs, Optimize Supply Chains, Digitize Operations, And Leverage IoT And Analytics To Increase Productivity And Agility.",
        "</br>",
        "<b>Startup Consulting</b>",
        "We Guide Early- And Growth-Stage Ventures On GTM Strategy, Investor-Ready Narratives, Operational Playbooks, And Scaling Plans To Accelerate Growth And Traction.",
        "</br>",
        "<b>Fintech Consulting</b>",
        "We Assist Fintechs In Building Secure, Scalable Platforms, Navigating Regulations, Planning Architecture, And Enhancing UX For Compliance-Driven Innovation And User Retention."
      ],
      reverse: true
    }
  ]
};

    return(
        <CommonTwoImgDesc data={data}/>
    )
}
