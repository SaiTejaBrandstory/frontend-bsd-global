import React from 'react'
import CommonAbout from '../common/CommonAbout'

export const MeasurableResults = () =>{
    return(
       <CommonAbout 
   title='<h2>Delivering Measurable Results</h2>'
   subtitle='<p>Marketing can take a lot of time. Teams spend hours sending emails, posting on social media, updating lists. It’s repetitive. And it slows growth.</p>'
   text1="Our marketing automation agency approach fixes this. We connect email, CRM, social, and analytics into one system. Once it’s set up, your campaigns run automatically.<br /><br />Automation helps you:"
   points={['Stop doing repetitive tasks.','Run automated campaigns that reach the right audience.','See real results with ROI-focused automation.']}
//    text2='The goal is simple: more engagement, more customers, more growth.'
   imageSrc='/images/MarketingAutomation/MeasurableResults.jpg'
   imageAlt='Measurable Results Image'
   />
    )
}