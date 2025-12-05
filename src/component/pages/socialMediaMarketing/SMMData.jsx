import styles from '@/style/smm.module.css'

export const SMMData = () =>{
    return(
        <div className={styles.frame}>
            <h1 className={styles.heading}>
                Data-Driven Social Media Marketing Strategies
            </h1>
            <p className='py-3 font-light'>Instead of publishing frequently, publish with purpose if you want to succeed on social media. To build a real relationship with people, you must understand what draws their attention and inspires them to act.</p>
            <p className='py-3 font-light'>Real numbers are used to inform every step of our data-driven social media strategy. Every article and advertisement is examined to see how your audience responds, including what they like, share, click on, and scroll past. These insights help us make content that consistently performs better by directing our next course of action.</p>
            <p className='py-3 font-light'>Some of the tools we use include:</p>
            <ul className='py-3 font-light'>
              <li>
                <b>Meta Business Suite:</b> To Measure Performance On Facebook And Instagram
              </li>
              <li>
                <b>LinkedIn Campaign Manager:</b> To Track Engagement With Business Audiences
              </li>
              <li>
                <b>TikTok Ads Manager:</b> To Monitor Views, Clicks, And Interactions
              </li>
            </ul>
            <p  className="text-[#F15D22]">Using these numbers helps us decide the best time to post, the kind of ads to run, and how to spend your budget wisely. The goal is simple: every post and ad should bring results.</p>
        </div>
    )
}