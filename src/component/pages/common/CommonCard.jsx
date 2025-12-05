"use client";
import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import styles from "@/style/common/commonCard.module.css";


 
const CommonCard = ({ seoData, heding, description, footer }) => {
    const prevRef = useRef(null);
    const nextRef = useRef(null);

    return (
        <section className={styles.wrapper}>
            <h2 dangerouslySetInnerHTML={{__html: heding}} className={styles.heading} />

            {description && <p className={styles.description} dangerouslySetInnerHTML={{ __html: description }}></p>}

            <Swiper
                modules={[Navigation, Pagination]}
                spaceBetween={20}
                slidesPerView={3}
                loop={false}
                navigation={{
                    prevEl: prevRef.current,
                    nextEl: nextRef.current,
                }}
                pagination={{
                    clickable: true,
                    dynamicBullets: false,
                }}
                onSwiper={(swiper) => {
                    // Delay setting navigation until refs are ready
                    setTimeout(() => {
                        swiper.params.navigation.prevEl = prevRef.current;
                        swiper.params.navigation.nextEl = nextRef.current;

                        // Re-init navigation
                        swiper.navigation.destroy();
                        swiper.navigation.init();
                        swiper.navigation.update();
                    });
                }}
                breakpoints={{
                    320: { 
                        slidesPerView: 1,
                        pagination: {
                            enabled: true,
                        },
                    },
                    768: { 
                        slidesPerView: 1,
                        pagination: {
                            enabled: true,
                        },
                    },
                    1024: { 
                        slidesPerView: 3,
                        pagination: {
                            enabled: false,
                        },
                    },
                }}
            >
                {seoData.map((item, index) => (
                    <SwiperSlide key={index}>
                        <div className={styles.card} style={{ '--bg': item.background, '--boxHeight': item.height || '228px' }}>
                            {item.icon && (
                            <div className={styles.iconWrapper}>
                                <img src={item.icon} alt="icon" className={styles.icon} />
                            </div>
                            )}
                            <h4 className={styles.title}>{item.title}</h4>
                            <h5 className={styles.desc} dangerouslySetInnerHTML={{ __html: item.desc }}></h5>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

            {/* Custom Navigation */}
            <div className={styles.navigation}>
                <button ref={prevRef} className={styles.prevBtn}>
                    <svg
                        version="1.2"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 74 74"
                        width={74}
                        height={74}
                    >
                        <title>image</title>
                        <style
                            dangerouslySetInnerHTML={{
                                __html:
                                    "\n\t\t.s0 { fill: none;stroke: #e73d26 } \n\t\t.s1 { fill: #e73d26 } \n\t"
                            }}
                        />
                        <g>
                            <path
                                fillRule="evenodd"
                                className="s0"
                                d="m37 62.5c-16.31 0-29.5-13.19-29.5-29.5 0-16.31 13.19-29.5 29.5-29.5 16.31 0 29.5 13.19 29.5 29.5 0 16.31-13.19 29.5-29.5 29.5z"
                            />
                        </g>
                        <path
                            className="s1"
                            d="m39.22 40.25q0.19-0.21 0.28-0.48 0.09-0.27 0.07-0.55-0.02-0.28-0.14-0.54-0.13-0.25-0.34-0.44l-5.9-5.16 5.16-5.9c0.25-0.28 0.37-0.65 0.35-1.03-0.03-0.38-0.2-0.73-0.48-0.98-0.29-0.25-0.66-0.37-1.04-0.35-0.37 0.03-0.73 0.2-0.97 0.49l-6.11 6.98q-0.19 0.21-0.28 0.48-0.09 0.27-0.07 0.55 0.02 0.28 0.14 0.54 0.13 0.25 0.34 0.44l6.98 6.1c0.58 0.51 1.49 0.45 2.01-0.15z"
                        />
                    </svg>

                </button>

                <button ref={nextRef} className={styles.nextBtn}>
                    <svg width="74" height="74" viewBox="0 0 74 74" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g filter="url(#filter0_d_1_877)">
                            <circle cx="37" cy="33" r="29.5" stroke="#E73D26" shapeRendering="crispEdges" />
                        </g>
                        <path d="M33.1568 25.4431C33.0244 25.5753 32.9193 25.7322 32.8476 25.9051C32.7759 26.0779 32.739 26.2631 32.739 26.4502C32.739 26.6373 32.7759 26.8226 32.8476 26.9954C32.9193 27.1682 33.0244 27.3252 33.1568 27.4574L38.6996 33.0002L33.1568 38.5431C32.8897 38.8102 32.7396 39.1725 32.7396 39.5502C32.7396 39.928 32.8897 40.2903 33.1568 40.5574C33.4239 40.8245 33.7862 40.9746 34.1639 40.9746C34.5417 40.9746 34.904 40.8245 35.1711 40.5574L41.7282 34.0002C41.8607 33.8681 41.9657 33.7111 42.0374 33.5383C42.1091 33.3655 42.146 33.1802 42.146 32.9931C42.146 32.806 42.1091 32.6207 42.0374 32.4479C41.9657 32.2751 41.8607 32.1181 41.7282 31.986L35.1711 25.4288C34.6282 24.886 33.7139 24.886 33.1568 25.4431Z" fill="#E73D26" />
                        <defs>
                            <filter id="filter0_d_1_877" x="0" y="0" width="74" height="74" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                <feOffset dy="4" />
                                <feGaussianBlur stdDeviation="3.5" />
                                <feComposite in2="hardAlpha" operator="out" />
                                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1_877" />
                                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1_877" result="shape" />
                            </filter>
                        </defs>
                    </svg>

                </button>
            </div>
            {footer && <p className={styles.footer} dangerouslySetInnerHTML={{__html:footer}} />}
        </section>
    );
};

export default CommonCard;