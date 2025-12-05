import { CommonBigIndex } from "../common/CommonBigIndex"

export const FivePhase = () => {
  const heading = "Our 5-Phase Global SEO Framework"
//   const description = "Seeing is Believing. Here Are Some Examples Of Our Social Media Marketing Case Studies:" // Keeping this placeholder as the image does not provide a separate description text

  const cases = [
    {
      title: "Audit SEO and Choose the Right Markets",
      description: `
        We Start With A Full Audit Of Your International Setup, Checking Hreflang Tags, Crawl Issues, And Geo-Targeting Errors. Then We Map Global Opportunities Using Real Search Data To Help You Focus On The Countries That Matter Most.<br/><br/>
        <b>You’ll Get:</b><br/>
        <ul>
          <li>A Clear PDF Audit Report</li>
          <li>A Country Priority Matrix Showing Where To Grow Next.</li>
        </ul>
      `
    },
    {
      title: "Build Local Keyword And Content Strategy",
      description: `
        Our Native-Language SEO Experts Research What People Are Really Searching For In Each Region. Then We Group Topics Into Local Clusters So Every Page Speaks The Right Language, Tone And Intent.<br/><br/>
        <b>What You Get:</b><br/>
        <ul>
          <li>A Full Keyword Blueprint In Excel</li>
          <li>Trello-Ready Task Lists By Country</li>
        </ul>
      `
    },
    {
      title: "Structure Your Site For Global Reach",
      description: `
        We Guide You On Whether To Use CcTLDs, Subdirectories, Or Subdomains, Based On Your Goals. We Also Set Up Hreflang, Canonicals, And Site Hierarchy So Google Knows Exactly Who Each Page Is For.<br/><br/>
        <b>You’ll Get:</b><br/>
        <ul>
          <li>A Recommended Site Structure</li>
          <li>XML Sitemaps Optimized For Each Market</li>
        </ul>
      `
    },
    {
      title: "Create And Optimize Native Content",
      description: `
        Using WPML, Webflow, Or Your Chosen CMS, Our Native Writers Craft On-Page Content That's Clear, Culturally Aligned, And SEO-Ready From Metadata To Schema.<br/><br/>
        <b>You’ll Get:</b><br/>
        <ul>
          <li>5 To 10 Localized, Optimized Pages Ready To Publish</li>
          <li>Language-Specific Optimization Across All Elements</li>
        </ul>
      `
    },
    {
      title: "Track, Learn, And Scale Globally",
      description: `
        We Monitor Results Using GA4, Search Console, And Region-Specific A/B Tests. This Helps Us Measure What’s Working In Each Market And Where We Can Scale Next.<br/><br/>
        <b>You’ll Get:</b><br/>
        <ul>
          <li>A Live Global SEO Dashboard</li>
          <li>Easy-To-Read Monthly Performance Reports</li>
        </ul>
      `
    },
  ]
  
  return <CommonBigIndex 
  caseLabel="Phase"
    data={cases}
    // description={description}
    heading={heading}
    // footer={footer}
  />
}