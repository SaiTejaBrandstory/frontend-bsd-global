import React from 'react'
import styles from '@/style/common/commonBanner.module.css'

export const CommonBanner = ({heading, paragraph, paragraph2, buttonLink, buttonLink2, buttonText, buttonText2}) => {
    return (
        <div className={styles.seoBanner}>
            <div className={styles.seoBannerContent}>
                <h1 className=''><div dangerouslySetInnerHTML={{__html: heading}}></div></h1>
                <div className={styles.seoBannerParagraph}>
                    <div dangerouslySetInnerHTML={{__html: paragraph}}></div>
                    <div dangerouslySetInnerHTML={{__html: paragraph2}}></div>
                </div>
                <div className={styles.btnWrapper}>
                    <div className={styles.seoBannerButton}>
                        <a href={buttonLink} className={styles.seoBannerButtonLink}>{buttonText}
                        <img src="/images/triangle-btn.png" alt="btn img" className={styles.btnImg}/>
                        </a>
                    </div>
                    {buttonText2 && 
                    <div className={styles.seoBannerButton}>
                        <a href={buttonLink2} className={styles.seoBannerButtonLink2}>{buttonText2}</a>
                    </div>}
                </div>
            </div>

            <div className={styles.boxes}>
                <div className={styles.box1}></div>
                <div className={styles.box2}></div>
                <div className={styles.box3}></div>
            </div>
        </div>
    )
}
 