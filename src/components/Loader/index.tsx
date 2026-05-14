import styles from './index.module.css'

export const Loader = () => {
    return (
        <div className={styles.loaderWrapper}>
            <div
                className={styles.spinner}
            />
        </div>
    );
};
