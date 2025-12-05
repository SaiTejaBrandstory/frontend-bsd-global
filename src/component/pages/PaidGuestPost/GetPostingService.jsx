import CommonAccordion2 from '../common/CommonAccordion2';

export const GetPostingService = () => {
  const accordionData = [
    {
      title: "Industry Authority Guest Posts",
      content:
        "", 
    },
    {
      title: "Niche Blogger Outreach",
      content:
        "", 
    },
    {
      title: "Sponsored Editorials On High-Traffic Sites",
      content:
        "", 
    },
    {
      title: "Traffic-Driven Guest Posts",
      content:
        "", 
    },
    {
      title: "Guest Blogging For ECommerce Brands",
      content:
        "", 
    },
    {
      title: "SaaS And B2B Tech-Focused Guest Posts",
      content:
        "", 
    },
    {
      title: "Local Guest Posting For Regional Visibility",
      content:
        "", 
    },
    {
      title: "Guest Posts With Built-In Content Syndication",
      content:
        "", 
    },
  ];

  return (
    <CommonAccordion2
      title="Guest Posting Services That Fit Your Growth Plan"
      description="Every Business Has A Different Reason For Using Guest Posting. Some Want A Stronger Search Presence, Others Want Brand Recognition, Some Want Both. That's Why We Offer A Range Of Guest Posting Options That Align With Your Current Growth Goals."
      items={accordionData}
      splitRatio={0.5} 
    />
  );
};
