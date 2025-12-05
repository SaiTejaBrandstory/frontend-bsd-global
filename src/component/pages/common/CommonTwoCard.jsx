"use client";
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import styles from "@/style/common/commonTwoCard.module.css";

const CommonTwoCard = ({ heading, subheading, highlight, cards, subheadingMaxWidth }) => {
  return (
    <section className={styles.seoSection}>
      <div className={styles.header}>
        <h2 dangerouslySetInnerHTML={{__html:heading}} />
        {subheading && <p style={{ maxWidth: subheadingMaxWidth || "1200px", margin: "0 auto 0.5rem" }} dangerouslySetInnerHTML={{__html:subheading}} />}
        {highlight && <p><b className="highlited-text">{highlight}</b></p>}
      </div> 

      {/* Desktop Grid View */}
      <div className={styles.grid}>
        {cards?.map((card, index) => (
          <div key={index} className={`${styles.card} ${index == 0 ? styles.local : ""}`}>
            <h4>{card.title}</h4>
            <div
              className={styles.description}
              dangerouslySetInnerHTML={{ __html: card.description }}
            />
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
          {cards?.map((card, index) => (
            <SwiperSlide key={index}>
              <div className={`${styles.card} ${styles.cardMobile} ${index == 0 ? styles.local : ""}`}>
                <h4>{card.title}</h4>
                <div
                  className={styles.description}
                  dangerouslySetInnerHTML={{ __html: card.description }}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default CommonTwoCard;
