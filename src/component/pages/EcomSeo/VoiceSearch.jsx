import CommonTwoImgDesc from "../common/CommonTwoImgDesc"

export const VoiceSearch = () => {
    const data = {
        heading: "Voice Search & Visual Search in<br/>  eCommerce SEO",
        // subHeading: "Your brand’s most important asset is its reputation, which is visible everywhere online. At BrandStory, we make sure it stays positive, trustworthy, and consistent across all platforms.",
        rows: [{
            img: "/images/EcomSeo/vc.png",
            alt: "Multi-Format Content Expertise",
            text: [
                "People don’t always type when they shop anymore. Now they ask Siri, Alexa, or Google to help them find what they need. Some even upload photos to search for a product they’ve seen. We help your store keep up with how people actually shop today. That means using natural, spoken-language keywords for voice search and optimizing your images, product tags, and alt text to show up in image searches. As these trends grow, your store stays one step ahead.",
            ],
            reverse: true
        }]
    };

    return (
        <CommonTwoImgDesc data={data} />
    );
};