import React from 'react'
import CommonTwoCard from '../common/CommonTwoCard'

export const DevelopmentProcess =()=>{
    const data = {
    heading: "Our Development Process: Built for<br/>Speed, Scale, and Success",
    // highlight: "Your Growth Journey",
    subheading:
      "A seamless development lifecycle is the difference between a great website and an underperforming one. Here's how we make it work:",
    cards: [
            {
              title: "Kick-off Stage",
              description:
                "<b>Strategic Discovery & Planning</b><br/>We align your business goals with the right digital architecture through consultations that define your website’s purpose, KPIs, and technical requirements. User journey mapping and wireframing ensure smooth navigation and effective conversion paths. We recommend the best platforms and tech stacks, such as WordPress, Magento, or Shopify, and plan timelines and milestones to keep your project on track and within budget.",
            },
            {
              title: "Development Stage",
              description:
                "<b>Agile, Transparent, Results-Oriented</b><br/>We follow agile methods for fast, collaborative, and high-quality development. Our UI/UX design is mobile-first and responsive, optimized for user engagement and SEO. Clean, modular front-end and back-end code ensures speed, security, and easy maintenance. SEO is built in from the start, and regular security and performance checks keep your website secure and efficient.",
            },
            {
              title: "Launch & Support Stage",
              description:
                "<b>Reliable, Ongoing Optimization</b><br/>After launch, we make sure your website runs smoothly and stays secure. Real-time monitoring and performance analytics help catch issues early. Routine updates to CMS, plugins, and frameworks maintain peak performance. Our dedicated support team handles troubleshooting and technical enhancements whenever needed.",
            },
            {
              title: "Growth & Scale",
              description:
                "<b>Future-Proofing Your Digital Presence</b><br/>Once live, we help your website grow into a high-performing digital platform. Retainer-based services support continuous growth and campaign alignment. We can add apps, microsites, portals, or headless CMS solutions as your business evolves. Strategic consulting ensures your tech stack and integrations scale with your needs.",
            },
        ],
    };

    return (
        <>
            <CommonTwoCard {...data}/>
            <p className='max-w-[1200px] text-center mx-auto mb-30'>Our web development services are backed by 11+ years of creative intelligence and data-driven decision-making. Whether it's a single-page site or a full-blown platform, we ensure smooth launches and long-term ROI through website development excellence and professional web development services.</p>
        </>
    )
}
