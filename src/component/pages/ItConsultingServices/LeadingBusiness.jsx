import React from 'react';
import CommonStatsSection from '../common/CommonStats';

export const LeadingBusiness = () => { 
  return (
      <CommonStatsSection
      title="Why Leading<br/>Businesses Rely on IT<br />Consulting Expertise"
      subtitle="<p>Each social media platform is different. Our social media platforms marketing makes sure your content works everywhere:</p>"
      description={[
        `
            Let’s be clear. Technology alone doesn’t drive transformation. Strategic execution does. This is where IT consulting comes in. It's not about flashy frameworks or one-size-fits-all solutions. It's about asking the right questions and aligning IT initiatives with long term business outcomes.
            <br/><br/>
            IT consulting is not a templated playbook loaded with buzzwords or a surface-level advice with little follow through.  It is a custom roadmap designed for measurable growth. It gives you a strategy that moves from PowerPoint to production. 
            <br/><br/>
            You need a partner who can work alongside your teams to deliver, not just recommend. At its core, IT consulting helps you make smarter decisions, avoid costly detours, and move with confidence in a fast-moving digital world. 
            <br/><br/>
            At Brandstory, our IT consulting goes beyond strategy decks to deliver tangible business outcomes. From boosting efficiency to unlocking new revenue streams, the results speak for themselves:
        `
      ]}
      stats={[
        { value: "₹5,200+ Cr", label: "In client revenue enabled through smarter IT roadmaps" },
        { value: "$1.5B+", label: "Generated across 500+ businesses with scalable digital solutions" },
        { value: "40%", label: "Average cost optimization by modernizing IT infrastructure" },
      ]}
      statsTextBottom="<b class='highlited-text'>This is why businesses across industries continue to trust us—to turn complex IT challenges into growth opportunities.</b>"
    />
  );
};