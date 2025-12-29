import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Docker Commands Cheat Sheet | Ramjee Prasad Blog",
    description: "Complete Docker commands guide by Ramjee Prasad. Learn essential Docker commands for containers, images, volumes, networks, and Docker Compose with practical examples.",
    keywords: [
        "Docker commands",
        "Docker tutorial",
        "Docker cheat sheet",
        "Docker container commands",
        "Docker image commands",
        "Docker Compose",
        "Docker for beginners",
        "Ramjee Prasad Docker",
        "Ramjee Prasad blog",
        "DevOps Docker",
        "Container commands",
        "Docker CLI"
    ],
    authors: [{ name: "Ramjee Prasad" }],
    openGraph: {
        title: "Docker Commands Cheat Sheet | Ramjee Prasad",
        description: "Master Docker commands with this comprehensive cheat sheet by Ramjee Prasad.",
        type: "article",
        publishedTime: "2025-12-05T00:00:00.000Z",
        authors: ["Ramjee Prasad"],
        url: "https://ramjeeprasad.online/blog/docker-commands",
        siteName: "Ramjee Prasad Portfolio",
        locale: "en_US",
        images: [
            {
                url: "https://ramjeeprasad.online/java.png",
                width: 1200,
                height: 630,
                alt: "Docker Commands Cheat Sheet",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Docker Commands Cheat Sheet",
        description: "Master Docker commands with this comprehensive cheat sheet.",
    },
    alternates: {
        canonical: "https://ramjeeprasad.online/blog/docker-commands",
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

export default function DockerCommandsLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
