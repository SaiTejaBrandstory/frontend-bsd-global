import CommonTwoImgDesc from "../common/CommonTwoImgDesc"

export const Standout = ()=>{
    const data = {
  heading: "What Makes Us a Standout Full Stack Development Company",
  subHeading: "At Brandstory, We Combine Deep Technical Expertise With Strategic Thinking To Deliver Full-Stack Solutions That Create Measurable Business Impact.",
  rows: [
    {
      img: "/images/FullStack/sa-1.png",
      alt: "What Sets Us Apart - Full Stack Development",
      text: [
        "<span class='highlited-text'>What Sets Us Apart:</span>",
        "<ul>",
          "<li><b>Strategy-First Development:</b><br/>Every Project Begins With A Clear Understanding Of Your Product Goals, User Behavior, And Business Model – Ensuring That Development Decisions Align With Long-Term Success, Not Just Short-Term Delivery.</li><br/>",
          "<li><b>Cross-Functional Collaboration:</b><br/> Our Full-Stack Teams Work Seamlessly Across Frontend, Backend, And DevOps – Eliminating Silos, Accelerating Timelines, And Enabling A Faster Path From Ideation To Launch.</li><br/>",
          "<li><b>Web App Development:</b><br/> High-Performance Web Applications Engineered For Responsiveness, Security, And Long-Term Usability.</li><br/>",
        "</ul>"
      ],
      reverse: false
    },
    {
      img: "/images/FullStack/sa-2.png",
      alt: "Clean, Scalable Engineering - Full Stack Development",
      text: [
        "<ul>",
          "<li><b>Clean, Scalable Engineering:</b><br/> We Follow Best Practices In Code Architecture, Documentation, And Modular Design – Resulting In Solutions That Are Not Just Functional Today, But Future-Proofed For Tomorrow.</li><br/>",
          "<li><b>Performance-Centric Sprints:</b><br/> We Integrate Performance Monitoring And Optimization Into Every Sprint Cycle – Ensuring Your Application Loads Fast, Runs Smoothly, And Delivers A Seamless User Experience Across Platforms.</li><br/>",
          "<li><b>Iterative Growth-Driven Mindset:</b><br/> The Market Moves Fast – And So Do We. With Agile Workflows And Proactive Iterations, We Continuously Evolve Your Product Based On Real-Time Data, User Feedback, And Changing Business Needs.</li><br/>",
        "</ul>"
      ],
      reverse: true
    }
  ]
};

    return(
        <CommonTwoImgDesc data={data}/>
    )
}