import React from 'react';
import CommonAccordion from '../common/CommonAccordion';

const BrandIdentity = () => {
  const accordionData = [
    {
      title: "1. Visual Identity That Sticks",
      content:
        "Your brand is remembered by what it looks and feels like. We create logos, color palettes, typography, and brand guides that reflect your brand’s personality. Every design element helps people recognize your brand, trust it, and understand your story, from corporate identity to product packaging.",
    },
    {
      title: "2. Data-Led Brand Positioning",
      content:
        "A strong brand knows its place in the market. We study your audience, their needs, and your competitors to define what makes your brand unique. From this, we create a clear value proposition and messaging framework so every touchpoint, website, social media, or marketing material, communicates consistently and builds trust.",
    },
    {
      title: "3. Storytelling That Resonates",
      content:
        "People connect with stories, not just visuals. We help you tell your brand’s mission, values, and promise in a way that feels real and relatable. A consistent tone of voice across all channels makes your audience feel connected and confident in your brand.",
    },
    {
      title: "4. Multi-Channel Experience Design",
      content:
        "Your brand appears wherever your audience interacts with you. We ensure your brand looks and feels consistent across websites, social media, ads, packaging, and events. Every touchpoint tells your story, highlights your values, and makes your brand easy to recognize and memorable.",
    },
    {
      title: "5. Corporate and Product Branding",
      content:
        "We help your company and its products speak with one clear, cohesive voice. Every sub-brand aligns with your main brand strategy, making your business feel professional, connected, and purposeful — whether it’s a corporate identity refresh, a new product launch, or managing multiple brands.",
    },
    {
      title: "6. Complete Rebranding and Brand Refresh",
      content:
        "Markets evolve, and so should your brand. Whether entering a new market, merging brands, or simply refreshing your look, we update your visual identity, messaging, and positioning carefully to maintain recognition and trust. A thoughtful refresh makes your brand feel confident, modern, and ready for the future while preserving the value you’ve built.",
    },
  ];

  return (
    <>
      <CommonAccordion
        title="Brand Identity Design That Connects and Converts"
        subheding1=""
        subheding2=""
        items={accordionData}
        footer=""
      />
    </>
  );
};

export default BrandIdentity;