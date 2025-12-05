import React from 'react'
import CommonAbout from '../common/CommonAbout'

export const WeGrow = () =>{
    return(
       <CommonAbout 
            title='<h2>We Grow As You Do – IT That Evolves<br/>With Your Business</h2>'
            subtitle='<p>No Hand-Offs. No Silos. No "Set It And Forget It." We Offer Full Spectrum IT Consulting Services That Evolve As Your Business Does – From Discovery To Deployment And Beyond.</p><p>We Help You Every Step Of The Way:</p>'
            text1="" 
            points={['<b>Strategy, Audits, Architecture — All In One</b><br/>From Shaping Your IT Vision To Assessing Your Current State And Designing The Technical Blueprint – Our IT Consulting Service Brings Together Strategic Planning, System Audits, And Architectural Design Under A Single, Cohesive Offering. No Silos. No Gaps. Just End-To-End Clarity And Action.<br/><br/>',
                '<b>Support For The Full Cycle: Complete IT Lifecycle Consulting</b><br/>Whether You’re Initiating A Digital Transformation, Scaling Operations, Or Modernizing Legacy Systems, We Support Every Stage Of Your IT Journey. Our Full-Cycle IT Consulting Ensures Continuous Alignment With Your Business Needs – From Ideation And Execution To Optimization And Evolution.<br/><br/>',
                '<b>A Partnership Model Where We Scale Together</b><br/>We Don’t Just Deliver Solutions And Walk Away. We Become An Extension Of Your Team – Growing With You, Adapting To Your Business Shifts, And Fine-Tuning Your IT As Your Goals Evolve. Our Partnership-First Approach Ensures Long-Term Value, Not Just One-Time Fixes.<br/><br/>']}
            text2=''
            imageSrc='/images/ItConsulting/image.png' 
            imageAlt='IT consultants discussing strategy in a meeting'
        />
    )
}