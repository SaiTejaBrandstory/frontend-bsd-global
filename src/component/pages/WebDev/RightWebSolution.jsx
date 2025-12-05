import React from 'react'
import CommonAccordion from '../common/CommonAccordion';

export const RightWebSolution = () => {
     const accordionData = [
    {
      title: "1. Corporate & Creative Website Development",
      content:
        "Get a high-performance, brand-aligned website that blends speed, aesthetics, and usability. We develop responsive websites for startups, SMBs, and enterprises — built to drive engagement and leave a lasting digital impression.",
    },
    {
      title: "2. Enterprise Web Portals",
      content:
        "Centralized, role-based web portals that streamline internal and external operations. From employee self-service platforms to client dashboards, our web portal development services ensure secure access, seamless workflows, and real-time data exchange.",
    },
    {
      title: "3. eCommerce Website Development",
      content:
        "Launch or scale your online business with conversion-optimized eCommerce solutions. We develop storefronts on platforms like Shopify, Magento, and WooCommerce — complete with intuitive navigation, secure payments, and optimized product catalogs.",
    },
    {
      title: "4. Progressive Web Apps (PWAs) & Web Applications",
      content:
        "Build interactive, fast, and user-focused web apps that function like native applications. Whether it's a customer dashboard or service utility, we develop custom web applications that enhance engagement and support continuous user interaction.",
    },
    {
      title: "5. Custom Web Development Solutions",
      content:
        "For businesses with complex needs, we offer end-to-end custom web development—including advanced features, third-party integrations, and enterprise-grade performance. Every solution is designed for your unique workflows, audience, and industry.",
    },
    {
      title: "6. Content Management System (CMS) Development",
      content:
        "Empower your team with a scalable, easy-to-manage CMS solution that eliminates bottlenecks. From WordPress to headless CMS platforms, we create content ecosystems that allow marketers and editors to update content, manage campaigns, and scale quickly.",
    },
    {
      title: "7. Low-Code Web Development Services",
      content:
        "Accelerate product launches with low-code and no-code web development platforms. We help you build modular, customizable solutions that reduce time to market—without sacrificing performance or flexibility.",
    },
  ];
  return (
    <>
    <CommonAccordion
        title="What’s the Right Web Solution for Your Business Goals?"
        // subheding1="We plan your social media to guide people from first seeing your brand to becoming loyal fans. Our social media strategy has four steps:"
        subheding2="Not every business needs the same website — and that’s where strategy matters. Discover a digital solution that fits your business model, audience behavior, and growth goals. <br/><b class='highlited-text'>Choose from Our Full-Spectrum Web Development Solutions:</b>"
        items={accordionData} 
        footer="Across industries, we deliver web development solutions that align with your goals and fuel business growth. At BrandStory, we’re more than a service provider — we’re your long-term digital partner. <br/><br/><b>Explore our complete web development services list to find the solution that fits.</b>"
    />
    </>
  )
}