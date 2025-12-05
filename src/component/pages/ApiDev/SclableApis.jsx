import React from 'react'
import CommonAbout from '../common/CommonAbout'

export const SclableApis = () =>{
    return(
       <CommonAbout 
            // Title changed to reflect the main heading of the image
            title='<h2>Take Your Product Further with<br/>Intelligent, Scalable APIs</h2>'
            // Subtitle changed to reflect the introductory text of the image
            subtitle="<p>From Enriching User Interactions To Streamlining Internal Systems, APIs Are The Silent Engines Behind Modern Digital Performance. Whether You're Building From Scratch Or Upgrading Existing Connections, We Help You:</p>"
            // text1 and text2 adjusted for a more cohesive flow with the new points
            text1='We Help You Every Step Of The Way:'
            text2="Backed By Over 1M+ Keywords Tracked & Ranked And ₹5,200+ Cr Revenue Influenced, Our API Engineering Doesn’t Just Deliver Features – It Delivers Business Growth."
            // Points are derived directly from the bullet points in the image
            points={[
                '<b>Custom API Development:</b> We build robust, well-documented APIs that align with your infrastructure, product vision, and business logic.',
                '<b>Third-Party Integrations:</b> Amplify functionality by connecting to CRMs, ERPs, payment gateways, analytics platforms, and more.',
                '<b>Legacy Modernization:</b> Breathe new life into aging systems through non-disruptive API layers that extend usability and reduce tech debt.',
                '<b>Enterprise-Grade Standards:</b> Every API is designed for security, scalability, and smooth interoperability across systems and user endpoints.'
            ]}
            // The image source path and alt text are maintained as requested
            imageSrc='/images/ApiDev/image.png' 
            imageAlt='Social-media-marketing-about'
        />
    )
}