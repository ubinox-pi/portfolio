import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "5 IntelliJ Shortcuts Every Java Dev Should Know | Ramjee Prasad",
    description: "Boost your Java development productivity with these essential IntelliJ IDEA keyboard shortcuts. Learn navigation, refactoring, debugging, and code generation shortcuts.",
    keywords: ["IntelliJ IDEA", "Java", "Shortcuts", "Productivity", "IDE", "JetBrains", "Developer Tools", "Keyboard Shortcuts"],
    openGraph: {
        title: "5 IntelliJ Shortcuts Every Java Dev Should Know",
        description: "Essential keyboard shortcuts to supercharge your Java development workflow.",
        type: "article",
        publishedTime: "2025-12-22T00:00:00.000Z",
        authors: ["Ramjee Prasad"],
    },
    twitter: {
        card: "summary_large_image",
        title: "5 IntelliJ Shortcuts Every Java Dev Should Know",
        description: "Essential keyboard shortcuts to supercharge your Java development workflow.",
    },
};

export default function IntelliJShortcutsLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
