import CommonGridBox3 from "../common/CommonGridBox3";

const SeoExpertise = () => {

    const title = "Our SEO Expertise Across Different Platforms";
    const description = "Our SEO services adapt to the platform you use, ensuring strategies match both the technology and the audience.";
    const data = [
          {
            "title": "Ecommerce SEO",
            "description": "Whether You Run Shopify, Magento, Or WooCommerce, We Optimise Product Pages For Search Visibility, Improve Site Speed, And Create A Smoother Shopping Experience To Increase Conversions.",
            "bgcolor": "#6d3119",
            "logo": "/images/seo/expertise-1.webp"
          },
          {
            "title": "Corporate And Enterprise Websites",
            "description": "For WordPress Or Custom-Built Platforms, We Focus On Site Structure, Authority-Building Content, And Technical SEO That Supports Complex Page Hierarchies.",
            "bgcolor": "#474574",
            "logo": "/images/seo/expertise-2.webp"
          },
          {
            "title": "International Websites",
            "description": "Multi-Domain And Multilingual Sites Require A Specialised Approach. We Handle Localisation, Hreflang Tags, And Regional Keyword Strategies To Improve Rankings In Multiple Countries.",
            "bgcolor": "#3e484b",
            "logo": "/images/seo/expertise-3.webp"
          }
        ];
    return (
        <CommonGridBox3 title={title} description={description} data={data} />
    );
}

export default SeoExpertise;