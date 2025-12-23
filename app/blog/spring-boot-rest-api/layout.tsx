import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Building RESTful APIs with Spring Boot | Ramjee Prasad Blog",
    description: "Complete guide to building REST APIs with Spring Boot by Ramjee Prasad. Learn MVC architecture, CRUD operations, DTOs, validation, error handling, and API versioning with practical Java examples.",
    keywords: [
        "Spring Boot REST API",
        "Spring Boot tutorial",
        "REST API Java",
        "Spring Boot CRUD",
        "Java REST API tutorial",
        "Spring MVC",
        "Spring Boot Controller",
        "DTO pattern",
        "API validation",
        "Ramjee Prasad blog",
        "Ramjee Prasad Spring Boot",
        "Backend development tutorial",
        "Java Spring tutorial",
        "RESTful services Java"
    ],
    authors: [{ name: "Ramjee Prasad" }],
    openGraph: {
        title: "Building RESTful APIs with Spring Boot | Ramjee Prasad",
        description: "Complete guide to building production-ready REST APIs with Spring Boot by Ramjee Prasad.",
        type: "article",
        publishedTime: "2025-12-22T00:00:00.000Z",
        authors: ["Ramjee Prasad"],
        url: "https://portfolio-three-azure-84.vercel.app/blog/spring-boot-rest-api",
    },
    twitter: {
        card: "summary_large_image",
        title: "Building RESTful APIs with Spring Boot",
        description: "Complete guide to building production-ready REST APIs with Spring Boot.",
    },
    alternates: {
        canonical: "https://portfolio-three-azure-84.vercel.app/blog/spring-boot-rest-api",
    },
};

export default function SpringBootRestApiLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
