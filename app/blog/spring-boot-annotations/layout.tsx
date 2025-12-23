import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Spring Boot Annotations Guide | Ramjee Prasad Blog",
    description: "A comprehensive guide to Spring Boot annotations by Ramjee Prasad including @SpringBootApplication, @RestController, @Autowired, @Service, @Repository, and more.",
    keywords: [
        "Spring Boot annotations",
        "Spring annotations tutorial",
        "@RestController",
        "@Autowired",
        "@Service",
        "@Repository",
        "Spring Framework",
        "Ramjee Prasad blog",
        "Ramjee Prasad Spring Boot",
        "Java annotations",
        "Spring Boot tutorial"
    ],
    authors: [{ name: "Ramjee Prasad" }],
    openGraph: {
        title: "Spring Boot Annotations Guide | Ramjee Prasad",
        description: "Master Spring Boot annotations with practical examples and best practices.",
        type: "article",
        publishedTime: "2025-12-22T00:00:00.000Z",
        authors: ["Ramjee Prasad"],
        url: "https://portfolio-three-azure-84.vercel.app/blog/spring-boot-annotations",
    },
    twitter: {
        card: "summary_large_image",
        title: "Spring Boot Annotations Guide",
        description: "Master Spring Boot annotations with practical examples and best practices.",
    },
    alternates: {
        canonical: "https://portfolio-three-azure-84.vercel.app/blog/spring-boot-annotations",
    },
};

export default function SpringBootAnnotationsLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
