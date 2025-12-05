import FAQs from '@/component/pages/common/CommonFAQ'

export const Faq = () => {
  // Updated data array to reflect the questions shown in the image
  const data = [
    {
      title: "What Is International SEO And How Is It Different?", 
      description: "International SEO is the practice of **optimizing your website for users in different countries and languages**. It's different because it involves technical complexities like **hreflang tags and domain structure**, cultural adaptation (transcreation), and local search behavior that goes beyond simple translation."
    },
    {
      title: "How Do You Ensure Translation Accuracy?",  
      description: "We go beyond automated tools. We use a combination of **native-speaking, in-country content writers and ISO-certified translation partners** who understand the cultural context, local search intent, and tone of each market. This process is called **transcreation**, which ensures the content is culturally and linguistically accurate."
    },
    {
      title: "What Tools Do You Use For Tracking?", 
      description: "We use the industry's leading tools for comprehensive tracking and reporting, including **Google Analytics 4 (GA4), Google Search Console, SEMrush, Ahrefs, and specialized regional SERP monitoring tools** to measure performance in each target country."
    },
    {
      title: "Do You Support RTL Languages?", 
      description: "Yes, we fully support **Right-to-Left (RTL) languages** such as Arabic, Hebrew, and Farsi. Our technical team ensures proper implementation of CSS, layout, and user experience considerations necessary for RTL languages."
    },
    {
      title: "Can You Help With Link Building In Each Country?", 
      description: "Absolutely. Our service includes **country-specific link building**. We have a network of **local publishers and content creators** to secure high-authority backlinks from regional, native-language websites, which is critical for ranking locally."
    },
    {
      title: "How Long Until Results?", 
      description: "While initial technical fixes and localized content can show small improvements within **3-4 months**, substantial results from an international SEO strategy—especially ranking and traffic growth—typically begin to be seen consistently within **6 to 12 months**, depending on the market competitiveness."
    },
    {
      title: "Is Keyword Strategy Different For Each Market?", 
      description: "Yes, it is fundamentally different. Keywords must be researched and validated in each language and country because **search intent, terminology, and volume vary dramatically by market**. Simple translation of a keyword will almost always fail to capture the correct local search behavior."
    }
  ];

  return (
    <FAQs data={data}/>
  )
}