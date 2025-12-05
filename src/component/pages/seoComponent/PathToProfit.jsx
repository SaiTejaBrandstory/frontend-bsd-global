import React from 'react'
import CommonAccordion from '../common/CommonAccordion';
import CommonAccordion2 from '../common/CommonAccordion2';

export const PathToProfit = () => {
     const accordionData = [
    {
      title: "1. Technical SEO Mastery",
      content:
        `Good results start with a website that works as it should. Our technical SEO services begin with a full site audit to uncover issues that might be slowing you down.We work on improving page speed, fixing broken links, resolving crawl errors, and adding structured data so search engines can understand your content better.A site that runs smoothly not only ranks higher but also gives visitors a faster and more reliable experience.`,
    },
    {
      title: "2. Authority and Content Creation",
      content:
        "Search engines tend to trust websites that other reputable sites trust too. Building this authority is a mix of earning quality backlinks and publishing useful, relevant content.We focus on <b>content creation</b> that answers real customer questions, earns shares and mentions from other sites, and encourages repeat visits.When combined with strategic link building, this approach increases your credibility in search results and helps position your brand as a leader in its space.",
    },
    {
      title: "3. Local and Enterprise SEO",
      content:
        "Different businesses need different strategies. Local SEO is for smaller businesses or single locations, helping you appear in map listings and local searches so customers nearby can find you easily.Enterprise SEO applies the same principles but on a larger scale, designed for multi-location or complex websites. It ensures every location or business unit is visible, accurate, and competitive in its market.The aim is the same for both, to improve visibility, attract more customers, and create measurable growth.",
    }
  ];
  return (
     <CommonAccordion2
     title="Your Path to Profit: The Three Pillars of Successful SEO"
     items={accordionData} />
  )
}