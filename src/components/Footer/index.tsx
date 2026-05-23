import styles from './index.module.css';
import { Logo } from '../Logo';

export default function Footer() {
    const year = new Date().getFullYear();

    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.brand}>
                    <Logo />
                    <p className={styles.copyright}>© {year} Beautifier Web-Studio. Все права защищены.</p>
                </div>

                <div className={styles.links}>
                    <a href="#services" className={styles.link}>Услуги</a>
                    <a href="#interactive" className={styles.link}>Интерактив</a>
                    <a href="#contact" className={styles.link}>Контакты</a>
                </div>
            </div>
        </footer>
    );
}