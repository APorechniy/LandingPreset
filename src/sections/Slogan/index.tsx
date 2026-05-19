import { LightningText } from "@/components/LightningText";
import styles from "./index.module.css";

export const Slogan = () => {
    return (
        <section className={styles.sloganSection} >
            <LightningText>
                Генерируем лидов, а не пиксели
            </LightningText>
        </section>
    );
};
