'use client'
import { createContext, useContext, useEffect, useState } from 'react'

type Theme = 'light' | 'dark'

interface ThemeContextType {
    theme: Theme
    toggleTheme: () => void
    setTheme: (theme: Theme) => void
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export function useTheme() {
    const context = useContext(ThemeContext)
    if (!context) {
        throw new Error('useTheme must be used within ThemeProvider')
    }
    return context
}

interface ThemeProviderProps {
    children: React.ReactNode
    defaultTheme?: Theme
}

export function ThemeProvider({
    children,
    defaultTheme = 'light',
}: ThemeProviderProps) {
    const [theme, setTheme] = useState<Theme>(defaultTheme)
    const [mounted, setMounted] = useState(false)

    // Загрузка сохраненных настроек при монтировании
    useEffect(() => {
        setMounted(true)

        // Загрузка темы
        const savedTheme = localStorage.getItem('theme') as Theme | null
        if (savedTheme) {
            setTheme(savedTheme)
            document.documentElement.setAttribute('data-theme', savedTheme)
        } else {
            // Проверка системных настроек
            const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
            const systemTheme = prefersDark ? 'dark' : 'light'
            setTheme(systemTheme)
            document.documentElement.setAttribute('data-theme', systemTheme)
        }
    }, [])

    // Обновление атрибута при изменении темы
    useEffect(() => {
        if (!mounted) return

        document.documentElement.setAttribute('data-theme', theme)
        localStorage.setItem('theme', theme)
    }, [theme, mounted])

    const toggleTheme = () => {
        setTheme(prev => prev === 'light' ? 'dark' : 'light')
    }

    // Предотвращаем гидратацию
    if (!mounted) {
        return null
    }

    return (
        <ThemeContext.Provider
            value={{
                theme,
                toggleTheme,
                setTheme,
            }}
        >
            {children}
        </ThemeContext.Provider>
    )
}