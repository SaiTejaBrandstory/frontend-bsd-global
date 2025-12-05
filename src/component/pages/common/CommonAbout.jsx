import React from 'react'
import styles from '@/style/common/commonAbout.module.css'
import Image from 'next/image'

const CommonAbout = ({
    title = null,
    subtitle = null,
    text1 = null,
    points = [],
    text2 = null,
    imageSrc = null, // null if no image
    imageAlt = "",
}) => {
    return (
        <div className={styles.container}>
            {/* Text Section */}
            <div className={styles.textBox}>
                {title && <div dangerouslySetInnerHTML={{ __html: title }}></div>}
                {subtitle && <div dangerouslySetInnerHTML={{ __html: subtitle }}></div>}
            </div>

            <div className={styles.flexbox}>
                {/* Image Section */}
                {imageSrc && (
                    <div className={styles.imageBox}>
                        <Image
                            src={imageSrc}
                            alt={imageAlt || "Image"}
                            width={500}
                            height={400}
                            className={styles.image}
                        />
                    </div>
                )}

                {/* Points Section */}
                {(text1 || (points && points.length > 0) || text2) && (
                    <div className={styles.points}>
                        {text1 && <h4 dangerouslySetInnerHTML={{ __html: text1 }}></h4>}
                        {points && points.length > 0 && (
                            <ul>
                                {points.map((point, index) => (
                                    <li key={index} dangerouslySetInnerHTML={{__html:point}}></li>
                                ))}
                            </ul>
                        )}
                        {text2 && <h4 dangerouslySetInnerHTML={{__html: text2}}/>}
                    </div>
                )}
            </div>
        </div>
    )
}

export default CommonAbout
