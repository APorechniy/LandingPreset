import { ThemeSwitcher } from '@/components/ThemeSwitcher'
import styles from './index.module.css'

interface HeroProps {
  // Добавьте пропсы при необходимости
}

export const Hero = ({ }: HeroProps) => {
  return (
    <section className={styles.container}>
      <div className="container">
        <ThemeSwitcher />
        <h2 className={styles.title}>Hero</h2>
        {/* Содержание секции */}
      </div>
    </section>
  )
}
