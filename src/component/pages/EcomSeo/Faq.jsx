import FAQs from '@/component/pages/common/CommonFAQ'

export const Faq = () => {
  const data = [
    {
      title: "How Long Does ECommerce SEO Take To Show Results?", 
      description: "Initial results like improved rankings for long-tail keywords and increased organic traffic typically appear within **3-6 months**. More significant results, such as ranking for highly competitive keywords and substantial revenue growth, usually take **6-12 months** as search engines fully index and trust your optimized store."
    },
    {
      title: "What Platforms Do You Support?",  
      description: "We are platform-agnostic and have deep expertise in all major e-commerce systems, including **Shopify, WooCommerce, Magento, BigCommerce, Wix, Squarespace**, and various custom-built platforms. We tailor our SEO strategy to fit the unique technical requirements of your specific store setup."
    },
    {
      title: "Do You Offer Product Content Writing Services?", 
      description: "Yes, absolutely. High-quality, SEO-optimized product content is crucial for e-commerce success. Our services include writing persuasive, keyword-rich **product titles, descriptions, and category pages** that are designed to satisfy both search engine algorithms and prospective customers."
    },
    {
      title: "Will You Help Improve My Store's Loading Speed?", 
      description: "Yes, **Site Speed** is a critical component of technical SEO and user experience. We conduct comprehensive audits to identify bottlenecks (e.g., large images, inefficient code, server issues) and provide detailed recommendations or direct implementation support to ensure your store loads quickly on all devices."
    },
    {
      title: "Can SEO Help Reduce Dependency On Paid Ads?", 
      description: "Yes, it can significantly. As your organic rankings improve, your store attracts high-intent traffic without paying per click. This organic traffic stream creates a **sustainable, long-term asset** that reduces your reliance on expensive PPC campaigns and lowers your overall customer acquisition cost (CAC)."
    }
  ];

  return (
    <FAQs data={data}/>
  )
}