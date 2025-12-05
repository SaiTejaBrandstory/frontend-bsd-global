import CommonStatsSection from '../common/CommonStats';

export const EcomMainstreme =()=>{
    return(
        <CommonStatsSection
      title="Sustainable<br/> eCommerce SEO<br/>Becomes Mainstream"
    //   subtitle="Our Full Stack Development Services Bring It All Under One Roof –<br />Strategy, Design, Frontend, Backend, And Everything In Between."
      description={[
        "Today, Almost Every Shopping Journey Starts Online. In Fact, Over 63% Of Purchase Decisions Begin With A Search. If Your Store Isn't Showing Up At The Top, Your Customer Is Buying From Someone Else.",
        "That's Where Our Ecommerce SEO Services Make A Difference. It Helps Your Online Store Appear When Customers Search For What You Sell. From Optimizing Your Product Pages To Improving Your Site Structure, SEO Brings Long-Term Value.",
        "SEO Helps You Attract And Keep Organic Traffic Over Time. With Better Rankings, You Bring In More Potential Customers, Reduce Bounce Rates, And Grow Higher Conversion Rates."
      ]}
      stats={[
        { value: "1,200+", label: "<b>Ecommerce stores optimized</b><br/>across Shopify, Magento, WooCommerce & more" },
        { value: "350M+", label: "<b>Organic visitors driven</b><br/>to online stores globally" },
        { value: "$900M+", label: "<b>In sales influenced</b><br/>through SEO-led growth strategies" },
      ]}
      />
    )
}