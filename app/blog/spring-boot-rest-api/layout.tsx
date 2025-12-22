import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Building RESTful APIs with Spring Boot | Ramjee Prasad",
    description: "Complete guide to building REST APIs with Spring Boot. Learn MVC architecture, CRUD operations, DTOs, validation, error handling, and API versioning with practical examples.",
    keywords: ["Spring Boot", "REST API", "Java", "CRUD", "MVC", "Controller", "Service", "Repository", "DTO", "Validation"],
    openGraph: {
        title: "Building RESTful APIs with Spring Boot",
        description: "Complete guide to building production-ready REST APIs with Spring Boot.",
        type: "article",
        publishedTime: "2025-12-22T00:00:00.000Z",
        authors: ["Ramjee Prasad"],
    },
    twitter: {
        card: "summary_large_image",
        title: "Building RESTful APIs with Spring Boot",
        description: "Complete guide to building production-ready REST APIs with Spring Boot.",
    },
};

export default function SpringBootRestApiLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
