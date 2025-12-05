'use client'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import styles from '@/style/common/commonBigIndex.module.css'

export const CommonBigIndex = ({ heading, description, data, footer, caseLabel = null, paddingBottom }) => {
  return (
    <div
      className={styles.frame} 
      style={{ paddingBottom: typeof paddingBottom !== "undefined" ? paddingBottom : undefined }}  
    >
      <h1 className={`${styles.heading} ${styles.center}`} dangerouslySetInnerHTML={{__html:heading}} />
      <p className={styles.center}>
        {description && description}
      </p> 

      {/* Desktop Grid View */}
      <div className={styles.caseWrapper}>
        {data.map((item, index) => (
          <div
            key={index}
            className={`${styles.caseBox} ${styles[`case${(index % 3) + 1}`]}`}
          >
            {(item.label || caseLabel) && <h3 className={styles.label}>{item.label || caseLabel}</h3>}
            {item.image && (
            <img
              className={styles.imageId}
                src={item.image || `/images/case-${index+1}.png`}
                alt={item.title || "image"}
            />
            )}
            <h3 className={styles.caseTitle}>{item.title}</h3>
            {item.description ? (
              <p className={styles.caseDesc} dangerouslySetInnerHTML={{__html: item.description}}></p>
            ) : null}
            {item.cardSubSections && item.cardSubSections.length > 0 ? (
              <div>
                {item.cardSubSections.map((subSection, subIndex) => (
                  <div key={subIndex}>
                    {subSection.cardSubTitle && (
                      <p className={styles.cardSubTitle}>{subSection.cardSubTitle}</p>
                    )}
                    {subSection.cardSubDesc && (
                      <p className={styles.cardSubDesc}>{subSection.cardSubDesc}</p>
                    )}
                  </div>
                ))}
              </div>
            ) : null}
            {item.points && <ul>
              {item.points.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>}
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
          {data.map((item, index) => (
            <SwiperSlide key={index}>
              <div className={`${styles.caseBox} ${styles.caseBoxMobile} ${styles[`case${(index % 3) + 1}`]}`}>
                {(item.label || caseLabel) && <h3 className={styles.label}>{item.label || caseLabel}</h3>}
                {item.image && (
                  <img
                    className={styles.imageId}
                    src={item.image || `/images/case-${index+1}.png`}
                    alt={item.title || "image"}
                  />
                )}
                <h3 className={styles.caseTitle}>{item.title}</h3>
                {item.description ? (
                  <p className={styles.caseDesc} dangerouslySetInnerHTML={{__html: item.description}}></p>
                ) : null}
                {item.cardSubSections && item.cardSubSections.length > 0 ? (
                  <div>
                    {item.cardSubSections.map((subSection, subIndex) => (
                      <div key={subIndex}>
                        {subSection.cardSubTitle && (
                          <p className={styles.cardSubTitle}>{subSection.cardSubTitle}</p>
                        )}
                        {subSection.cardSubDesc && (
                          <p className={styles.cardSubDesc}>{subSection.cardSubDesc}</p>
                        )}
                      </div>
                    ))}
                  </div>
                ) : null}
                {item.points && <ul>
                  {item.points.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {footer && <p className={`${styles.center} ${styles.footer}`}>
        {footer}
      </p>}
    </div>
  )
}
