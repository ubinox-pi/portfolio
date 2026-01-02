import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Building RESTful APIs with Spring Boot | Ramjee Prasad Blog",
    description: "Complete guide to building REST APIs with Spring Boot by Ramjee Prasad from Jamshedpur, Jharkhand. Learn MVC architecture, CRUD operations, DTOs, validation, error handling, and API versioning with practical Java examples.",
    keywords: [
        // Technical keywords
        "Spring Boot REST API",
        "Spring Boot tutorial",
        "REST API Java",
        "Spring Boot CRUD",
        "Java REST API tutorial",
        "Spring MVC",
        "Spring Boot Controller",
        "DTO pattern",
        "API validation",
        "Backend development tutorial",
        "Java Spring tutorial",
        "RESTful services Java",

        // Personal brand + Spring
        "Ramjee Prasad Spring Boot",
        "Ramjee Prasad Java tutorial",
        "Ramjee Prasad REST API",
        "Ramjee Prasad blog",
        "Ramjee Prasad Jamshedpur",
        "Ramjee Prasad Jharkhand",
        "Ramjee Prasad Silicon Institute",
        "Spring Boot tutorial India",
        "Java backend tutorial"
    ],
    authors: [{ name: "Ramjee Prasad" }],
    openGraph: {
        title: "Building RESTful APIs with Spring Boot | Ramjee Prasad",
        description: "Complete guide to building production-ready REST APIs with Spring Boot by Ramjee Prasad.",
        type: "article",
        publishedTime: "2025-12-22T00:00:00.000Z",
        authors: ["Ramjee Prasad"],
        url: "https://ramjeeprasad.online/blog/spring-boot-rest-api",
    },
    twitter: {
        card: "summary_large_image",
        title: "Building RESTful APIs with Spring Boot",
        description: "Complete guide to building production-ready REST APIs with Spring Boot.",
    },
    alternates: {
        canonical: "https://ramjeeprasad.online/blog/spring-boot-rest-api",
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

export default function SpringBootRestApiLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
