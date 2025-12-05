'use client'
import { useState } from 'react';
import Image from 'next/image';
import styles from '@/style/common/commonFAQs.module.css';

const CommonFAQ = ({data}) => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className={styles.frame}>
      <h1 className={styles.heading}>FAQs</h1>
      <div className={styles.faqList}>
        {data.map((item, index) => (
          <div key={index} className={styles.faqItem}>
            <button
              className={styles.faqHeader}
              onClick={() => toggleFAQ(index)}
            >
              <span>{item.title}</span>
              <div className={styles.arrowContainer}>
                <Image
                  src="/images/arrow-down.webp"
                  alt="arrow down"
                  width={24}
                  height={24}
                  className={`${styles.arrow} ${
                    openIndex === index ? styles.flip : ''
                  }`}
                />
              </div>
            </button>
            <div
              className={`${styles.faqContent} ${
                openIndex === index ? styles.open : ''
              }`}
            >
              <p dangerouslySetInnerHTML={{__html:item.description}} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CommonFAQ;
