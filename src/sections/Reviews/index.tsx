import styles from "./index.module.css";

export const Reviews = () => {
    return (
        <section className={styles.reviewsSection} id='reviews' >
            <div className={styles.reviewsBgGlow1} >
            </div>
            <div className={styles.reviewsBgGlow2} >
            </div>
            <div className={styles.reviewsGeometry1} >
            </div>
            <div className={styles.reviewsGeometry2} >
            </div>
            <div className={styles.reviewsContainer} >
                <h2 className={styles.reviewsTitle} >
                    Отзывы
                </h2>
                <div className={styles.reviewCard1} >
                    <div className={styles.reviewQuote} >
                        "
                    </div>
                    <p className={styles.reviewText} >
                        «Сайт разработали быстро и качественно. Заявки пошли с первого месяца. Отличная команда, рекомендую.»
                    </p>
                    <div className={styles.reviewAuthor} >
                        Алексей Смирнов
                    </div>
                    <div className={styles.reviewCompany} >
                        Медицинский центр
                    </div>
                    <div className={styles.reviewStars} >
                        ★★★★★
                    </div>
                </div>
                <div className={styles.reviewCard2} >
                    <div className={styles.reviewQuote} >
                        "
                    </div>
                    <p className={styles.reviewText} >
                        «Профессиональный подход к SEO. Вышли в ТОП-3 по сложным запросам всего за 2 месяца. Спасибо!»
                    </p>
                    <div className={styles.reviewAuthor} >
                        Мария Волкова
                    </div>
                    <div className={styles.reviewCompany} >
                        Руководитель маркетинга
                    </div>
                    <div className={styles.reviewStars} >
                        ★★★★★
                    </div>
                </div>
                <div className={styles.reviewCard3} >
                    <div className={styles.reviewQuote} >
                        "
                    </div>
                    <p className={styles.reviewText} >
                        «Крутая студия! Сделали редизайн, конверсия выросла на 170%. Обязательно вернусь к вам снова.»
                    </p>
                    <div className={styles.reviewAuthor} >
                        Дмитрий Орлов
                    </div>
                    <div className={styles.reviewCompany} >
                        Владелец MODA
                    </div>
                    <div className={styles.reviewStars} >
                        ★★★★★
                    </div>
                </div>
                <div className={styles.reviewCard4} >
                    <div className={styles.reviewQuote} >
                        "
                    </div>
                    <p className={styles.reviewText} >
                        «Реклама настроена идеально. Окупили вложения в первую неделю. Лучшие ребята на рынке.»
                    </p>
                    <div className={styles.reviewAuthor} >
                        Екатерина Мороз
                    </div>
                    <div className={styles.reviewCompany} >
                        Студия красоты
                    </div>
                    <div className={styles.reviewStars} >
                        ★★★★★
                    </div>
                </div>
                <div className={styles.reviewCard5} >
                    <div className={styles.reviewQuote} >
                        "
                    </div>
                    <p className={styles.reviewText} >
                        «Поддержка 24/7 — это реально. Ребята всегда на связи и помогают оперативно. Надежный партнер.»
                    </p>
                    <div className={styles.reviewAuthor} >
                        Иван Громов
                    </div>
                    <div className={styles.reviewCompany} >
                        IT-директор
                    </div>
                    <div className={styles.reviewStars} >
                        ★★★★★
                    </div>
                </div>
            </div>
        </section>
    );
};
