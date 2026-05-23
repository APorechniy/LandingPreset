import React from 'react';
import styles from './index.module.css';

const items = [
    {
        title: 'AI Анализ Конкурентов',
        description: 'Нейросеть мгновенно сканирует вашу нишу, выявляя сильные и слабые стороны конкурентов для построения идеального пути пользователя (CJM).',
        iconPath: 'M12 20h9M3 20h9M12 4V2M12 14v-2M12 8V6'
    },
    {
        title: 'Генеративный UX/UI дизайн',
        description: 'Мы создаем адаптивные сетки и стилистические концепции, обучаясь на лучших дизайн-системах интернета. Исключаем типовые ошибки интерфейсов.',
        iconPath: 'M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z'
    },
    {
        title: 'Интеллектуальный Редизайн',
        description: 'Превращаем ваш текущий устаревший веб-ресурс в стильный современный продукт, сохраняя весь важный функционал и повышая доверие аудитории.',
        iconPath: 'M4 4v5h.582m15.356 2A8.001 8.001 0 1121.21 8H17'
    }
];

export default function Services() {
    return (
        <section id="services" className={styles.services}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <h2 className={styles.sectionTitle}>Технологичный стек для безупречного UI</h2>
                    <p className={styles.sectionSubtitle}>Интегрируем генеративные технологии на каждом этапе, гарантируя максимальную скорость и высочайший уровень качества.</p>
                </div>

                <div className={styles.grid}>
                    {items.map((item, idx) => (
                        <article key={idx} className={styles.card}>
                            <div className={styles.iconWrapper}>
                                <svg className={styles.icon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path strokeLinecap="round" strokeLinejoin="round" d={item.iconPath} />
                                </svg>
                            </div>
                            <h3 className={styles.cardTitle}>{item.title}</h3>
                            <p className={styles.cardDescription}>{item.description}</p>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}