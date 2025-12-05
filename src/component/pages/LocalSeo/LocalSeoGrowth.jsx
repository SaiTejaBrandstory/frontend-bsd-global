import React from 'react'
import CommonAccordion from '../common/CommonAccordion';


export const LocalSeoGrowth = () => {
    const accordionData = [
    {
      title: "1. Local SEO Audit & Opportunities",
      content:
        `We Start By Checking Your Local SEO. We Look At Your Google Business Profile, Your Business Info (Name, Address, Phone), Your Website Setup, And How You Compare With Competitors. You Get A Simple Report, A List Of Things To Fix, And A Score That Shows How Strong Your Local SEO Is Right Now.
        `,
    },
    {
      title: "2. Digital PR And News Placements That Earn Attention",
      content:
        ``, 
    },
    {
      title: "3. Google Business Profile & Citations",
      content:
        ``, 
    },
    {
      title: "4. Local Links & Reputation",
      content:
        ``, 
    },
    {
      title: "5. Ongoing Optimization & Reporting",
      content:
        ``, 
    },
  ];

  return (
        <CommonAccordion
            title="Mapping Out Your Local SEO Growth"
            subheding2=""
            items={accordionData} 
            footer="" 
        />
    )
}
