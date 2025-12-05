import { CommonBigIndex } from "../common/CommonBigIndex"

export const Process = () => {
  const heading = "How Our Link Building Process Works, Step by Step"
  const description = "Seeing is Believing. Here Are Some Examples Of Our Social Media Marketing Case Studies:"

  const cases = [
    {
      title: "Start With A Full Link Audit",
      description: `
        Before building anything new, we take a close look at what’s already there. We check your current backlinks, remove any harmful ones, and see where you might be missing out. Then we compare your site to your top competitors to find the gap.<br/><br/>
        <b>What You Get:</b><br/>
        <ul>
          <li>A Detailed PDF Report Of Your Backlink Health</li>
          <li>A List Of New Link Opportunities Worth Targeting</li>
        </ul>
      `
    },
    {
      title: "Find The Right Websites For You",
      description: `
        Next, we search for websites that fit your niche and are trusted by search engines. We don’t just look at Domain Authority, we check real traffic, backlink history, and spam score. This way, you don’t end up on shady sites.<br/><br/>
        <b>What You Get:</b><br/>
        
        A Handpicked List Of Quality Websites We'll Reach Out To
        
      `
    },
    {
      title: "Write Great Content That Deserves A Link",
      description: `
        We create blog posts, expert roundups, data-backed articles, or the high-value content that publishers actually want. Our writers work with your subject matter experts if needed, so the content is strong and relevant.<br/><br/>
        <b>What You Get:</b><br/>
        
        Final Content Draft Ready For Publishing, A Summary Of How We'll Pitch It To Each Site
        
      `
    },
    {
      title: "Send Out Custom Emails And Track Every Response",
      description: `
        Every email we send is written by a real person, to a real editor, with a real pitch, and we track the entire process through a CRM so nothing gets lost.<br/><br/>
        <b>What You Get:</b><br/>
        <ul>
          <li>A Live Tracker Showing Who We’ve Contacted And Where Links Went Live</li>
        </ul>
      `
    },
    {
      title: "Keep You Updated With Clean, Clear Reports",
      description: `
        Each month, you'll get a full report with live link URLs, anchor text used, Domain Authority, and traffic insights. We also check if any links were removed or changed and replace them if needed.<br/><br/>
        <b>What You Get:</b><br/>
        <ul>
          <li>A Monthly Link Scorecard</li>
          <li>A Short Video Summary (if you prefer to watch instead of read)</li>
        </ul>
      `
    },
  ]
  
  // Note: The image shows 5 phases, so 5 objects are included in the 'cases' array.
  // The 'footer' is correctly excluded as it is not present in the screenshot.
  
  return <CommonBigIndex 
  caseLabel="Phase"
    data={cases}
    description={description}
    heading={heading}
    // footer={footer}
  />
}