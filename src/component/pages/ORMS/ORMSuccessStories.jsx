import CommonAccordion2 from '../common/CommonAccordion2';

export const ORMSuccessStories = () => {
  const accordionData = [
    {
      title: "Tech Startup",
      content:
        "Negative search results were replaced with positive content, improving overall brand sentiment by 70% within three months.",
    },
    {
      title: "Corporate Executive",
      content:
        "Misleading reviews were removed, LinkedIn visibility restored, and engagement on professional networks increased 5x.",
    },
    {
      title: "E-commerce Brand",
      content:
        "Negative press was suppressed while positive reviews and testimonials were promoted, boosting customer trust scores by 60%.",
    },
  ];

  return (
    <CommonAccordion2
      title="ORM Success Stories"
      description="Our ORM case studies show measurable outcomes and real results."
      items={accordionData}
    />
  );
};