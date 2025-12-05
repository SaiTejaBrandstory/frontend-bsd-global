import { CommonBwCrd } from "../common/CommonBwCard"

export const B2BAutomation = () => {
    const title = "E-commerce & B2B Automation Expertise";
    const description = "Marketing Automation Works Differently Depending On The Type Of Business. We Design It To Fit Your Needs So It Works Best For You.";
    const footer = "We Make Sure Your Automation Fits Your Business Perfectly. It Keeps Customers Engaged, Helps Sales Move Faster, And Grows Your Brand Over Time.";
    const data = [
        {
            "title": "E-commerce",
            "description": `
                <ul>
                    <li><b>Recover abandoned carts</b> – Remind people to finish buying the items they left in their cart so sales don't get lost.</li>
                    <li><b>Send upsell and cross-sell emails</b> – Suggest extra products that match what they already bought, helping them discover more items they might like.</li>
                    <li><b>Reward loyal customers</b> – Give special offers or discounts to people who shop often to keep them coming back.</li>
                </ul>
            `
        },
        {
            "title": "B2B",
            "description": `
                <ul>
                    <li><b>Automatically qualify leads</b> – Figure out which potential customers are most ready to buy so your team can focus on the right ones.</li>
                    <li><b>Follow up after webinars</b> – Send helpful tips, resources, or next steps to people who attended online events so they stay interested.</li>
                    <li><b>Run account-based marketing campaigns</b> – Target specific companies with personalized messages and ads to reach the right decision-makers.</li>
                </ul>
            `
        }
    ];
    return (
        <CommonBwCrd title={title} description={description} footer={footer} cardData={data} />
    );
}