'use client'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import styles from '@/style/common/commonWhiteRedCard.module.css'

export const CommonWhiteRedCard = ({ title, cards, footer }) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState(0) // 1 = next, -1 = prev

  const cardsPerView = 2
  const totalCards = cards?.length || 0
  const maxIndex = Math.max(0, totalCards - cardsPerView)

  const handlePrev = () => {
    if (currentIndex === 0) return
    setDirection(-1)
    setCurrentIndex(prev => Math.max(0, prev - cardsPerView))
  }

  const handleNext = () => {
    if (currentIndex >= maxIndex) return
    setDirection(1)
    setCurrentIndex(prev => {
      const nextIndex = prev + cardsPerView
      return nextIndex >= totalCards ? maxIndex : Math.min(maxIndex, nextIndex)
    })
  }

  const visibleCards = cards?.slice(currentIndex, currentIndex + cardsPerView) || []

  // Animation variants for sliding direction
  const variants = {
    enter: (direction) => ({
      x: direction > 0 ? 100 : -100,
      opacity: 0,
      scale: 0.98
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: { duration: 0.4, ease: 'easeOut' }
    },
    exit: (direction) => ({
      x: direction > 0 ? -100 : 100,
      opacity: 0,
      scale: 0.98,
      transition: { duration: 0.3 }
    })
  }

  return (
    <>
      <div
        className={styles.container}
        style={{ paddingBottom: totalCards > 2 ? '60px' : '80px' }}
      >
        {title && <h2 className={styles.title}>{title}</h2>}

        {/* Desktop View with Framer Motion */}
        <div className={styles.desktopView}>
        <div className={styles.cardsContainer}>
          <div className={styles.redBg}></div>

          <div className={styles.cardsWrapper}>
            <AnimatePresence mode="popLayout" custom={direction}>
              <motion.div
                key={currentIndex}
                className={styles.cardsMotionWrapper}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
              >
                {visibleCards.map((card, index) => (
                  <div key={currentIndex + index} className={styles.card}>
                    <div className={styles.cardHeader}>
                      <h3 className={styles.name}>{card.name}</h3>
                      <p className={styles.role}>{card.role}</p>
                    </div>
                    <div className={styles.divider}></div>
                    <p className={styles.testimonial}>{card.testimonial}</p>
                  </div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

      {totalCards > 2 && (
        <div className={styles.navigation} style={{ paddingBottom: '60px' }}>
          <button
            onClick={handlePrev}
            disabled={currentIndex === 0}
            className={styles.prevBtn}
          >
            {/* SVG for Left */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 74 74"
              width={74}
              height={74}
            >
              <style
                dangerouslySetInnerHTML={{
                  __html:
                    '.s0 { fill: none; stroke: #e73d26 } .s1 { fill: #e73d26 }',
                }}
              />
              <g>
                <path
                  fillRule="evenodd"
                  className="s0"
                  d="m37 62.5c-16.31 0-29.5-13.19-29.5-29.5 0-16.31 13.19-29.5 29.5-29.5 16.31 0 29.5 13.19 29.5 29.5 0 16.31-13.19 29.5-29.5 29.5z"
                />
              </g>
              <path
                className="s1"
                d="m39.22 40.25q0.19-0.21 0.28-0.48 0.09-0.27 0.07-0.55-0.02-0.28-0.14-0.54-0.13-0.25-0.34-0.44l-5.9-5.16 5.16-5.9c0.25-0.28 0.37-0.65 0.35-1.03-0.03-0.38-0.2-0.73-0.48-0.98-0.29-0.25-0.66-0.37-1.04-0.35-0.37 0.03-0.73 0.2-0.97 0.49l-6.11 6.98q-0.19 0.21-0.28 0.48-0.09 0.27-0.07 0.55 0.02 0.28 0.14 0.54 0.13 0.25 0.34 0.44l6.98 6.1c0.58 0.51 1.49 0.45 2.01-0.15z"
              />
            </svg>
          </button>

          <button
            onClick={handleNext}
            disabled={currentIndex >= maxIndex}
            className={styles.nextBtn}
          >
            {/* SVG for Right */}
            <svg
              width="74"
              height="74"
              viewBox="0 0 74 74"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g filter="url(#filter0_d_1_877)">
                <circle
                  cx="37"
                  cy="33"
                  r="29.5"
                  stroke="#E73D26"
                  shapeRendering="crispEdges"
                />
              </g>
              <path
                d="M33.1568 25.4431C33.0244 25.5753 32.9193 25.7322 32.8476 25.9051C32.7759 26.0779 32.739 26.2631 32.739 26.4502C32.739 26.6373 32.7759 26.8226 32.8476 26.9954C32.9193 27.1682 33.0244 27.3252 33.1568 27.4574L38.6996 33.0002L33.1568 38.5431C32.8897 38.8102 32.7396 39.1725 32.7396 39.5502C32.7396 39.928 32.8897 40.2903 33.1568 40.5574C33.4239 40.8245 33.7862 40.9746 34.1639 40.9746C34.5417 40.9746 34.904 40.8245 35.1711 40.5574L41.7282 34.0002C41.8607 33.8681 41.9657 33.7111 42.0374 33.5383C42.1091 33.3655 42.146 33.1802 42.146 32.9931C42.146 32.806 42.1091 32.6207 42.0374 32.4479C41.9657 32.2751 41.8607 32.1181 41.7282 31.986L35.1711 25.4288C34.6282 24.886 33.7139 24.886 33.1568 25.4431Z"
                fill="#E73D26"
              />
              <defs>
                <filter
                  id="filter0_d_1_877"
                  x="0"
                  y="0"
                  width="74"
                  height="74"
                  filterUnits="userSpaceOnUse"
                  colorInterpolationFilters="sRGB"
                >
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset dy="4" />
                  <feGaussianBlur stdDeviation="3.5" />
                  <feComposite in2="hardAlpha" operator="out" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow_1_877"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_dropShadow_1_877"
                    result="shape"
                  />
                </filter>
              </defs>
            </svg>
          </button>
        </div>
      )}
        </div>

        {/* Mobile Swiper View */}
        <div className={styles.mobileView}>
          <div className={styles.cardsContainer}>
            <div className={styles.redBg}></div>
            <div className={styles.cardsWrapper}>
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
                    <div className={styles.card}>
                      <div className={styles.cardHeader}>
                        <h3 className={styles.name}>{card.name}</h3>
                        <p className={styles.role}>{card.role}</p>
                      </div>
                      <div className={styles.divider}></div>
                      <p className={styles.testimonial}>{card.testimonial}</p>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
      {footer && <div className='mx-auto max-w-[1000px] pb-10 text-center text-hero-lg' dangerouslySetInnerHTML={{__html:footer}} />}
    </>
  )
}
