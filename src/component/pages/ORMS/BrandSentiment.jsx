import styles from '@/style/marketingAutomation.module.css'

export const BrandSentiment = () => {
    return (
        <div className={`${styles.frame} py-30`}>
            <h2 className='pb-10'>Data-Drive Analysis of Brand Sentiment</h2>
            <p>
                Every Brand Has A History, But How Customers View It Actually Matters. BrandStory Uses Advanced Sentiment Analysis To Examine Real Conversations About Your Brand.
            </p> <br />
            <p>
                Tools Like Brandwatch, Google Alerts, And Social Mention To Track Mentions, Reviews, And Conversations In Real Time. This Tells Us If The Conversation About Your Brand Is Neutral, Negative Or Positive.
            </p><br />
            <p>
                The Value? We Spot Early Signs Of Negative Feedback Before It Becomes A Bigger Problem And Highlight Positive Comments That Can Be Shared. This Helps You Create Smarter Campaigns, Earn Customer Trust, And Keep Your Brand’s Image In Control.
            </p><br />
            <p>
                <span className='highlited-text'>With The Right Information, Your Brand Is Actively Safeguarded And Positioned For Sustained Credibility.</span>
            </p>
        </div>
    )
}