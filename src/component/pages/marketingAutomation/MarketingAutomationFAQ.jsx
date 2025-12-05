import FAQs from '@/component/pages/common/CommonFAQ';

export const MarketingAutomationFAQ = () => {
    const data = [
        {
            title: "What’s included in your marketing automation services?",
            description: "We handle everything from sending emails and WhatsApp messages automatically to setting up your CRM, creating campaigns, and providing easy-to-understand reports."
        },
        {
            title: "Do you help choose the right platform?",
            description: "Yes! We look at your business needs and suggest the best tool for you, whether it’s <b>HubSpot, Zoho, or Mailchimp.</b>"
        },
        {
            title: "Can I automate both emails and WhatsApp messages?",
            description: "Absolutely. We create workflows that combine both channels so your messages reach people in the right way at the right time."
        },
        {
            title: "Are your tools B2B ready?",
            description: "Yes. Our automation supports long sales cycles, helps nurture leads, and ensures smooth CRM handoffs for your sales team."
        },
        {
            title: "What tools do you use for automation?",
            description: "We use <b>Zapier, APIs, and other integrations</b> to connect your existing tools and make everything run seamlessly."
        }
    ];

    return (
        <FAQs data={data} />
    );
};