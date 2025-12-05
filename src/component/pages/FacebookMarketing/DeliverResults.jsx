import CommonGridBox3 from "../common/CommonGridBox3";
import CommonGridBox3Scrollable from "../common/CommonGridBox3Scrollable";


export const DeliverResults = () => {
    
    const title = "Ads Designed to Engage and Deliver Results";
    const description = "";
    const data = [
        {
            "title": "Attention-Grabbing Creative",   
            "description": "Every Ad Visual, Piece Of Copy, And Video Is Designed Not Just To Look Good But To Capture Attention, Spark Curiosity, And Guide Users Toward Taking Action.",
            "bgcolor": "#a03e17ff",
            "logo": "/images/square-images/s6.png"
        },
        {
            "title": "Smart Retargeting",   
            "description": "We Re-Engage Users Who Didn't Convert The First Time With Custom Triggers Like Cart Abandonment, Product Views, Or Checkout Drops, Ensuring The Right Message Reaches Them At The Right Moment.",
            "bgcolor": "#514f82ff",
            "logo": "/images/square-images/s5.png"
        },
        {
            "title": "Data-Driven Performance",   
            "description": "All Creatives Are Continuously Tested And Measured For Engagement, CTR, And ROAS So We Can Refine Campaigns And Maximize Impact.",
            "bgcolor": "#c1ba9cff",
            "logo": "/images/square-images/s4.png"
        },
        {
            "title": "Layered Conversion Funnels",   
            "description": "Every Campaign Is Structured With Multiple Touchpoints, Using Tailored Messaging At Each Stage To Move Users Naturally Toward Conversion.",
            "bgcolor": "#a03e17ff",
            "logo": "/images/square-images/s11.png"
        },
        {
            "title": "Clear, Actionable Reporting",   
            "description": "Weekly Updates Provide Plain-Language Insights, Showing What's Working, What Needs Adjustment, And Opportunities To Scale, So You Can See Real ROI From Every Campaign.",
            "bgcolor": "#514f82ff",
            "logo": "/images/square-images/s13.png"
        },
    ];
    
    return (
        <CommonGridBox3 
            boxHeight="350px"
            title={title}
            description={description}
            data={data} 
        />
    );
}
