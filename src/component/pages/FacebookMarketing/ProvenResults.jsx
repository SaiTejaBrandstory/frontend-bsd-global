import { CommonBwThreeCard } from "../common/CommonBwThreeCard"

export const ProvenResults = () => {
    const title = "Proven Results Across Industries";
    const description = "We offer flexible engagement models to suit different needs and budgets:<br/><br/><b class='highlited-text'>Sample Packages:</b>";
    const footer = "";
    const data = [
        {
            "title": "Case Study 1: Skincare D2C Brand",
            "description": `
                We helped a direct-to-consumer skincare brand improve their advertising results. By testing different creatives and segmenting their sales funnel, we increased their return on ad spend (ROAS) from 1.8x to 4.2x in just 60 days. This meant every dollar spent on ads brought in more than twice the previous revenue.
            `
        },
        {
            "title": "Case Study 2: Real Estate Firm",
            "description": `
               For a premium apartment project in Hyderabad, we generated over 3,200 verified leads in only 45 days. Our strategy focused on targeted campaigns and lead capture optimization, helping the client reach serious buyers quickly and efficiently.
            `
        },
        {
            "title": "Case Study 3: EdTech Startup",
            "description": `
               An EdTech startup wanted more sign-ups at lower costs. By running dynamic ad sets and optimizing their campaigns, we reduced their cost per acquisition by 35% and doubled sign-ups in just three weeks. This gave them more students for less advertising spend.
            `
        }
    ];
    return (
        <>
            <CommonBwThreeCard rightPadding="50px" title={title} description={description}  footer={footer} cardData={data} paddingBottom="0px" />
{/* The button section, centered and responsive */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 mt-12 px-4 pb-20 max-w-4xl mx-auto">
            
            {/* Button 1: Book Free Strategy Call (Solid Red/Orange) */}
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