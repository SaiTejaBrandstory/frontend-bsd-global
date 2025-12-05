import CommonStatsSection from '../common/CommonStats';

export const WhyMatter = () => {
  return (
    <CommonStatsSection
      title="Why Local SEO Services<br/>Matter More Than Ever"
      subtitle="When someone searches for a product or service, they&apos;re often looking for a local option. In fact, 93% of online experiences begin with a search engine. And a huge chunk of those include the words &quot;near me.&quot;"
      description={[
        "</ br>",
        "Here&apos;s Why It Matters:",
        "<ul><li>If Your Competitors Rank Higher, They Get The Calls And Visits.</li><li>If Your Business Isn&apos;t Listed On Google Maps, You&apos;re Invisible.</li><li>If Your Google Business Profile Is Incomplete, It Pushes People Away.</li><li>If Your Business Doesn&apos;t Appear In The Local 3-Pack, You Lose Prime Digital Shelf Space.</li></ul>"
      ]}
      stats={[
        { value: "+65%", label: "<b>Average increase in local organic traffic<br/>within 4–6 months</b>" },
        { value: "3x", label: "<b>Growth in Google Business Profile views for<br/>multi-location clients</b>" },
        { value: "40–80%", label: "<b>Boost in foot traffic or inbound calls for<br/>retail and service businesses</b>" }
      ]}
    />
  );
};
