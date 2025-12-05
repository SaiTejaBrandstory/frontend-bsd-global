import React from 'react'
import CommonAccordion from '../common/CommonAccordion';

export const VisonaryBrands = () => {
     const accordionData = [
    {
      title: "1. Mobile Projects We’ve Delivered",
      content:
        "From high-utility B2C apps to enterprise-grade mobility solutions, our portfolio spans 150+ successful mobile app launches across industries. Every application is designed to solve real-world business challenges — with seamless UX, optimized performance, and measurable outcomes.",
    },
    {
      title: "2. Our Mobile App Developers",
      content:
        "More than developers — they’re problem-solvers. With deep expertise across native (iOS, Android) and cross-platform frameworks (Flutter, React Native, Kotlin), our team transforms complex business requirements into intuitive, scalable, and user-centric mobile experiences.",
    },
    {
      title: "3. Project Management & Client Success",
      content:
        "Our delivery leads don’t just ensure timelines — they ensure results. With dedicated project managers, transparent communication, and agile coordination, we align every milestone with your business goals. That’s why global brands rely on our professional web development services for long-term success. <br/><br/>In every project, our mobile development services are driven by one principle: don’t just build — build better.",
    },
    {
      title: "4. Mobile App Development Services Across All Platforms",
      content:
        "Whether you're launching a brand-new product or revamping an existing one, our app development services are designed to meet you where you are — and get you where you want to go.",
    },
  ];
  return (
        <CommonAccordion
        title="A Mobile Partner Trusted by Visionary Brands"
            // subheding1 is commented out in the original and will remain so.
            // subheding2="Not Every Business Needs The Same Website – And That’s Where Strategy Matters. Discover A Digital Solution That Fits Your Business Model, Audience Behavior, And Growth Goals. <br/><b class='highlited-text'>Choose From Our Full-Spectrum Web Development Solutions:</b>"
            items={accordionData} 
            // Footer removed as it does not appear in the screenshot's visible area.
        />
    )
}