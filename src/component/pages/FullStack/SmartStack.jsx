'use client'
import styles from '@/style/marketingAutomation.module.css'

export const SmartStack = () => {
    
    return (
        <div className={`${styles.frame} py-30 md: px-2`}>
            <h2 className="pb-10">Smart Stack Combos for Smarter Products</h2>
            <p>
                Great Digital Products Aren’t Just Built – They’re Engineered With The Right Pairing Of Tools. We Give You Combinations That Work Together Beautifully.
            </p> <br />
            <ul>
                <li><b>.NET Core + Angular</b> – Great For Large, Complex Enterprise Platforms</li>
                <li><b>Node + React</b> – Ideal For Real-Time, Fast-Loading Experiences</li>
                <li><b>React + .NET Core</b> – Balanced For Modern Dashboards And Reporting</li>
                <li><b>Vue.Js + Laravel</b> – Lightweight, Clean, And Highly Customizable</li>
                <li><b>Python + React</b> – Built For Intelligent Interfaces And Data-Rich Systems</li>
                <li><b>Python + Angular</b> – A Solid Fit For Scalable SaaS Or ML-Based Tools</li>
            </ul>
            <br />
            {/* The final closing paragraph is removed as it does not appear in the screenshot's content area. */}
        <style jsx>{`
            li{
                margin-bottom:15px;
            }
        `}</style>
        </div>
        
    )
}