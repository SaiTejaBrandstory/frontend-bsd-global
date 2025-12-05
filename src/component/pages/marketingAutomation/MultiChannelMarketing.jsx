import CommonTwoImgDesc from "../common/CommonTwoImgDesc"

export const MultiChannelMarketing = ()=>{
    const data = {
  heading: "Multi-Channel Marketing, Fully Automated",
  subHeading: "Our Multi-Channel Marketing Automation Works On:",
  rows: [
    {
      img: "/images/MarketingAutomation/multi-channel.jpg",
      alt: "Multi-Channel Marketing",
      text: [
        "<b>Email:</b> Deliver Messages Directly To Recipients' Inboxes.<br /><br />",
        "<b>SMS:</b> Brief Messages That Quickly Grab Attention.<br /><br />",
        "<b>WhatsApp:</b> Communicate With Clients Via WhatsApp, Where They Communicate Daily.<br /><br />",
        "<b>Social Media:</b> Promote Your Brand On Instagram, Facebook, And Other Platforms.<br /><br />",
        "<b>Paid Advertising:</b> Show The Right Ads To The Right People At The Right Moment.<br /><br />",
        "<b>Chatbots:</b> Provide Prompt, Intelligent Assistance To Clients.<br /><br />",
        "<b>Push Notifications:</b> Remind People About Deals Or Updates Via Push Notifications On Their Devices.<br /><br />",
        "These Channels All Function Together. Your Brand Remains Consistent Everywhere. People Notice, Remember, And Act When Messages Arrive At The Right Time."
      ],
      reverse: true
    }
  ]
};

    return(
        <CommonTwoImgDesc data={data}/>
    )
}