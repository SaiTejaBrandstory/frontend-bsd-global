import React from 'react'
import CommonAccordion from '../common/CommonAccordion';

export const SoftwareSolutions = () => {
     const accordionData = [
    {
      title: "1. Software Consulting",
      content:
        "We Work Closely With Your Internal Teams To Understand Your Business Goals And Challenges. Through In-Depth Analysis And Technology Consulting, We Help You Define The Right Strategy, Choose The Most Effective Tech Stack, And Create A Roadmap That Supports Sustainable Digital Transformation.",
    },
    {
      title: "2. Custom Software Development",
      content:
        "Our development approach is centered on creating tailored digital solutions that address your specific needs. Whether it’s a web platform, mobile app, or cloud-based tool, our custom software is built to scale with your vision and adapt as your business evolves.",
    },
    {
      title: "3. Architecture & Wireframing",
      content:
        "Before writing a single line of code, we focus on planning. Our team creates detailed wireframes and scalable architecture that form the backbone of your product. These early-stage decisions ensure intuitive user experiences and help future-proof the final application — especially critical for complex enterprise software systems.",
    },
    {
      title: "4. Ongoing Maintenance & Support",
      content:
        "Post-launch, we continue to support your growth with reliable software support. Our team provides proactive monitoring, performance optimization, version upgrades, and quick issue resolution—ensuring your software remains secure, efficient, and fully functional.",
    },
    {
      title: "5. Database Development",
      content:
        "We build high-performance databases that ensure data integrity, speed, and scalability. From designing the data model to optimizing queries, we implement database solutions that align with your application architecture and support real-time operations across all business functions.",
    },
    {
      title: "6. Enterprise Software Solutions",
      content:
        "When off-the-shelf solutions fall short, we develop powerful enterprise software systems tailored to your organization’s operations. These platforms are built to manage complex workflows, support multiple users, and integrate seamlessly with your existing IT infrastructure—helping you drive productivity and efficiency at scale.",
    },
  ];
  return (
    <>
    <CommonAccordion
    title="Tailored Software Solutions That Drive Real Results"
    // subheding1="We plan your social media to guide people from first seeing your brand to becoming loyal fans. Our social media strategy has four steps:"
    subheding2="From Initial Planning To Long-Term Scalability, We Deliver Full-Cycle Software Services That Help Businesses Innovate, Grow, And Stay Competitive In A Fast-Changing Digital World."
     items={accordionData} 
     footer="Whether You’re Building From The Ground Up Or Optimizing Existing Systems, Our End-To-End Software Expertise Ensures Your Business Stays Ahead, With Solutions That Are Scalable, Secure, And Strategically Aligned."
     />
    </>
  )
}