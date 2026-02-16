export async function GET() {
    const baseUrl = "https://www.ramjeeprasad.online";

    const posts = [
        {
            slug: "mono-flux-reactive-java",
            title: "Mastering Mono & Flux in Reactive Java",
            description: "Deep dive into reactive programming with Project Reactor. From Publisher-Subscriber patterns to building real-world reactive pipelines with Mono and Flux.",
            date: "2026-02-16",
        },
        {
            slug: "git-github-guide",
            title: "Git & GitHub Mastery",
            description: "Complete guide to version control. Master Git commands, branching strategies, merge vs rebase, pull requests, and GitHub workflows.",
            date: "2025-12-15",
        },
        {
            slug: "maven-gradle-guide",
            title: "Java Build Mastery: Maven & Gradle",
            description: "Complete guide to Java build tools. Master Maven and Gradle commands, dependency management, plugins, and multi-module projects.",
            date: "2025-12-10",
        },
        {
            slug: "docker-commands",
            title: "Docker Commands Cheat Sheet",
            description: "Essential Docker commands for containers, images, volumes, networks, and Docker Compose. The ultimate DevOps reference guide.",
            date: "2025-12-05",
        },
        {
            slug: "intellij-shortcuts",
            title: "5 IntelliJ Shortcuts Every Java Dev Should Know",
            description: "Boost your productivity with essential keyboard shortcuts. Master navigation, refactoring, debugging, and code generation in IntelliJ IDEA.",
            date: "2025-11-28",
        },
        {
            slug: "spring-boot-annotations",
            title: "Mastering Spring Boot Annotations",
            description: "Deep dive into Spring Boot annotations with practical examples.",
            date: "2025-11-20",
        },
        {
            slug: "spring-boot-rest-api",
            title: "Building REST APIs with Spring Boot",
            description: "Learn how to build production-ready REST APIs using Spring Boot.",
            date: "2025-11-12",
        },
    ];

    const rssItems = posts
        .map(
            (post) => `
    <item>
      <title><![CDATA[${post.title}]]></title>
      <link>${baseUrl}/blog/${post.slug}</link>
      <guid isPermaLink="true">${baseUrl}/blog/${post.slug}</guid>
      <description><![CDATA[${post.description}]]></description>
      <pubDate>${new Date(post.date).toUTCString()}</pubDate>
      <author>ramjeeprasad.dev@gmail.com (Ramjee Prasad)</author>
    </item>`
        )
        .join("");

    const rss = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Ramjee Prasad - Backend Development Blog</title>
    <link>${baseUrl}/blog</link>
    <description>Articles on Java, Spring Boot, Docker, Git, and backend development by Ramjee Prasad.</description>
    <language>en-us</language>
    <managingEditor>ramjeeprasad.dev@gmail.com (Ramjee Prasad)</managingEditor>
    <webMaster>ramjeeprasad.dev@gmail.com (Ramjee Prasad)</webMaster>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <atom:link href="${baseUrl}/feed.xml" rel="self" type="application/rss+xml"/>
    <image>
      <url>${baseUrl}/og-image.png</url>
      <title>Ramjee Prasad Blog</title>
      <link>${baseUrl}</link>
    </image>
    ${rssItems}
  </channel>
</rss>`;

    return new Response(rss.trim(), {
        headers: {
            "Content-Type": "application/xml; charset=utf-8",
            "Cache-Control": "s-maxage=3600, stale-while-revalidate",
        },
    });
}
