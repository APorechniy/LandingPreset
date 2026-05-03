import styles from "./index.module.css";

export const Contact = () => {
    return (
        <section className={styles.contactSection} id='contact' >
            <div className={styles.contactContainer} >
                <p className={styles.sectionEyebrow} >
                    Связь
                </p>
                <h2 className={styles.sectionTitle} >
                    Контакты
                </h2>
                <div className={styles.contactCard} >
                    <div className={styles.contactRow} >
                        <span className={styles.contactIcon} >
                            📍
                        </span>
                        <span  >
                            г. Тюмень, выезд по городу и области
                        </span>
                    </div>
                    <div className={styles.contactRow} >
                        <span className={styles.contactIcon} >
                            📱
                        </span>
                        <span  >
                            +7 (999) 123-45-67
                        </span>
                    </div>
                    <div className={styles.contactRow} >
                        <span className={styles.contactIcon} >
                            ✉️
                        </span>
                        <span  >
                            hello@svetlana.ru
                        </span>
                    </div>
                    <div className={styles.socialRow} >
                        <a className={styles.socialLink} href='https://instagram.com' >
                            📸
                        </a>
                        <a className={styles.socialLink} href='https://t.me' >
                            💬
                        </a>
                        <a className={styles.socialLink} href='https://vk.com' >
                            📘
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};
