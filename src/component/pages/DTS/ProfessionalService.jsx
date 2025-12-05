import React from 'react'
import CommonTwoCard from '../common/CommonTwoCard'

export const ProfessionalService =()=>{
    // Data updated to match the content from the "Professional Services Firms, Meet the New Standard of Digital" image
    const data = {
    heading: "Professional Services Firms, Meet the</br>New Standard of Digital",
    // highlight: "New Standard of Digital",
    subheading:
      "We Specialize In Digital Transformation In Professional Services, Offering End-To-End Solutions That Enable Firms To Modernize Operations Without Compromising On Security Or Compliance. </br></br><b class='highlited-text'>What We Deliver:</b>",
    cards: [
            {
              title: "Workflow Automation For Operational Efficiency",
              description:
                "Say Goodbye To Manual Redundancies. We Implement Intelligent Automation Across Core Workflows – From Time Tracking To Client Reporting – To Reduce Effort, Eliminate Errors, And Dramatically Improve Turnaround Times.",
            },
            {
              title: "AI-Driven Business Insights For Smarter Advisory",
              description:
                "With Embedded Analytics And Machine Learning, We Empower Consultants, Auditors, Legal Advisors, And Financial Professionals With Real-Time Insights That Enhance Decision-Making, Forecasting, And Client Recommendations.",
            },
            {
              title: "Digital Onboarding And Document Management",
              description:
                "Deliver A Seamless, Fully Digital Experience From The First Interaction. Our Platforms Support End-To-End Client Onboarding, Document Sharing, And E-Signature Workflows, Reducing Friction And Increasing Transparency.",
            },
            {
              title: "Integrated Technology Ecosystems",
              description:
                "Our Digital Transformation Consulting Services Ensure Smooth Integration Across Industry-Standard Tools – From CRMs Like Salesforce To ERPs And Compliance Platforms – Enabling Centralized Data Access, Better Team Collaboration, And Efficient Client Management.",
            },
            {
              title: "Governance And Security By Design",
              description:
                "Built-In Compliance Frameworks And Enterprise-Grade Security Protocols Ensure That Your Firm Adheres To Data Privacy Laws And Industry Regulations, While Also Safeguarding Client Trust At Every Stage Of Engagement.",
            },
        ],
    };

    return (
        <>
            <CommonTwoCard {...data} titleClass="text-center" cardLayout="two-col" titleSubheading="What We Deliver:"/>
            <p className='max-w-[1200px] text-center mx-auto mb-30'>With Transformation Engineered For Highly Regulated Environments, We Help You Unlock Productivity, Enhance Client Satisfaction, And Future-Proof Your Firm For What’s Next.</p>
        </>
    )
}