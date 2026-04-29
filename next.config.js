/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        formats: ['image/avif', 'image/webp'],
        deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    },
    compiler: {
        removeConsole: process.env.NODE_ENV === 'production',
    },
    outputFileTracingIncludes: {
        '*': [
            './node_modules/sharp/**/*'
        ],
        '/api/**/*': [
            './node_modules/sharp/**/*'
        ]
    },
    poweredByHeader: false,
    reactStrictMode: true,
    compress: true,
}

module.exports = nextConfig