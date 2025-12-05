"use client";
import React, { useState } from "react";
import styles from "@/style/homepage.module.css";

export default function ServicesSlider({ data }) {
    const heading = data?.heading;
    const services = data?.services || [];
    
    // Don't render if no data
    if (!services.length) {
        return null;
    }

    const [activeIndex, setActiveIndex] = useState(0);

    const next = () => setActiveIndex((prev) => (prev + 1) % services.length);
    const prev = () =>
        setActiveIndex((prev) => (prev - 1 + services.length) % services.length);

    const activeService = services[activeIndex];
    if (!activeService) return null;

    return (
        <div className={styles.servicesSlider}>
            {heading && (
                <h2 className={styles.servicesSlider_heading}>{heading}</h2>
            )}

            <div className={styles.servicesSlider_sliderWrapper}>

                <div className={styles.servicesSlider_leftContent}>
                    <div className={styles.servicesSlider_contentBox}>
                        <div className={styles.servicesSlider_number}>
                            {String(activeIndex + 1).padStart(2, "0")}.
                        </div>
                        <div>
                            {activeService.title && (
                                <h2 className={styles.servicesSlider_title}>{activeService.title}</h2>
                            )}
                            {activeService.subtitle && (
                                <h3 className={styles.servicesSlider_subtitle}>{activeService.subtitle}</h3>
                            )}
                            {activeService.description && (
                                <p className={styles.servicesSlider_description}>{activeService.description}</p>
                            )}
                        </div>
                    </div>
                    <div className={styles.servicesSlider_navButtons}>
                        <button onClick={prev}>
                            <img src="/icons/left-arrow-round.svg" alt="arrow" />
                        </button>
                        <button onClick={next}>
                            <img src="/icons/right-arrow-round.svg" alt="arrow" />
                        </button>
                        <div className={styles.servicesSlider_dots}>
                            {services.map((_, i) => (
                                <span
                                    key={i}
                                    className={`${styles.servicesSlider_dot} ${i === activeIndex ? styles.servicesSlider_activeDot : ""}`}
                                    onClick={() => setActiveIndex(i)}
                                />
                            ))}
                        </div>
                    </div>
                </div>

                <div className={styles.servicesSlider_rightVisual}>
                    <div className={styles.servicesSlider_stackContainer}>
                        {[...services].reverse().map((item, i) => {
                            const actualIndex = services.length - 1 - i;
                            const isActive = actualIndex === activeIndex;
                            const itemId = actualIndex + 1;
                            const isLastItem = itemId === services.length;

                            return (
                                <div className="ss" key={actualIndex}>
                                    <div
                                        className={`${styles.servicesSlider_stackLayer} ${isActive ? styles.servicesSlider_active : ""}`}
                                        style={{ bottom: `${i * 50}px`, width: `${90 - i * 10}%` }}
                                        onMouseEnter={() => setActiveIndex(actualIndex)}
                                    >
                                        <span
                                            className={`
                                                ${i % 2 === 0 ? styles.servicesSlider_dottedLineRight : styles.servicesSlider_dottedLineLeft}
                                                ${isLastItem ? styles.servicesSlider_fifthdottedLineLeft : ''}
                                            `}
                                        ></span>

                                        {item.title && (
                                            <div onMouseEnter={() => setActiveIndex(actualIndex)}
                                                className={`
                                                    ${styles.servicesSlider_labelBox}
                                                    ${isActive ? styles.servicesSlider_activeLabel : ""}
                                                    ${i % 2 === 0 ? styles.servicesSlider_leftLabel : styles.servicesSlider_rightLabel}
                                                `}
                                                style={{ top: `${isLastItem ? '140%' : ''}` }}
                                            >
                                                {`${String(itemId).padStart(2, "0")}. ${item.title}`}
                                            </div>
                                        )}
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
}
