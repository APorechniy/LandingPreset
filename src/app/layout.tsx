import type { Metadata, Viewport } from 'next';
import './global.css'

export const metadata: Metadata = {
  "title": "Beautifier | Digital-студия",
  "description": "Разработка сайтов, SEO, маркетинг. Системный подход к росту бизнеса.",
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
    "title": "Beautifier — Digital-студия",
    "description": "Сайты, которые решают задачи бизнеса. Разработка, SEO, маркетинг.",
    "url": "https://beautifier.ru",
    "siteName": "Beautifier",
    "images": [
      {
        "url": "https://beautifier.ru/og-image.jpg",
        "width": 1200,
        "height": 630,
        "alt": "Beautifier"
      }
    ],
    "locale": "ru_RU",
    "type": "website"
  },
  "icons": {
    "icon": [
      {
        "url": "https://beautifier.ru/favicon.ico",
        "sizes": "any"
      },
      {
        "url": "https://beautifier.ru/favicon-16x16.png",
        "sizes": "16x16",
        "type": "image/png"
      },
      {
        "url": "https://beautifier.ru/favicon-32x32.png",
        "sizes": "32x32",
        "type": "image/png"
      }
    ],
    "apple": "https://beautifier.ru/apple-touch-icon.png"
  },
  "appleWebApp": {
    "title": "Beautifier",
    "statusBarStyle": "black-translucent"
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ru" data-theme="dark">
      <head>
        <link rel="icon" type="image/png" href="/favicon-96x96.png" sizes="96x96" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <meta name="apple-mobile-web-app-title" content="Beautifier" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body>
        {children}
        <script
          type="text/javascript"
          dangerouslySetInnerHTML={{
            __html: `(function(m,e,t,r,i,k,a){
                    m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
                    m[i].l=1*new Date();
                    for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
                    k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)
                })(window, document,'script','https://mc.yandex.ru/metrika/tag.js?id=109216018', 'ym');

                ym(109216018, 'init', {ssr:true, webvisor:true, clickmap:true, ecommerce:"dataLayer", referrer: document.referrer, url: location.href, accurateTrackBounce:true, trackLinks:true});
              `,
          }}
        ></script>
        <noscript><div><img src="https://mc.yandex.ru/watch/109216018" style={{ position: "absolute", left: "-9999px" }} alt="" /></div></noscript>
      </body>
    </html>
  )
}
