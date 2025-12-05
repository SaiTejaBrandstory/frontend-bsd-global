'use client';

import React, { useEffect, useRef, useState } from 'react';
import styles from '@/style/homepage.module.css';

export default function StatsCard({ data }) {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  // Return null if no data from Strapi
  if (!data || !Array.isArray(data) || data.length === 0) {
    return null;
  }

  // Get stats from Strapi data
  const stats = data;

  return (
    <div
      ref={sectionRef}
      className={`${styles.cardContainer} ${visible ? styles.sectionVisible : styles.sectionHidden}`}
    >
      {stats.map((stat, index) => (
        <div
          key={index}
          className={`${styles.statBox} ${
            index % 4 !== 3 ? styles.rightBorder : ''
          } ${index < 4 ? styles.bottomMargin : ''}`}
        >
          <div className={styles.glowText}>{stat.number}</div>
          <div className={styles.labelText}>{stat.text}</div>
        </div>
      ))}
    </div>
  );
}
