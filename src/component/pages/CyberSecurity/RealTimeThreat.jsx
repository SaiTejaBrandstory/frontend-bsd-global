import CommonGridBox3 from "../common/CommonGridBox3";

export const RealTimeThreat = () => {
    const title = "Real-Time Threat Intelligence & Incident Response";
    const description = "Cyber Threats Don't Wait And Neither Should Your Defenses. The Faster You Detect An Issue, The Easier It Is To Stop It. That’s Why Our Managed Cybersecurity Services Are Powered By Real-Time Intelligence. We Help You Spot Danger Early, Act Fast, And Stop Attacks Before They Cause Real Harm. Here’s How We Do It:";
    const data = [
          {
            "title": "Proactive Threat Hunting",
            "description": "We Actively Search For Hidden Vulnerabilities And Potential Threats Before They Have A Chance To Cause Harm. Our Team Simulates Real-World Attack Scenarios To Identify Weaknesses That Standard Monitoring Might Miss.",
            "bgcolor": "#6d3119", 
            "logo": "/images/square-images/s26.png" // Placeholder for an appropriate icon/logo path
          },
          {
            "title": "Smart Security Analytics",
            "description": "Advanced Analytics Track Unusual Behavior, Patterns, And Anomalies Across Your Systems. By Combining AI-Driven Insights With Expert Analysis, We Spot Risks That Often Go Unnoticed.",
            "bgcolor": "#474574", 
            "logo": "/images/square-images/s5.png" // Placeholder for an appropriate icon/logo path
          },
          {
            "title": "Rapid Response To Cyber Attacks",
            "description": "If A Threat Occurs, Our Expert Team Jumps In Immediately To Contain And Neutralize It. We Follow A Structured, Clean Process To Minimize Disruption And Protect Your Data.",
            "bgcolor": "#bbb7a2ff", 
            "logo": "/images/square-images/s36.png" // Placeholder for an appropriate icon/logo path
          }
        ];

    // The image does not contain footer text, so the original 'footer' placeholder is likely based on the previous context. 
    // I'll keep the original footer but remove the brand-specific text for neutrality, assuming it's not needed here, or you can update it.
    const footer ="These services are designed to work together, providing a complete defense mechanism that proactively protects your assets and rapidly responds to any security incidents.";
    
    return (
        <CommonGridBox3 title={title} description={description} footer={footer} data={data} />
    );
}
