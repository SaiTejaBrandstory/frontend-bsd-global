import React from 'react'
import CommonAbout from '../common/CommonAbout'

export const CustomerLifecycle = () =>{
    return(
       <CommonAbout 
            title='<h2>From First Click to Repeat Purchase:<br />Building Customer Lifecycles</h2>'
            subtitle='<p>Brands face stiff competition for attention. Capturing a first-time buyer is only the beginning.</p>'
            text1="Our B2C marketing agency creates structured customer journeys that guide buyers from awareness to loyalty. Using customer journey marketing and brand advocacy programs, we design experiences that encourage repeat purchases.<br/><br />Our approach includes:"
            points={['Emotional storytelling to connect with audiences','Targeted promotions to drive immediate action','Consumer loyalty campaigns to increase retention']}
            text2='This approach improves B2C customer growth and ensures every campaign strengthens long-term brand value.'
            imageSrc='/images/B2CMarketing/lifecycle.png'
            imageAlt='Social-media-marketing-about'
        />
    )
}