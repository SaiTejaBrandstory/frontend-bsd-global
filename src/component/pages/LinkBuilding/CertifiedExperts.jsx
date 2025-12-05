import CommonGridBox3Scrollable from "../common/CommonGridBox3Scrollable";

export const CertifiedExperts = () => {
    
    const title = "Certified Experts";
    const description = "We have official certifications that show we know SEO and content marketing:";
    const data = [
        {
            "title": "SEMrush SEO Toolkit Certified",   
            "description": "We know how to improve your website’s search rankings.",
            "bgcolor": "#a03e17ff",
            "logo": "/images/square-images/s1.png"
        },
        {
            "title": "Moz Academy Certified",   
            "description": "We can fix your site and build links the right way.",
            "bgcolor": "#514f82ff",
            "logo": "/images/square-images/s2.png"
        },
        {
            "title": "HubSpot Content Marketing Certified",   
            "description": "We create content that brings in visitors and turns them into customers.",
            "bgcolor": "#c1ba9cff",
            "logo": "/images/square-images/s3.png"
        },
    ];
    
    return (
        <CommonGridBox3Scrollable 
        boxHeight="350px"
        title={title} description={description} data={data} />
    );
}