import React from 'react'
import CommonAbout from '../common/CommonAbout'

export const HighPerformance = () =>{
    return(
       <CommonAbout 
            title='<h2>The Tech That Powers High-Performance<br/>Digital Experiences</h2>'
            subtitle='<p>From Lightweight Websites To Enterprise Ecosystems, We Use A Powerful Tech Stack That Ensures Every Product We Build Is Fast, Secure, And Scalable.</p>'
            text1='Our Stack Includes:'
            text2="This Tech Arsenal Helps Us Execute Projects With Velocity, Precision, And Future-Readiness—Which Is Why Brands Trust Our Web Development Company For High-Stakes Website Development And Growth-Driven Execution."
            points={[
                '<b>Languages:</b> Java, C, C++, PHP',
                '<b>Frameworks:</b> Node.JS, .NET, Angular, React, Sass, JavaScript',
                '<b>Cloud:</b> AWS, Azure',
                '<b>Mobile & Web:</b> iOS, Android, HTML',
                '<b>Databases:</b> NoSQL, MySQL, Microsoft SQL'
            ]}
            imageSrc='/images/WebDev/hp.png'
            imageAlt='Social-media-marketing-about'
        />
    )
}