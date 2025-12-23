import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Ramjee Prasad Resume | Java Spring Boot Backend Developer",
    description: "Download Ramjee Prasad's professional resume - Backend Developer specializing in Java, Spring Boot, WebFlux, Microservices, REST APIs, and Distributed Systems. Available for hire.",
    keywords: [
        "Ramjee Prasad resume",
        "Ramjee Prasad CV",
        "Java Developer resume",
        "Spring Boot Developer resume",
        "Backend Developer India",
        "Backend Developer Jamshedpur",
        "Java resume download",
        "Spring Boot engineer resume",
        "Microservices developer resume",
        "WebFlux developer"
    ],
    openGraph: {
        title: "Ramjee Prasad Resume | Backend Developer",
        description: "Professional resume of Ramjee Prasad - Java & Spring Boot Developer",
        url: "https://portfolio-three-azure-84.vercel.app/resume",
    },
    alternates: {
        canonical: "https://portfolio-three-azure-84.vercel.app/resume",
    },
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
