import CommonGridBox3 from "../common/CommonGridBox3";

export const TalentThatDelivers = ()=>{
    
    const title = "Talent That Delivers,<br/>Without the HR Headache";
    const desc ="Need expert hands, yesterday? Our IT consultant services offer top-tier talent to keep your projects moving at the speed of ambition. What We Bring:"
    const data = [
          {
            "title": "Flexible IT staffing solutions",
            "description": "Need a single expert or an entire project team? Our flexible staffing models give you total control — hire on-demand, project-based, or contract-to-hire. We align with your internal workflows and business needs, ensuring smooth onboarding and seamless integration with your in-house teams.",
            "bgcolor": "#6d3119",
            "logo": "/images/square-images/s6.png" 
          },
          {
            "title": "High-impact tech resource augmentation",
            "description": "Access senior level professionals across domains like cloud infrastructure, cybersecurity, AI/ML, DevOps, data engineering, enterprise architecture, and more. We supplement your existing talent pool with sharp, reliable experts who contribute from day one — not day thirty.",
            "bgcolor": "#474574", 
            "logo": "/images/square-images/s5.png" 
          },
          {
            "title": "Fast-track hiring for IT consultants",
            "description": "We streamline the hiring process from sourcing to onboarding. Through a robust talent network, pre-vetted candidate pipeline, and agile recruiting processes, we help you hire IT consultants in as little as 48–72 hours. Spend less time interviewing and more time executing.",
            "bgcolor": "#3e484b", 
            "logo": "/images/square-images/s4.png" 
          }
        ];
    return (
        <CommonGridBox3 title={title} description={desc} data={data} />
    );
}