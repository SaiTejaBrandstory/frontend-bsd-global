import React from 'react'
import CommonAccordion from '../common/CommonAccordion';

export const FiveStep = () => {
     const accordionData = [
    {
      title: "1. Check Your Website and Competitors",
      content:
        `We start by reviewing your website and looking at your competitors. 
        <br><br/>
        <ul>
            <li><b>Crawl And Heatmap Check</b> – We See How Search Engines Move Through Your Site And Identify Pages They May Miss Or Spend Too Much Time On.</li>
            <li><b>Site Layout And Page Check</b> – We Find Broken Links, Errors, And Issues In Your Website Design.</li>
            <li><b>Competitor Check</b> – We Analyze Which Keywords Your Competitors Rank For That You Don't, So We Can Spot Opportunities.</li>
        </ul>
        `,
    },
    {
      title: "2. Plan Topics and Keywords",
      content:
        "Our team of expert mobile app developers possesses deep expertise in native (iOS/Android) and cross-platform development, ensuring your solution is built by specialists with a focus on performance and scalability.",
    },
    {
      title: "3. Fix SEO on Your Pages",
      content:
        "We follow an agile, transparent development process with dedicated project managers to ensure on-time delivery, clear communication, and a partnership-focused approach that guarantees client satisfaction.",
    },
    {
      title: "4. Build Trust With Backlinks",
      content:
        "We provide end-to-end services, including native iOS and Android development, cross-platform solutions (like React Native and Flutter), and custom mobile backend engineering, covering every stage of the app lifecycle.",
    },
    {
      title: "5. Keep Improving",
      content:
        "We provide end-to-end services, including native iOS and Android development, cross-platform solutions (like React Native and Flutter), and custom mobile backend engineering, covering every stage of the app lifecycle.",
    },
  ];
  return (
        <CommonAccordion
        title="Our 5-Step Entreprise SEO System That Drives Long-Term Growth"
        // subheding1="Big websites have many pages and teams. To make them work better, we follow five simple steps. This helps your site get more visitors, stay organized, and grow over time."
            subheding2="Big websites have many pages and teams. To make them work better, we follow five simple steps. This helps your site get more visitors, stay organized, and grow over time."
            items={accordionData} 
            // Footer removed as it does not appear in the screenshot's visible area.
        />
    )
}
