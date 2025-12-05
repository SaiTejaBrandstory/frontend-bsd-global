import React from 'react'
import CommonAbout from '../common/CommonAbout'

const Seoabout = () => {
  return (
   <CommonAbout 
   title='<h2>The SEO Agency Focused on Customers, Not Just Clicks</h2>'
   subtitle='<p>High website traffic is only valuable when it leads to sales. Many brands attract visitors who never convert. That happens when the wrong audience is targeted.</p>'
   text1='A skilled SEO company focuses on relevance.'
   points={['Target high-intent keywords that show buying intent.','Create content that answers specific questions and solves real problems.','Apply internal linking that guides visitors to act.']}
   text2='The result is organic traffic that delivers qualified leads, not empty numbers.'
   imageSrc='/images/seo/seo-about.webp'
   imageAlt='seo-about'
   />
  )
} 

export default Seoabout