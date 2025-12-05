import React from 'react'
import CommonTwoCard from '../common/CommonTwoCard'

export const StrategicConsulting = () => {
    const data = {
        heading: "How Our Strategic Consulting Process Drives Measurable Impact",
        subheading: "Our Consulting Methodology Follows A Strategic, Outcome-Oriented Framework. Every Phase Is Designed To Maximize ROI And Create Lasting Transformation.",
        cards: [
            {
                title: "Discovery",
                description: "We Begin With A Comprehensive Discovery Phase To Immerse Ourselves In Your Business Context. Through Stakeholder Interviews, Market Research, Competitor Analysis, And Digital Audits, We Identify Core Challenges, Unmet Opportunities, And Alignment Gaps Between Your Current State And Desired Outcomes.",
            },
            {
                title: "Strategy Planning",
                description: "Using Insights From Discovery, We Develop A Clear, Actionable Roadmap That Aligns With Your Business Goals. Whether The Focus Is Digital Transformation, Customer Experience, Operational Efficiency, Or Market Expansion, Our Strategies Are Built On Data, Tailored To Your Priorities, And Designed For Long-Term Scalability.",
            },
            {
                title: "Execution",
                description: "From Operational Enhancements To Full-Scale Technology Rollouts, We Ensure Every Solution Is Implemented With Precision. Our Team Works Closely With Internal Stakeholders To Manage Change, Minimize Disruption, And Maintain Continuity—While Delivering The Tools, Systems, Or Campaigns That Power Your Next Phase Of Growth.",
            },
            {
                title: "Performance Review",
                description: "Post-Execution, We Track Key Performance Indicators (KPIs) Such As Customer Acquisition Cost, Lead Quality, Retention Rate, And Overall ROI. This Continuous Measurement Ensures Transparency And Helps Us Gauge Effectiveness Across Business Units, Technologies, Or Marketing Channels.",
            },
            {
                title: "Optimization",
                description: "Performance Isn't A One-Time Achievement—It's An Ongoing Pursuit. Based On Real-Time Data And Periodic Reviews, We Refine Strategies, Optimize Underperforming Areas, And Double Down On High-Impact Initiatives. The Result? Compounding Gains And A Business That's Constantly Improving, Adapting, And Scaling With Purpose.",
            },
        ],
    };

    return (
        <>
            <CommonTwoCard {...data} titleClass="text-center" cardLayout="two-col"/>
        </>
    )
}
