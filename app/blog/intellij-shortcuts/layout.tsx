import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "5 IntelliJ Shortcuts Every Java Dev Should Know | Ramjee Prasad",
    description: "Boost your Java development productivity with essential IntelliJ IDEA keyboard shortcuts by Ramjee Prasad. Learn navigation, refactoring, debugging shortcuts.",
    keywords: [
        "IntelliJ IDEA shortcuts",
        "IntelliJ keyboard shortcuts",
        "Java IDE shortcuts",
        "IntelliJ productivity",
        "JetBrains shortcuts",
        "Ramjee Prasad blog",
        "Java developer tips",
        "IntelliJ tips and tricks",
        "IDE shortcuts"
    ],
    authors: [{ name: "Ramjee Prasad" }],
    openGraph: {
        title: "5 IntelliJ Shortcuts Every Java Dev Should Know",
        description: "Essential keyboard shortcuts to supercharge your Java development workflow.",
        type: "article",
        publishedTime: "2025-12-22T00:00:00.000Z",
        authors: ["Ramjee Prasad"],
        url: "https://ramjeeprasad.online/blog/intellij-shortcuts",
    },
    twitter: {
        card: "summary_large_image",
        title: "5 IntelliJ Shortcuts Every Java Dev Should Know",
        description: "Essential keyboard shortcuts to supercharge your Java development workflow.",
    },
    alternates: {
        canonical: "https://ramjeeprasad.online/blog/intellij-shortcuts",
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

export default function IntelliJShortcutsLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
