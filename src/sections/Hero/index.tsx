import styles from "./index.module.css";

export const Hero = () => {
    return (
        <section className={styles.heroSection} id='hero' >
            <div className={styles.heroContainer} >
                <div className={styles.heroGrid} >
                    <div className={styles.heroContent} >
                        <p className={styles.heroEyebrow} >
                            Фотограф в Тюмени
                        </p>
                        <h1 className={styles.heroTitle} >
                            <span  >
                                Светлана
                            </span>
                        </h1>
                        <p className={styles.heroDescription} >
                            Создаю искренние кадры, в которых отражается ваша личность. Снимаю истории, эмоции и мгновения, которые хочется пересматривать.
                        </p>
                        <div className={styles.heroCta} >
                            <a className={styles.primaryButton} href='#contact' >
                                Записаться на съёмку
                            </a>
                            <a className={styles.secondaryButton} href='#portfolio' >
                                Смотреть портфолио
                            </a>
                        </div>
                        <div className={styles.heroStats} >
                            <div className={styles.statItem} >
                                <span className={styles.statValue} >
                                    7 лет
                                </span>
                                <span className={styles.statLabel} >
                                    Опыта
                                </span>
                            </div>
                            <div className={styles.statItem} >
                                <span className={styles.statValue} >
                                    300+
                                </span>
                                <span className={styles.statLabel} >
                                    Съёмок
                                </span>
                            </div>
                            <div className={styles.statItem} >
                                <span className={styles.statValue} >
                                    4.9
                                </span>
                                <span className={styles.statLabel} >
                                    Рейтинг
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className={styles.heroImage} >
                        <img className={styles.heroImg} src='https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Wide_Field_Imager_view_of_a_Milky_Way_look-alike_NGC_6744.jpg/1280px-Wide_Field_Imager_view_of_a_Milky_Way_look-alike_NGC_6744.jpg' alt='Светлана — фотограф' >
                        </img>
                    </div>
                </div>
            </div>
        </section>
    );
};
