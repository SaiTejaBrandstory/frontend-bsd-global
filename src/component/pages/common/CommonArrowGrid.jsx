'use client';
import styles from "@/style/common/commonArrowGrid.module.css";
import { useState, useEffect, useRef } from 'react';
import ArrowBoxDarkBorder from "@/component/pages/common/ArrowBoxDarkBorder";

const CommonArrowGrid = ({ boxes, heading, descripton }) => {
    return (
        <div className={styles.frame}>
            <div className={styles.header}>
                <h1 dangerouslySetInnerHTML={{__html: heading}} />
                <p dangerouslySetInnerHTML={{__html:descripton}}/>
            </div>

            <div className={styles.gridContainer}>
                {boxes.map((box, index) => (
                    <GridBox
                        key={index}
                        index={String(index + 1).padStart(2, '0')}
                        title={box.title}
                        description={box.description}
                        size={box.size || "md"}
                        height={box.height}
                    />
                ))}
            </div>
        </div>
    );
};

const GridBox = ({ index, title, description, size = "md", height=null }) => {
    const [isMobile, setIsMobile] = useState(false);
    const [boxSize, setBoxSize] = useState({ width: 0, height: 0 });
    const boxRef = useRef(null);

    // Detect mobile
    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth <= 768);
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    // Measure the box's actual rendered width/height
    useEffect(() => {
        if (!boxRef.current) return;

        const updateSize = () => {
            const rect = boxRef.current.getBoundingClientRect();
            setBoxSize({ width: rect.width, height: rect.height });
        };

        updateSize(); // Initial measure
        const resizeObserver = new ResizeObserver(updateSize);
        resizeObserver.observe(boxRef.current);

        window.addEventListener("resize", updateSize);
        
        return () => {
            resizeObserver.disconnect();
            window.removeEventListener("resize", updateSize);
        };
    }, []);

    const effectiveSize = isMobile ? 'sm' : size;

    return (
        <div
            ref={boxRef}
            className={`${styles.gridbox} ${styles[effectiveSize]}`}
            style={!isMobile && height ? { height: `${height}px` } : {}}
        >


            <div className={styles.indexNumber}>{index}</div>

            {/* Dynamically measured background */}
            {boxSize.width > 0 && boxSize.height > 0 && (
                <ArrowBoxDarkBorder
                    width={boxSize.width}
                    height={boxSize.height}
                    className={styles.boxBg}
                />
            )}

            <div className={styles.content}>
                <h3 className={styles.title}>{title}</h3>
                <p className={styles.description}>{description}</p>
            </div>

            <div className={styles.arrow}>
                <img src="images/arrow-right.png" alt="arrow" className={styles.arrowDark} />
                <img src="images/arrow-top-right.png" alt="arrow" className={styles.arrowLight} />
            </div>
        </div>
    );
};

export default CommonArrowGrid;
