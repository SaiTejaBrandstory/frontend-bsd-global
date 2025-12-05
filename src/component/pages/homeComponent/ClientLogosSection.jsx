import styles from '@/style/homepage.module.css';
import Image from 'next/image';

export default function ClientLogosSection({ data }) {
    // Return null if no data from Strapi
    if (!data) {
        return null;
    }

    // Helper function to get image URL from Strapi media objects
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

    // Extract data from Strapi
    const heading = data.heading;
    const subheading = data.subheading;
    const description = data.description;
    
    // Extract rows array from Strapi
    // Handle different possible structures for Strapi v5
    let rows = [];
    if (data.rows && Array.isArray(data.rows)) {
        rows = data.rows.map((rowItem) => {
            // Handle different possible structures
            if (typeof rowItem === 'object' && rowItem !== null) {
                // Extract images array
                let images = [];
                if (rowItem.images && Array.isArray(rowItem.images)) {
                    images = rowItem.images.map((imgItem) => {
                        const imageData = imgItem.image || imgItem.attributes?.image || imgItem.data?.image || imgItem.data?.attributes?.image || null;
                        const alt = imgItem.alt || imgItem.attributes?.alt || imgItem.data?.alt || imgItem.data?.attributes?.alt || '';
                        return {
                            image: imageData,
                            alt: alt,
                        };
                    }).filter((img) => img.image); // Filter out items without images
                }
                
                const direction = rowItem.direction || rowItem.attributes?.direction || rowItem.data?.direction || rowItem.data?.attributes?.direction || 'left';
                
                return {
                    images: images,
                    direction: direction,
                };
            }
            return { images: [], direction: 'left' };
        }).filter((row) => row.images.length > 0); // Filter out rows without images
    }

    // Return null if required data is missing
    if (!heading || rows.length === 0) {
        return null;
    }

    return (
        <section className={styles.ClientLogosSection_wrapper}>
            <div className={styles.ClientLogosSection_headingContainer}>
                {heading && (
                    <h2 className={styles.ClientLogosSection_mainHeading}>{heading}</h2>
                )}
                {subheading && (
                    <p className={styles.ClientLogosSection_subHeading}>{subheading}</p>
                )}
                {description && (
                    <p className={styles.ClientLogosSection_description}>{description}</p>
                )}
            </div>

            <div className={styles.ClientLogosSection_marqueeWrapper}>
                {rows.map((row, rowIndex) => {
                    const isRight = row.direction === 'right';
                    const marqueeClass = isRight ? styles.ClientLogosSection_marqueeRight : styles.ClientLogosSection_marqueeLeft;
                    
                    // Duplicate images for seamless scroll (3-4 times for smooth animation)
                    const duplicatedImages = [...row.images, ...row.images, ...row.images, ...row.images];
                    
                    return (
                        <div key={rowIndex} className={marqueeClass}>
                            <div className={styles.ClientLogosSection_logosRow}>
                                {duplicatedImages.map((imgItem, imgIndex) => {
                                    const imageUrl = getImageUrl(imgItem.image);
                                    if (!imageUrl) return null;
                                    
                                    return (
                                        <Image
                                            key={`row${rowIndex}-img${imgIndex}`}
                                            src={imageUrl}
                                            alt={imgItem.alt || `Client logo ${imgIndex}`}
                                            width={318}
                                            height={84}
                                            className={styles.ClientLogosSection_logoImage}
                                        />
                                    );
                                })}
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    );
}