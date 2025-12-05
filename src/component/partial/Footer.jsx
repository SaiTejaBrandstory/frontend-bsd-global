import styles from '@/style/footer.module.css';
import Link from 'next/link';

// Helper function to get image URL from Strapi media object
function getImageUrl(imageData) {
  if (!imageData) return null;
  
  // Try different possible structures for Strapi v5
  let url = null;
  if (imageData?.data?.attributes?.url) {
    url = imageData.data.attributes.url;
  } else if (imageData?.attributes?.url) {
    url = imageData.attributes.url;
  } else if (imageData?.url) {
    url = imageData.url;
  } else if (typeof imageData === 'string') {
    url = imageData;
  }
  
  if (!url) return null;
  
  // If URL already includes http, return as is, otherwise prepend Strapi URL
  if (url.startsWith('http')) return url;
  
  const strapiUrl = process.env.NEXT_PUBLIC_STRAPI_URL || process.env.STRAPI_URL || 'http://localhost:1337';
  return `${strapiUrl}${url}`;
}

export default function Footer({ data }) {
  // Return null if no data from Strapi
  if (!data) {
    return null;
  }

  const topStats = data?.topStats || [];
  const brandSection = data?.brandSection;
  const columns = data?.columns || [];
  const bottomBar = data?.bottomBar;

  // Get logo URL
  const logoUrl = brandSection?.logo ? getImageUrl(brandSection.logo) : '/white-logo.svg';

  return (
    <footer className={styles.footer}>
      <div className={styles.footer_container}>
        {topStats.length > 0 && (
          <div className={styles.topStats}>
            {topStats.map((stat, index) => (
              <div key={index} className={styles.stat}>
                {stat.number && <h3>{stat.number}</h3>}
                {stat.description && <p>{stat.description}</p>}
              </div>
            ))}
          </div>
        )}

        <div className={styles.mainContent}>
          {brandSection && (
            <div className={styles.brandSection}>
              <Link href={'/'}>
                <img src={logoUrl} alt="logo" className={styles.logo} />
              </Link>
              <p>
                {brandSection.brandDescription && (
                  <span className={styles.brandDescription}>{brandSection.brandDescription}</span>
                )}
                {brandSection.brandStats && (
                  <>
                    <br />
                    <span className={styles.brandStats}>{brandSection.brandStats}</span>
                  </>
                )}
              </p>
              {brandSection.callButtonText && (
                <p className={styles.callButtontext}>{brandSection.callButtonText}</p>
              )}
              {brandSection.callButtonLabel && (
                <button className={styles.callButton}>{brandSection.callButtonLabel}</button>
              )}
            </div>
          )}

          {columns.map((column, index) => (
            <div key={index} className={styles.column}>
              {column.title && <h4>{column.title}</h4>}
              {column.links && column.links.length > 0 && (
                <ul>
                  {column.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      {link.url ? (
                        <a href={link.url}>{link.text}</a>
                      ) : (
                        link.text
                      )}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>

        {bottomBar && (
          <div className={styles.bottomBar}>
            {bottomBar.tagline && <p>{bottomBar.tagline}</p>}
            <div className={styles.bottomLinks}>
              {bottomBar.policyLinks && bottomBar.policyLinks.length > 0 && (
                <div className={styles.policyLinks}>
                  {bottomBar.policyLinks.map((link, index) => (
                    <a key={index} href={link.url || '#'}>
                      {link.text}
                    </a>
                  ))}
                </div>
              )}
              {bottomBar.socialLinks && bottomBar.socialLinks.length > 0 && (
                <div className={styles.socialIcons}>
                  {bottomBar.socialLinks.map((socialLink, index) => {
                    const iconUrl = socialLink.icon 
                      ? getImageUrl(socialLink.icon) 
                      : `/icons/${socialLink.platform?.toLowerCase()}-icon.svg`;
                    
                    return (
                      <a key={index} href={socialLink.url || '#'}>
                        <img src={iconUrl} alt={socialLink.platform || 'Social'} />
                      </a>
                    );
                  })}
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </footer>
  );
}