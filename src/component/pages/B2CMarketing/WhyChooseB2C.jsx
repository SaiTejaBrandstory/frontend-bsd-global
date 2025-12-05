import styles from '@/style/marketingAutomation.module.css'

export const WhyChooseB2C = () => {
    return (
        <div className={`${styles.frame} py-30`}>
            {/* Updated H2 with the main heading */}
            <h2 className='pb-10'>Why Brands Choose BrandStory for B2C Marketing</h2>
            {/* Updated with the introductory paragraph */}
            <p>
                Since We Concentrate On Generating Tangible And Quantifiable Growth, Brands Have Faith In Us. To Create Campaigns That Have An Effect, Our B2C Marketing Specialists Combine Strategy, Creativity, And Consumer Psychology.
            </p> <br />
            {/* Updated with the first bullet point as a paragraph */}
            <p>
                <span className='highlited-text'>Knowledge Of Consumer Psychology And Innovative B2C Advertising:</span> We Use Our Understanding Of Buyer Motivation To Develop Emotionally Compelling Campaigns That Inspire Action.
            </p><br />
            {/* Updated with the second bullet point as a paragraph */}
            <p>
                <span className='highlited-text'>Experts In Brand Expansion And Cross-Platform Tactics:</span> We Create Cross-Channel Strategies To Expand Your Brand, From Influencer Marketing To Social Media To Email.
            </p><br />
            {/* Updated with the third bullet point as a paragraph */}
            <p>
                <span className='highlited-text'>ROI Tracking And Performance Evaluation:</span> Each Campaign Is Thoroughly Evaluated To Ensure That It Fulfills Objectives And Adds Value.
            </p><br />
            {/* Updated with the concluding sentence */}
            <p>
                <span className='highlited-text'>At BrandStory, We Focus On Results, Building Stronger Connections Between Brands And Consumers While Ensuring Long-Term Growth.</span>
            </p>
        </div>
    )
}