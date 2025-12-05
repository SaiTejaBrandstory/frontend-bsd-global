import React from 'react';
import styles from '@/style/homepage.module.css';

const IndustriesServed = ({ data }) => {
  // Return null if no data from Strapi
  if (!data) {
    return null;
  }

  // Extract data from Strapi
  const heading = data.heading;
  const subheading = data.subheading;
  const description = data.description;
  
  // Extract industries array from Strapi
  // Handle different possible structures for Strapi v5
  let industries = [];
  if (data.industries && Array.isArray(data.industries)) {
    industries = data.industries.map((item) => {
      // Handle different possible structures
      if (typeof item === 'string') {
        return item;
      }
      // Direct access (Strapi v5 structure)
      if (item.name) {
        return item.name;
      }
      // Nested attributes structure
      if (item.attributes && item.attributes.name) {
        return item.attributes.name;
      }
      // Handle if it's wrapped in data
      if (item.data && item.data.name) {
        return item.data.name;
      }
      if (item.data && item.data.attributes && item.data.attributes.name) {
        return item.data.attributes.name;
      }
      return '';
    }).filter(Boolean);
  }

  // Return null if required data is missing
  if (!heading || industries.length === 0) {
    return null;
  }

  return (
    <section className={styles.industries_section}>
      <div className={styles.industries_container}>
        <h2 className={styles.industries_title}>{heading}</h2>
        {subheading && (
          <p className={styles.industries_subtitle}>{subheading}</p>
        )}
        {description && (
          <p className={styles.industries_description}>{description}</p>
        )}
        <div className={styles.industries_grid}>
          {industries.map((industry, index) => (
            <div key={industry || index} className={styles.industries_item}>
              {industry}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustriesServed;
