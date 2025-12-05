import CommonAccordion2 from '../common/CommonAccordion2';


export const WhatYouGet = () => {
  const accordionData = [
    {
      title: "Google Business Profile Management",
      content:
        "", 
    },
    {
      title: "Citation Building & Management",
      content:
        "", 
    },
    {
      title: "Local Content Creation",
      content:
        "", 
    },
    {
      title: "Local Link Acquisition",
      content:
        "", 
    },
    {
      title: "Review & Reputation Management",
      content:
        "", 
    },
    {
      title: "Technical SEO For Local",
      content:
        "", 
    },
    {
      title: "Multi-Location SEO Solutions",
      content:
        "", 
    },
  ];


  return (
    <CommonAccordion2
      title="All You Get with Brandstory's Local SEO Services"
      description="No Matter Your Business Size, We Align Each Service To Your Growth Goals. You Can Start Small And Scale As Needed. It's Your Local SEO—Done Your Way, With Real Strategy Behind It."
      items={accordionData}
      splitRatio={0.5} 
    />
  );
};
