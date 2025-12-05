import CommonStatsSection from '../common/CommonStats';

export const TechTeam =()=>{
    return(
        <CommonStatsSection
      title="The Right Tech Team<br />Changes Everything"
      subtitle="Our Full Stack Development Services Bring It All Under One Roof –<br />Strategy, Design, Frontend, Backend, And Everything In Between."
      description={[
        // Highlighted text starts here
        "<p class='highlited-text'><b>What We Bring To Your Table:</b></p>",
        
        // Main descriptive paragraph
        "<b>Professional Execution, Every Time</b><br />From Kickoff To Deployment, We Follow Rigorous Development Standards And Delivery Practices. Expect Clear Communication, Dedicated Project Management, And A Product That Meets Both Your Technical Specs And Business Goals.<br /><br />",
        
        // Final revenue sentence, which is also highlighted
        "<p class='highlited-text'>All Powered By ₹5,200+ Cr In Revenue Influenced And 1.5B + Revenue Generated For Clients Like You.</p>"
      ]}
      stats={[
        { value: "3,200+", label: "<b>Projects Delivered Successfully</b><br/>From startups to global enterprises — each solution tailored for impact." },
        { value: "500+", label: "<b>Clients Across Industries</b><br/>Trusted by organizations worldwide for high-performance solutions." },
        { value: "11+", label: "<b>Years of Creative & Engineering Expertise</b><br/>A decade of delivering innovation that aligns with business goals." },
      ]}
      />
    )
}