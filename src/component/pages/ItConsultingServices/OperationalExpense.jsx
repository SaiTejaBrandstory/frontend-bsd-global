import React from 'react'
import CommonCard from '../common/CommonCard'

export const OperationalExpense = ()=>{
  const boxHeight = "370px";
    const seoData = [
      {
        title: "Smart IT Process Improvement",
        desc: "We identify inefficiencies, redundancies, and bottlenecks across your IT workflows — then re-engineer them using automation, standardization, and agile frameworks. The result? Reduced manual effort, improved reliability, and stronger cross-functional alignment.",
        icon: "/images/rounded-icons/r20.png", 
        background:"url('/images/ppc/bg-1.png')",
        height: boxHeight
      },
      {
        title:"Always-on Managed IT Operations",
        desc:"Through our managed IT services, we provide round-the-clock monitoring, proactive incident resolution, and continuous performance tuning. Whether it’s infrastructure, applications, or networks, we ensure uptime, stability, and responsiveness — so your team can focus on innovation, not troubleshooting.",
        icon:"/images/rounded-icons/r46.png", 
        background:"url('/images/ppc/bg-2.png')",
        height: boxHeight
      },
      {
        title:"Built-in Cost Optimization Through IT",
        desc:"We help you reduce total cost of ownership (TCO) across your IT landscape by consolidating resources, leveraging cloud-native technologies, and eliminating unnecessary overhead. Our cost optimization strategies are tightly integrated into your IT operations, delivering measurable ROI without compromising performance.",
        icon:"/images/rounded-icons/r47.png", 
        background:"url('/images/ppc/bg-3.png')",
        height: boxHeight
      }
    ];

    
    return <CommonCard 
        seoData={seoData} 
        heding="Operational Excellence, On Autopilot"
        description="Your IT infrastructure should be the engine, not the roadblock. Through our IT services consulting, we optimize operations for peak performance. Here’s How We Deliver IT Operational Excellence:"
        footer=""
    />
}