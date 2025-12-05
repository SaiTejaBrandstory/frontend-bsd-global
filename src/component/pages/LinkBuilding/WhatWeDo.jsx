import React from 'react'
import CommonAccordion from '../common/CommonAccordion';

export const WhatWeDo = () => {
     const accordionData = [
    {
      title: "1. Guest Posting That Builds Credibility and Reach",
      content:
        `We identify high-authority blogs and platforms in your niche, then write helpful, well-structured content that feels native to their audience. These articles include a link back to your site, not as an afterthought, but in a way that supports the story and adds value. The result? You gain referral traffic, stronger SEO signals, and long-term visibility in spaces that matter to your audience.`,
    },
    {
      title: "2. Digital PR and News Placements That Earn Attention",
      content:
        `Slow pages kill sales. We focus on optimizing your store's speed across desktop and mobile, ensuring a seamless user experience that reduces bounce rates and boosts rankings.
        `,
    },
    {
      title: "3. Digital PR and News Placements That Earn Attention",
      content:
        `Duplicate content on an eCommerce site (like multiple URLs for the same product) confuses search engines and dilutes your ranking power. We implement canonicalization to consolidate authority.
        `,
    },
    {
      title: "4. Niche Edits and Link Insertions With Real Context",
      content:
        `Your title tags and meta descriptions are your store's first impression in the search results. We craft high-converting tags that get clicks from customers ready to buy.
        `,
    },
    {
      title: "5. Local SEO Link Building to Strengthen Local Presence",
      content:
        `A logical site architecture ensures that both users and search engines can easily find your most important products. This improves crawl efficiency and link equity flow.
        `,
    },
    {
      title: "6. SaaS & Tech Link Campaigns That Speak the Right Language",
      content:
        `A logical site architecture ensures that both users and search engines can easily find your most important products. This improves crawl efficiency and link equity flow.
        `,
    },
    {
      title: "7. Link Reclamation and Technical Audits to Recover Missed Value",
      content:
        `A logical site architecture ensures that both users and search engines can easily find your most important products. This improves crawl efficiency and link equity flow.
        `,
    },
    {
      title: "8. Link Velocity Strategy to Grow Naturally and Safely",
      content:
        `A logical site architecture ensures that both users and search engines can easily find your most important products. This improves crawl efficiency and link equity flow.
        `,
    },
    {
      title: "9. Need Industry-Specific Backlinks?",
      content:
        `A logical site architecture ensures that both users and search engines can easily find your most important products. This improves crawl efficiency and link equity flow.
        `,
    },
  ];
  return (
        <CommonAccordion
        title="Our Link Building Services – A Closer Look at What We Do"
        // subheding1="Big websites have many pages and teams. To make them work better, we follow five simple steps. This helps your site get more visitors, stay organized, and grow over time."
            // subheding2="When People Search Online, They're Usually Ready To Buy. With Targeted Keywords And Well-Structured Pages, Your Online Store Can Show Up Right When It Matters Most. That Means More Clicks, More Visits, And More Sales. <br/><p class='highlited-text>eCommerce SEO services focus on:</p>"
            subheding2="When People Search Online, They're Usually Ready To Buy. With Targeted Keywords And Well-Structured Pages, Your Online Store Can Show Up Right When It Matters Most. That Means More Clicks, More Visits, And More Sales."
            items={accordionData} 
            // footer="When your store is easy to find and easy to navigate, your visitors stay longer. And more visits turn into actual purchases."
            />
    )
}
