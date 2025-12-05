import CommonGridBox3 from "../common/CommonGridBox3";

export const PPCCaseStudies = ()=>{
    const title = "PPC Case Studies with Measurable Results";
    const description = "Our SEO Services Adapt To The Platform You Use, Ensuring Strategies Match Both The Technology And The Audience.";
    const data = [
          {
            "title": "Ecommerce Client",
            "description": "Showed How Remarketing And Targeted Product Advertisements Generate Income By Increasing Online Sales Three Times In 60 Days And Achieving A Five-Fold Return On Assets.",
            "bgcolor": "#6d3119",
            "logo": "/images/seo/expertise-1.webp"
          },
          {
            "title": "B2B SaaS",
            "description": "Using Targeted LinkedIn And Search Efforts, We Doubled Marketing-Qualified Leads (MQLs) In The First Quarter While Reducing Cost Per Lead By 40%.",
            "bgcolor": "#474574",
            "logo": "/images/seo/expertise-2.webp"
          },
          {
            "title": "Local Service Provider",
            "description": "Showed The Value Of Geo-Targeted PPC Advertising By Increasing Conversion Rates From 2.1% To 5.6% And Generating 60% More Quality Leads.",
            "bgcolor": "#3e484b",
            "logo": "/images/seo/expertise-3.webp"
          }
        ];
    return (
        <CommonGridBox3 title={title} description={description} data={data} />
    );
}