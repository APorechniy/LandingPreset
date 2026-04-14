import type { Metadata } from 'next'
import { ThemeProvider } from '@/providers/ThemeProvider'
import './global.css'
import '../styles/themes.css'


export const metadata: Metadata = {
    title: 'Landing Preset | Быстрые лендинги на Next.js + Yarn 4',
    description: 'Шаблон для быстрой разработки лендингов с SSR, TypeScript и Yarn 4',
    viewport: 'width=device-width, initial-scale=1',
    robots: 'index, follow',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="ru" suppressHydrationWarning>
            <body>
                <ThemeProvider>
                    {children}
                </ThemeProvider>
            </body>
        </html>
    )
}