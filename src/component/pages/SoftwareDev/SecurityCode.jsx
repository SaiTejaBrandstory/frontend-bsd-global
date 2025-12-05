import CommonGridBox3 from "../common/CommonGridBox3";

export const SecurityCode = ()=>{
    
    const title = "Security That's Engineered into Every Line of Code";
    
    const data = [
          {
            "title": "Built-In Security & Data Protection",
            "description": "From Day One, Every Feature is Developed With Robust Security Standards. Sensitive Information is Encrypted, And Access is Tightly Controlled, Ensuring Your Systems And Data Stay Safe At Every Step.",
            "bgcolor": "#6d3119",
            "logo": "/images/seo/expertise-1.webp" 
          },
          {
            "title": "AI-Powered Efficiency & Insights",
            "description": "AI is Integrated into Your Software To Automate Repetitive Tasks, Reduce Errors, And Provide Real-Time, Actionable Insights—Making Your Operations Faster, Smarter, And More Reliable.",
            "bgcolor": "#474574", 
            "logo": "/images/seo/expertise-2.webp" 
          },
          {
            "title": "Flexible, Scalable, And Future-Ready",
            "description": "Our Development Approach Adapts to Your Business Needs, Whether Through Agile, DevOps, Or Scrum. The Result is Software That Performs Flawlessly Today And Can Scale Effortlessly As Your Business Grows.",
            "bgcolor": "#3e484b", 
            "logo": "/images/seo/expertise-3.webp" 
          }
        ];
    return (
        <CommonGridBox3 title={title} data={data} />
    );
}