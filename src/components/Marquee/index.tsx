import React from 'react';
import styles from './index.module.css';

const items = [
    'NEURAL UI/UX DESIGN',
    'NEXT.JS 15 SPEED',
    'GENERATIVE LANDINGS',
    'SEMANTIC MARKUP',
    'CONVERSION OPTIMIZATION',
    'AI AUDIT',
    'BEAUTIFIER ENGINE',
    'RESPONSIVE INTERFACES',
    'SEO MAXIMIZER',
    'WEB DESIGN ART'
];

export default function Marquee() {
    return (
        <div className={styles.marqueeContainer} aria-hidden="true">
            {/* Боковые полупрозрачные маски для красивого затухания текста по краям */}
            <div className={styles.overlayLeft}></div>
            <div className={styles.overlayRight}></div>

            <div className={styles.track}>
                {/* Первая лента элементов */}
                <div className={styles.list}>
                    {items.map((item, idx) => (
                        <React.Fragment key={`first-${idx}`}>
                            <span className={styles.item}>{item}</span>
                            <span className={styles.separator}>✦</span>
                        </React.Fragment>
                    ))}
                </div>

                {/* Вторая дублирующая лента для бесшовного зацикливания */}
                <div className={styles.list}>
                    {items.map((item, idx) => (
                        <React.Fragment key={`second-${idx}`}>
                            <span className={styles.item}>{item}</span>
                            <span className={styles.separator}>✦</span>
                        </React.Fragment>
                    ))}
                </div>
            </div>
        </div>
    );
}