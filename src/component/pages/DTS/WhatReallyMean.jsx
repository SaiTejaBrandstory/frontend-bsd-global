import React from 'react'
import CommonAbout from '../common/CommonAbout'

export const WhatReallyMean = () =>{
    return(
       <CommonAbout 
            title='<h2>What Digital Transformation Really Means for Your Business Today</h2>'
            subtitle='<p>At Brandstory, we help businesses reimagine how they operate, compete, and scale in a digital-first world. Whether you’re modernizing systems, automating workflows, or adopting cloud and data strategies — our solutions are built around your goals, not trends.</p>'
            text1="With over 1.5B in revenue influenced and 500M+ organic visits delivered, our transformation strategies go beyond implementation — they drive outcomes. </br></br><b>Why Digital Transformation Matters:</b>"
            points={['Launch faster with agile infrastructure',
                    'Make better decisions with real-time insights',
                    'Improve customer experience at every touchpoint',
                    'Streamline operations and reduce inefficiencies',
                    'Scale confidently with future-ready systems'
                ]}
            text2='Not sure where to begin? That’s what we’re here for. Let’s align your business with what’s next.'
            imageSrc='/images/DTS/about.png'
            imageAlt='Social-media-marketing-about'
        />
    )
}