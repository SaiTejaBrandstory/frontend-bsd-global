import FAQs from '@/component/pages/common/CommonFAQ'

export const ESFaq = () =>{
      const data = [
  {
    title: "What Differentiates Enterprise SEO From Large-Business SEO?",
    description: "Enterprise SEO is typically concerned with managing SEO for vastly complex, large-scale websites—often with thousands or millions of pages, multiple subdomains, global markets, and deep integration with highly specialized in-house IT and development teams. Large-business SEO, while still complex, generally operates on a smaller scale and may not face the same level of bureaucratic, technical, and international hurdles."
  },
  {
    title: "How Quickly Can We Onboard And Receive An Audit?",
    description: "The onboarding timeline is highly customized but typically ranges from 1 to 3 weeks. This phase involves access setup, discovery workshops, and initial strategy alignment. A comprehensive technical and content audit will usually follow immediately, with initial findings and recommendations delivered within the first 4-6 weeks of engagement."
  },
  {
    title: "How Do You Integrate With Our Dev/IT Teams?",
    description: "We employ a collaborative, agile approach. Our specialists act as a centralized hub, translating SEO strategy into clear, actionable technical specifications (e.g., ticket creation, JIRA integration) that your Dev/IT teams can execute. We establish regular sync meetings, utilize shared project management tools, and assign a dedicated Technical SEO lead to facilitate seamless communication and prioritization."
  },
  {
    title: "What KPIs And Reporting Cadence Can We Expect?",
    description: "Our core **Key Performance Indicators (KPIs)** focus on business impact, including **Organic Revenue/Conversions**, **Non-Branded Organic Traffic**, and **Search Visibility/Rankings** for target keywords. We provide a comprehensive monthly report and executive-level quarterly business reviews, with access to real-time dashboards for continuous monitoring."
  },
  {
    title: "Can You Support Multi-Language, Multi-Region Rollouts?",
    description: "Absolutely. We specialize in International SEO, including comprehensive strategy for Hreflang implementation, country-code top-level domain (ccTLD) or subdomain architecture, content translation workflows, and localization. We ensure your site is technically optimized to rank effectively in different languages and regional search engines globally."
  }
];


return (
    <FAQs data={data}/>
)
}