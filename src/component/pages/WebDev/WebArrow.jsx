
import CommonArrowGrid from '@/component/pages/common/CommonArrowGrid'

export const WebArrow = () => {
    const heading = "Platform-Centric Web Development for Smarter Growth"
    const description ="Some platforms work better for specific goals — and our team helps you make the right choice."

    const boxesData = [
    {
        title: "WordPress Web Development",
        description: "Best suited for content-driven and corporate websites, WordPress delivers speed, flexibility, and robust SEO capabilities. We create custom themes and scalable structures that empower businesses to manage content easily while driving organic visibility.",
        theme: "light",
        size: "sm"
    },
    {
        title: "Shopify Web Development",
        description: "Ideal for D2C and retail brands looking to grow quickly, Shopify offers a seamless eCommerce experience with powerful out-of-the-box features. We tailor storefronts that are user-friendly, mobile-optimized, and built for high conversions.",
        theme: "dark",
        size: "sm"
    },
    {
        title: "Magento Web Development",
        description: "Magento is the go-to solution for large-scale, enterprise-grade eCommerce operations. We specialize in building secure, scalable Magento websites that handle high traffic volumes, extensive product inventories, and complex backend workflows.",
        theme: "dark",
        size: "sm"
    },
  ];
  
    return (
    
    <CommonArrowGrid
    heading={heading}
    descripton={description}
    boxes={boxesData} />
    );
}
