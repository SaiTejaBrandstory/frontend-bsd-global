import { CommonBwCrd } from "../common/CommonBwCard"

export const ClientGrowth = () => {
    const title = "Client Growth Case Studies";
    const description = "Our enterprise SEO strategies deliver measurable outcomes across industries from high-growth startups to established global enterprises. Here's a snapshot of how we’ve helped brands scale search visibility, traffic, and revenue at pace.";
    const footer = "";
    const data = [
        {
            "title": "Recognize your audience's location",
            "description": `
                <b>+80% Enterprise Keyword Visibility (3 Months)</b><br><br>
                <p>A high-growth B2B SaaS platform engaged Brandstory to gain traction in highly competitive enterprise SERPs. Through precision-led technical fixes, topic cluster development, and high-authority link acquisition, we achieved an 80% increase in enterprise keyword visibility with key terms ranking on Page 1 across five markets.</p>
            `
        },
        {
            "title": "Fortune 500 Subsidiary",
            "description": `
                <b>+150% Organic Revenue (6 Months)</b><br><br>
                <p>This global enterprise division sought to improve organic performance across 10 country-level domains. Our phased rollout included hreflang optimization, content repurposing at scale, and advanced conversion tracking resulting in a 150% uplift in organic revenue and a 42% increase in assisted conversions.</p>
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
