import CommonTwoCard from '../common/CommonTwoCard'

export const Services =()=>{
    const data = {
    heading: "Results-Focused Mobile App Development Services",
    subheading:
      "With Our Strategic App Development Services, We Help Businesses Unlock New Revenue Channels, Build Stronger Customer Relationships, And Accelerate Digital Transformation.",
    cards: [
            {
              title: "Sales Acceleration",
              description:
                "Drive Higher Conversions With Seamless In-App Purchases, Service Bookings, And Subscription Models Designed Around Your Users’ Journey. By Optimizing The Flow And Minimizing Friction, We Help Turn App Interactions Into Measurable Revenue, Ensuring Your Mobile Platform Actively Contributes To Business Growth.",
            },
            {
              title: "User Engagement",
              description:
                "Keep Users Coming Back With Targeted Push Notifications, Personalized Offers, And Real-Time Updates. Our Strategies Focus On Relevance And Timing, Enhancing Retention, Fostering Loyalty, And Making Your App An Essential Part Of Your Users’ Daily Routine.",
            },
            {
              title: "Brand Differentiation",
              description:
                "In A Crowded App Marketplace, Standing Out Is Crucial. We Deliver Intuitive UX, Smart Features, And Innovative Design That Not Only Delight Users But Also Reinforce Your Brand Identity. Our Results-Focused Approach Ensures Your App Is Both Functional And A Competitive Advantage.",
            },
            {
              title: "Revenue Growth",
              description:
                "Every App We Build Is Designed With Monetization In Mind. From Ad Integrations To Freemium Models And Subscription Plans, We Create Strategies That Maximize ROI, Ensuring Your Investment In Android Or iOS App Development Translates Into Sustainable, Long-Term Revenue.",
            },
        ],
    };
    
    return (
        <>
            <CommonTwoCard {...data}/>
            {/* The concluding paragraph was removed as it does not appear in the screenshot's context. */}
        </>
    )
}
