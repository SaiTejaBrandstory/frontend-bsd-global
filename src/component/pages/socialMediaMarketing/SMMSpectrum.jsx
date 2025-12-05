import React from 'react'
import CommonAccordion from '../common/CommonAccordion';

export const SMMSpectrum = () => {
     const accordionData = [
    {
      title: "1. Awareness",
      content:
        "The first step is helping people discover your brand. We use posts, ads, and influencer partnerships to put your business in front of the right audience and make sure they notice you.",
    },
    {
      title: "2. Engagement",
      content:
        "Once people know who you are, the next step is sparking conversations. Polls, stories, and interactive content keep your audience involved and build a stronger connection with your brand.",
    },
    {
      title: "3. Conversion",
      content:
        "Interest should lead to action. With tailored offers, targeted ads, and smart retargeting, we guide your audience from “just browsing” to becoming paying customers.",
    },
    {
      title: "4. Advocacy",
      content:
        "The journey doesn’t end at a sale. Loyal fans are your biggest promoters. We encourage user-generated posts, shoutouts, and brand communities that turn happy customers into long-term advocates.",
    },
  ];
  return (
    <>
    <CommonAccordion
    title="Full-Spectrum Guide to Social Media Growth"
    // subheding1="We plan your social media to guide people from first seeing your brand to becoming loyal fans. Our social media strategy has four steps:"
    subheding2="We plan your social media to guide people from first seeing your brand to becoming loyal fans. Our social media strategy has four steps:"
     items={accordionData} />

     <p className='text-center mb-25'>Every step helps build trust and long-term relationships.</p>
    </>
  )
}