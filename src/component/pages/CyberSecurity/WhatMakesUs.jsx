import React from 'react'
import CommonAbout from '../common/CommonAbout'

export const WhatMakesUs = () =>{
    return(
       <CommonAbout 
            title='<h2>What Makes Us the Right Cybersecurity Service Provider for You</h2>'
            subtitle='<p>There Are Plenty Of Companies Offering Cybersecurity Services, But Not All Of Them Truly Partner With You. At BrandStory, We Treat Your Business Like It’s Our Own And Make Sure Nothing Slips Through The Cracks.</p>'
            text1="Here’s What Sets Us Apart:"
            points={[
                'Trusted By 500+ Clients Across 30+ Industries',
                "A Team Of Certified Cybersecurity Experts Who’ve Handled Real-World Threats",
                'Straightforward Communication With No Tech Fluff Or Delays',
                'Full Accountability And Outcome Ownership—We Don’t Hand Things Off, We See Them Through'
            ]}
            text2='We’re Here To Deliver Results That Keep Your Business Safe, Stable, And Ready For The Future.'
            imageSrc='/images/CS/image.png'
            imageAlt='Lock on credit cards and keyboard'
        />
    )
}