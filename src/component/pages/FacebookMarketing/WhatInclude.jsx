import React from 'react'
import CommonAccordion from '../common/CommonAccordion';

export const WhatInclude = () => {
     const accordionData = [
    {
      title: "1. Ad Campaign Setup & Strategy",
      content:
        `Before we launch anything, we work with you to define the right goals, be it leads, sales, or awareness. Our team then plans the entire funnel, chooses the right ad formats, and sets up targeted ad sets for each stage of the journey. This is how our facebook ad management builds a strong foundation for performance.
        `,
    },
    {
      title: "2. Creative Design & Copywriting",
      content:
        ``, 
    },
    {
      title: "3. Performance Tracking & Reporting",
      content:
        ``, 
    },
    {
      title: "4. Audience Retargeting & Lookalike Campaigns",
      content:
        ``, 
    },
    {
      title: "5. E-commerce Facebook Ads",
      content:
        ``, 
    }
  ];
  return (
        <>
            <CommonAccordion
                title="What’s Included in Our Facebook Marketing Services"
                subheding2="You don’t need five different vendors to handle one campaign. We bring everything you need to run, manage, and grow your ads, under one roof. From strategy and setup to design, targeting, and results, our team handles every layer of execution with clarity and care."
                items={accordionData} 
                footer=""  
            />
        </>
    )
}