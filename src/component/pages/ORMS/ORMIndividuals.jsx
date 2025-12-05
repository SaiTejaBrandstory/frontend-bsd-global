import CommonGridBox3 from "../common/CommonGridBox3";

const ORMIndividuals = () => {
    const title = "ORM for Individuals, Businesses, and Executives";
    const description = "One Of Your Most Important Assets Is Your Reputation. BrandStory Provides Customized Online Reputation Management That Can Be Tailored To Meet Various Objectives And Needs.";
    const data = [
          {
            "title": "Businesses",
            "description": "Manage How Your Company Is Viewed Online, Preserve Stakeholder Trust, And Protect Your Brand Image.",
            "bgcolor": "#6d3119", // You might need to adjust the background color to match the image
            "logo": "/images/seo/expertise-1.webp" // You will need to use the correct icon for businesses
          },
          {
            "title": "Executives & Influencers",
            "description": "NDA-Supported, Confidential Tactics Support Privacy Protection While Upholding A Polished Professional Image.",
            "bgcolor": "#474574", // You might need to adjust the background color to match the image
            "logo": "/images/seo/expertise-2.webp" // You will need to use the correct icon for executives & influencers
          },
          {
            "title": "Startups And Small Businesses",
            "description": "From The Beginning, Create A Reliable Online Presence, Draw In Customers, And Establish Credibility.",
            "bgcolor": "#3e484b", // You might need to adjust the background color to match the image
            "logo": "/images/seo/expertise-3.webp" // You will need to use the correct icon for startups and small businesses
          }
        ];

    const footer ="Each plan is created to achieve your particular goals while maintaining total privacy and confidentiality. Your reputation is safeguarded, enhanced, and set up for long-term success with BrandStory."
    return (
        <CommonGridBox3 title={title} description={description} footer={footer} data={data} />
    );
}

export default ORMIndividuals;