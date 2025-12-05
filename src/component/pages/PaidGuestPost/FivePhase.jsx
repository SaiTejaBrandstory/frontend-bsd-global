import { CommonBigIndex } from "../common/CommonBigIndex"

export const FivePhase = () => {
  const heading = "Our 5-Phase Guest Post Delivery Process"
  const description = "Here’s how we turn a guest post into a real SEO asset, step by step."

  const cases = [
    {
      title: "Start With a Full Link Audit",
      description: `
        Every Campaign Starts With Research. We Identify Real Websites In Your Industry, Sites With Strong Link Profiles, Real Readership, And Editorial Integrity. We Check For Domain Strength, Monthly Organic Traffic, Audience Fit, And Spam Signals.<br/><br/>
        <b>What You Get:</b><br/>
        A Curated List Of Sites With Key Metrics And Traffic Data. No Directories, No PBNs. Only Handpicked Domains That Match Your Brand.
      `
    },
    {
      title: "Topic Ideation & Approval",
      description: `
        Once The Sites Are Locked In, We Brainstorm Article Topics That Align With Both Your Goals And The Publisher's Audience. Each Idea Is Crafted To Serve SEO While Staying Relevant To The Blog's Tone. You're In Control; Approve, Adjust, Or Reject Topics Before We Move Forward.<br/><br/>
        <b>What You Get:</b><br/>
        3 To 5 SEO-Optimized Headlines Per Blog, Written With Reader Value In Mind.
      `
    },
    {
      title: "Guest Post Writing & Optimization",
      description: `
        Our In-House Writers Create Clean, Engaging Articles From Scratch. Each Post Is Structured To Support Your Link, Include Your Keyword Naturally, And Offer Value To The Site's Readers. When Needed, We Add Stats, Expert Quotes, Or Images To Enhance Credibility.<br/><br/>
        <b>What You Get:</b><br/>
        A Polished Guest Article That Fits The Site’s Style, Includes Your Backlink, And Is Fully Ready For Publishing.
      `
    },
    {
      title: "Direct Outreach & Placement",
      description: `
        We Connect Directly With The Blog Owner Or Editor, No Resellers Or Intermediaries. We Handle The Outreach, Negotiate The Terms, Confirm Link Type (Do-Follow), And Schedule The Post. You Stay Updated Throughout.<br/><br/>
        <b>What You Get:</b><br/>
        A Confirmed Live URL With Complete Placement Details And Turnaround Time.
      `
    },
    {
      title: "Post-Publish Monitoring & Reporting",
      description: `
        Publishing Is Just The Beginning. We Keep Track Of Every Link We Place. If A Post Is Taken Down Or No-Indexed, We Take Care Of Replacements Or Alternatives. You Receive Monthly Updates And A Live Tracking Sheet.<br/><br/>
        <b>What You Get:</b><br/>
        Ongoing Link Monitoring, A Google Sheet Tracker, And A Video Walkthrough Summarizing Your Campaign Progress.
      `
    },
  ]
  
  return <CommonBigIndex 
  caseLabel="Phase"
    data={cases}
    description={description}
    heading={heading}
    // footer={footer}
  />
}