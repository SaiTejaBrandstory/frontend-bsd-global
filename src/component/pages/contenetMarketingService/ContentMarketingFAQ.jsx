import CommonAccordion2 from '../common/CommonAccordion2';

export const ContentMarketingFAQ = () => {
  const accordionData = [
    {
      title: "Tech SaaS company",
      content:
        "We designed a steady stream of blogs, email guides, and webinars that didn’t just generate awareness, they built authority. Within a few months, monthly leads climbed by 60%, giving the sales team a pipeline filled with qualified prospects.",
    },
    {
      title: "E-commerce brand",
      content:
        "By pairing engaging social campaigns with product videos, we made discovery effortless and buying irresistible. The result? An 80% jump in traffic and a 25% lift in sales, proving that storytelling and visuals can turn browsers into buyers.",
    },
    {
      title: "Healthcare provider",
      content:
        "In an industry where trust is everything, we focused on educational blogs and authentic patient stories. This approach grew website visits by 70% and, more importantly, built stronger relationships with patients who felt informed and supported.",
    },
  ];

  return (
    <CommonAccordion2
      title="Content Marketing Case Studies"
      description="Numbers tell part of the story, but the real impact is in how content changes the way businesses connect with their audiences. Here’s a look at what we’ve achieved for our clients:"
      items={accordionData}
    />
  );
};