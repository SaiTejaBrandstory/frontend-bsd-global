import CommonGridBox3Scrollable from "../common/CommonGridBox3Scrollable";

export const Technologies = () => {
    
    const title = "Tools and Technologies We Use";
    const description = "Clients Stick With Us Because We Deliver Results They Can See And Measure:";
    const data = [
        {
            "title": "Ahrefs",   
            "description": "Great For Discovering Keyword Ideas, Tracking Backlinks, And Seeing How Your Competitors Are Building Authority. It Helps Us Plan Your Content And Link-Building Strategy With Confidence.",
            "bgcolor": "#6d3119",
            "logo": "/images/EcomSeo/t-1.png"
        },
        {
            "title": "Semrush",   
            "description": "Gives Us A Close Look At Your Competition, Keyword Trends, And How Your Store Ranks Over Time. We Use It To Shape Your SEO Roadmap And Track Your Growth.",
            "bgcolor": "#474574",
            "logo": "/images/EcomSeo/t-2.png"
        },
        {
            "title": "Screaming Frog",   
            "description": "This Tool Crawls Your Entire Site And Finds Technical Issues Fast Like Broken Links, Missing Tags, Or Duplicate Pages, So We Can Fix Them Before They Hurt Your Rankings.",
            "bgcolor": "#3e484b",
            "logo": "/images/EcomSeo/t-3.png"
        },
        {
            "title": "Google Analytics 4 (GA4) & Google Search Console",   
            "description": "These Show Us Exactly How People Find Your Store, What They Click On, And How They Behave Once They Land. It's The Foundation For All Performance Insights.",
            "bgcolor": "#6d3119",
            "logo": "/images/EcomSeo/t-4.png"
        }
    ];
    
    return (
        <CommonGridBox3Scrollable 
        boxHeight="350px"
        title={title} description={description} data={data} />
    );
}