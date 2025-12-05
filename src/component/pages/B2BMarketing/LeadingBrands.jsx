import styles from '@/style/marketingAutomation.module.css'

export const LeadingBrands = () => {
    return (
        <div className={`${styles.frame} py-30`}>
            <h2 className="pb-10">Why Leading Brands Partner with BrandStory for B2B Marketing</h2>
            <p>
                Brands Trust Us Because We Help Them Grow In Ways They Can See. Our Clients Like Working With Us For Many Reasons:
            </p> <br />
            <ul>
                <li>We Have A Lot Of Experience Working With Different B2B Industries. We Know What Works For Each Type Of Business.</li>
                <li>We Create Strategies That Cover The Whole Sales Process. Everything We Do Is Aimed At Helping You Make More Revenue.</li>
                <li>We Share Clear Reports So You Can See The Results. You Know Exactly What Your Investment Is Achieving.</li>
                <li>We Treat Our Clients As Partners. We Give Ongoing Support And Work With You Every Step Of The Way.</li>
            </ul>
            <br />
            <p>
                <span className='highlited-text'>With BrandStory, Your Marketing Is A Strategic Partnership That Delivers Tangible Business Results.</span>
            </p>
        </div>
    )
}