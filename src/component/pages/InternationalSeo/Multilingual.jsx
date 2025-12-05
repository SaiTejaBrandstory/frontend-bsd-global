import CommonAccordion2 from '../common/CommonAccordion2';

export const Multilingual = () => {
  // Updated accordionData to reflect the titles in the image
  const accordionData = [
    {
      title: "Hreflang Tag Strategy & Implementation",
      // Content is left as a placeholder or can be filled with a relevant description if available. 
      // Since the image only shows titles, I'll use a placeholder content string.
      content:
        "We handle the technical setup of hreflang tags to ensure search engines correctly serve the localized version of your content to users in the right region and language.",
    },
    {
      title: "Localized Keyword Research & SERP Mapping",
      content:
        "Our native-language experts conduct in-depth research to find keywords relevant to each local market and map them to the correct pages for maximum visibility.",
    },
    {
      title: "Global Content Strategy By Region",
      content:
        "We develop a cohesive content strategy that addresses regional search behaviors, cultural nuances, and user intent to build authority across all target countries.",
    },
    {
      title: "Multilingual On-Page SEO",
      content:
        "Optimization of all on-page elements, including metadata, headings, internal linking, and content structure, tailored for multiple languages and search engines.",
    },
    {
      title: "Country-Specific Link Building",
      content:
        "We execute localized link building campaigns to secure high-quality backlinks from authoritative, country-specific domains, boosting regional trust and ranking power.",
    },
    {
      title: "Regional SERP Monitoring & Performance Tracking",
      content:
        "Continuous monitoring of search engine results page (SERP) rankings and performance metrics in all target regions using advanced analytical tools.",
    },
    {
      title: "ECommerce International SEO",
      content:
        "Specialized SEO strategy for online stores, including product page localization, currency, and shipping considerations for seamless global transactions.",
    },
    {
      title: "Translation Vs. Transcreation",
      content:
        "We determine when a direct translation is appropriate versus when transcreation—adapting the message culturally and contextually—is necessary to maximize local impact and conversions.",
    },
  ];

  return (
    <CommonAccordion2
      // Title and Description updated to match the style and content of the screenshot
      title="Multilingual SEO Services Catalog"
      description="Every Country Has Its Own Search Behavior, Ranking Factors, And User Expectations. Here's How We Help You Meet Them All, One Region At A Time."
      items={accordionData}
      // Assuming splitRatio is for layout, keeping it as is unless the image suggests otherwise.
      splitRatio={0.5} 
    />
  );
};