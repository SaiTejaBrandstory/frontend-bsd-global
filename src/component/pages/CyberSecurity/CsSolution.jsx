import CommonTwoCard from '../common/CommonTwoCard'

export const CsSolution =()=>{
    const data = {
    heading: "Cybersecurity Solutions for<br/>Every Business Setup",
    subheading:
      "With Our IT Consultant Service, You’re Not Hiring A Vendor — You’re Gaining A Strategic Partner. One That’s Seen Scale, Lives Complexity, And Knows How To Navigate Both. Our IT Services Consultant Team Helps You Unlock:",
    cards: [
            {
              title: "Cloud, Local, Or Hybrid Protection",
              description:
                "Your Business May Run Fully On The Cloud, On-Premises, Or A Mix Of Both. Our Cybersecurity IT Services Secure All Setups With Advanced, Adaptive Defenses. No Matter Where Your Data Lives, We Maintain Complete Visibility And Control Over Security Risks.",
            },
            {
              title: "Endpoint Security For Every User",
              description:
                "We Deploy Endpoint Protection Across All Systems, Keeping Users Safe And Business Operations Uninterrupted. Real Time Monitoring Ensures Threats Are Detected And Neutralized Before They Spread. Regular Updates And Patches Maintain Maximum Protection Without Disrupting Daily Work.",
            },
            {
              title: "Full Hybrid Infrastructure Defense",
              description:
                "We Safeguard Interconnected Cloud And On-Premises Environments With A Unified Security Approach. Our Strategies Cover Network, Application, And Infrastructure Layers To Prevent Breaches. Hybrid Setups Are Continuously Monitored To Adapt To Evolving Threats.",
            },
            {
              title: "Scalable Protection For SMEs, Enterprises & Government Agencies",
              description:
                "Our Custom Cybersecurity Services Scale With Your Organization, From Small Retail Stores To Government Offices. Security Measures Are Tailored To Your Size, Structure, And Regulatory Requirements. Expansion Is Seamless—Your Protection Grows As Your Business Grows.",
            },
            {
              title: "Industry-Specific Security Plans",
              description:
                "Different Industries Face Unique Risks. We Design Cybersecurity Plans Aligned With Your Sector’s Compliance And Threat Landscape. From Healthcare HIPAA Requirements To Fintech SOC 2 Standards, We Cover All Critical Needs. Plans Are Practical, Actionable, And Easy To Integrate Into Your Current Workflow.",
            },
            {
              title: "Easy-to-Manage Cybersecurity Strategies",
              description:
                "Small IT Teams Or No Dedicated Staff? Our Strategies Are Simple To Implement And Manage. Day-To-Day Security Becomes Intuitive, Reducing Complexity Without Sacrificing Protection. Continuous Support Ensures Your Systems Stay Safe While Your Team Focuses On Business Growth.",
            },
        ],
    };

    return (
        <CommonTwoCard {...data}/>
    )
}