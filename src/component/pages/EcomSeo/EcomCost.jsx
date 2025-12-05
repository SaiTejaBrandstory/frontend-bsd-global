'use client'
import styles from '@/style/marketingAutomation.module.css'

export const EcomCost = () => {
    
    return (
        <div className={`${styles.frame} py-30 md: px-2`}>
            {/* Title updated to match the image heading */}
            <h2 className="pb-10">The Cost of eCommerce SEO: What to Expect</h2>
            {/* Introductory paragraph updated to match the image text */}
            <p>
                Good SEO is a long-term investment in your store’s success. And while it’s not free, it often pays for itself many times over.
            </p> <br />
            <p>
                Pricing depends on a few key things:
            </p> <br />
            {/* List items updated to reflect the technologies and categories from the image */}
            <ul>
                <li><b>How big your site is </b>(number of pages or products to optimize)</li>
                <li><b>What platform you’re using </b>and how it’s built</li>
                <li><b>How competitive your keywords are</b> and the <b>Search Volume</b> You want to Target</li>
                <li><b>Which services are included</b> (like content writing, conversion fixes, or technical SEO)</li>
            </ul>
            <br />
            <br/>
            <p className="highlited-text">
                You get a plan built around your store’s needs, growth stage, and goals. Because you're not just buying traffic, you’re setting up your store to grow in a smart, sustainable way.
            </p>
        <style jsx>{`
            li{
                margin-bottom:15px;
            }
        `}</style>
        </div>
        
    )
}