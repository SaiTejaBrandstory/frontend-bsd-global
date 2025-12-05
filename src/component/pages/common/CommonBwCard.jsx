import React from "react";
import styles from "@/style/common/commonBwCard.module.css";

export const CommonBwCrd = ({title, description, footer, cardData }) => {
  return (
    <div className={styles.frame}>
      <h1 className={styles.heading}>
        {title}
      </h1>
      <p className={styles.subHeading}>
        {description}
      </p>
      {/* <p className={styles.small}>We Also Work With:</p> */}

      <div className={styles.cardWrapper}>
        {cardData.map((item, index) => (
          <div key={index} className={`${styles.card} ${index===0 ? `${styles.firstBox}` : ''}`}>
            <h3>{item.title}</h3>
            <div className={styles.description} dangerouslySetInnerHTML={{__html: item.description}}/>
          </div>
        ))}
      </div>

      <p className={styles.footer}>
       {footer}
      </p>
    </div>
  );
};
