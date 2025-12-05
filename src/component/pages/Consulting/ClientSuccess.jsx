import { CommonBigIndex } from "../common/CommonBigIndex"

export const ClientSuccess = () => {
  const heading = "Client Success Stories That Prove<br />What's Possible"
  const description = "Real Results From Real Clients. Our Consulting Case Studies Speak For Themselves."

  const cases = [
    {
      title: "Interior Design Brand",
      description: `
        <b>Challenge</b><br/>
        Low-Quality Leads And Stagnant Organic Traffic Were Limiting Growth.<br/><br/>
        <b>Solution</b><br/>
        We Re-Engineered Their Inbound Funnel And Implemented A Robust SEO Content Strategy Focused On High-Intent Keywords And Optimized User Journeys.<br/><br/>
        <b>Outcome</b><br/>
        • 300% Increase In Qualified Conversions<br/>
        • 350% Surge In Organic Traffic Within 90 Days
      `
    },
    {
      title: "Consulting Firm",
      description: `
        <b>Challenge</b><br/>
        Despite Consistent Traffic, The Firm Was Attracting Low-Qualified Prospects Through Its Website.<br/><br/>
        <b>Solution</b><br/>
        We Revamped The Brand Positioning And Redesigned Landing Page Funnels To Target Decision-Makers And High-Value Client Personas.<br/><br/>
        <b>Outcome</b><br/>
        • 15% Growth In High-Value Leads<br/>
        • Increased Engagement From Enterprise-Level Prospects
      `
    },
    {
      title: "Tech Company",
      description: `
        <b>Challenge</b><br/>
        Weak Keyword Rankings And Underperforming Site Content Were Limiting Visibility.<br/><br/>
        <b>Solution</b><br/>
        We Executed A Comprehensive SEO Overhaul—Technical Fixes, High-Value Content Expansion, And Site Performance Optimization.<br/><br/>
        <b>Outcome</b><br/>
        • 50% Uplift In Total Traffic<br/>
        • 80+ New Keywords Ranked On Page 1 Of Google
      `
    },
  ]
  
  return <CommonBigIndex 
    caseLabel=""
    data={cases}
    description={description}
    heading={heading}
    footer="Whether It's Enterprise Software, AI Development, Or Industry-Specific Custom Solutions, Brandstory Delivers Results Backed By Real-World Success. Explore More Of Our Client Success Stories In The Portfolio."
  />
}
