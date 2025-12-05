import { CommonBwCrd } from "../common/CommonBwCard"

export const ContentMarketing = () => {
    const title = "Data-Driven Content Marketing";
    const description = "We Use Actual Data To Inform Every Choice Rather Than Speculating About What Your Audience Wants. We Look At What People Are Interested In, What They Click On, And What They Share.";
    const footer = "After That, We Continuously Adapt And Get Better. Over Time, Each Piece Of Content Gets Smarter And More Efficient. This Involves Producing Content That Engages Your Audience, Builds Your Brand, And Produces Tangible Outcomes.";
    const data = [
        {
            "title": "Recognize your audience's location",
            "description": `
                <p>We monitor the websites where your audience spends time so that your content reaches them at the appropriate time.</p>
            `
        },
        {
            "title": "Assess what is effective",
            "description": `
                <p>We determine which content works best by using tools like BuzzSumo, SEMrush, and Google Analytics.</p>
            `
        }
    ];
    return (
        <CommonBwCrd title={title} description={description} footer={footer} cardData={data} />
    );
}
