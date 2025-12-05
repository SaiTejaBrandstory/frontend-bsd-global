import { CommonBwThreeCard } from "../common/CommonBwThreeCard"

export const WhatYouCanExpect = () => {

    // Content updated based on "The Talent Behind the Tech" screenshot
    const title = "What You Can Expect from<br/>Our Cybersecurity Team";
    const description = "As an experienced cybersecurity service provider, we build systems that work in real time and adjust as your business grows. Our team knows what to look for and how to stop threats before they do any damage.<br/>Here’s what you can count on from us:";
    const footer = "We’re one of the few cybersecurity service providers who don’t just deliver reports—we deliver peace of mind.";

    const data = [
        {
            "title": "Support from day one",
            "description": `
                We don’t wait around. As soon as we come on board, we start identifying your risks and securing your systems.
            `
        },
        {
            "title": "A team that knows its stuff",
            "description": `
                Our experts have worked across industries. We understand what threats look like and how to stop them before they cause damage.
            `
        },
        {
            "title": "A plan built just for you",
            "description": `
                Your business is unique. So your cybersecurity service should be too. We build custom solutions that fit your goals, not someone else’s.
            `
        }
    ];
    return (
        <CommonBwThreeCard title={title} description={description} footer={footer} cardData={data} />
    );
}
