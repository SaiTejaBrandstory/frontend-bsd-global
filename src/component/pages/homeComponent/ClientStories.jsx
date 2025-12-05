'use client';

// components/ClientStories.jsx
import styles from '@/style/homepage.module.css';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

// Helper function to highlight "BrandStory" with red color
const highlightBrandStory = (text) => {
    if (!text) return null;
    
    const parts = text.split(/(BrandStory)/gi);
    return parts.map((part, index) => {
        if (part.toLowerCase() === 'brandstory') {
            return (
                <span key={index} className={styles.clientStories_highlight}>
                    {part}
                </span>
            );
        }
        return <React.Fragment key={index}>{part}</React.Fragment>;
    });
};

export default function ClientStories({ data }) {
    // Return null if no data from Strapi
    if (!data) {
        return null;
    }

    // Extract data from Strapi
    const heading = data.heading;
    const ctaHeading = data.ctaHeading;
    const ctaSubHeading = data.ctaSubHeading;
    const ctaButtonText = data.ctaButtonText;
    
    // Extract testimonials array from Strapi
    // Handle different possible structures for Strapi v5
    let testimonials = [];
    if (data.testimonials && Array.isArray(data.testimonials)) {
        testimonials = data.testimonials.map((item) => {
            // Handle different possible structures
            if (typeof item === 'object' && item !== null) {
                return {
                    name: item.name || item.attributes?.name || item.data?.name || item.data?.attributes?.name || '',
                    role: item.role || item.attributes?.role || item.data?.role || item.data?.attributes?.role || '',
                    testimonialDescription: item.testimonialDescription || item.attributes?.testimonialDescription || item.data?.testimonialDescription || item.data?.attributes?.testimonialDescription || '',
                };
            }
            return { name: '', role: '', testimonialDescription: '' };
        }).filter((item) => item.name && item.testimonialDescription); // Filter out items without name or testimonialDescription
    }

    // Return null if required data is missing
    if (!heading || testimonials.length === 0) {
        return null;
    }

    return (
        <section className={styles.clientStories_section}>
            {heading && (
                <h2 className={styles.clientStories_heading}>
                    {heading}
                </h2>
            )}

            <div className={styles.clientStories_cardsContainer}>
                <div className={styles.clientStories_topBar}></div>
                
                {/* Desktop Grid View */}
                <div className={styles.clientStories_cards}>
                    {testimonials.map((testimonial, index) => (
                        <div key={index} className={styles.clientStories_card}>
                            <div className={styles.clientStories_topbar}></div>
                            {testimonial.name && (
                                <p className={styles.clientStories_name}>{testimonial.name}</p>
                            )}
                            {testimonial.role && (
                                <p className={styles.clientStories_role}>{testimonial.role}</p>
                            )}
                            {testimonial.testimonialDescription && (
                                <p className={styles.clientStories_text}>
                                    {highlightBrandStory(testimonial.testimonialDescription)}
                                </p>
                            )}
                        </div>
                    ))}
                </div>

                {/* Mobile Swiper View with Dots */}
                <div className={styles.clientStories_swiperWrapper}>
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
                        className={styles.clientStories_swiperContainer}
                    >
                        {testimonials.map((testimonial, index) => (
                            <SwiperSlide key={index}>
                                <div className={styles.clientStories_card}>
                                    <div className={styles.clientStories_topbar}></div>
                                    {testimonial.name && (
                                        <p className={styles.clientStories_name}>{testimonial.name}</p>
                                    )}
                                    {testimonial.role && (
                                        <p className={styles.clientStories_role}>{testimonial.role}</p>
                                    )}
                                    {testimonial.testimonialDescription && (
                                        <p className={styles.clientStories_text}>
                                            {highlightBrandStory(testimonial.testimonialDescription)}
                                        </p>
                                    )}
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>

            {(ctaHeading || ctaSubHeading || ctaButtonText) && (
                <div className={styles.clientStories_ctaBox}>
                    <div className={styles.clientStories_ctaTopBar}></div>
                    {ctaHeading && (
                        <h3 className={styles.clientStories_ctaHeading}>{ctaHeading}</h3>
                    )}
                    {ctaSubHeading && (
                        <p className={styles.clientStories_ctaSubtext}>
                            {ctaSubHeading}
                        </p>
                    )}
                    {ctaButtonText && (
                        <button className={styles.clientStories_ctaButton}>{ctaButtonText}</button>
                    )}
                </div>
            )}
        </section>
    );
}
