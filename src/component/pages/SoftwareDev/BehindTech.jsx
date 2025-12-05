import { CommonBwThreeCard } from "../common/CommonBwThreeCard"

export const BehindTech = () => {

    // Content updated based on "The Talent Behind the Tech" screenshot
    const title = "The Talent Behind the Tech";
    const description = "We're A Team Of Experienced Tech Professionals And Agile Thinkers Dedicated To Building Smart, Scalable Digital Solutions That Match Your Vision.";
    const footer = "Each Team Member Is Selected For Their Expertise, Adaptability, And Focus On Quality—Helping You Turn Great Ideas Into Reliable Technology.";

    const data = [
        {
            "title": "Full-Stack <br/> Development Team",
            "description": `
                Our developers are skilled in front-end, back-end, and database technologies—delivering complete and seamless software solutions.
            `
        },
        {
            "title": "Cross-Platform Strategists <br/> & UX Designers",
            "description": `
                We design intuitive, consistent user experiences across web, mobile, and cloud platforms, keeping usability and performance at the core.
            `
        },
        {
            "title": "Frontline Engineering Talent <br/> with Domain Expertise",
            "description": `
                Our engineers bring in-depth industry knowledge, ensuring your software isn't just functional—it's built to support your business goals.
            `
        }
    ];
    return (
        <CommonBwThreeCard title={title} description={description} footer={footer} cardData={data} />
    );
}
