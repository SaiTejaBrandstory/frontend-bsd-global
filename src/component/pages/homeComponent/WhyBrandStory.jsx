"use client";
import { useState, useEffect } from 'react';
import styles from '@/style/homepage.module.css';

export default function WhyBrandStory({ data }) {
  // Return null if no data from Strapi
  if (!data) {
    return null;
  }

  const [isMobile, setIsMobile] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkIsMobile();
    window.addEventListener('resize', checkIsMobile);

    return () => window.removeEventListener('resize', checkIsMobile);
  }, []);

  const heading = data?.heading;
  const description1 = data?.description1;
  const description2 = data?.description2;
  const description3 = data?.description3;
  const cards = data?.fourthSectionCards || [];

  // Return null if required data is missing
  if (!heading && !description1 && !description2 && !description3 && (!cards || cards.length === 0)) {
    return null;
  }

  // Get image URL from Strapi media
  const getImageUrl = (imageData) => {
    if (!imageData) return null;
    
    let url = null;
    if (imageData?.data?.attributes?.url) {
      url = imageData.data.attributes.url;
    } else if (imageData?.attributes?.url) {
      url = imageData.attributes.url;
    } else if (imageData?.url) {
      url = imageData.url;
    } else if (typeof imageData === 'string') {
      url = imageData;
    }
    
    if (!url) return null;
    
    if (url.startsWith('http')) return url;
    
    const strapiUrl = process.env.NEXT_PUBLIC_STRAPI_URL || process.env.STRAPI_URL || 'http://localhost:1337';
    return `${strapiUrl}${url}`;
  };

  // Default background colors for cards (styling, not content)
  const defaultBgColors = ['#FFC6BE', '#E7E4C2', '#FFCCB8', '#FFEEC2', '#FFC5CC'];

  return (
    <section className={styles.WhyBrandStorySection}>
      {heading && (
        <h2 className={styles.WhyBrandStoryTitle}>{heading}</h2>
      )}
      {description1 && (
        <p className={styles.WhyBrandStorySubtitle}>{description1}</p>
      )}
      {description2 && (
        <p className={styles.WhyBrandStorySubtitle}>{description2}</p>
      )}
      {description3 && (
        <p className={styles.WhyBrandStorySubtitle}>{description3}</p>
      )}

      <div className={styles.WhyBrandStoryCards}>
        {cards.map((card, index) => {
          const imageUrl = getImageUrl(card?.image);
          const bgColor = defaultBgColors[index % defaultBgColors.length];
          
          return (
            <div
              key={index}
              className={`${styles.WhyBrandStoryCard} ${
                (isMounted && isMobile) || index === activeIndex ? styles.WhyBrandStoryCardActive : ''
              }`}
              style={{ backgroundColor: bgColor }}
              onClick={() => (isMounted && !isMobile) && setActiveIndex(index)}
            >
              <div className={styles.WhyBrandStoryCardContent}>
                {card?.title && (
                  <h3>{card.title}</h3>
                )}
                {card?.description && (
                  <p>{card.description}</p>
                )}
              </div>
              {imageUrl && (
                <div className={styles.icon}>
                  <img src={imageUrl} alt={card?.title || 'Card image'} />
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
