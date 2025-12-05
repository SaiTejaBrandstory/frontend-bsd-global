import { CommonBwThreeCard } from "../common/CommonBwThreeCard"

export const Pricing = () => {
    const title = "Pricing & Packages";
    const description = "Our local SEO packages are designed to meet you where you are, whether you’re just starting out or scaling across cities. Each plan includes the essentials with room to grow.<br/><br/><b class='highlited-text'>Here’s how we break it down:</b>";
    const footer = "";
    const data = [
        {
            "title": "Starter Plan",
            "description": `
                Perfect for solo businesses and small teams looking to build a local footprint. Includes audit, Google Business Profile setup, and core citations.
            `
        },
        {
            "title": "Growth Plan",
            "description": `
               Ideal for growing brands ready to compete. Adds local content strategy, link building, and review support.
            `
        },
        {
            "title": "Authority Plan",
            "description": `
                Built for multi-location brands. Covers everything in Starter + Growth, plus custom strategies, dedicated reporting, and territory-wide content planning.
            `
        }
    ];
    return (
        <>
            <CommonBwThreeCard rightPadding="50px" title={title} description={description}  footer={footer} cardData={data}  paddingBottom={0}/>

             <div className="mx-auto mb-30 text-center">
                <button
                className="
                    w-full md:w-auto 
                    bg-red-600 
                    text-white text-[20px]
                    py-4 px-10 
                    rounded-[20px]
                    whitespace-nowrap
                "
                style={{ backgroundColor: '#E73D26', border: 'none' }}
                aria-label="Book a Free Strategy Call"
            >
                Get Your Free Ads Audit
            </button>
            </div>
        </>
    );
}