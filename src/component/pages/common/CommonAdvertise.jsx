import styles from '@/style/common/commonAdvertise.module.css';
import Link from 'next/link';

const CommonAdvertise = ({ btnOneLink, btnTwoLink, btn1, btn2, title1, title2, description, footerText }) => {
  return (
    <div className={styles.frame}>
      <div className={styles.innerFrame}>
        <span>
          <h2 className={styles.heading}>{title1}</h2>
          {title2 && <h2 className={styles.heading}>{title2}</h2>}
        </span>

        {description && (
          <p dangerouslySetInnerHTML={{ __html: description }}></p>
        )}

        {(btn1 || btn2) && (
          <div className={styles.buttonContainer}>
            {btn1 && (
              <Link href={btnOneLink} className="orange-btn">
                {btn1}
              </Link>
            )}
            {btn2 && (
              <Link href={btnTwoLink} className="orange-btn-transparent">
                {btn2}
              </Link>
            )}
          </div>
        )}

        {footerText && (
          <p
            className={styles.footertext}
            dangerouslySetInnerHTML={{ __html: footerText }}
          ></p>
        )}
      </div>
    </div>
  );
};

export default CommonAdvertise;
