// components/HowWeWork.jsx
import styles from '@/style/homepage.module.css';

export default function HowWeWork({ data }) {
  // Return null if no data from Strapi
  if (!data) {
    return null;
  }

  // Extract data from Strapi
  const heading = data.heading;
  const description1 = data.description1;
  const description2 = data.description2;
  
  // Extract banners array from Strapi
  // Handle different possible structures for Strapi v5
  let banners = [];
  if (data.banners && Array.isArray(data.banners)) {
    banners = data.banners.map((item, idx) => {
      // Handle different possible structures
      if (typeof item === 'object' && item !== null) {
        // Try direct properties first (Strapi v5 common structure)
        const bannerData = {
          number: item.number || item.attributes?.number || item.data?.number || item.data?.attributes?.number || '',
          title: item.title || item.attributes?.title || item.data?.title || item.data?.attributes?.title || '',
          description1: item.description1 || item.attributes?.description1 || item.data?.description1 || item.data?.attributes?.description1 || '',
          description2: item.description2 || item.attributes?.description2 || item.data?.description2 || item.data?.attributes?.description2 || '',
        };
        
        return bannerData;
      }
      return { number: '', title: '', description1: '', description2: '' };
    });
  }

  // Return null only if heading is missing (show even if banners empty for debugging)
  if (!heading) {
    if (process.env.NODE_ENV === 'development') {
      console.warn('HowWeWork - Missing heading, returning null');
    }
    return null;
  }

  // Filter out empty banners (where both number and title are missing)
  const validBanners = banners.filter((item) => item.number || item.title);

  if (validBanners.length === 0) {
    if (process.env.NODE_ENV === 'development') {
      console.warn('HowWeWork - No valid banners found, returning null');
    }
    return null;
  }

  return (
    <section className={styles.howwework_container}>
      <h2 className={styles.howwework_heading}>{heading}</h2>
      {(description1 || description2) && (
      <p className={styles.howwework_subheading}>
          {description1 && <>{description1}</>}
          {description1 && description2 && <><br /></>}
          {description2 && <>{description2}</>}
        </p>
      )}
      {validBanners.map((banner, index) => (
        <div key={banner.number || index} className={styles.howwework_step}>
          <div className={styles.howwework_number}>{banner.number}</div>
          <div>
            {banner.title && (
              <h3 className={styles.howwework_title}>{banner.title}</h3>
            )}
            <div className={styles.howwework_description}>
              {banner.description1 && <p>{banner.description1}</p>}
              {banner.description2 && <p>{banner.description2}</p>}
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}
