import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
    const baseUrl = 'https://beautifier.ru'; // Замените на ваш домен

    return {
        rules: {
            userAgent: '*',
            allow: '/',
            disallow: ['/api/', '/_next/'], // Закрываем от индексации служебные папки
        },
        sitemap: `${baseUrl}/sitemap.xml`,
    };
}