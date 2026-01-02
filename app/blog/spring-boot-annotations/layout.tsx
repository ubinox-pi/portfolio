import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Spring Boot Annotations Guide | Ramjee Prasad Blog",
    description: "A comprehensive guide to Spring Boot annotations by Ramjee Prasad including @SpringBootApplication, @RestController, @Autowired, @Service, @Repository, and more.",
    keywords: [
        // Technical
        "Spring Boot annotations",
        "Spring annotations tutorial",
        "@RestController",
        "@Autowired",
        "@Service",
        "@Repository",
        "Spring Framework",
        "Java annotations",
        "Spring Boot tutorial",

        // Personal brand
        "Ramjee Prasad blog",
        "Ramjee Prasad Spring Boot",
        "Ramjee Prasad Spring annotations",
        "Ramjee Prasad Jamshedpur",
        "Ramjee Prasad Jharkhand",
        "Ramjee Prasad Silicon Institute",
        "Spring Boot tutorial India"
    ],
    authors: [{ name: "Ramjee Prasad" }],
    openGraph: {
        title: "Spring Boot Annotations Guide | Ramjee Prasad",
        description: "Master Spring Boot annotations with practical examples and best practices.",
        type: "article",
        publishedTime: "2025-12-22T00:00:00.000Z",
        authors: ["Ramjee Prasad"],
        url: "https://ramjeeprasad.online/blog/spring-boot-annotations",
    },
    twitter: {
        card: "summary_large_image",
        title: "Spring Boot Annotations Guide",
        description: "Master Spring Boot annotations with practical examples and best practices.",
    },
    alternates: {
        canonical: "https://ramjeeprasad.online/blog/spring-boot-annotations",
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
        },
    },
};

export default function SpringBootAnnotationsLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
