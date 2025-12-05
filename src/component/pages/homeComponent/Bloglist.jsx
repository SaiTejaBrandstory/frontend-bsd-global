// components/TwoMinuteTips.jsx
'use client';

import styles from '@/style/homepage.module.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

export default function Bloglist({ data }) {
    // Return null if no data from Strapi
    if (!data) {
        return null;
    }

    // Extract data from Strapi
    const headingRedText = data.headingRedText;
    const headingWhiteText = data.headingWhiteText;
    const description = data.description;
    
    // Extract posts array from Strapi
    // Handle different possible structures for Strapi v5
    let posts = [];
    if (data.posts && Array.isArray(data.posts)) {
        posts = data.posts.map((item) => {
            // Handle different possible structures
            if (typeof item === 'object' && item !== null) {
                return {
                    title: item.title || item.attributes?.title || item.data?.title || item.data?.attributes?.title || '',
                    link: item.link || item.attributes?.link || item.data?.link || item.data?.attributes?.link || '#',
                    tag: item.tag || item.attributes?.tag || item.data?.tag || item.data?.attributes?.tag || 'BLOGS',
                };
            }
            return { title: '', link: '#', tag: 'BLOGS' };
        }).filter((item) => item.title); // Filter out items without title
    }

    // Return null if required data is missing
    if (!headingRedText || !headingWhiteText || posts.length === 0) {
        return null;
    }

    return (
        <section className={styles.Bloglist_section}>
            <div className={styles.Bloglist_container}>
                <div className={styles.Bloglist_leftSticky}>
                    <h2>
                        {headingRedText && (
                            <span className={styles.Bloglist_redText}>{headingRedText}</span>
                        )}
                        {headingWhiteText && (
                            <span className={styles.Bloglist_whiteText}> {headingWhiteText}</span>
                        )}
                    </h2>
                    {description && (
                        <p className={styles.Bloglist_subtext}>{description}</p>
                    )}
                </div>
                {/* Desktop Grid View */}
                <div className={styles.Bloglist_rightCards}>
                    {posts.map((post, index) => (
                        <div key={index} className={styles.Bloglist_card}>
                            {post.tag && (
                                <div className={styles.Bloglist_tag}>{post.tag}</div>
                            )}
                            {post.title && (
                                <h3 className={styles.Bloglist_title}>{post.title}</h3>
                            )}
                            <div className={styles.Bloglist_readMoreContainer}>
                                <a href={post.link} className={styles.Bloglist_readMore}>Read More</a>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Mobile Swiper View with Dots */}
                <div className={styles.Bloglist_swiperWrapper}>
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
                        className={styles.Bloglist_swiperContainer}
                    >
                        {posts.map((post, index) => (
                            <SwiperSlide key={index}>
                                <div className={styles.Bloglist_card}>
                                    {post.tag && (
                                        <div className={styles.Bloglist_tag}>{post.tag}</div>
                                    )}
                                    {post.title && (
                                        <h3 className={styles.Bloglist_title}>{post.title}</h3>
                                    )}
                                    <div className={styles.Bloglist_readMoreContainer}>
                                        <a href={post.link} className={styles.Bloglist_readMore}>Read More</a>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </section>
    );
}
