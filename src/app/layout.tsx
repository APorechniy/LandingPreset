import type { Metadata } from 'next';
import './global.css'

export const metadata: Metadata = {
  "title": "Светлана | Фотограф в Тюмени",
  "description": "Профессиональная фотосъемка в Тюмени. Экспресс, семейные, индивидуальные и Love Story съемки. Более 300 успешных проектов.",
  "robots": {
    "index": true,
    "follow": true,
    "googleBot": {
      "index": true,
      "follow": true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1
    }
  },
  "openGraph": {
    "title": "Светлана | Фотограф в Тюмени",
    "description": "Профессиональная фотосъемка в Тюмени. Экспресс, семейные, индивидуальные и Love Story съемки.",
    "url": "https://tyumen-photo.beautifier.ru",
    "siteName": "Светлана",
    "images": [
      {
        "url": "https://tyumen-photo.beautifier.ru/images/og-image.jpg",
        "width": 1200,
        "height": 630,
        "alt": "Светлана - фотограф"
      }
    ],
    "locale": "ru_RU",
    "type": "website"
  },
  "icons": {
    "icon": [
      {
        "url": "https://tyumen-photo.beautifier.ru/favicon.ico",
        "sizes": "any"
      },
      {
        "url": "https://tyumen-photo.beautifier.ru/favicon-16x16.png",
        "sizes": "16x16",
        "type": "image/png"
      },
      {
        "url": "https://tyumen-photo.beautifier.ru/favicon-32x32.png",
        "sizes": "32x32",
        "type": "image/png"
      }
    ],
    "apple": "https://tyumen-photo.beautifier.ru/apple-touch-icon.png"
  },
  "appleWebApp": {
    "title": "Светлана | Фотограф",
    "statusBarStyle": "black-translucent"
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ru">
      <body>
        {children}
      </body>
    </html>
  )
}
