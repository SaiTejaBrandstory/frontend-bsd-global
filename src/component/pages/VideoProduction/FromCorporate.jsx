import styles from '@/style/marketingAutomation.module.css'

export const FromCorporate = () => {
    return (
        <div className={`${styles.frame} py-30`}>
            {/* The main heading and introductory paragraph from the image content */}
            <h2 className='pb-10'>From Corporate to Social: Our Extensive Video Production Services</h2>
            <p>
                From Corporate Storytelling To Viral Social Clips, Our Expertise In Video Production Ensures Every Frame Reflects Your Brand's Values, Vision, And Impact.
            </p><br/>
            {/* Using an unordered list to present the service details as bullet points */}
            <ul>
                <li>
                    Our Corporate Video Production Services Give Your Business A Voice That Reflects Professionalism, Trust, And Purpose, Turning Ideas Into Polished Brand Stories.
                </li><br/>
                <li>
                    Through Explainer Video Production, We Simplify Complex Concepts With Engaging Visuals, Ideal For Product Demos, Onboarding, Or Training.
                </li><br/>
                <li>
                    With Creative Animation Video Production, We Bring Your Message To Life Using 2D/3D Animation, Kinetic Typography, And Logo Motion For High Recall.
                </li><br/>
                <li>
                    Our Event Video Production Captures Conferences, Launches, And Key Moments Through Cinematic Multi-camera Setups And Highlight Reels.
                </li><br/>
                <li>
                    For Modern Brands, Our Social Media Video Production Delivers Short, Impactful Reels, TikToks, And Promos Crafted For Instant Engagement Across Platforms.
                </li>
            </ul>
        </div>
    )
}