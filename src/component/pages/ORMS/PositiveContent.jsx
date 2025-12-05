import { CommonBigIndex } from "../common/CommonBigIndex"

export const PositiveContent = () => {
  const heading = "Creating and Promoting Positive Content"
  const description = "Telling Compelling Stories That People Notice Is The Best Way To Safeguard Your Brand. At BrandStory, We Produce And Disseminate Constructive Content To Improve Your Online Visibility And Counteract Unfavorable Outcomes. Formats That Connect And Foster Trust Are Our Main Focus:"

  const cases = [
    {
      title: "Blogs And PR Articles",
      description: "Educational, Reshareable Content That Highlights Your Accomplishments And Areas Of Expertise."
    },
    {
      title: "Testimonials And Case Studies",
      description: "Are Actual Accounts From Clients That Demonstrate Your Dependability And Accomplishments."
    },
    {
      title: "Videos And Thoughtful Leadership Content",
      description: "Captivating Visual And Instructive Content That Establishes Your Company As An Authority In Your Field."
    },
  ]
  
  const footer = "By Regularly Releasing Uplifting, Superior Content, We Assist Your Brand In Gaining Authority, Credibility, And Audience Trust, Strengthening Your Online Reputation Every Day."
  
  return <CommonBigIndex 
    data={cases}
    description={description}
    heading={heading}
    footer={footer}
  />
}