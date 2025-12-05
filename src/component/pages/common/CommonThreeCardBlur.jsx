"use client";
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import styles from '@/style/common/commonThreeCardBlur.module.css'

export const CommonThreeCardBlur = ({heading, subheading, data, footer })=>{
    return(
        <div className={styles.frame}>
            {heading && <h2 className={styles.heading}>{heading}</h2>}
            {/* {subheading && <p className={styles.subHeading}>{subheading}</p>} */}
            {subheading && <p className={styles.subHeading} dangerouslySetInnerHTML={{ __html: subheading }}></p>}

            {/* Desktop Grid View */}
            <div className={styles.cards}>
                {data.map((item, idx)=>(
                    <div key={idx} className={styles.card} style={{'--bg':`url(${item.bg})`}}>
                        {item.logo && <img src={item.logo} alt={item.title} className={styles.logo}/>}
                        <h3>{item.title}</h3>
                        <p>{item.description}</p>
                    </div>
                ))}
            </div>

            {/* Mobile Swiper View */}
            <div className={styles.swiperWrapper}>
                <Swiper
                    modules={[Pagination]}
                    spaceBetween={20}
                    slidesPerView={1}
                    pagination={{
                        clickable: true,
                        dynamicBullets: false,
                    }}
                    breakpoints={{
                        320: {
                            slidesPerView: 1,
                            pagination: {
                                enabled: true,
                            },
                        },
                        768: {
                            slidesPerView: 1,
                            pagination: {
                                enabled: true,
                            },
                        },
                    }}
                    className={styles.swiperContainer}
                >
                    {data.map((item, idx) => (
                        <SwiperSlide key={idx}>
                            <div className={`${styles.card} ${styles.cardMobile}`} style={{'--bg':`url(${item.bg})`}}>
                                {item.logo && <img src={item.logo} alt={item.title} className={styles.logo}/>}
                                <h3>{item.title}</h3>
                                <p>{item.description}</p>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>

            <p
              className={styles.footer}
              dangerouslySetInnerHTML={{ __html: String(footer || "") }}
            ></p>
        </div>
    )
}
