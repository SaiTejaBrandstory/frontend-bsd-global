import React from 'react'
import CommonAccordion from '../common/CommonAccordion';

export const StarategyFirst = () => {
     const accordionData = [
    {
      title: "1. Goal-Oriented Planning",
      content:
        `Every Campaign Begins With A Clear Strategy, Mapping The Full Funnel From Awareness To Engagement To Conversion. We Define Measurable Objectives Such As Reach, CTR, ROAS, And CPA To Ensure Every Step Moves Your Audience Closer To Action.
        `,
    },
    {
      title: "2. High-Impact Content Creation",
      content:
        ``, 
    },
    {
      title: "3. End-To-End Campaign Management",
      content:
        ``, 
    },
    {
      title: "4. Advanced Audience Targeting",
      content:
        ``, 
    },
    {
      title: "5. Lead Generation & ECommerce Conversions",
      content:
        ``, 
    },
    {
      title: "6. Influencer & UGC Integration",
      content:
        ``, 
    },
    {
      title: "7. Dynamic Retargeting & Funnel Acceleration",
      content:
        ``, 
    },
    {
      title: "8. Transparent Reporting & Analytics",
      content:
        ``, 
    },
  ];
  return (
        <>
            <CommonAccordion
                title="Strategy-First Instagram Ad</br>Campaigns That Deliver"
                // subheding2="A Backlink Only Works When It Earns Trust, From Search Engines And Your Audience. Our Guest Posting Service Is Built To Do Exactly That. We Focus On Quality Over Volume, Real Websites Over Shortcuts, And Strong Editorial Standards Over Spammy Placements."
                items={accordionData} 
                footer="<span class='highlited-text' >Custom Instagram Marketing Packages Available On Request.</span>" 
                paddingBottom={0}  
            />
             <div className="mx-auto mb-30 text-center">
                <a className="orange-btn">
                    Get Custom Quote
                </a>
            </div>
        </>
    )
}