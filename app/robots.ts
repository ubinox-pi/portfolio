import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
    return {
        rules: [
            {
                userAgent: '*',
                allow: [
                    '/',
                    '/resume',
                    '/blog/',
                    '/blog/spring-boot-rest-api',
                    '/blog/spring-boot-annotations',
                    '/blog/intellij-shortcuts',
                    '/blog/docker-commands',
                    '/blog/maven-gradle-guide',
                    '/blog/git-github-guide',
                ],
                disallow: ['/api/', '/_next/', '/private/'],
            },
            {
                userAgent: 'Googlebot',
                allow: '/',
            },
            {
                userAgent: 'Googlebot-Image',
                allow: '/',
            },
            {
                userAgent: 'Bingbot',
                allow: '/',
            },
            {
                userAgent: 'DuckDuckBot',
                allow: '/',
            },
            {
                userAgent: 'Yandex',
                allow: '/',
            },
            {
                userAgent: 'Slurp',
                allow: '/',
            },
            {
                userAgent: 'Baiduspider',
                allow: '/',
            },
            {
                userAgent: 'facebookexternalhit',
                allow: '/',
            },
            {
                userAgent: 'Twitterbot',
                allow: '/',
            },
            {
                userAgent: 'LinkedInBot',
                allow: '/',
            },
        ],
        sitemap: 'https://www.ramjeeprasad.online/sitemap.xml',
        host: 'https://www.ramjeeprasad.online',
    }
}
