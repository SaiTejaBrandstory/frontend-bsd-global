import CommonStatsSection from '../common/CommonStats';

export const PostingBenifits =()=>{
    return(
        <CommonStatsSection
      title="Guest Posting Benefits<br/> for Your Brand" // Changed title to reflect the image
    //   subtitle="Our Full Stack Development Services Bring It All Under One Roof –<br />Strategy, Design, Frontend, Backend, And Everything In Between." // Kept commented out as it wasn't in the original object
      description={[
        // Changed description to reflect the text in the image
        "Guest Posting Helps Your Brand Grow In Many Ways. When Your Articles Are Published On Trusted Websites, People See Your Business As More Reliable And Search Engines Recognize You As An Authority.",
        "It Also Gives You Strong Backlinks That Improve Your Rankings. These Links Come From Real Websites With Real Readers, So They Add Real Value.",
        "Guest Posts Help You Reach New Audiences. Your Content Gets In Front Of People Who May Not Know Your Brand Yet But Are Already Interested In Your Industry.",
        "They Also Bring Direct Visitors To Your Site. Many Readers Click On Your Link From The Article, Which Can Lead To More Inquiries, Customers, And Sales."
      ]}
      stats={[
        // Changed stats to reflect the numbers and labels in the image
        { value: "25,000+", label: "Guest posts published across 50+ industries" },
        { value: "40M+", label: "Monthly readers reached through high-authority placements" },
        { value: "90%", label: "Average improvement in backlink quality<br/>vs. traditional link building" }, // Added <br/> for line break as seen in the original structure
      ]}
      />
    )
}