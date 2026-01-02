import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://www.ramjeeprasad.online'

    return [
        {
            url: baseUrl,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 1.0,
        },
        {
            url: `${baseUrl}/resume`,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.9,
        },
        // Blog posts
        {
            url: `${baseUrl}/blog/spring-boot-rest-api`,
            lastModified: new Date('2025-11-12'),
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        {
            url: `${baseUrl}/blog/spring-boot-annotations`,
            lastModified: new Date('2025-11-20'),
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        {
            url: `${baseUrl}/blog/intellij-shortcuts`,
            lastModified: new Date('2025-11-28'),
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        {
            url: `${baseUrl}/blog/docker-commands`,
            lastModified: new Date('2025-12-05'),
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        {
            url: `${baseUrl}/blog/maven-gradle-guide`,
            lastModified: new Date('2025-12-10'),
            changeFrequency: 'monthly',
            priority: 0.9,
        },
        {
            url: `${baseUrl}/blog/git-github-guide`,
            lastModified: new Date('2025-12-15'),
            changeFrequency: 'monthly',
            priority: 0.9,
        },
    ]
}
