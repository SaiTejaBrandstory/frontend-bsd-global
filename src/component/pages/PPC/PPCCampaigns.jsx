import styles from '@/style/ppc.module.css'

export const PPCCampaigns = ()=>{
    return (
        <div className={styles.frame}>
            <h1 className={styles.heading}>Industry-Specific PPC Campaigns</h1>
            <p className={styles.subtext}>
                We Adapt Campaigns For Different Verticals:
            </p>
            <p className={styles.description}>
                Real Numbers Are Used To Inform Every Step Of Our Data-Driven Social Media Strategy. 
                Every Article And Advertisement Is Examined To See How Your Audience Responds, 
                Including What They Like, Share, Click On, And Scroll Past. These Insights Help Us 
                Make Content That Consistently Performs Better By Directing Our Next Course Of Action.
            </p>

            <p className={styles.subtext}>Some Of The Tools We Use Include:</p>
            <ul className={styles.list}>
                <li><strong>Ecommerce</strong> – Using Dynamic Remarketing And Product Feed Advertisements To Increase Sales And Reclaim Carts.</li>
                <li><strong>B2B</strong> – Using Search Engines And LinkedIn, Lead Generating Initiatives Are Used To Connect With Decision-Makers.</li>
                <li><strong>Local Services</strong> – Ads That Are Geotargeted To Clients In The Area To Boost Foot Traffic.</li>
                <li><strong>SaaS</strong> – Campaigns That Emphasize Onboarding New Customers, Free Trials, And Subscriptions.</li>
                <li><strong>Enterprise</strong> – Extensive Campaigns That Use Several Channels To Optimize Impact And Reach.</li>
            </ul>

            <p className={styles.highlight}>
                Our Approach Ensures Industry-Specific PPC Strategies That Deliver Measurable Growth.
            </p>
        </div>
    )
}
