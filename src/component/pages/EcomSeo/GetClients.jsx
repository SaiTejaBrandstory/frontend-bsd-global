import React from 'react'
import CommonAccordion from '../common/CommonAccordion';

export const GetClients = () => {
     const accordionData = [
    {
      title: "1. Improving Product Discoverability",
      content:
        `We help your product pages rank better by using the same words your customers are typing into search. That way, when they're looking for something you sell, your store shows up.
        `,
    },
    {
      title: "2. Fixing Slow-Loading Pages",
      content:
        `Slow pages kill sales. We focus on optimizing your store's speed across desktop and mobile, ensuring a seamless user experience that reduces bounce rates and boosts rankings.
        `,
    },
    {
      title: "3. Removing Duplicate Content",
      content:
        `Duplicate content on an eCommerce site (like multiple URLs for the same product) confuses search engines and dilutes your ranking power. We implement canonicalization to consolidate authority.
        `,
    },
    {
      title: "4. Using Relevant Search Terms And Title Tags",
      content:
        `Your title tags and meta descriptions are your store's first impression in the search results. We craft high-converting tags that get clicks from customers ready to buy.
        `,
    },
    {
      title: "5. Building A Strong Site Structure",
      content:
        `A logical site architecture ensures that both users and search engines can easily find your most important products. This improves crawl efficiency and link equity flow.
        `,
    },
  ];
  return (
        <CommonAccordion
        title="Get More Clients With eCommerce SEO"
        // subheding1="Big websites have many pages and teams. To make them work better, we follow five simple steps. This helps your site get more visitors, stay organized, and grow over time."
            // subheding2="When People Search Online, They're Usually Ready To Buy. With Targeted Keywords And Well-Structured Pages, Your Online Store Can Show Up Right When It Matters Most. That Means More Clicks, More Visits, And More Sales. <br/><p class='highlited-text>eCommerce SEO services focus on:</p>"
            subheding2="When People Search Online, They're Usually Ready To Buy. With Targeted Keywords And Well-Structured Pages, Your Online Store Can Show Up Right When It Matters Most. That Means More Clicks, More Visits, And More Sales."
            items={accordionData} 
            footer="When your store is easy to find and easy to navigate, your visitors stay longer. And more visits turn into actual purchases."
            />
    )
}
