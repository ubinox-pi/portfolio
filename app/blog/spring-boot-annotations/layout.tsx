import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Spring Boot Annotations Guide | Ramjee Prasad Blog",
    description: "A comprehensive guide to Spring Boot annotations including @SpringBootApplication, @RestController, @Autowired, @Service, @Repository, and more. Learn how to build robust Spring applications.",
    keywords: ["Spring Boot", "Spring Annotations", "Java", "@RestController", "@Autowired", "@Service", "Spring Framework", "Backend Development"],
    openGraph: {
        title: "Spring Boot Annotations Guide | Ramjee Prasad",
        description: "Master Spring Boot annotations with practical examples and best practices.",
        type: "article",
        publishedTime: "2025-12-22T00:00:00.000Z",
        authors: ["Ramjee Prasad"],
    },
    twitter: {
        card: "summary_large_image",
        title: "Spring Boot Annotations Guide",
        description: "Master Spring Boot annotations with practical examples and best practices.",
    },
};

export default function SpringBootAnnotationsLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
