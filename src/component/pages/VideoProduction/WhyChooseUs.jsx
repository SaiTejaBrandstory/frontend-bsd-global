import CommonAccordion2 from '../common/CommonAccordion2';

export const WhyChooseUs = () => {
  const accordionData = [
    {
      title: "Award-Winning Creativity Backed by Measurable Performance",
      content:
        "We don’t just make beautiful videos; we craft experiences that engage and convert. Our work has been recognized for its storytelling, impact, and innovation.",
    },
    {
      title: "End-to-End Project Management from Ideation to Delivery",
      content:
        "From strategy and scripting to editing and distribution, our <b>video production services</b> cover every phase. You get a single point of contact and a smooth process from day one.",
    },
    {
      title: "Fast Turnaround Times Without Compromising Quality",
      content:
        "Deadlines matter. Our production teams are agile, responsive, and built for speed, while maintaining the high quality output your brand deserves.",
    },
    {
      title: "Transparent Pricing, Milestone-Based Billing, and Zero Hidden Charges",
      content:
        "We believe in clarity and honesty. Our pricing structure is transparent and our deliverables are always clearly defined.",
    },
  ];

  return (
    <CommonAccordion2
      title="Why Choose Us"
      description="Working with Brandstory means partnering with a team of thinkers, creators, and strategists committed to making your vision come alive on screen. As a leading creative video agency, we combine originality with execution to deliver measurable business outcomes.<br/><br/>As a professional video production partner, we are committed to delivering creative work with consistency, clarity, and collaboration. Our approach makes Brandstory not just a vendor but your trusted video partner in long-term brand growth."
      items={accordionData}
    />
  );
};