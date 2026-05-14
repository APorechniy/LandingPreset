import styles from "./index.module.css";

export const Cases = () => {
    return (
        <section className={styles.casesSection} id='cases' >
            <div className={styles.casesContainer} >
                <h2 className={styles.casesTitle} >
                    Проекты
                </h2>
                <div className={styles.casesGrid} >
                    <div className={styles.caseCard} >
                        <div className={styles.caseImageWrapper} >
                            <img className={styles.caseImage} src='fine-art.png' alt='Фото-студия' >
                            </img>
                        </div>
                        <div className={styles.caseContent} >
                            <div className={styles.caseTitle} >
                                Фото-студия
                            </div>
                            <div className={styles.caseSubtitle} >
                                Разработка + SEO
                            </div>
                            <div className={styles.caseStats} >
                                Заявок +240%
                            </div>
                        </div>
                    </div>
                    <div className={styles.caseCard} >
                        <div className={styles.caseImageWrapper} >
                            <img className={styles.caseImage} src='salon.png' alt='Салон красоты' >
                            </img>
                        </div>
                        <div className={styles.caseContent} >
                            <div className={styles.caseTitle} >
                                Салон красоты
                            </div>
                            <div className={styles.caseSubtitle} >
                                Разработка + SEO + Таргетинг
                            </div>
                            <div className={styles.caseStats} >
                                Продажи +180%
                            </div>
                        </div>
                    </div>
                    <div className={styles.caseCard} >
                        <div className={styles.caseImageWrapper} >
                            <img className={styles.caseImage} src='photograph.png' alt='Частный фотограф' >
                            </img>
                        </div>
                        <div className={styles.caseContent} >
                            <div className={styles.caseTitle} >
                                Частный фотограф
                            </div>
                            <div className={styles.caseSubtitle} >
                                Маркетинг
                            </div>
                            <div className={styles.caseStats} >
                                Конверсия +160%
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
