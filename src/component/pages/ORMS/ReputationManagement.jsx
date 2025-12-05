import React from 'react'
import CommonAbout from '../common/CommonAbout'

export const ReputationManagement = () =>{
    return(
       <CommonAbout 
            title='<h2>Why Reputation Management Matters</h2>'
            subtitle='<p>One negative review or article can overshadow years of hard work. Reputation issues can appear suddenly and spread fast.</p>'
            text1="We believe in proactive management. By monitoring your online presence, responding quickly, and sharing positive stories, we protect your brand’s credibility."
            // points={['Cost-efficient campaigns that maximize ROI',
            //          'High-quality lead generation instead of vanity traffic',
            //          'Data-backed decision-making at every stage']}
            text2='With our online reputation management agency, your brand stays trusted, reliable, and strong.'
            imageSrc='/images/ORMS/reputation-management.png'
            imageAlt='Social-media-marketing-about'
        />
    )
}