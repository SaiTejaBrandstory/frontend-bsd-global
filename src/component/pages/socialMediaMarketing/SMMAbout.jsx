import React from 'react'
import CommonAbout from '../common/CommonAbout'

export const SMMAbout = () => {
  return (
   <CommonAbout 
   title='<h2>Turning Engagement Into Measurable ROI with Social Media</h2>'
   subtitle='<p>Many brands count likes and shares. But likes don’t pay the bills. Our social media marketing agency works differently:</p>'
//    text1='A skilled SEO company focuses on relevance.'
   points={['Every post and ad has a purpose','We help turn people’s attention into real sales','Organic posts, ads, influencer posts, and communities all work together']}
   text2='The goal is simple: more engagement, more customers, more growth.'
   imageSrc='/images/SMM/SMM-about.jpg'
   imageAlt='Social-media-marketing-about'
   />
  )
} 
