"use client";
import styles from "@/style/common/commonFourCardStats.module.css";

const CommonFourCardStats = ({ heading, subheading, highlight, cards, subheadingMaxWidth, stats }) => {
  return (
    <div className={styles.backgroundWrapper}>
        <section className={styles.frameOne}>
          <div className={styles.header}>
            <h2>{heading}</h2>
            {highlight && <h3>{highlight}</h3>}
            <p style={{ maxWidth: subheadingMaxWidth || "1200px", margin: "0 auto" }}>
              {subheading}
            </p>
          </div> 

          <div className={styles.grid}>
            {cards?.map((card, index) => (
              <div key={index} className={`${styles.card} ${index == 0 ? styles.local : ""}`}>
                <h4>{card.title}</h4>
                <div
                  className={styles.description}
                  dangerouslySetInnerHTML={{ __html: card.description }}
                />
              </div>
            ))}
          </div>
        </section>
        {/* ststs section */}
        <section className={styles.frameTwo}>
        {stats && stats.length > 0 && (
        <div className={styles.statsBox}>
          {stats.map((item, i) => (
            <div key={i} className={styles.statItem}>
              <h3>{item.value}</h3>
              <p dangerouslySetInnerHTML={{__html: item.label}}/>
              {/* <p>{item.label}</p> */}
            </div>
          ))}
        </div>
      )}
        </section>
    </div>
  );
};

export default CommonFourCardStats;
