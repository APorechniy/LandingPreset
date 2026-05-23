'use client';

import { useState, useRef, useEffect } from 'react';
import styles from './index.module.css';

export default function BeforeAfter() {
    const [position, setPosition] = useState(50);
    const [isDragging, setIsDragging] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);

    const handleMove = (clientX: number) => {
        if (!containerRef.current) return;
        const rect = containerRef.current.getBoundingClientRect();
        const x = clientX - rect.left;
        let newPosition = (x / rect.width) * 100;
        if (newPosition < 0) newPosition = 0;
        if (newPosition > 100) newPosition = 100;
        setPosition(newPosition);
    };

    const handleTouchMove = (e: TouchEvent) => {
        if (!isDragging) return;
        handleMove(e.touches[0].clientX);
    };

    const handleMouseMove = (e: MouseEvent) => {
        if (!isDragging) return;
        handleMove(e.clientX);
    };

    useEffect(() => {
        const handleMouseUp = () => setIsDragging(false);

        if (isDragging) {
            window.addEventListener('mousemove', handleMouseMove);
            window.addEventListener('mouseup', handleMouseUp);
            window.addEventListener('touchmove', handleTouchMove);
            window.addEventListener('touchend', handleMouseUp);
        }

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('mouseup', handleMouseUp);
            window.removeEventListener('touchmove', handleTouchMove);
            window.removeEventListener('touchend', handleMouseUp);
        };
    }, [isDragging]);

    return (
        <section id="interactive" className={styles.section}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <h2 className={styles.title}>Почувствуйте разницу визуального преображения</h2>
                    <p className={styles.subtitle}>Перемещайте ползунок влево и вправо для сравнения типичного черно-белого макета и дизайна, сгенерированного Beautifier.</p>
                </div>

                <div
                    ref={containerRef}
                    className={styles.sliderContainer}
                    onMouseDown={() => setIsDragging(true)}
                    onTouchStart={() => setIsDragging(true)}
                >
                    {/* Слой "ДО" (Старый серый прототип) */}
                    <div className={`${styles.slide} ${styles.beforeSlide}`}>
                        <div className={styles.mockupContent}>
                            <div className={styles.mockupHeader}></div>
                            <div className={styles.mockupHeroPlaceholder}>
                                <div className={styles.mockupBox}>Прототип</div>
                                <div className={styles.mockupTextLine}></div>
                                <div className={styles.mockupTextLineShort}></div>
                            </div>
                        </div>
                        <span className={`${styles.label} ${styles.labelBefore}`}>Обычный прототип</span>
                    </div>

                    {/* Слой "ПОСЛЕ" (Эстетичный современный дизайн с использованием clipPath) */}
                    <div
                        className={`${styles.slide} ${styles.afterSlide}`}
                        style={{ clipPath: `polygon(0 0, ${position}% 0, ${position}% 100%, 0 100%)` }}
                    >
                        <div className={styles.mockupContentActive}>
                            <div className={styles.mockupHeaderActive}>
                                <div className={styles.activeLogo}>✨ Beautifier AI</div>
                            </div>
                            <div className={styles.mockupHeroActive}>
                                <h4 className={styles.activeHeading}>Искусство создавать интерфейсы</h4>
                                <p className={styles.activeText}>Мы объединяем передовые генеративные сети с продуманной структурой.</p>
                                <div className={styles.activeButton}>Начать сейчас</div>
                            </div>
                        </div>
                        <span className={`${styles.label} ${styles.labelAfter}`}>Beautifier AI</span>
                    </div>

                    {/* Ползунок разделения */}
                    <div
                        className={styles.handle}
                        style={{ left: `${position}%` }}
                    >
                        <div className={styles.handleButton}>
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                                <path d="M8 7l-5 5 5 5M16 7l5 5-5 5" />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}