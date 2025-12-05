import CommonTwoCard from '../common/CommonTwoCard'

export const SeoServices =()=>{
    const data = {
    heading: "eCommerce SEO Services for All Business Types",
    subheading: "", 
    cards: [
            {
              title: "DTC Brands (Direct-To-Consumer)",
              description:
                "If You Sell Directly To Customers, Your Website Is Your Main Shop. We Help You Bring In New Visitors, Keep Old Ones Coming Back, and Make Product Pages Work Better. From Smart Keyword Use To Smooth Navigation, We Make It Easier For People To Find And Buy From You.",
            },
            {
              title: "Marketplace Sellers (Amazon, Flipkart, Etc.)",
              description:
                "Selling On Big Platforms Means Tough Competition. We Help Your Products Stand Out With Strong Titles, Keyword-Rich Descriptions, And Optimized Listings So Buyers Notice You First.",
            },
            {
              title: "B2B eCommerce Companies",
              description:
                "Business Buyers Need Clear Details, Specs, And Easy Navigation. We Make Sure Your Brand Shows Up For The Right Searches, Build Trust With Strong Content, And Turn Your Site Into A Lead Machine.",
            },
            {
              title: "Subscription-Based eCommerce",
              description:
                "With Subscriptions, It’s About Keeping Customers, Not Just Getting Them. We Help You Rank For The Right Terms, Create Helpful Content, And Optimize Funnels To Boost Sign-Ups And Renewals.",
            }
        ],
    };
    
    return (
        <>
            <CommonTwoCard {...data}/>
        </>
    )
}