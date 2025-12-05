'use client'
import styles from '@/style/marketingAutomation.module.css'

export const Expertise = () => {
    
    return (
        <div className={`${styles.frame} py-30 md: px-2`}>
            {/* Title updated to match the image heading */}
            <h2 className="pb-10">Full-Stack Expertise Across Platforms and Architectures</h2>
            {/* Introductory paragraph updated to match the image text */}
            <p>
                We Bring Deep Technical Fluency Across Every Layer Of The API Development Stack:
            </p> <br />
            {/* List items updated to reflect the technologies and categories from the image */}
            <ul>
                <li><b>Front-End:</b> React, Vue.Js, Angular</li>
                <li><b>Back-End:</b> Node.Js, Django, Laravel, .NET</li>
                <li><b>Database:</b> MongoDB, PostgreSQL, MySQL</li>
                <li><b>Mobile:</b> Android, iOS, Flutter, React Native</li>
                <li><b>Frameworks:</b> Express.Js, Spring Boot, Flask</li>
                <li><b>Cloud:</b> AWS, Azure, Google Cloud</li>
                <li><b>DevOps:</b> Jenkins, Docker, Kubernetes, GitLab</li>
                <li><b>Ecommerce:</b> Magento, Shopify, WooCommerce</li>
                <li><b>CMS:</b> WordPress, Drupal, Sitecore</li>
                <li><b>Platforms:</b> Salesforce, HubSpot, SAP</li>
            </ul>
            <br />
        <style jsx>{`
            li{
                margin-bottom:15px;
            }
        `}</style>
        </div>
        
    )
}