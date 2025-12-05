"use client";
import React, { useState, useEffect } from 'react';
import { ChevronDown, Menu } from 'lucide-react';
import HeaderMenu from './HeaderMenu';
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

const Header = ({ data }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Close mobile menu when screen resizes to desktop (above 1024px)
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1024 && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    // Also check on mount
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, [mobileMenuOpen]);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  // Get logo URL from Strapi only
  const logoUrl = data?.logo ? getImageUrl(data.logo) : null;

  return (
  
    <header className="header">
      <div className="headerContainer">
        {logoUrl && (
        <div className="logo">
          <Link href="/">
              <img src={logoUrl} alt="logo" className='headerLogo' />
          </Link>
        </div>
        )}

        <button className="mobileMenuButton" onClick={toggleMobileMenu}>
          <Menu />
        </button>

       <HeaderMenu mobileMenuOpen={mobileMenuOpen} menuData={data?.menus}/>
        {data?.ctaText && (
          <Link href={data.ctaLink || '#'} className="contactButton mobile-hidden">
            {data.ctaText}
          </Link>
        )}

      </div>
    </header>

  );
};

export default Header;
