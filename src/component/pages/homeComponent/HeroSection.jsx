// components/HeroSection.jsx
import styles from '@/style/homepage.module.css';
import Image from 'next/image';

export default function HeroSection({ data }) {
    // Return null if no data from Strapi
    if (!data) {
        return null;
    }

    const heading = data?.heading;
    const subHeading = data?.subHeading;
    const description1 = data?.description1;
    const description2 = data?.description2;
    const topRightText = data?.topRightText;
    const topRightImage = data?.topRightImage;
    const leftBottomText = data?.leftBottomText;
    const leftBottomImage = data?.leftBottomImage;

    // Get image URLs from Strapi media objects
    const getImageUrl = (imageData) => {
        if (!imageData) return null;
        
        // Try different possible structures for Strapi v5
        let url = null;
        
        // Structure 1: imageData.data.attributes.url (most common)
        if (imageData?.data?.attributes?.url) {
            url = imageData.data.attributes.url;
        }
        // Structure 2: imageData.attributes.url (direct)
        else if (imageData?.attributes?.url) {
            url = imageData.attributes.url;
        }
        // Structure 3: imageData.url (direct URL)
        else if (imageData?.url) {
            url = imageData.url;
        }
        // Structure 4: string
        else if (typeof imageData === 'string') {
            url = imageData;
        }
        
        if (!url) return null;
        
        // If URL already includes http, return as is, otherwise prepend Strapi URL
        if (url.startsWith('http')) return url;
        
        const strapiUrl = process.env.NEXT_PUBLIC_STRAPI_URL || process.env.STRAPI_URL || 'http://localhost:1337';
        return `${strapiUrl}${url}`;
    };

    const topRightImageUrl = getImageUrl(topRightImage);
    const leftBottomImageUrl = getImageUrl(leftBottomImage);

    // Return null if required data is missing
    if (!heading && !subHeading && !description1 && !description2 && !topRightText && !topRightImageUrl && !leftBottomText && !leftBottomImageUrl) {
        return null;
    }

    return (
        <section className={styles.heroSection}>
            <div className={styles.heroContainer}>
                <div className={styles.heroTop}>
                    {topRightText && (
                        <div className={styles.heroTopText}>
                            {topRightText}
                        </div>
                    )}
                    {topRightImageUrl && (
                        <div className={styles.heroTopimage}>
                            <img src={topRightImageUrl} alt="Hero Top Image" className={styles.heroTopImage} />
                        </div>
                    )}
                </div>
                {heading && (
                    <h2 className={styles.heroTitle}>
                        {heading}
                    </h2>
                )}
                {subHeading && (
                    <h2 className={styles.heroSubtitle}>
                        {subHeading}
                    </h2>
                )}
                {description1 && (
                    <p className={styles.heroDescription}>
                        {description1}
                    </p>
                )}
                {description2 && (
                    <p className={styles.heroDescription}>
                        {description2}
                    </p>
                )}
                <div className={styles.heroButtom}>
                    {leftBottomImageUrl && (
                        <div className={styles.heroTopimage}>
                            <img src={leftBottomImageUrl} alt="Hero Bottom Image" className={styles.heroTopImage} />
                        </div>
                    )}
                    {leftBottomText && (
                        <div className={styles.heroTopText}>
                            {leftBottomText}
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
}
