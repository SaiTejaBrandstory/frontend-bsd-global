import React from 'react'
import CommonAccordion from '../common/CommonAccordion';

export const TailoredVideo = () => {
  const accordionData = [
    {
      title: "1. Corporate Videos",
      content:
        "Build trust with polished and professional content reflecting your mission and brand ethos. Great for onboarding, training, investor relations, and more.",
    },
    {
      title: "2. Explainer Videos",
      content:
        "Simplify your product or service with clear, visual storytelling that resonates. Perfect for product demos, internal communications, and customer education.",
    },
    {
      title: "3. Animation & Motion Graphics",
      content:
        "Catchy, creative visuals that educate, entertain, and retain viewer attention. Our animations are designed for storytelling with style.",
    },
    {
      title: "4. Event Coverage",
      content:
        "Capture your milestone events with cinematic quality and precision. We provide multi-cam setups, live editing, and post-event trailers.",
    },
    {
      title: "5. Testimonial Videos",
      content:
        "Let your clients do the talking, authentic, relatable, and powerful endorsements build trust and conversion.",
    },
    {
      title: "6. Social Media Videos",
      content:
        "Fast-paced, attention-grabbing content tailored for digital consumption. Optimized formats and storytelling hooks for maximum impact.",
    },
  ];

  return (
    <>
      <CommonAccordion
        title="Tailored Video Solutions for Every Business Need"
        // subheding1="Monitor. Manage. Restore. Grow."
        subheding2="Our versatile video production services are customized to match your brand's goals, audience preferences, and industry dynamics. No two businesses are the same, and neither are the videos we create."
        items={accordionData} 
      />
      <p className="mx-auto text-[180px] max-w-[1000px] text-center">From corporate video production to animation video production, we deliver end-to-end creative video solutions that meet every brand’s communication needs with flawless video content creation.</p>
    </>
  )
}
