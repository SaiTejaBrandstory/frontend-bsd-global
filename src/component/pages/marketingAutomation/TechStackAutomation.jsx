import React from 'react'
import CommonAccordion from '../common/CommonAccordion';

export const TechStackAutomation = () => {
     const accordionData = [
    {
      title: "1. HubSpot",
      content:
        "All-in-one marketing automation with CRM integration for managing campaigns, leads, and customer journeys.",
    },
    {
      title: "2. Marketo",
      content:
        "Enterprise-grade automation designed for complex workflows and large-scale lead management.",
    },
    {
      title: "3. Pardot",
      content:
        "Salesforce-powered platform ideal for B2B marketing, nurturing, and sales alignment.",
    },
    {
      title: "4. ActiveCampaign",
      content:
        "Easy-to-use automation with strong email and customer experience features for growing businesses.",
    },
    {
      title: "5. Mailchimp",
      content:
        "Popular solution for simple, effective email marketing and automation at scale.",
    },
    {
      title: "6. Klaviyo",
      content:
        "Advanced automation for eCommerce, focusing on personalized email and SMS campaigns.",
    },
    {
      title: "7. Zoho CRM",
      content:
        "Flexible CRM with built-in automation tools to manage customer data and marketing in one place.",
    },
  ];
  return (
    <CommonAccordion
        title="Our Technology Stack for Automation"
        // subheding1="We plan your social media to guide people from first seeing your brand to becoming loyal fans. Our social media strategy has four steps:"
        subheding2="We use the best tools to make marketing automation work smoothly for your business. Some of the platforms we work with include:"
        items={accordionData} 
    />

  )
}