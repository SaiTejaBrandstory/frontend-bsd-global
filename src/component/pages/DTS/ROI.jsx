import CommonTwoImgDesc from "../common/CommonTwoImgDesc"

export const ROI = () => {
    const data = {
        heading: "What ROI Looks Like When Transformation</br>Is Done Right",
        subHeading: "The True Measure Of Transformation Lies In The Outcomes It Enables – Not Just In Systems Upgraded, But In Performance Amplified. Our Business Digital Transformation Services Are Architected To Create Business Value That Is Visible, Measurable, And Sustained Across Functions.",
        rows: [{
            img: "/images/DTS/roi.png", 
            alt: "Business Growth and Metrics",
            text: [
                "From Sales Acceleration To Process Efficiency, We Align Every Transformation Initiative With Your Strategic KPIs – So The ROI Isn’t Theoretical, It’s Built Into The Design.",
                "<b class='highlited-text'>Business Impact We’ve Enabled:</b>",
                "<ul><li>₹5,200+ Cr Revenue Influenced By Streamlining Digital Workflows And Customer Journeys</li></ul>",
                "<ul><li>32,00,000+ High-Intent Leads Generated Via Unified Digital Ecosystems</li></ul>",
                "<ul><li>Reduced Operational Friction, Enhanced Collaboration, And Faster Market Responsiveness.</li></ul>",
                "Whether It’s Automating The Back Office Or Digitizing Customer-Facing Touchpoints, Our Role As A Digital Transformation Partner Is To Deliver Outcomes That Directly Support Growth, Innovation, And Profitability."
            ],
            reverse: true
        }]
    };

    return (
        <CommonTwoImgDesc data={data} />
    );
};