'use client';
import React, { useState, useEffect, useMemo } from 'react';
import styles from '@/style/homepage.module.css';

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

// Transform Strapi data to match expected format
const transformStrapiData = (strapiData) => {
    if (!strapiData?.tabs || !Array.isArray(strapiData.tabs) || strapiData.tabs.length === 0) {
        return null;
    }

    const transformedData = {};
    strapiData.tabs.forEach((tab) => {
        const tabTitle = tab.title;
        transformedData[tabTitle] = {
            icon: getImageUrl(tab.icon),
            items: (tab.tools || []).map((tool) => ({
                name: tool.name || '',
                icon: getImageUrl(tool.icon),
            })),
        };
    });

    return transformedData;
};

const TechTabs = ({ data }) => {
    // Memoize transformed data to avoid recalculation on every render
    const strapiTechData = useMemo(() => transformStrapiData(data), [data]);
    
    const [activeTab, setActiveTab] = useState(() => {
        // Set initial active tab to first tab in data
        if (strapiTechData && Object.keys(strapiTechData).length > 0) {
            return Object.keys(strapiTechData)[0];
        }
        return null;
    });

    // Update active tab when data changes
    useEffect(() => {
        if (strapiTechData && Object.keys(strapiTechData).length > 0) {
            setActiveTab(Object.keys(strapiTechData)[0]);
        }
    }, [strapiTechData]);

    // Return null if no data from Strapi
    if (!data || !strapiTechData || Object.keys(strapiTechData).length === 0) {
        return null;
    }

    const heading = data.heading;
    const description = data.description;
    const currentTab = strapiTechData[activeTab];

    if (!currentTab) {
        return null;
    }

    return (
        <div className={`${styles.techtab_containerbg}`}>
            <div className={styles.techtab_container}>
                <h2 className={styles.techtab_title}>{heading}</h2>
                <p className={styles.techtab_subtitle}>{description}</p>

                <div className={styles.techtab_tabContainer}>
                    {Object.keys(strapiTechData).map((tab) => (
                        <div
                            key={tab}
                            className={`${styles.techtab_tab} ${activeTab === tab ? styles.techtab_active : ''}`}
                            onClick={() => setActiveTab(tab)}
                        >
                            {strapiTechData[tab].icon && (
                                <img src={strapiTechData[tab].icon} alt={tab} className={styles.techtab_tabIcon} />
                            )}
                            <span>{tab}</span>
                        </div>
                    ))}
                </div>

                <hr className={styles.techtab_separator} />

                <div className={styles.techtab_items}>
                    {currentTab.items.map((tool, index) => (
                        <div className={styles.techtab_itemContainer} key={tool.name || index}>
                            <div className={styles.techtab_item}>
                                {tool.icon && (
                                <img src={tool.icon} alt={tool.name} className={styles.techtab_itemIcon} />
                                )}
                            </div>
                            <div className={styles.techtab_tabText} dangerouslySetInnerHTML={{__html: tool.name}}></div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default TechTabs;
