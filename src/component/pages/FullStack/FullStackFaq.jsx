import FAQs from '@/component/pages/common/CommonFAQ'
export const FullStackFaq = () =>{
      const data = [
  {
    title: "Can you customize tech stacks for niche requirements?",
    description: "Absolutely. We begin with a deep understanding of your business needs, goals, and industry-specific challenges. Based on this, we recommend and implement a custom tech stack that ensures long-term scalability and performance."
  },
  {
    title: "Do you work with startups and enterprises alike?",
    description: "Yes. Our engagement model is tailored to fit both ends of the spectrum — from agile, fast-paced MVPs for startups to robust, secure, and scalable solutions for large enterprises with complex infrastructures."
  },
  {
    title: "Will I get a dedicated team or developer?",
    description: "You’ll have access to a dedicated developer or an entire team based on your project scope. Each engagement is overseen by a project manager, ensuring clarity, timely delivery, and consistent communication throughout."
  },
  {
    title: "What does your post-launch support include?",
    description: "Post-launch, we offer SLA-backed support that covers bug resolution, performance tuning, uptime monitoring, and iterative feature updates. Our goal is to ensure your product stays optimized and aligned with evolving user needs."
  },
  {
    title: "How fast can you begin development?",
    description: "We’re structured for speed. Once we complete the discovery call and project scoping, we can onboard resources and initiate development within 24–48 hours — so you don’t lose momentum."
  }
];


return (
    <FAQs data={data}/>
)
}