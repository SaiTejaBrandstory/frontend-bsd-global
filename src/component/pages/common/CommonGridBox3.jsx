"use client";
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import styles from "@/style/common/commonGridBox3.module.css"

const CommonGridBox3 = ({ title, description, data, footer }) => {
  return (
    <section className={styles.seoSection}>
      <div className={styles.header}>
        <h2 dangerouslySetInnerHTML={{__html:title}} />
        <p className={styles.footer}>{description}</p>
      </div>
 
      {/* Desktop Grid View */}
      <div className={styles.grid}>
        {data?.map((card, index) => (
          <div key={index} className={`${styles.card}`} style={{ '--card-color': card.bgcolor }}>
            {card.logo && <img src={card.logo || "/placeholder.svg"} alt={card.title} className={styles.cardLogo} />}
            <h4>{card.title}</h4>
            <p>{card.description}</p>
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
          {data?.map((card, index) => (
            <SwiperSlide key={index}>
              <div className={`${styles.card} ${styles.cardMobile}`} style={{ '--card-color': card.bgcolor }}>
                {card.logo && <img src={card.logo || "/placeholder.svg"} alt={card.title} className={styles.cardLogo} />}
                <h4>{card.title}</h4>
                <p>{card.description}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <br />
      {footer &&<p className={styles.footer}>{footer}</p>}
    </section>
  )
}

export default CommonGridBox3
