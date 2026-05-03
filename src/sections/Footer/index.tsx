import styles from "./index.module.css";

export const Footer = () => {
    return (
        <footer className={styles.footerWrapper} >
            <p className={styles.footerText} >
                © 2026 Светлана | Тюмень. Все права защищены.
            </p>
        </footer>
    );
};
