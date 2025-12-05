import FAQs from '@/component/pages/common/CommonFAQ'
export const WebFaq = () =>{
const data = [
  {
    title: "What Are Web Development Services?",
    description: "Services that handle the full lifecycle of websites and web applications—from planning and design to coding, testing, and maintenance—tailored to your business goals."
  },
  {
    title: "How Much Do Web Development Services Cost?",
    description: "Costs range from ₹80,000 for basic sites to ₹3 lakhs or more for custom web applications, depending on complexity and technology. Professional partners ensure quality and faster delivery."
  },
  {
    title: "What Is Best For Building Web Apps?",
    description: "Frameworks like React, Node.js, and Angular are popular for speed and scalability. Low-code platforms are also useful for faster launches without compromising performance."
  },
  {
    title: "What Are The Benefits Of Web Portals For Businesses?",
    description: "Web portals centralize data, tools, and services—improving collaboration, workflow efficiency, and user experience for employees, partners, or customers."
  },
  {
    title: "What Do Web Development Services Include?",
    description: "Strategy, design, front-end and back-end development, testing, deployment, and ongoing support to deliver secure, scalable solutions aligned with business goals."
  },
  {
    title: "Why Hire A Web Development Company?",
    description: "They provide technical expertise, creative design, and strategic execution. A professional partner ensures your digital presence drives measurable business growth."
  }
];


return (
    <FAQs data={data}/>
)
}