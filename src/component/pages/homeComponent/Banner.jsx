"use client";
import React from 'react';
import styles from '@/style/homepage.module.css';

const Banner = ({ data }) => {

  // Return null if no data from Strapi
  if (!data) {
    return null;
  }

  // Get data from Strapi only
  const heading = data?.h1;
  const description = data?.bannerDescription;
  const buttonText = data?.btnText;
  const bannerList = data?.bannerList || [];

  // Return null if required data is missing
  if (!heading && !description && bannerList.length === 0) {
    return null;
  }

  return (
    <div className={styles.banner}>
      <div className={styles.bannerContent}>
        <h1 className={styles.bannerHeading}>
          {heading}
        </h1>
        <p className={styles.bannerParagraph}>
          {description}
        </p>
        {buttonText && (
          <button className={styles.bannerButton}>{buttonText}</button>
        )}

        <ul className={styles.bannerList}>
          {bannerList.map((item, index) => (
            <li key={index}>
              <img src='/icons/dot.svg' alt='dot' /> {item.li}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Banner;
