import CommonAccordion2 from '../common/CommonAccordion2';

export const SMMSocialPartner = () =>{
    
    const accordionData = [
    {
      title: "Creative postings:",
      content:
        "We create articles, videos, and posts that are visually appealing and consistent with your brand's aesthetic.",
    },
    {
      title: "Daily checks:",
      content:
        "We keep an eye on your campaigns each day to determine what is and is not effective.",
    },
    {
      title: "Reach of influencers:",
      content:
        "We establish connections with influencers to increase brand awareness.",
    },
    {
      title: "Making wise decisions:",
      content:
        "To avoid wasting money, we base our decisions on facts.",
    },
    {
      title: "Clear reporting:",
      content:
        "We provide simple reports that highlight events and outcomes.",
    }
  ];

    return ( 
        <CommonAccordion2
        title="Why We’re the Social Media Partner Brands Rely On"
        description="We are chosen by brands because we simplify social media. We ensure that each ad and content adds value."
        items={accordionData} />
    )
}