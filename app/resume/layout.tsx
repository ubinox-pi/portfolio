import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Resume - Ramjee Prasad | Java & Spring Boot Developer",
    description: "Professional resume of Ramjee Prasad - Backend Developer specializing in Java, Spring Boot, WebFlux, Microservices, and Distributed Systems.",
    keywords: ["Resume", "Java Developer", "Spring Boot Developer", "Backend Developer", "WebFlux", "Microservices"],
    robots: {
        index: true,
        follow: true,
    },
};

export default function ResumeLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
