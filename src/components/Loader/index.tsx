import styles from './index.module.css';

interface ButtonLoaderProps {
    size?: 'sm' | 'md' | 'lg';
    color?: 'primary' | 'cyan' | 'white';
}

export default function Loader({ size = 'md', color = 'primary' }: ButtonLoaderProps) {
    const sizeClass = styles[size] || styles.md;
    const colorClass = styles[color] || styles.primary;

    return (
        <div className={`${styles.loaderWrapper} ${sizeClass} ${colorClass}`} aria-hidden="true">
            {/* Внешнее кольцо (крутится по часовой стрелке) */}
            <span className={`${styles.ring} ${styles.outerRing}`}></span>

            {/* Внутреннее кольцо (крутится против часовой стрелки) */}
            <span className={`${styles.ring} ${styles.innerRing}`}></span>

            {/* Пульсирующее ядро по центру */}
            <span className={styles.core}></span>
        </div>
    );
}