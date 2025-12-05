import React from "react";
import styles from "@/style/common/commonBwThreeCard.module.css";

export const CommonBwThreeCard = ({ title, description, footer, cardData, rightPadding, paddingBottom }) => {
  return (
    <div 
      className={styles.frame} 
      style={{ paddingBottom: typeof paddingBottom !== "undefined" ? paddingBottom : undefined }}   
    >
      <h1 className={styles.heading} dangerouslySetInnerHTML={{__html:title}}></h1>
      <p className={styles.subHeading} dangerouslySetInnerHTML={{__html: description}}></p>

      <div className={styles.cardWrapper}>
        {cardData.map((item, index) => (
          <div
            key={index}
            className={`
              ${styles.card}
              ${index === 0 ? styles.firstBox : ""}
              ${index === 2 ? styles.thirdBox : ""}
            `}
            style={{
              paddingRight: rightPadding ? `${rightPadding}` : undefined,
            }}
          >
            <h3 dangerouslySetInnerHTML={{ __html: item.title }} />
            <p
              className={styles.description}
              dangerouslySetInnerHTML={{ __html: item.description }}
            />
          </div>
        ))}
      </div>

      <p className={styles.footer}>{footer}</p>
    </div>
  );
};
