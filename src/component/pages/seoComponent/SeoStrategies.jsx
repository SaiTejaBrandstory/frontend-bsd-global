import React from 'react'
import CommonTwoCard from '../common/CommonTwoCard'

const SeoStrategies = () => {
    const seoData = {
    heading: "SEO Strategies Built Around Your Business",
    subheading:
      "Growth That Lasts Needs A Steady Approach. These SEO Services Focus On Safe, Proven Methods That Keep Working Even After Search Engine Updates. The Aim Is To Grow Your Organic Traffic In A Way That Can Be Maintained For Years.",
    cards: [
      {
        title: "Local SEO",
        description:
          "Ideal For Shops, Offices, And Service Providers In A Specific Area. Local SEO Boosts Your Visibility In Map Listings And Local Search Results, Making It Easier For Nearby Customers To Find You And Visit Your Location.",
      },
      {
        title: "E-Commerce SEO",
        description:
          "Designed For Online Stores. It Improves Product Visibility, Speeds Up The Site, And Creates A Smoother Shopping Experience. This Reduces Cart Abandonment And Helps Convert Browsers Into Buyers.",
      },
      {
        title: "Enterprise SEO",
        description:
          "Built For Large Companies With Complex Websites. It Ensures Every Page Is Optimised, Keeps Rankings Strong Across Multiple Markets, And Supports Expansion Into New Locations Without Losing Performance.",
      },
      {
        title: "Technical SEO",
        description:
          "Focuses On The Health And Structure Of Your Site. It Ensures Fast Loading Times, Secure Browsing, And Smooth Crawling By Search Engines So Your Pages Can Be Indexed And Ranked Effectively.",
      },
    ],
  };
  return (
  <CommonTwoCard {...seoData}/>
  )
}

export default SeoStrategies