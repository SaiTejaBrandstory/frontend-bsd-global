import CommonGridBox3Scrollable from "../common/CommonGridBox3Scrollable";

export const SamplePackages = () => {
    
    // Updated title and description based on the image content
    const title = "Sample Packages";
    const description = "Clients Stick With Us Because We Deliver Results They Can See And Measure:";
    
    // Updated data array to reflect the three packages in the image
    const data = [
        {
            "title": "Starter Intl.",   
            "description": "Supports SEO Across 1–3 Countries In Up To 2 Languages. Great: For Pilot Launches, MVP Validation, Or Market Entry Testing",
            "bgcolor": "#a03e17ff", 
            "logo": "/images/square-images/s1.png" 
        },
        {
            "title": "Growth Intl.",   
            "description": "Expands Reach To 5 Countries With Native Link Building And Content In Up To 5 Languages. Designed For Scaling Brands Gaining Traction In Multiple Markets",
            "bgcolor": "#504cafff", 
            "logo": "/images/square-images/s2.png" 
        },
        {
            "title": "Global Leader",   
            "description": "A Complete Global SEO Program Covers Technical SEO, Multilingual Content Creation, Digital PR, International Link-Building, And Strategy For 8+ Regions. Ideal For Brands With An Established Presence Aiming For Global Dominance",
            "bgcolor": "#c2ba99ff",
            "logo": "/images/square-images/s3.png" 
        },
    ];
    
    return (
        <>
            <CommonGridBox3Scrollable 
            boxHeight="350px"
            title={title} description={description} data={data} />
            <div className="mx-auto mb-30 text-center">
                <a className="orange-btn">
                Book Your Global SEO Strategy Session
                </a>
            </div>
        </>
    );
}