"use client";
import React, { useState } from "react";
import styles from "@/style/common/commonAccordion.module.css";

const CommonAccordion = ({ title, subheding1, subheding2, items, footer, paddingBottom }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleItem = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return ( 
      <div
        className={styles.CommonAccordion}
        style={{ paddingBottom: typeof paddingBottom !== "undefined" ? paddingBottom : undefined }}
      >
      {title && <h2 dangerouslySetInnerHTML={{__html:title}}></h2>}
      {subheding1 && <p dangerouslySetInnerHTML={{__html:subheding1}}/>}
      {subheding2 && <div className={styles.subheding2} dangerouslySetInnerHTML={{__html:subheding2}}/>}
      <div className={styles.accordionWrapper}>
        {items?.map((item, index) => (
          <div key={index}>
            <div
              className={`${styles.accordionItem} ${
                activeIndex === index ? styles.active : ""
              }`}
            >
              <button
                className={styles.accordionHeader}
                onClick={() => toggleItem(index)}
              >
                <h4>{item.title}</h4>
                <div className={styles.icon}>
                  {activeIndex === index ? (
                    <svg
                      width="21"
                      height="18"
                      viewBox="0 0 21 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10.5 0L20.4593 17.25H0.540708L10.5 0Z"
                        fill="#E73D26"
                      />
                    </svg>
                  ) : (
                    <svg
                      width="20"
                      height="18"
                      viewBox="0 0 20 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        opacity="0.8"
                        d="M10 18L19.9593 0.75H0.0407076L10 18Z"
                        fill="#E73D26"
                      />
                    </svg>
                  )}
                </div>
              </button>
              {activeIndex === index && (
                <div className={styles.accordionContent}>
                  <h5 dangerouslySetInnerHTML={{__html:item.content}} />
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
      {footer && <span dangerouslySetInnerHTML={{__html:footer}} className="pt-10"></span>}
    </div>
  );
};

export default CommonAccordion;
