import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Git & GitHub Mastery: Complete Developer Guide 2025 | Ramjee Prasad",
    description: "Master Git and GitHub with Ramjee Prasad's complete guide. Learn Git commands, branching strategies, merge vs rebase, pull requests, GitHub Actions, and team collaboration workflows with 100+ examples.",
    keywords: [
        // Git commands
        "Git commands",
        "Git tutorial",
        "Git basics",
        "git init",
        "git commit",
        "git push",
        "git pull",
        "git merge",
        "git rebase",
        "git branch",
        "git checkout",
        "git stash",
        "git log",
        "git reset",
        "git revert",
        // Git concepts
        "Git branching",
        "Git merge vs rebase",
        "Git workflow",
        "Git best practices",
        "Git for beginners",
        "Git cheat sheet",
        // GitHub
        "GitHub tutorial",
        "GitHub pull request",
        "GitHub Actions",
        "GitHub workflow",
        "GitHub collaboration",
        "GitHub fork",
        "GitHub clone",
        "GitHub SSH",
        // Comparison
        "Git vs GitHub",
        "GitHub vs GitLab",
        // General
        "version control",
        "source control",
        "code collaboration",
        "DevOps Git",
        // Author
        "Ramjee Prasad",
        "Ramjee Prasad Git",
        "Ramjee Prasad GitHub",
        "Ramjee Prasad blog",
        "Ramjee Prasad Jamshedpur",
        "Ramjee Prasad Jharkhand",
        "Ramjee Prasad Silicon Institute",
        "Git tutorial India",
        "GitHub tutorial Hindi",
    ],
    authors: [{ name: "Ramjee Prasad", url: "https://ramjeeprasad.online" }],
    creator: "Ramjee Prasad",
    publisher: "Ramjee Prasad",
    openGraph: {
        title: "Git & GitHub Mastery: Complete Developer Guide | Ramjee Prasad",
        description: "Master Git and GitHub with 100+ commands, branching strategies, and collaboration workflows.",
        type: "article",
        publishedTime: "2025-12-15T00:00:00.000Z",
        modifiedTime: new Date().toISOString(),
        authors: ["Ramjee Prasad"],
        url: "https://ramjeeprasad.online/blog/git-github-guide",
        siteName: "Ramjee Prasad Portfolio",
        locale: "en_US",
        images: [
            {
                url: "https://ramjeeprasad.online/java.png",
                width: 1200,
                height: 630,
                alt: "Git & GitHub Complete Guide",
            },
        ],
        tags: ["Git", "GitHub", "Version Control", "DevOps", "Collaboration"],
    },
    twitter: {
        card: "summary_large_image",
        title: "Git & GitHub Mastery: Complete Developer Guide",
        description: "Master Git and GitHub with 100+ commands and workflows.",
        images: ["https://ramjeeprasad.online/java.png"],
    },
    alternates: {
        canonical: "https://ramjeeprasad.online/blog/git-github-guide",
    },
    robots: {
        index: true,
        follow: true,
        nocache: false,
        googleBot: {
            index: true,
            follow: true,
            noimageindex: false,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },
    category: "Technology",
    classification: "Programming Tutorial",
};

export default function GitGitHubGuideLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
