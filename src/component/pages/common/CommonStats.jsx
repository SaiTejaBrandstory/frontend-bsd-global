import React from "react";
import styles from "@/style/common/commonStats.module.css";

const CommonStatsSection = ({
  title = null,
  subtitle = null, 
  description = [],
  stats = [],
  statsTextBottom,
}) => {
  return (
    <div className={styles.CommonStatsSection}>
    <div className={styles.container}>
      {/* Left Content */}
      <div className={styles.textBox}>
        {title && <h2 dangerouslySetInnerHTML={{ __html: title }} />}
        {subtitle && <p dangerouslySetInnerHTML={{ __html: subtitle }} />}
        {description && description.length > 0 && (
          <div className={styles.description}>
            {description.map((para, i) => (
              <p key={i} dangerouslySetInnerHTML={{ __html: para }} />
            ))}
          </div>
        )}
      </div>

      {/* Right Stats */}
      {stats && stats.length > 0 && (
        <>
          {statsTextBottom ? (
            <div className={styles.statsBox2}>
              <div className={styles.statsBox}>
                {stats.map((item, i) => (
                  <div key={i} className={styles.statItem}>
                    <h3>{item.value}</h3>
                    <p dangerouslySetInnerHTML={{ __html: item.label }} />
                  </div>
                ))}
              </div>
              <div className={styles.statsTextBottom} dangerouslySetInnerHTML={{__html:statsTextBottom}} />
            </div>
          ) : (
            <div className={styles.statsBox}>
              {stats.map((item, i) => (
                <div key={i} className={styles.statItem}>
                  <h3>{item.value}</h3>
                  <p dangerouslySetInnerHTML={{ __html: item.label }} />
                </div>
              ))}
            </div>
          )}
        </>
      )}



    </div>
    </div>
  );
};

export default CommonStatsSection;
