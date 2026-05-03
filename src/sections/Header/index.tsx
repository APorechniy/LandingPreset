import styles from "./index.module.css";

export const Header = () => {
    return (
        <header className={styles.headerWrapper} >
            <div className={styles.headerContainer} >
                <span className={styles.logoText} >
                    <span  >
                        Светлана
                    </span>
                    <span className={styles.logoDot} >
                        .
                    </span>
                </span>
                <nav className={styles.navContainer} >
                    <a className={styles.navLink} href='#services' >
                        Услуги
                    </a>
                    <a className={styles.navLink} href='#portfolio' >
                        Портфолио
                    </a>
                    <a className={styles.navLink} href='#reviews' >
                        Отзывы
                    </a>
                    <a className={styles.navLink} href='#contact' >
                        Контакты
                    </a>
                </nav>
                <a className={styles.headerButton} href='#contact' >
                    Записаться
                </a>
            </div>
        </header>
    );
};
