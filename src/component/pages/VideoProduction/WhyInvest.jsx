import React from 'react'
import CommonAbout from '../common/CommonAbout'

export const WhyInvest = () =>{
    return(
       <CommonAbout 
            title='<h2>Why Invest in Video Production?</h2>'
            subtitle='<p>These days, video production is a necessity for businesses to thrive. The data speaks for itself: video drives higher click-through rates, longer engagement times, and significantly better conversion rates compared to other content forms.</p>'
            text1="Here is what the right videos can do for your business:<br/><br/>We combine:"
            points={['Increase engagement and conversions through compelling narratives that evoke emotion and action. ',
                    'Enhance brand awareness and visibility across digital platforms, including YouTube, Instagram, and LinkedIn.',
                    'Communicate complex ideas simply and effectively through visuals that stick.',
                    'Boost SEO rankings and social media reach, helping you rank better and reach more people organically.']}
            text2='Whether it’s video marketing or business video production, you are investing in one of the most powerful tools to drive audience engagement, improve brand visibility, and deliver impactful explainer videos that stick.'
            imageSrc='/images/VideoProduction/why-invest.png'
            imageAlt='Social-media-marketing-about'
        />
    )
}