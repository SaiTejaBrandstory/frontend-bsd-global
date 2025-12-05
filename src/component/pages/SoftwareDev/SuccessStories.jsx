import { CommonBigIndex } from "../common/CommonBigIndex"

export const SuccessStories = () => {
  const heading = "Success Stories That Speak Louder Than Promises"
//   const description = "We produce quantifiable outcomes. Our case studies on B2C marketing show observable effects:"

  const cases = [
    {
      title: "Travel",
      description: "<b>Elevating Itinerary Management With Intelligent Software</b><br />A Leading Travel Aggregator Turned To Brandstory To Modernize Its Outdated Booking System. We Delivered An AI Software Solution That Featured Real-Time Itinerary Tools, Dynamic Pricing, And Multi-Device Responsiveness." +
                   "<br /><br /><b>Result</b><br />Increased Booking Speed By 3x And Reduced Operational Costs By 40%, All Through A Smarter, Scalable Backend Architecture." +
                   "<br /><br />This Project Is A Prime Example Of How Our Software Development Services Empower Businesses To Move Faster And Serve Smarter."
    },
    {
      title: "Healthcare",
      description: "<b>HIPAA-Compliant Telehealth Platform With Secure Coding</b><br />A Healthcare Provider Needed A Reliable Solution For Remote Consultations And Patient Data Management. Brandstory Developed A Custom Application That Combined Secure Coding Practices With Data Encryption And AI-Enabled Symptom Analysis." +
                   "<br /><br /><b>Impact</b><br />5x Growth In Virtual Consultations And Improved Patient Outcomes, Supported By Our Commitment To Data Security And Custom Software Engineering Services Tailored To Healthcare."
    },
    {
      title: "Education",
      description: "<b>LMS Powered By AI Integration And Automation Tools</b><br />A Multi-Campus Institution Needed A Robust Education Software Platform For Online Learning. We Built A Custom Software Solution Featuring AI-Driven Assessments, Role-Based Access, And Real-Time Analytics Dashboards." +
                   "<br /><br /><b>Outcome</b><br />60% Rise In Student Engagement And Seamless Access Across Campuses, Showcasing Our Expertise In AI Integration, Intelligent Automation, And Domain-Focused Software Solutions."
    },
  ]
  
  const footer = "These outcomes demonstrate how our B2C ROI strategy aids brands in expanding and forging closer bonds with their clientele across sectors."
  
  return <CommonBigIndex 
    data={cases}
    // description={description}
    heading={heading}
    footer={footer}
  />
}