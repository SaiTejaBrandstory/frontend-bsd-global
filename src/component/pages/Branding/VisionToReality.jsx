import React from 'react'
import CommonAbout from '../common/CommonAbout'

export const VisionToReality = () =>{
    return(
       <CommonAbout 
            title='<h2>From Vision to Reality: Crafting Brands<br />with Lasting Impact</h2>'
            subtitle='<p>Many businesses have a logo or a design, but very few have a story that truly matters. A logo alone cannot show your values, your purpose, or your dreams. That is why a branding agency like BrandStory is important. We start with strategy first. We look at your business, your customers, and your market. Then we find what makes your brand special.</p>'
            text1="Our approach includes:"
            points={['We study your market and competitors carefully.','We define your brand positioning so people know why you are different.','We design your business identity so everything looks and feels right.','We create an experience that connects with your audience.']}
            text2='The final brand is not just nice to look at. It is meaningful. It lasts. Your brand becomes a strong part of your business that grows with you.'
            imageSrc='/images/Branding/vb.jpg'
            imageAlt='Social-media-marketing-about'
        />
    )
}