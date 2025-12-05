import React from 'react'
import CommonAccordion from '../common/CommonAccordion';

export const TypesOfConsulting = () => {
     const accordionData = [
    {
      title: "1. IT Consulting Services",
      content:
        `We help you modernize your technology landscape — from optimizing infrastructure and system architecture to enhancing overall IT performance. Our experts ensure that your digital foundation supports both current needs and future growth.
        `,
    },
    {
      title: "2. Digital Transformation Services",
      content:
        `Drive innovation across your organization by reimagining business models, workflows, and customer journeys. Our digital transformation services are built to integrate cutting-edge technology with practical execution, ensuring measurable impact.`, 
    },
    {
      title: "3. Cybersecurity Services",
      content:
        `In a threat-heavy digital landscape, resilience is critical. We design and implement robust cybersecurity frameworks to safeguard your data, systems, and operations — ensuring compliance, continuity, and confidence.`, 
    },
    {
      title: "4. Data Analytics Services",
      content:
        `Make smarter, faster decisions with advanced analytics solutions. We turn raw, fragmented data into meaningful insights that empower strategic moves across marketing, operations, finance, and more.`, 
    },
  ];
  return (
        <>
            <CommonAccordion
                title="Explore the Types of Consulting<br/>Services We Offer"
                subheding2="Our suite of consulting solutions addresses every layer of transformation and growth:"
                items={accordionData} 
                footer="From strategy consulting services that define the roadmap to management consulting services that execute it, our approach is tailored, scalable, and always aligned with long-term business value."  
            />
        </>
    )
}