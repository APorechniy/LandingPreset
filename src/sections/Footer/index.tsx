import { Logo } from "@/components/Logo";
import styles from "./index.module.css";

export const Footer = () => {
    return (
        <footer className={styles.footer} >
            <div className={styles.footerContainer} >
                <div className={styles.footerColumn} >
                    <Logo />
                    <div className={styles.footerContact} >
                        beautifier@mail.ru
                    </div>
                    <div className={styles.footerContact} >
                        +7 (919) 884-34-77
                    </div>
                </div>
                <div className={styles.footerColumn} >
                    <div className={styles.footerTitle} >
                        Навигация
                    </div>
                    <a className={styles.footerLink} href='#steps' >
                        Процесс
                    </a>
                    <a className={styles.footerLink} href='#cases' >
                        Проекты
                    </a>
                    <a className={styles.footerLink} href='#reviews' >
                        Отзывы
                    </a>
                </div>
                <div className={styles.footerColumn}>
                    <div className={styles.footerTitle} >
                        Контакты
                    </div>
                    <a className={styles.socialLink} href='https://t.me/repa_13' target='_blank' >
                        Telegram
                    </a>
                    <a className={styles.socialLink} href='mailto:beautifier@mail.ru'>
                        E-Mail
                    </a>
                </div>
            </div>
            <div className={styles.footerBottom} >
                © {new Date().getFullYear()} Beautifier
            </div>
        </footer>
    );
};
