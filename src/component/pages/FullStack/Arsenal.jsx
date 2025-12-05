import { CommonBigIndex } from "../common/CommonBigIndex"

export const Arsenal = () => {
  // Updated Heading and Description based on the screenshot
  const heading = "A Tech Arsenal That Works at Every Layer"
  const description = "Whatever Your Product Needs, We Have The Tools – And The People – To Build It."

  // Updated array to reflect the six core areas and their associated technologies
  const cases = [
    {
      title: "Back-End",
      description: "Node.Js, Python, .NET, Laravel"
    },
    {
      title: "Mobile",
      description: "Flutter, React Native, Kotlin, Swift"
    },
    {
      title: "DevOps",
      description: "Jenkins, Docker, Kubernetes, GitLab CI"
    },
    {
      title: "Database",
      description: "MongoDB, PostgreSQL, Firebase, MySQL"
    },
    {
      title: "Front-End",
      description: "React, Angular, Vue.Js"
    },
    {
      title: "Hosting",
      description: "AWS, Azure, Google Cloud, DigitalOcean, Vercel"
    },
  ]
  
  const footer = "" // Footer remains empty as it's not present in the screenshot
  
  return <CommonBigIndex 
    data={cases}
    description={description}
    heading={heading}
    footer={footer}
  />
}
