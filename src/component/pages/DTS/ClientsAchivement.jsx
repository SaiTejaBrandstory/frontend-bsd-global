import styles from '@/style/marketingAutomation.module.css'

export const ClientsAchivement = () => {
    return (
        <div className={`${styles.frame} py-30`}>   
            <h2 className='pb-10'>What Our Clients Achieved After Going Digital</h2>
            <p>
                From Enterprise Consulting Firms To Fast-Scaling Tech Brands, We’ve Helped Clients Unlock The Full Value Of Digital Across Marketing, Operations, And Customer Experience.
            </p> <br />
            <b style={{ fontSize: '24px' }}>
                Highlights Of Our Business Digital Transformation Services In Action:
            </b><br /><br/>
            <p>
                <b>Consulting Firm</b>
                <br />
                Achieved A 15% Increase In Organic Lead Generation Through UX Enhancements And Content-Driven SEO Transformation.
            </p><br />
            <p>
                <b>Pharmaceutical Brand</b>
                <br />
                Gained A 300% Boost In Organic Traffic In Under 7 Months Through End-To-End Digital Transformation Consulting.
            </p><br />
            <p>
                <b>Brandstory's SEO Ecosystem</b>
                <br />
                1M+ Keywords Tracked And Ranked, Consistently Contributing To Client Visibility And ROI.
            </p><br />
            <span className='highlited-text'  style={{ fontSize: '24px' }}>
                Every Project Is Backed By Data, Driven By Strategy, And Built For Scalable, Sustainable Growth — Which Is Why Leading CMOs, CTOs, And Business Heads Trust Brandstory As Their Digital Transformation Services Provider.
            </span>
        </div>
    )
}