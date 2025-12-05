import { CommonBwCrd } from "../common/CommonBwCard"

export const CaseStudies = () => {
    // Updated title and description based on the image content
    const title = "Client Case Studies";
    const description = "Our Enterprise SEO Strategies Deliver Measurable Outcomes Across Industries From High-Growth Startups To Established Global Enterprises. Here's A Snapshot Of How We've Helped Brands Scale Search Visibility, Traffic, And Revenue At Pace.";
    const footer = "";
    
    // Updated 'data' array to reflect the two case studies in the image
    const data = [
        {
            "title": "SaaS Platform: Expanding Across Europe",
            "description": `
                A B2B SaaS company wanted to grow in France and Germany. We built localized keyword strategies, launched regional content, and secured backlinks from local publishers.<br/><br/>
                <b>Results:</b><br/>
                <ul>
                    <li>+180% growth in organic traffic from both regions</li>
                    <li>70+ keywords ranking in the top 5 across French and German SERPs</li>
                </ul>
            `
        },
        {
            "title": "eCommerce Brand: Launching Across APAC",
            "description": `
                An online store rolled out to new markets across Asia-Pacific. We supported them with multilingual content, localized product feeds, and country-specific link outreach.<br/><br/>
                <b>Results:</b><br/>
                <ul>
                    <li>300 backlinks from regional publishers</li>
                    <li>+90% increase in cross-border conversions</li>
                    <li>20 new language pages live and ranking in 3 months</li>
                </ul>
            `
        }
    ];
    
    return (
        <CommonBwCrd 
        innerBoxWidth="95%"
        title={title} 
        description={description} 
        footer={footer} 
        cardData={data} 
        />
    );
}