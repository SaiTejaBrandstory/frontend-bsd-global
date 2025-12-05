import { CommonBigIndex } from "../common/CommonBigIndex"

export const Approach = () => {
  const heading = "The BrandStory Approach to Mobile App Development"
  const description = "" // Description below the heading is not present in the screenshot

  const cases = [
    {
      title: "Ideation & Discovery",
      description: "We Start By Understanding Your Goals, Users, And Challenges Through Workshops And Analysis. This Helps Define The Right Features And Strategy For Your Android, iOS, Or Cross-Platform App."
    },
    {
      title: "UI/UX Design",
      description: "We Create Intuitive Wireframes And User Journeys, Then Design Responsive, Platform-Specific Interfaces That Engage Users And Feel Native On Any Device."
    },
    {
      title: "Agile App Development",
      description: "Using Agile Sprints, We Build Secure, Scalable Apps For iOS, Android, Or Cross-Platform Frameworks Like Flutter And React Native, With Regular Updates To Keep You In The Loop."
    },
    {
      title: "Testing & Quality Assurance",
      description: "Comprehensive Testing Ensures Your App Works Flawlessly Across Devices, Screen Sizes, And Operating Systems, With Security And Performance Checks Included."
    },
    {
      title: "Launch, Maintenance & Ongoing Support",
      description: "We Deploy Your App To The App Store And Google Play, Then Provide Ongoing Monitoring, Updates, And Enhancements To Keep It Running Smoothly As Your Business Grows."
    },
  ]
  
  const footer = "" // Footer below the steps is not present in the screenshot
  
  return <CommonBigIndex 
    data={cases}
    description={description}
    heading={heading}
    footer={footer}
  />
}