import styles from '@/style/marketingAutomation.module.css'

export const BrandingTools = () => {
    return (
        <div className={`${styles.frame} py-30`}>
            <h2 className="pb-10">Our Suite of Branding Tools & Resources</h2>
            <p>
                We Use The Best Tools For Branding, Creativity, And Consistency:
            </p> <br />
            <ul>
                <li><strong>Adobe Creative Suite</strong> – For Powerful Designs.</li>
                <li><strong>Figma & Canva</strong> – For Fast, Collaborative Design Work.</li>
                <li><strong>Miro</strong> – For Planning And Strategy Mapping.</li>
                <li><strong>Brandwatch</strong> – To Monitor Brand Performance Across Channels.</li>
            </ul>
            <br />
            <p>
                <span className='highlited-text'>These Tools Help Bring Ideas To Life While Keeping Your Brand Integrity Intact.</span>
            </p>
        </div>
    )
}