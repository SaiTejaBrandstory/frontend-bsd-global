'use client';

import styles from '@/style/homepage.module.css';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

export default function SoftwareSolutions({ data }) {
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
  const description1 = data.description1;
  const description2 = data.description2;
  const description3 = data.description3;
  const description4 = data.description4;
  
  // Extract cards array from Strapi
  // Handle different possible structures for Strapi v5
  let cards = [];
  if (data.cards && Array.isArray(data.cards)) {
    cards = data.cards.map((item) => {
      // Handle different possible structures
      if (typeof item === 'object' && item !== null) {
        return {
          title: item.title || item.attributes?.title || item.data?.title || item.data?.attributes?.title || '',
          description: item.description || item.attributes?.description || item.data?.description || item.data?.attributes?.description || '',
          image: item.image || item.attributes?.image || item.data?.image || item.data?.attributes?.image || null,
        };
      }
      return { title: '', description: '', image: null };
    }).filter((item) => item.title);
  }

  // Return null if required data is missing
  if (!heading || cards.length === 0) {
    return null;
  }

  return (
    <section className={styles.SoftwareSolutions_section}>
      <div className={styles.SoftwareSolutions_container}>
        {heading && (
          <h2 className={styles.SoftwareSolutions_title}>{heading}</h2>
        )}
        {description1 && (
          <p className={styles.SoftwareSolutions_subtitle}>{description1}</p>
        )}
        {description2 && (
          <p className={styles.SoftwareSolutions_description}>{description2}</p>
        )}

        {/* Desktop Grid View */}
        <div className={styles.SoftwareSolutions_grid}>
          {cards.map((card, index) => {
            const imageUrl = getImageUrl(card.image);
            
            return (
              <div key={index} className={styles.SoftwareSolutions_cardWrapper}>
                <div className={styles.SoftwareSolutions_cardInner}>
                  <div className={styles.SoftwareSolutions_cardFront}>
                    <span><img src="/icons/right-arrow.svg" alt="right-arrow"/></span>
                    {imageUrl && (
                      <Image
                        src={imageUrl}
                        alt={card.title}
                        width={75}
                        height={63}
                        className={styles.SoftwareSolutions_icon}
                      />
                    )}
                    <p>{card.title}</p>
                  </div>
                  <div className={styles.SoftwareSolutions_cardBack}>
                    <span><img src="/icons/left-arrow.svg" alt="left-arrow"/></span>
                    <h3>{card.title}</h3>
                    {card.description && <p>{card.description}</p>}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Mobile Swiper View with Dots */}
        <div className={styles.SoftwareSolutions_swiperWrapper}>
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
            className={styles.SoftwareSolutions_swiperContainer}
          >
            {cards.map((card, index) => {
              const imageUrl = getImageUrl(card.image);
              
              return (
                <SwiperSlide key={index}>
                  <div className={styles.SoftwareSolutions_cardWrapper}>
                    <div className={styles.SoftwareSolutions_cardInner}>
                      <div className={styles.SoftwareSolutions_cardFront}>
                        <span><img src="/icons/right-arrow.svg" alt="right-arrow"/></span>
                        {imageUrl && (
                          <Image
                            src={imageUrl}
                            alt={card.title}
                            width={75}
                            height={63}
                            className={styles.SoftwareSolutions_icon}
                          />
                        )}
                        <p>{card.title}</p>
                      </div>
                      <div className={styles.SoftwareSolutions_cardBack}>
                        <span><img src="/icons/left-arrow.svg" alt="left-arrow"/></span>
                        <h3>{card.title}</h3>
                        {card.description && <p>{card.description}</p>}
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>

        {(description3 || description4) && (
          <div className={styles.SoftwareSolutions_results}>
            {description3 && (
              <p className={styles.SoftwareSolutions_results_title}>{description3}</p>
            )}
            {description4 && (
              <p className={styles.SoftwareSolutions_results_description}>{description4}</p>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
