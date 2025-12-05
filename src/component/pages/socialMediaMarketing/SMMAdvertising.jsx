import styles from '@/style/smm.module.css'

export const SMMAdvertising = ()=>{
    return(
        <div className={styles.frame}>
            <h1 className={`${styles.heading} ${styles.center}`}>Paid Social Advertising for Conversions</h1>
            <p className={styles.center}>
                Sometimes organic posts aren’t enough to reach new customers. That’s where paid social advertising comes in.
            </p>
            <p className={styles.center}>
                We design ads that target the right people at the right time. Depending on your goals, this could be:
            </p>

            <div className={styles.contentWrapper}>
                {/* Left Side Text */}
                <div className={styles.left}>
                    <ul>
                        <li>
                            <strong>Lead Generation:</strong> We help people sign up, show interest, or request more information about your business.
                        </li>
                        <li>
                            <strong>E-Commerce Sales:</strong> We create ads that encourage people to buy your products directly from social platforms.
                        </li>
                        <li>
                            <strong>Brand Awareness:</strong> We make sure more people see your business, remember it, and recognize your brand.
                        </li>
                    </ul>
                    <p className={styles.note}>
                        We also use retargeting, which shows your ads to people who have already interacted with your brand. 
                        This keeps your brand on top of mind and increases the chances they buy.
                    </p>
                </div>

                {/* Right Side Image */}
                <div className={styles.right}>
                    <img src="/images/SMM/social-adv.jpg" alt="Advertising" />
                </div>
            </div>
        </div>
    )
}
