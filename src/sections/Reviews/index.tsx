import styles from "./index.module.css";

export const Reviews = () => {
    return (
        <section className={styles.reviewsSection} id='reviews' >
            <div className={styles.reviewsContainer} >
                <div className={styles.sectionHeader} >
                    <p className={styles.sectionEyebrow} >
                        Тёплые слова
                    </p>
                    <h2 className={styles.sectionTitle} >
                        Отзывы клиентов
                    </h2>
                </div>
                <div className={styles.reviewsGrid} >
                    <div className={styles.reviewCard} >
                        <p className={styles.reviewStars} >
                            ★★★★★
                        </p>
                        <p className={styles.reviewText} >
                            Светлана — потрясающий фотограф! Снимала нашу свадьбу и смогла передать абсолютно все эмоции того дня. Кадры живые, искренние, без постановочной фальши. Пересматриваем до сих пор со слезами счастья!
                        </p>
                        <div className={styles.reviewAuthor} >
                            <div className={styles.reviewAvatar} >
                                Е
                            </div>
                            <span className={styles.reviewName} >
                                Екатерина и Дмитрий
                            </span>
                        </div>
                    </div>
                    <div className={styles.reviewCard} >
                        <p className={styles.reviewStars} >
                            ★★★★★
                        </p>
                        <p className={styles.reviewText} >
                            Заказывали семейную съёмку с двумя детьми (3 и 7 лет). Светлана нашла подход к малышам за пять минут! Фотографии получились тёплыми и естественными. Это именно то, что мы хотели.
                        </p>
                        <div className={styles.reviewAuthor} >
                            <div className={styles.reviewAvatar} >
                                А
                            </div>
                            <span className={styles.reviewName} >
                                Алексей и Мария
                            </span>
                        </div>
                    </div>
                    <div className={styles.reviewCard} >
                        <p className={styles.reviewStars} >
                            ★★★★★
                        </p>
                        <p className={styles.reviewText} >
                            Хотела индивидуальную съёмку для обновления портфолио. Светлана помогла с подбором локации, образа и поз. Итог превзошёл ожидания — фото как из глянцевого журнала, а процесс был супер-комфортным.
                        </p>
                        <div className={styles.reviewAuthor} >
                            <div className={styles.reviewAvatar} >
                                О
                            </div>
                            <span className={styles.reviewName} >
                                Ольга В.
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
