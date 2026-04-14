'use client'

import { useTheme } from '@/providers/ThemeProvider'
import styles from './index.module.css'

export const ThemeSwitcher = () => {
    const { theme, toggleTheme } = useTheme()

    return (
        <div className={styles.switcher}>
            {/* Переключение темы */}
            <button
                onClick={toggleTheme}
                className={styles.themeToggle}
                aria-label="Переключить тему"
            >
                {theme === 'light' ? '🌙' : '☀️'}
            </button>
        </div>
    )
}