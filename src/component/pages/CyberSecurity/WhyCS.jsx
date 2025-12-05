import React from 'react'
import CommonAccordion from '../common/CommonAccordion';

export const WhyCS = () => {
     const accordionData = [
    {
      title: "1. Protects important data",
      content:
        "Your customer records, payment info, business files,all stay safe and secure.",
    },
    {
      title: "2. Blocks harmful attacks",
      content:
        "Viruses, ransomware, phishing,they can bring systems down fast. Cybersecurity keeps them out.",
    },
    {
      title: "3. Helps you stay compliant",
      content:
        "Rules like GDPR, HIPAA, and ISO aren’t just boxes to tick. They’re key to running a trusted business.",
    },
    {
      title: "4. Builds trust",
      content:
        "Clients, partners, and even your own team feel more confident knowing you take security seriously.",
    },
    {
      title: "5. Prevents major damage",
      content:
        "Recovering from a breach is costly. Good protection saves you from financial loss, legal stress, and downtime.",
    }
  ];
  return (
    <>
    <CommonAccordion
    title="Why Cybersecurity Services Are Now a Must for Every Business"
    // subheding1="We plan your social media to guide people from first seeing your brand to becoming loyal fans. Our social media strategy has four steps:"
    subheding2="It doesn’t matter if you are running a startup, a growing company, or a large organization, cyber threats are everywhere now. Hackers don’t just target big brands. They go after anyone with data, which means every business is at risk. And the more you grow, the more you have to lose.<br/>That’s where reliable cybersecurity services come in. They help you stay one step ahead of problems you might not even see coming.<br/>Here’s how it really helps your business:"
     items={accordionData} 
     footer="So yes, the importance of cybersecurity goes beyond just protection. It’s about running your business with confidence, knowing you’re covered no matter what shows up at your digital doorstep."
     />
    </>
  )
}