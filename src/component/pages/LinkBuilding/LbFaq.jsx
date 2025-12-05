import FAQs from '@/component/pages/common/CommonFAQ'

export const LbFaq = () => {
  const data = [
    {
      title: "What Is Link Building, And Why Is It Important For SEO?", 
      description: "Link building is the process of acquiring **hyperlinks (backlinks)** from other websites to your own. It is crucial for SEO because search engines view these links as **'votes of confidence'** or endorsements, which helps establish your site's authority, trustworthiness, and ultimately improves its rankings in search results."
    },
    {
      title: "How Do You Find Link Opportunities?",  
      description: "We use a multi-faceted approach, starting with a **competitive analysis** to find sites linking to your top rivals. We then research high-quality, relevant websites based on **industry niche, Domain Authority (DA), real organic traffic, and low spam scores**. We also look for opportunities like broken link building, resource pages, and guest post placements."
    },
    {
      title: "Will These Links Improve My DA And Rankings?", 
      description: "The primary goal of building high-quality, relevant links is to **improve your rankings and organic traffic**. As you consistently earn these authoritative links, your **Domain Authority (DA)** will naturally increase over time, signaling to search engines that your site is a trusted source."
    },
    {
      title: "Can I Approve Sites Before Outreach?", 
      description: "Yes, absolutely. In **Phase 2**, we provide you with a **handpicked list of quality websites** we plan to reach out to. You will have the opportunity to review and approve this list before our outreach team begins the process."
    },
    {
      title: "What Makes Your Link Building Service Different?", 
      description: "Our service is different because we focus on **quality over quantity**, ensuring all links are placed on truly relevant, high-traffic sites with low spam scores. We also prioritize **content-led link building**—creating valuable assets that publishers *want* to link to—and provide **transparent, live tracking and reporting** throughout the entire process."
    },
    {
      title: "Are These Links Permanent?", 
      description: "We only secure links that are meant to be **permanent editorial placements**. While we cannot control the independent actions of a third-party website, we avoid temporary or sponsored link types. Furthermore, we include a **replacement guarantee** if a link is removed or broken (see next FAQ)."
    },
    {
      title: "Do You Guarantee A Certain Number Of Backlinks Each Month?", 
      description: "No, we do not. Guaranteeing a specific number of links often leads to placing them on low-quality or irrelevant sites, which is harmful to your SEO. Our focus is on **quality link placements** and measurable results like improved rankings and traffic, not an arbitrary monthly count."
    },
    {
      title: "Will You Replace Links That Are Removed Or Broken?", 
      description: "Yes. As part of our service, we continuously monitor all acquired links. If a link is removed, broken, or changed within the service period, we will actively work to **have it restored or secure a brand new, equivalent-quality link** at no extra cost to you."
    }
  ];

  return (
    <FAQs data={data}/>
  )
}