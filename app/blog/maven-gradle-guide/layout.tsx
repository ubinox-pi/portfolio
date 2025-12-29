import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Java Build Mastery: Maven & Gradle Complete Guide 2025 | Ramjee Prasad",
    description: "Ultimate Java build tools guide by Ramjee Prasad. Master Maven and Gradle commands, build lifecycle, dependency management, plugins, profiles, multi-module projects, and troubleshooting with 100+ practical examples.",
    keywords: [
        // Maven keywords
        "Maven commands",
        "Maven tutorial",
        "Maven lifecycle",
        "Maven dependency management",
        "Maven pom.xml",
        "Maven plugins",
        "Maven profiles",
        "Maven multi-module",
        "mvn clean install",
        "mvn package",
        "Maven wrapper mvnw",
        "Maven dependency tree",
        "Maven Spring Boot",
        // Gradle keywords
        "Gradle commands",
        "Gradle tutorial",
        "Gradle build script",
        "Gradle tasks",
        "build.gradle",
        "build.gradle.kts",
        "Gradle Kotlin DSL",
        "Gradle wrapper gradlew",
        "Gradle dependencies",
        "Gradle multi-project",
        "Gradle daemon",
        "Gradle Spring Boot",
        // Comparison keywords
        "Maven vs Gradle",
        "Maven vs Gradle comparison",
        "Maven vs Gradle which is better",
        "Maven vs Gradle 2024",
        "Java build tools comparison",
        // General keywords
        "Java build tools",
        "Java project setup",
        "Java dependency management",
        "Spring Boot build",
        "Java backend development",
        "DevOps Java",
        // Author keywords
        "Ramjee Prasad",
        "Ramjee Prasad Maven",
        "Ramjee Prasad Gradle",
        "Ramjee Prasad Java",
        "Ramjee Prasad blog",
    ],
    authors: [{ name: "Ramjee Prasad", url: "https://ramjeeprasad.online" }],
    creator: "Ramjee Prasad",
    publisher: "Ramjee Prasad",
    openGraph: {
        title: "Java Build Mastery: Maven & Gradle Complete Guide | Ramjee Prasad",
        description: "Master Java build tools with this comprehensive Maven and Gradle guide. 100+ commands, dependency management, plugins, and troubleshooting tips.",
        type: "article",
        publishedTime: "2025-12-10T00:00:00.000Z",
        modifiedTime: new Date().toISOString(),
        authors: ["Ramjee Prasad"],
        url: "https://ramjeeprasad.online/blog/maven-gradle-guide",
        siteName: "Ramjee Prasad Portfolio",
        locale: "en_US",
        images: [
            {
                url: "https://ramjeeprasad.online/java.png",
                width: 1200,
                height: 630,
                alt: "Maven vs Gradle Java Build Tools Guide",
            },
        ],
        tags: [
            "Maven",
            "Gradle",
            "Java",
            "Build Tools",
            "Spring Boot",
            "DevOps",
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Java Build Mastery: Maven & Gradle Complete Guide",
        description: "Master Java build tools with this comprehensive Maven and Gradle guide. 100+ commands and examples.",
        images: ["https://ramjeeprasad.online/java.png"],
        creator: "@ramjeeprasad",
    },
    alternates: {
        canonical: "https://ramjeeprasad.online/blog/maven-gradle-guide",
    },
    robots: {
        index: true,
        follow: true,
        nocache: false,
        googleBot: {
            index: true,
            follow: true,
            noimageindex: false,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },
    category: "Technology",
    classification: "Programming Tutorial",
};

export default function MavenGradleGuideLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
