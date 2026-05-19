import { Logo } from "@/components/Logo";
import styles from "./index.module.css";

export const Header = () => {
    return (
        <header className={styles.header} >
            <div className={styles.headerContainer} >
                <a className={styles.logo} href='#hero' >
                    <Logo />
                </a>
                <nav className={styles.nav} >
                    <a className={styles.navLink} href='#steps' >
                        Процесс
                    </a>
                    <a className={styles.navLink} href='#cases' >
                        Проекты
                    </a>
                    <a className={styles.navLink} href='#reviews' >
                        Отзывы
                    </a>
                </nav>
                <a className={styles.ctaButtonHeader} href='#booking' >
                    Обсудить
                </a>
            </div>
        </header>
    );
};
