"use client";
import React, { useState } from "react";
import Image from 'next/image';
import styles from "@/style/common/commonAccordion2.module.css";
import Link from "next/link";

const CommonAccordion2 = ({ title, highlited, description, items, button, buttonLink, splitRatio }) => {
    const [activeIndex, setActiveIndex] = useState(null);
    const toggleItem = (index) => setActiveIndex(activeIndex === index ? null : index);

    // Default split ratio 0.55 (55% text / 45% accordion)
    const leftRatio = splitRatio ? splitRatio : 0.55;
    const rightRatio = 1 - leftRatio;

    return (
        <div className={styles.wrapper}>
            {/* Left Side */}
            <div className={styles.text} style={{ flex: `${leftRatio} 1 0` }}>
                {title && <h2 dangerouslySetInnerHTML={{__html:title}} className={styles.title} />}
                {highlited && <h2 className={styles.highlited}>{highlited}</h2>}
                {description && <p className={styles.description} dangerouslySetInnerHTML={{ __html: description }} />}
                {button && <Link className={styles.btn} href={buttonLink}>{button}</Link>}
            </div>

            {/* Right Side Accordion */}
            <div className={styles.accordionWrapper} style={{ flex: `${rightRatio} 1 0` }}>
                {items?.map((item, index) => (
                    <div
                        key={index}
                        className={`${styles.accordionItem} ${activeIndex === index ? styles.active : ""}`}
                    >
                        <button className={styles.accordionHeader} onClick={() => toggleItem(index)}>
                            <h4>{item.title}</h4>
                            <div className={styles.arrowContainer}>
                                <Image
                                    src="/images/arrow-down.webp"
                                    alt="arrow down"
                                    width={24}
                                    height={24}
                                    className={`${styles.arrow} ${activeIndex === index ? styles.flip : ''}`}
                                />
                            </div>
                        </button>

                        {activeIndex === index && (
                            <div className={styles.accordionContent}>
                                <p dangerouslySetInnerHTML={{__html:item.content}} />
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CommonAccordion2;
