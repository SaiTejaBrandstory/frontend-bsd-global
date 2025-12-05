import { CommonBigIndex } from "../common/CommonBigIndex"


export const FivePhase = () => {
  const heading = "What Our Five-Phase Local SEO Plan Covers"
  const description = "We Follow A Five-Phase Approach Designed To Meet You Where You Are And Take You Where You Want To Go. Here's How We Do It:"


  const cases = [
    {
      title: "Local SEO Audit & Opportunity Mapping",
      description: `
        We Begin By Examining Your Current Online Presence. We Look At Your Website, Your Google Business Profile, Your Listings, And Your Top Competitors. Then We Identify What's Missing, What's Broken, And Where The Biggest Opportunities Are. This Is Your Roadmap.
      `
    },
    {
      title: "Local Keyword & Content Strategy",
      description: `
        We Find The Keywords People Are Actually Using To Search For Your Services Locally. Then We Build A Local Content Plan Around Those Terms, Helping You Show Up Where It Counts.
      `
    },
    {
      title: "Google Business Profile & Citation Optimization",
      description: `
        We Fully Optimize Your Google Business Profile And Make Sure Your Business Info Is Consistent Across All Key Directories. This Helps Improve Your Visibility On Google Maps And In The Local Pack.
      `
    },
    {
      title: "Local Link Building & Reputation Management",
      description: `
        We Build Backlinks From Relevant Local Sources And Help You Manage Your Online Reviews. Both Of These Strengthen Your Local Authority And Build Customer Trust.
      `
    },
    {
      title: "Continuous Optimization & Transparent Reporting",
      description: `
        We Track Your Performance, Make Improvements, And Keep You Updated Every Step Of The Way. Our Reports Are Clear, Honest, And Built Around Your Business Goals.
      `
    },
  ]
  
  return <CommonBigIndex 
    caseLabel="Phase"
    data={cases}
    description={description}
    heading={heading}
    footer="With This Structured And Adaptable Process, Our Local SEO Services Help Turn Visibility Into Real Leads, Visits, And Revenue."
  />
}
