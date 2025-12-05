import React from 'react'
import CommonAccordion from '../common/CommonAccordion';

export const Strategy = () => {
     const accordionData = [
    {
      title: "1. Future Ready Cloud Infrastructure",
      content:
        `We help enterprises become <b>cloud-ready</b> with secure, scalable, and innovation ready platforms. Whether migrating or building cloud-native solutions, your infrastructure is designed for agility and resilience.
        `,
    },
    {
      title: "2. Intelligent Workflow Automation",
      content:
        `Integrating <b>automation</b> into critical workflows reduces redundancies and manual tasks. Starting from DevOps, we optimize processes to free teams for strategic innovation.`, 
    },
    {
      title: "3. Resilient Cloud Native Architecture",
      content:
        `Our <b>cloud native transformation</b> solutions handle evolving workloads with elastic scalability and always on availability. Platforms are engineered to support rapid growth and seamless adoption.`, 
    },
    {
      title: "4. Lower Total Cost Of Ownership",
      content:
        `Utilizing cloud efficiencies, agile practices, and infrastructure-as-code, we accelerate delivery while reducing capital expenditure. The result is faster ROI and a flexible tech ecosystem.`, 
    },
    {
      title: "5. Modernizing Legacy Systems",
      content:
        `Our services replace outdated systems with <b>performance-driven</b>, scalable solutions. We ensure modernization without disrupting business continuity, aligning technology with changing customer needs.`, 
    },
  ];
  return (
        <>
            <CommonAccordion
                title="Strategy to Scale: What Our Digital</br>Transformation Services Cover"
                subheding2="At BrandStory, We Define The Why, What, And How Of Transformation Through A Strategic Lens. Our Digital Transformation Consulting Services Create A Roadmap Which Scales With Your Business. From Planning To Execution, We Make Sure Every Initiative Delivers Measurable, Long Term Value."
                items={accordionData} 
                footer="Transform your business with precision and purpose. Every initiative is focused on delivering growth, efficiency, and lasting value.</br></br><b class='highlited-text' >Measurable Client Impact:</b></br>Clients see tangible results: a leading interior design brand achieved a 300% increase in leads and 350% growth in organic traffic. Our solutions deliver transformation that truly scales." 
                paddingBottom={0}  
            />
        </>
    )
}