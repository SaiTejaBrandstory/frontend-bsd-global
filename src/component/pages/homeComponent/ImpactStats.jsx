// components/ImpactStats.jsx
'use client';

import styles from '@/style/homepage.module.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

export default function ImpactStats({ data }) {
  // Return null if no data from Strapi
  if (!data) {
    return null;
  }

  // Helper function to get image URL from Strapi media objects
  const getImageUrl = (imageData) => {
    if (!imageData) return null;
    
    // Try different possible structures for Strapi v5
    let url = null;
    
    // Structure 1: imageData.data.attributes.url (most common)
    if (imageData?.data?.attributes?.url) {
      url = imageData.data.attributes.url;
    }
    // Structure 2: imageData.attributes.url (direct)
    else if (imageData?.attributes?.url) {
      url = imageData.attributes.url;
    }
    // Structure 3: imageData.url (direct URL)
    else if (imageData?.url) {
      url = imageData.url;
    }
    // Structure 4: string
    else if (typeof imageData === 'string') {
      url = imageData;
    }
    
    if (!url) return null;
    
    // If URL already includes http, return as is, otherwise prepend Strapi URL
    if (url.startsWith('http')) return url;
    
    const strapiUrl = process.env.NEXT_PUBLIC_STRAPI_URL || process.env.STRAPI_URL || 'http://localhost:1337';
    return `${strapiUrl}${url}`;
  };

  // Extract data from Strapi
  const heading = data.heading;
  
  // Extract cards array from Strapi
  // Handle different possible structures for Strapi v5
  let cards = [];
  if (data.cards && Array.isArray(data.cards)) {
    cards = data.cards.map((item) => {
      // Handle different possible structures
      if (typeof item === 'object' && item !== null) {
        return {
          image: item.image || item.attributes?.image || item.data?.image || item.data?.attributes?.image || null,
          text: item.text || item.attributes?.text || item.data?.text || item.data?.attributes?.text || '',
        };
      }
      return { image: null, text: '' };
    }).filter((item) => item.text);
  }

  // Return null if required data is missing
  if (!heading || cards.length === 0) {
    return null;
  }

  // Alternating background colors
  const backgrounds = ['#FFEFE9', '#FFFFFF'];

  return (
    <section className={styles.impact_container}>
      <h2 className={styles.impact_heading}>{heading}</h2>
      
      {/* Desktop Grid View */}
      <div className={styles.impact_grid}>
        {cards.map((card, index) => {
          const imageUrl = getImageUrl(card.image);
          const background = backgrounds[index % backgrounds.length];
          
          return (
            <div key={index} className={styles.impact_box} style={{ backgroundColor: background }}>
              {imageUrl && (
                <img className={styles.impact_icon} src={imageUrl} alt={card.text} />
              )}
              <div className={styles.impact_text}>{card.text}</div>
            </div>
          );
        })}
      </div>

      {/* Mobile Swiper View with Dots */}
      <div className={styles.impact_swiperWrapper}>
        <Swiper
          modules={[Pagination]}
          spaceBetween={20}
          slidesPerView={1}
          pagination={{
            clickable: true,
            dynamicBullets: false,
          }}
          breakpoints={{
            320: {
              slidesPerView: 1,
              pagination: {
                enabled: true,
              },
            },
            769: {
              slidesPerView: 1,
              pagination: {
                enabled: false,
              },
            },
          }}
          className={styles.impact_swiperContainer}
        >
          {cards.map((card, index) => {
            const imageUrl = getImageUrl(card.image);
            const background = backgrounds[index % backgrounds.length];
            
            return (
              <SwiperSlide key={index}>
                <div className={styles.impact_box} style={{ backgroundColor: background }}>
                  {imageUrl && (
                    <img className={styles.impact_icon} src={imageUrl} alt={card.text} />
                  )}
                  <div className={styles.impact_text}>{card.text}</div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
}
