import FAQs from '@/component/pages/common/CommonFAQ';

export const PPCFaq = () => {
    const data = [
        {
            title: "What platforms do you support in your PPC management services?",
            description: "We manage campaigns on Google Ads, Meta Ads (Facebook & Instagram), YouTube, LinkedIn, and other platforms tailored to your audience."
        },
        {
            title: "Do you include keyword research in your PPC advertising services?",
            description: "Yes. We conduct in-depth keyword research, competitor analysis, and ad group mapping to build high-performing campaigns."
        },
        {
            title: "Will I get reports and performance tracking with your PPC management services?",
            description: "Absolutely. Weekly and monthly reports track clicks, CPL, CTR, conversions, and ROAS."
        },
        {
            title: "Is there a minimum ad spend required for PPC management?",
            description: "We recommend a minimum ad spend of ₹50,000/month to effectively test and optimize campaigns."
        },
        {
            title: "Do you offer landing page creation as part of your PPC management services?",
            description: "Yes. High-converting landing pages are part of select packages to maximize conversions."
        }
    ];

    return (
        <FAQs data={data} />
    );
};