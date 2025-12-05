import CommonFourCardStats from '../common/CommonFourCardStats';

export const LinkBuildingServices =()=>{
    const data = {
    heading: "Why Our Link Building Services Actually Work",
    subheading: "Not all link building is the same. Some people take shortcuts, others play games with search engines. We don’t do that. We focus on what’s real, what works, and what lasts. Our approach is simple, build strong links the right way.", 
    cards: [
            {
              title: "Honest, Ethical Link Building",
              description:
                "We never use spam sites or shady tactics. Every link we build is through honest outreach and real conversations with publishers who care about quality. This means your backlinks are safer and stronger for long-term SEO.",
            },
            {
              title: "Every Link Starts with Good Content",
              description:
                "We have a full content team in-house. They write each article or pitch from scratch based on what your audience and industry care about. We don’t reuse the same emails. We don’t copy templates. We take time to make every outreach count.",
            },
            {
              title: "We Work Well with Your SEO Tools",
              description:
                "We fit right into your current setup. From SEMrush and Ahrefs to Pitchbox and BuzzStream, we track, manage, and report your links clearly, so your team always knows what’s working.",
            },
            {
              title: "You Can Trust Us Because Others Do Too",
              description:
                "Verified by Clutch<br/>Listed as a Google Partner</br>Featured in Moz Roundtable</br>90+ success stories with real SEO results",
            }
        ],
    };
    
    return (
        <>
            <CommonFourCardStats 
                {...data}
                stats={[
                  { value: "50,000+", label: "<b>high-quality backlinks secured</b> across 20+ industries" },
                  { value: "85%", label: "<b>average improvement in domain authority</b> within 6 months" },
                  { value: "200+", label: "<b>media and PR placements</b> earned on top-tier publications" },
                ]}
            />
        </>
    )
}