import CommonStatsSection from '../common/CommonStats';

export const SeoResults =()=>{
    return(
        <CommonStatsSection
      title="Delivering Measurable SEO Results"
    //   subtitle="Our Full Stack Development Services Bring It All Under One Roof –<br />Strategy, Design, Frontend, Backend, And Everything In Between."
      description={[
        "SEO for enterprise businesses is complex. Teams often spend hours optimizing content, fixing technical issues, and analyzing performance without seeing proportional growth.",
        "Our enterprise SEO approach integrates strategy, content, and technical optimization into one seamless process. Once implemented, your website works smarter, attracts more traffic, and generates qualified leads automatically."
      ]}
      stats={[
        { value: "10,000+", label: "<b>Enterprise-scale audits delivered</b><br/>across global markets" },
        { value: "500M+", label: "<b>Organic visitors driven</b><br/>for large websites and complex platforms" },
        { value: "$2B+", label: "<b>Revenue influenced </b><br/>through SEO-led growth initiatives" },
      ]}
      />
    )
}