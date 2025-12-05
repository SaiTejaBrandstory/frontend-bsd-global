import CommonAccordion2 from '../common/CommonAccordion2';

export const Omnichannel = () => {
    const accordionData = [
        {
            title: "Google Ads",
            content: "Get people who are looking for something specific to your site.",
        },
        {
            title: "Microsoft Advertising (Bing Ads)",
            content: "To reach Bing and Yahoo audiences.",
        },
        {
            title: "Meta Ads (Facebook & Instagram)",
            content: "Use creative images and targeted campaigns to get people interested.",
        },
        {
            title: "LinkedIn Ads",
            content: "Get in touch with professionals and decision-makers to grow your business-to-business network.",
        },
        {
            title: "YouTube Ads",
            content: "Make videos that are fun to watch, teach something, and get people to buy something.",
        },
        {
            title: "TikTok Ads",
            content: "Short, powerful videos can help you reach a younger, more engaged audience.",
        },
    ];

    return (
        <CommonAccordion2
            title="Omnichannel Paid Advertising Solutions"
            highlited="We run campaigns across:"
            description="Our multi-platform PPC strategy guarantees that campaigns adjust to the intent and behavior of each platform. Campaign efficiency and attribution are enhanced by cross-channel integration."
            items={accordionData}
        />
    );
};