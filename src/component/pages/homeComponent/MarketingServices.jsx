import styles from '@/style/homepage.module.css';
import Image from 'next/image';

export default function MarketingServices({ data }) {
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
  const description1 = data.description1;
  const description2 = data.description2;
  
  // Extract cards array from Strapi
  // Handle different possible structures for Strapi v5
  let cards = [];
  if (data.cards && Array.isArray(data.cards)) {
    cards = data.cards.map((item) => {
      // Handle different possible structures
      if (typeof item === 'object' && item !== null) {
        // Extract list items
        let listItems = [];
        if (item.list && Array.isArray(item.list)) {
          listItems = item.list.map((listItem) => {
            if (typeof listItem === 'string') {
              return listItem;
            }
            return listItem.item || listItem.attributes?.item || listItem.data?.item || listItem.data?.attributes?.item || '';
          }).filter(Boolean);
        }
        
        return {
          title: item.title || item.attributes?.title || item.data?.title || item.data?.attributes?.title || '',
          description1: item.description1 || item.attributes?.description1 || item.data?.description1 || item.data?.attributes?.description1 || '',
          description2: item.description2 || item.attributes?.description2 || item.data?.description2 || item.data?.attributes?.description2 || '',
          image: item.image || item.attributes?.image || item.data?.image || item.data?.attributes?.image || null,
          list: listItems,
        };
      }
      return { title: '', description1: '', description2: '', image: null, list: [] };
    }).filter((item) => item.title);
  }

  // Return null if required data is missing
  if (!heading || cards.length === 0) {
    return null;
  }

  return (
    <section className={styles.MarketingServices_container}>
      <div className={styles.MarketingServices_left}>
        <h2>{heading}</h2>
        {description1 && (
          <p>{description1}</p>
        )}
        {description2 && (
          <p>{description2}</p>
        )}
      </div>

      <div className={styles.MarketingServices_right}>
        {cards.map((card, index) => {
          const imageUrl = getImageUrl(card.image);
          
          return (
          <div className={styles.MarketingServices_card} key={index}>
              {imageUrl && (
            <Image
                  src={imageUrl}
                  alt={card.title}
              width={572}
              height={576}
              className={styles.MarketingServices_card_img}
            />
              )}
            <div>
                {card.title && (
                  <h3>{card.title}</h3>
                )}
                <div className={styles.MarketingServices_card_description}>
                  {card.description1 && <p>{card.description1}</p>}
                  {card.description2 && <p>{card.description2}</p>}
                </div>
                {card.list && card.list.length > 0 && (
              <ul>
                    {card.list.map((item, i) => (
                      <li key={i}>{item}</li>
                ))}
              </ul>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
