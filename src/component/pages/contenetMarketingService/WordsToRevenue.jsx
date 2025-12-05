import React from 'react'
import CommonAbout from '../common/CommonAbout'

export const WordsToRevenue = () =>{
    return(
        <CommonAbout 
            title='<h2>From Words to Revenue</h2>'
            subtitle='<p>A lot of content out there never really works. It may look good, but it doesn’t bring leads, sales, or visibility.</p>'
            text1="We take a different approach. Every piece of content we make has a goal: to reach the right people, engage them, and turn interest into action.<br /><br />Here’s how we do it:"
            points={['Understand your audience and what they care about','Plan content that solves problems or answers questions','Track results to make sure it actually drives business growth']}
            text2='Our content marketing agency focuses on content that’s remembered, trusted, and acted upon.'
            imageSrc='/images/contentMarketingService/words-to-revenue.jpg'
            imageAlt='Measurable Results Image'
        />
    )
}