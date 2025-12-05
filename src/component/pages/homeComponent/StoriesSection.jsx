'use client';
import styles from '@/style/homepage.module.css';
import { useState } from 'react';
import Image from 'next/image';

export default function StoriesSection({ data }) {
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

    const [hovered, setHovered] = useState(null);

    return (
        <section className={styles.StoriesSection_section}>
            {heading && (
                <h2 className={styles.StoriesSection_heading}>{heading}</h2>
            )}
            {description1 && (
                <p className={styles.StoriesSection_subheading}>{description1}</p>
            )}
            {description2 && (
                <p className={styles.StoriesSection_description}>{description2}</p>
            )}

            <div className={styles.StoriesSection_grid}>
                {cards.map((card, index) => {
                    const imageUrl = getImageUrl(card.image);
                    
                    return (
                        <div
                            key={index}
                            className={`${styles.StoriesSection_card} 
                            ${hovered === index ? styles.StoriesSection_cardhover : ''} 
                            ${hovered !== null && hovered !== index ? styles.StoriesSection_cardShrink : ''}
                            ${hovered === index ? index % 2 === 0 ? styles.StoriesSection_firstbg : styles.StoriesSection_secondbg : ''}`}
                            onMouseEnter={() => setHovered(index)}
                            onMouseLeave={() => setHovered(null)}
                            style={{
                                backgroundImage: hovered === index ? 'none' : imageUrl ? `url(${imageUrl})` : 'none',
                            }}>
                            <div className={styles.StoriesSection_content}>
                                {card.title && <h3>{card.title}</h3>}
                                {hovered === index && (
                                    <>
                                        {card.description && <p>{card.description}</p>}
                                        {hovered === index ? index % 2 === 0 ? (
                                            <div className={styles.StoriesSection_arrowContainer}>
                                                <img src='/icons/white-arrow-up.svg' alt='arrow' className={styles.StoriesSection_arrow} />
                                            </div>
                                        ) : (
                                            <div className={styles.StoriesSection_arrowContainer}>
                                                <img src='/icons/red-arrow-up.svg' alt='arrow' className={styles.StoriesSection_arrow} />
                                            </div>
                                        ) : null}
                                    </>
                                )}
                            </div>
                        </div>
                    );
                })}
            </div>

            {(description3 || description4) && (
                <div className={styles.StoriesSection_outcome_container}>
                    {description3 && (
                        <p className={styles.StoriesSection_outcome}>{description3}</p>
                    )}
                    {description4 && (
                        <p className={styles.StoriesSection_outcome}>{description4}</p>
                    )}
                </div>
            )}
        </section>
    );
}
