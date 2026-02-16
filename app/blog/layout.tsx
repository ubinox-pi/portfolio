import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Blog | Ramjee Prasad - Backend Development Articles",
    description: "Read articles on Java, Spring Boot, Docker, Git, Maven, Gradle, Mono, Flux, Project Reactor, reactive programming, and backend development by Ramjee Prasad. Tutorials, guides, and best practices for developers.",
    keywords: ["Ramjee Prasad blog", "Spring Boot tutorial", "Java backend", "Docker guide", "Git tutorial", "Maven Gradle guide", "Mono Flux tutorial", "Project Reactor guide", "Reactive Java", "Spring WebFlux", "Publisher Subscriber Reactive Streams"],
    openGraph: {
        title: "Blog | Ramjee Prasad",
        description: "Backend development articles, tutorials, and guides by Ramjee Prasad.",
        url: "https://www.ramjeeprasad.online/blog",
    },
};

export default function BlogLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
}
