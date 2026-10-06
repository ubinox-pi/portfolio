import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://www.ramjeeprasad.online'

    return [
        {
            url: baseUrl,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 1.0,
            images: [
                `${baseUrl}/og-image.png`,
                `${baseUrl}/linkdin_background.png`,
                `${baseUrl}/ramjee_passport.png`,
                `${baseUrl}/Spring_WebFlux_Masterclass_High-Performance_Reactive_APIs_Ramjee.jpg`,
                `${baseUrl}/Mastering_Java_Reactive_Programming_Ramjee.jpg`,
                `${baseUrl}/Programming_In_Java_Ramjee.jpg`,
                `${baseUrl}/Data_Base_Management_System_Ramjee.jpg`,
                `${baseUrl}/Computer_Networks_and_Internet_Protocol_Ramjee.jpg`,
            ],
        },
        {
            url: `${baseUrl}/resume`,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.9,
            images: [
                `${baseUrl}/Spring_WebFlux_Masterclass_High-Performance_Reactive_APIs_Ramjee.jpg`,
                `${baseUrl}/Mastering_Java_Reactive_Programming_Ramjee.jpg`,
                `${baseUrl}/Programming_In_Java_Ramjee.jpg`,
                `${baseUrl}/Data_Base_Management_System_Ramjee.jpg`,
                `${baseUrl}/Computer_Networks_and_Internet_Protocol_Ramjee.jpg`,
            ],
        },
        {
            url: `${baseUrl}/blog`,
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
        {
            url: `${baseUrl}/blog/mono-flux-reactive-java`,
            lastModified: new Date('2026-02-16'),
            changeFrequency: 'monthly',
            priority: 0.9,
        },
    ]
}
