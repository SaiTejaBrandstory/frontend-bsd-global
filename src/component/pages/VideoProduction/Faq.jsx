import FAQs from '@/component/pages/common/CommonFAQ'

export const Faq = () => {
  const data = [
    {
      title: "How long does a video production project take?", 
      description: "Most video production projects take 2–6 weeks, depending on complexity, deliverables, and feedback timelines in the <b>video production process</b>."
    },
    {
      title: "How Do You Find Link Opportunities?",  
      description: "Absolutely. Our <b>video services</b> include scriptwriting and storyboarding as part of a smooth, end-to-end <b>production support</b> workflow."
    },
    {
      title: "Can you manage video marketing and distribution?", 
      description: "Yes, we handle everything from creation to promotion, ensuring your content performs across channels through full <b>video production</b> lifecycle support."
    },
    {
      title: "What types of clients do you typically work with?", 
      description: "We collaborate with startups, enterprises, and agencies across industries, tailoring our <b>video production services</b> to each brand’s unique needs."
    },
    {
      title: "How much does video production cost?", 
      description: "Our <b>video production pricing</b> is transparent and scalable based on project length, scope, and complexity. No hidden fees, just clarity."
    }
  ];

  return (
    <FAQs data={data}/>
  )
}