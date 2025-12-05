import CommonStatsSection from '../common/CommonStats';

export const TrackRecord =()=>{
    return(
        <CommonStatsSection
      title="Our Track Record<br />Speaks for Itself"
      subtitle="<p>Presence in 18+ Countries</p>"
      description={[
        "Proven capabilities across global markets and diverse digital ecosystems.<br/><br/>We don’t just offer software engineering — we build custom, scalable solutions designed to solve real-world challenges and drive sustainable growth."
      ]}
      stats={[
        { value: "3,200+", label: "<b>Projects Delivered Successfully</b><br/>From startups to global enterprises — each solution tailored for impact." },
        { value: "500+", label: "<b>Clients Across Industries</b><br/>Trusted by organizations worldwide for high-performance solutions." },
        { value: "11+", label: "<b>Years of Creative & Engineering Expertise</b></br>A decade of delivering innovation that aligns with business goals." },
      ]}
      />
    )
}