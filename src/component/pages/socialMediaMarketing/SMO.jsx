import React from 'react'
import CommonTwoCard from '../common/CommonTwoCard'

export const SMO = () => {
    const seoData = {
    heading: "Social Media Optimization (SMO)",
    subheading:
      "A Good Profile Matters. Social Media Optimization Makes Sure Your Social Accounts Look Professional And Are Easy To Find.",
    cards: [
      {
        title: "Branded Images And Logos",
        description:
          "To Help People Recognize You, We Utilize Images And Logos That Are Consistent With Your Brand.",
      },
      {
        title: "Clear And Captivating Bios",
        description:
          "We Develop Succinct, Straightforward Summaries That Convey The Essence Of Your Company.",
      },
      {
        title: "Appropriate Keywords",
        description:
          "We Incorporate Terms That People Use To Find Your Articles And Profile When They Search For Your Goods Or Services.",
      },
      {
        title: "Regular Posting",
        description:
          "We Offer Content Frequently To Keep Your Audience Interested And Help Them Remember Your Name.",
      },
    ],
  };
  return (
    <>
        <CommonTwoCard {...seoData}/>
        <p className='max-w-[900px] text-center mx-auto mb-30'>This helps more people discover your brand, and also builds trust with your audience. A well-optimized profile makes your business look credible and active.</p>
    </>
  )
}
