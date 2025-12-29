"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, Copy, Check, Package, Zap, Settings, FolderTree, RefreshCw, TestTube, Wrench, Shield, Layers, Terminal, BookOpen, Rocket, AlertTriangle } from "lucide-react";
import { useState } from "react";

// Maven red and Gradle teal theme
const mavenColor = "#C71A36";
const gradleColor = "#1BA94C";

interface CodeBlockProps {
    code: string;
    language?: string;
    title?: string;
}

function CodeBlock({ code, language = "bash", title }: CodeBlockProps) {
    const [copied, setCopied] = useState(false);

    const copyToClipboard = () => {
        navigator.clipboard.writeText(code);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div className="relative group my-4">
            {title && (
                <div className="bg-zinc-800 text-gray-400 text-xs px-4 py-2 rounded-t-lg border-b border-zinc-700 font-mono">
                    {title}
                </div>
            )}
            <div className="absolute top-2 right-2 z-10">
                <button
                    onClick={copyToClipboard}
                    className="p-2 rounded-md bg-white/10 hover:bg-white/20 transition-colors"
                    title="Copy code"
                >
                    {copied ? <Check size={16} className="text-green-400" /> : <Copy size={16} className="text-gray-400" />}
                </button>
            </div>
            <pre className={`bg-[#1e1e1e] ${title ? 'rounded-b-lg' : 'rounded-lg'} p-4 overflow-x-auto border border-zinc-700`}>
                <code className="text-sm text-gray-300 font-mono">{code}</code>
            </pre>
        </div>
    );
}

interface CommandCardProps {
    title: string;
    command: string;
    description: string;
    color?: string;
}

function CommandCard({ title, command, description, color = "#C71A36" }: CommandCardProps) {
    return (
        <div className={`bg-zinc-900/50 border rounded-lg p-4 hover:border-opacity-50 transition-colors`} style={{ borderColor: `${color}30` }}>
            <h4 className="font-semibold mb-2" style={{ color }}>{title}</h4>
            <CodeBlock code={command} />
            <p className="text-gray-400 text-sm">{description}</p>
        </div>
    );
}

interface ComparisonRowProps {
    feature: string;
    maven: string;
    gradle: string;
}

function ComparisonRow({ feature, maven, gradle }: ComparisonRowProps) {
    return (
        <tr className="border-b border-white/10">
            <td className="py-3 px-4 text-white font-medium">{feature}</td>
            <td className="py-3 px-4 text-gray-400">{maven}</td>
            <td className="py-3 px-4 text-gray-400">{gradle}</td>
        </tr>
    );
}

// JSON-LD Structured Data for SEO
function BlogJsonLd() {
    const articleSchema = {
        "@context": "https://schema.org",
        "@type": "TechArticle",
        "headline": "Java Build Mastery: Maven & Gradle Complete Guide",
        "description": "Ultimate Java build tools guide. Master Maven and Gradle commands, build lifecycle, dependency management, plugins, profiles, multi-module projects, and troubleshooting with 100+ practical examples.",
        "image": "https://ramjeeprasad.online/java.png",
        "author": {
            "@type": "Person",
            "name": "Ramjee Prasad",
            "url": "https://ramjeeprasad.online"
        },
        "publisher": {
            "@type": "Person",
            "name": "Ramjee Prasad",
            "url": "https://ramjeeprasad.online"
        },
        "datePublished": "2025-12-10",
        "dateModified": "2025-12-10",
        "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": "https://ramjeeprasad.online/blog/maven-gradle-guide"
        },
        "keywords": "Maven, Gradle, Java build tools, pom.xml, build.gradle, dependency management, Maven lifecycle, Gradle tasks",
        "articleSection": "Programming Tutorials",
        "wordCount": 5000,
        "proficiencyLevel": "Beginner to Advanced"
    };

    const howToSchema = {
        "@context": "https://schema.org",
        "@type": "HowTo",
        "name": "How to Use Maven and Gradle for Java Projects",
        "description": "Step-by-step guide to using Maven and Gradle build tools for Java development",
        "step": [
            {
                "@type": "HowToStep",
                "name": "Set up Maven Project",
                "text": "Create a new Maven project using mvn archetype:generate command"
            },
            {
                "@type": "HowToStep",
                "name": "Configure pom.xml",
                "text": "Add dependencies and plugins to your pom.xml configuration file"
            },
            {
                "@type": "HowToStep",
                "name": "Build with Maven",
                "text": "Run mvn clean install to build your project"
            },
            {
                "@type": "HowToStep",
                "name": "Set up Gradle Project",
                "text": "Create a new Gradle project using gradle init command"
            },
            {
                "@type": "HowToStep",
                "name": "Configure build.gradle",
                "text": "Add dependencies and tasks to your build.gradle file"
            },
            {
                "@type": "HowToStep",
                "name": "Build with Gradle",
                "text": "Run ./gradlew build to compile and package your project"
            }
        ]
    };

    const breadcrumbSchema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
            {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://ramjeeprasad.online"
            },
            {
                "@type": "ListItem",
                "position": 2,
                "name": "Blog",
                "item": "https://ramjeeprasad.online/blog"
            },
            {
                "@type": "ListItem",
                "position": 3,
                "name": "Maven & Gradle Guide",
                "item": "https://ramjeeprasad.online/blog/maven-gradle-guide"
            }
        ]
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
            />
        </>
    );
}

export default function MavenGradleGuidePage() {
    return (
        <main className="min-h-screen bg-[#0a0a0a] py-16 px-4 md:px-8">
            <BlogJsonLd />
            <div className="max-w-4xl mx-auto">
                {/* Back Link */}
                <Link
                    href="/"
                    className="inline-flex items-center gap-2 text-gray-400 hover:text-accent mb-8 transition-colors"
                >
                    <ArrowLeft size={18} />
                    Back to Portfolio
                </Link>

                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="mb-12"
                >
                    <div className="flex items-center gap-4 mb-4">
                        <div className="flex gap-2">
                            <div className="p-3 rounded-xl bg-[#C71A36]/20 border border-[#C71A36]/30">
                                <Package size={28} className="text-[#C71A36]" />
                            </div>
                            <div className="p-3 rounded-xl bg-[#1BA94C]/20 border border-[#1BA94C]/30">
                                <Zap size={28} className="text-[#1BA94C]" />
                            </div>
                        </div>
                        <div>
                            <span className="text-accent text-sm font-mono">Java / Build Automation</span>
                            <h1 className="text-3xl md:text-4xl font-bold text-white">
                                Java Build Mastery: Maven & Gradle
                            </h1>
                        </div>
                    </div>
                    <p className="text-gray-400 text-lg">
                        The ultimate guide to Java build tools. Master dependency management, build lifecycles, plugins, multi-module projects, and advanced configurations.
                    </p>
                    <div className="flex items-center gap-4 mt-4 text-sm text-gray-500">
                        <span>By Ramjee Prasad</span>
                        <span>•</span>
                        <span>December 10, 2025</span>
                        <span>•</span>
                        <span>25 min read</span>
                    </div>
                </motion.div>

                {/* Table of Contents */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="bg-zinc-900/50 border border-white/10 rounded-xl p-6 mb-12"
                >
                    <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                        <FolderTree size={20} className="text-accent" />
                        Table of Contents
                    </h2>
                    <div className="grid md:grid-cols-2 gap-4">
                        <ul className="space-y-2 text-gray-400">
                            <li><a href="#comparison" className="hover:text-accent transition-colors">1. Maven vs Gradle Comparison</a></li>
                            <li><a href="#maven-basics" className="hover:text-[#C71A36] transition-colors">2. Maven Fundamentals</a></li>
                            <li><a href="#maven-commands" className="hover:text-[#C71A36] transition-colors">3. Maven Essential Commands</a></li>
                            <li><a href="#maven-lifecycle" className="hover:text-[#C71A36] transition-colors">4. Maven Build Lifecycle</a></li>
                            <li><a href="#maven-dependencies" className="hover:text-[#C71A36] transition-colors">5. Maven Dependency Scopes</a></li>
                            <li><a href="#maven-plugins" className="hover:text-[#C71A36] transition-colors">6. Maven Plugins</a></li>
                            <li><a href="#maven-profiles" className="hover:text-[#C71A36] transition-colors">7. Maven Profiles</a></li>
                        </ul>
                        <ul className="space-y-2 text-gray-400">
                            <li><a href="#gradle-basics" className="hover:text-[#1BA94C] transition-colors">8. Gradle Fundamentals</a></li>
                            <li><a href="#gradle-commands" className="hover:text-[#1BA94C] transition-colors">9. Gradle Essential Commands</a></li>
                            <li><a href="#gradle-tasks" className="hover:text-[#1BA94C] transition-colors">10. Gradle Tasks & Custom Tasks</a></li>
                            <li><a href="#gradle-dependencies" className="hover:text-[#1BA94C] transition-colors">11. Gradle Dependencies</a></li>
                            <li><a href="#gradle-multiproject" className="hover:text-[#1BA94C] transition-colors">12. Gradle Multi-Project Builds</a></li>
                            <li><a href="#troubleshooting" className="hover:text-accent transition-colors">13. Troubleshooting Guide</a></li>
                            <li><a href="#best-practices" className="hover:text-accent transition-colors">14. Best Practices</a></li>
                        </ul>
                    </div>
                </motion.div>

                {/* Content */}
                <div className="space-y-16">
                    {/* Comparison Section */}
                    <section id="comparison">
                        <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                            <RefreshCw size={24} className="text-accent" />
                            1. Maven vs Gradle Comparison
                        </h2>
                        <div className="overflow-x-auto">
                            <table className="w-full bg-zinc-900/50 rounded-lg overflow-hidden">
                                <thead>
                                    <tr className="bg-zinc-800">
                                        <th className="py-3 px-4 text-left text-white">Feature</th>
                                        <th className="py-3 px-4 text-left text-[#C71A36]">Maven</th>
                                        <th className="py-3 px-4 text-left text-[#1BA94C]">Gradle</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <ComparisonRow feature="Configuration" maven="XML (pom.xml)" gradle="Groovy/Kotlin DSL" />
                                    <ComparisonRow feature="Build Speed" maven="Slower (no caching)" gradle="Faster (incremental builds + cache)" />
                                    <ComparisonRow feature="Learning Curve" maven="Easier (convention-based)" gradle="Steeper (more flexible)" />
                                    <ComparisonRow feature="Customization" maven="Plugin-based only" gradle="Full scripting capability" />
                                    <ComparisonRow feature="IDE Support" maven="Excellent" gradle="Excellent" />
                                    <ComparisonRow feature="Android" maven="Limited support" gradle="Official build tool" />
                                    <ComparisonRow feature="Daemon" maven="No daemon" gradle="Background daemon" />
                                    <ComparisonRow feature="Repository" maven="Central, JCenter" gradle="Central, JCenter, custom" />
                                </tbody>
                            </table>
                        </div>
                    </section>

                    {/* Maven Basics */}
                    <section id="maven-basics">
                        <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                            <Package size={24} className="text-[#C71A36]" />
                            2. Maven Fundamentals
                        </h2>
                        <p className="text-gray-400 mb-6">
                            Maven uses a Project Object Model (POM) defined in <code className="text-[#C71A36] bg-zinc-800 px-2 py-0.5 rounded">pom.xml</code>.
                            It follows <strong className="text-white">"Convention over Configuration"</strong> principle.
                        </p>

                        <h3 className="text-xl font-bold text-white mb-4">Standard Directory Structure</h3>
                        <CodeBlock
                            title="Maven Project Structure"
                            code={`my-project/
├── pom.xml                    # Project configuration
├── src/
│   ├── main/
│   │   ├── java/             # Application source code
│   │   │   └── com/example/
│   │   │       └── App.java
│   │   └── resources/        # Configuration files
│   │       └── application.properties
│   └── test/
│       ├── java/             # Test source code
│       │   └── com/example/
│       │       └── AppTest.java
│       └── resources/        # Test resources
└── target/                   # Build output (generated)`}
                        />

                        <h3 className="text-xl font-bold text-white mt-8 mb-4">Complete pom.xml Example</h3>
                        <CodeBlock
                            title="pom.xml"
                            code={`<?xml version="1.0" encoding="UTF-8"?>
<project xmlns="http://maven.apache.org/POM/4.0.0"
         xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
         xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 
         http://maven.apache.org/xsd/maven-4.0.0.xsd">
    
    <modelVersion>4.0.0</modelVersion>
    
    <!-- Project Coordinates -->
    <groupId>com.example</groupId>
    <artifactId>my-application</artifactId>
    <version>1.0.0-SNAPSHOT</version>
    <packaging>jar</packaging>
    
    <name>My Application</name>
    <description>A sample Maven project</description>
    
    <!-- Properties (Variables) -->
    <properties>
        <java.version>17</java.version>
        <maven.compiler.source>17</maven.compiler.source>
        <maven.compiler.target>17</maven.compiler.target>
        <project.build.sourceEncoding>UTF-8</project.build.sourceEncoding>
        <spring.boot.version>3.2.0</spring.boot.version>
    </properties>
    
    <!-- Dependencies -->
    <dependencies>
        <!-- Spring Boot Starter Web -->
        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-web</artifactId>
            <version>\${spring.boot.version}</version>
        </dependency>
        
        <!-- Lombok for boilerplate reduction -->
        <dependency>
            <groupId>org.projectlombok</groupId>
            <artifactId>lombok</artifactId>
            <version>1.18.30</version>
            <scope>provided</scope>
        </dependency>
        
        <!-- Testing Dependencies -->
        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-test</artifactId>
            <version>\${spring.boot.version}</version>
            <scope>test</scope>
        </dependency>
    </dependencies>
    
    <!-- Build Configuration -->
    <build>
        <plugins>
            <plugin>
                <groupId>org.springframework.boot</groupId>
                <artifactId>spring-boot-maven-plugin</artifactId>
                <version>\${spring.boot.version}</version>
            </plugin>
        </plugins>
    </build>
    
</project>`}
                        />
                    </section>

                    {/* Maven Commands */}
                    <section id="maven-commands">
                        <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                            <Terminal size={24} className="text-[#C71A36]" />
                            3. Maven Essential Commands
                        </h2>
                        <div className="grid gap-4">
                            <CommandCard
                                title="Create New Project"
                                command={`# Quick Start (Interactive)
mvn archetype:generate

# Non-Interactive with specific archetype
mvn archetype:generate \\
  -DgroupId=com.example \\
  -DartifactId=my-app \\
  -DarchetypeArtifactId=maven-archetype-quickstart \\
  -DarchetypeVersion=1.4 \\
  -DinteractiveMode=false`}
                                description="Creates a new Maven project from an archetype template."
                                color={mavenColor}
                            />
                            <CommandCard
                                title="Clean Project"
                                command={`mvn clean`}
                                description="Removes the target/ directory containing all build outputs."
                                color={mavenColor}
                            />
                            <CommandCard
                                title="Compile Source Code"
                                command={`mvn compile`}
                                description="Compiles source code in src/main/java to target/classes."
                                color={mavenColor}
                            />
                            <CommandCard
                                title="Run Tests"
                                command={`# Run all tests
mvn test

# Run specific test class
mvn test -Dtest=UserServiceTest

# Run specific test method
mvn test -Dtest=UserServiceTest#testCreateUser

# Run tests with pattern
mvn test -Dtest=*ServiceTest`}
                                description="Executes unit tests using the configured test framework."
                                color={mavenColor}
                            />
                            <CommandCard
                                title="Package Application"
                                command={`# Create JAR/WAR
mvn package

# Skip tests during packaging
mvn package -DskipTests

# Also skip test compilation
mvn package -Dmaven.test.skip=true`}
                                description="Packages compiled code into distributable format (JAR/WAR) in target/."
                                color={mavenColor}
                            />
                            <CommandCard
                                title="Install to Local Repository"
                                command={`mvn install`}
                                description="Installs the package to ~/.m2/repository for use by other local projects."
                                color={mavenColor}
                            />
                            <CommandCard
                                title="Deploy to Remote Repository"
                                command={`mvn deploy`}
                                description="Deploys the package to a remote repository (requires distributionManagement config)."
                                color={mavenColor}
                            />
                            <CommandCard
                                title="View Dependency Tree"
                                command={`# Full dependency tree
mvn dependency:tree

# With specific scope
mvn dependency:tree -Dscope=compile

# Output to file
mvn dependency:tree -DoutputFile=deps.txt`}
                                description="Displays the project's dependency tree showing all transitive dependencies."
                                color={mavenColor}
                            />
                            <CommandCard
                                title="Check for Dependency Updates"
                                command={`# Show available updates
mvn versions:display-dependency-updates

# Show plugin updates
mvn versions:display-plugin-updates

# Update dependencies to latest versions
mvn versions:use-latest-versions`}
                                description="Checks Maven Central for newer versions of dependencies."
                                color={mavenColor}
                            />
                            <CommandCard
                                title="Download Dependencies"
                                command={`# Download all dependencies
mvn dependency:resolve

# Download sources
mvn dependency:sources

# Download javadocs
mvn dependency:resolve -Dclassifier=javadoc`}
                                description="Downloads all dependencies to local repository for offline access."
                                color={mavenColor}
                            />
                            <CommandCard
                                title="Generate Project Site"
                                command={`mvn site`}
                                description="Generates project documentation site with reports in target/site/."
                                color={mavenColor}
                            />
                        </div>
                    </section>

                    {/* Maven Lifecycle */}
                    <section id="maven-lifecycle">
                        <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                            <RefreshCw size={24} className="text-[#C71A36]" />
                            4. Maven Build Lifecycle
                        </h2>
                        <p className="text-gray-400 mb-6">
                            Maven has three built-in lifecycles: <strong className="text-white">default</strong> (build),
                            <strong className="text-white"> clean</strong>, and <strong className="text-white">site</strong>.
                        </p>

                        <h3 className="text-lg font-bold text-white mb-4">Default Lifecycle Phases</h3>
                        <div className="bg-zinc-900/50 border border-[#C71A36]/20 rounded-lg p-6 mb-6">
                            <div className="flex flex-wrap gap-2 items-center justify-center">
                                {[
                                    { name: 'validate', desc: 'Validate project' },
                                    { name: 'compile', desc: 'Compile source code' },
                                    { name: 'test', desc: 'Run unit tests' },
                                    { name: 'package', desc: 'Create JAR/WAR' },
                                    { name: 'verify', desc: 'Run integrations' },
                                    { name: 'install', desc: 'Install to local' },
                                    { name: 'deploy', desc: 'Deploy to remote' }
                                ].map((phase, index) => (
                                    <div key={phase.name} className="flex items-center">
                                        <div className="bg-[#C71A36]/20 text-[#C71A36] px-3 py-2 rounded-lg text-sm font-mono text-center">
                                            <div>{phase.name}</div>
                                            <div className="text-xs text-gray-500 mt-1">{phase.desc}</div>
                                        </div>
                                        {index < 6 && <span className="text-gray-500 mx-2">→</span>}
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="bg-amber-500/10 border border-amber-500/30 rounded-lg p-4">
                            <p className="text-amber-400 text-sm">
                                <strong>💡 Important:</strong> Each phase executes all previous phases. Running <code className="text-[#C71A36]">mvn install</code> will execute: validate → compile → test → package → verify → install.
                            </p>
                        </div>
                    </section>

                    {/* Maven Dependencies */}
                    <section id="maven-dependencies">
                        <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                            <Layers size={24} className="text-[#C71A36]" />
                            5. Maven Dependency Scopes
                        </h2>
                        <div className="grid gap-4">
                            <div className="bg-zinc-900/50 border border-[#C71A36]/20 rounded-lg p-4">
                                <h4 className="text-[#C71A36] font-semibold mb-2">compile (default)</h4>
                                <CodeBlock code={`<dependency>
    <groupId>org.springframework</groupId>
    <artifactId>spring-core</artifactId>
    <version>6.1.0</version>
    <!-- scope is 'compile' by default -->
</dependency>`} />
                                <p className="text-gray-400 text-sm">Available in all classpaths. Transitive dependencies included.</p>
                            </div>
                            <div className="bg-zinc-900/50 border border-[#C71A36]/20 rounded-lg p-4">
                                <h4 className="text-[#C71A36] font-semibold mb-2">provided</h4>
                                <CodeBlock code={`<dependency>
    <groupId>jakarta.servlet</groupId>
    <artifactId>jakarta.servlet-api</artifactId>
    <version>6.0.0</version>
    <scope>provided</scope>
</dependency>`} />
                                <p className="text-gray-400 text-sm">Available at compile time but expected to be provided at runtime (e.g., by servlet container).</p>
                            </div>
                            <div className="bg-zinc-900/50 border border-[#C71A36]/20 rounded-lg p-4">
                                <h4 className="text-[#C71A36] font-semibold mb-2">runtime</h4>
                                <CodeBlock code={`<dependency>
    <groupId>com.mysql</groupId>
    <artifactId>mysql-connector-j</artifactId>
    <version>8.2.0</version>
    <scope>runtime</scope>
</dependency>`} />
                                <p className="text-gray-400 text-sm">Not needed for compilation but required at runtime (e.g., JDBC drivers).</p>
                            </div>
                            <div className="bg-zinc-900/50 border border-[#C71A36]/20 rounded-lg p-4">
                                <h4 className="text-[#C71A36] font-semibold mb-2">test</h4>
                                <CodeBlock code={`<dependency>
    <groupId>org.junit.jupiter</groupId>
    <artifactId>junit-jupiter</artifactId>
    <version>5.10.0</version>
    <scope>test</scope>
</dependency>`} />
                                <p className="text-gray-400 text-sm">Only available during test compilation and execution.</p>
                            </div>
                        </div>
                    </section>

                    {/* Maven Plugins */}
                    <section id="maven-plugins">
                        <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                            <Wrench size={24} className="text-[#C71A36]" />
                            6. Maven Plugins
                        </h2>
                        <CodeBlock
                            title="Common Maven Plugins Configuration"
                            code={`<build>
    <plugins>
        <!-- Compiler Plugin - Set Java Version -->
        <plugin>
            <groupId>org.apache.maven.plugins</groupId>
            <artifactId>maven-compiler-plugin</artifactId>
            <version>3.11.0</version>
            <configuration>
                <source>17</source>
                <target>17</target>
            </configuration>
        </plugin>
        
        <!-- Surefire Plugin - Unit Tests -->
        <plugin>
            <groupId>org.apache.maven.plugins</groupId>
            <artifactId>maven-surefire-plugin</artifactId>
            <version>3.2.2</version>
            <configuration>
                <includes>
                    <include>**/*Test.java</include>
                </includes>
            </configuration>
        </plugin>
        
        <!-- Failsafe Plugin - Integration Tests -->
        <plugin>
            <groupId>org.apache.maven.plugins</groupId>
            <artifactId>maven-failsafe-plugin</artifactId>
            <version>3.2.2</version>
            <executions>
                <execution>
                    <goals>
                        <goal>integration-test</goal>
                        <goal>verify</goal>
                    </goals>
                </execution>
            </executions>
        </plugin>
        
        <!-- JAR Plugin - Customize JAR -->
        <plugin>
            <groupId>org.apache.maven.plugins</groupId>
            <artifactId>maven-jar-plugin</artifactId>
            <version>3.3.0</version>
            <configuration>
                <archive>
                    <manifest>
                        <mainClass>com.example.App</mainClass>
                        <addClasspath>true</addClasspath>
                    </manifest>
                </archive>
            </configuration>
        </plugin>
        
        <!-- Shade Plugin - Create Fat JAR -->
        <plugin>
            <groupId>org.apache.maven.plugins</groupId>
            <artifactId>maven-shade-plugin</artifactId>
            <version>3.5.1</version>
            <executions>
                <execution>
                    <phase>package</phase>
                    <goals>
                        <goal>shade</goal>
                    </goals>
                </execution>
            </executions>
        </plugin>
        
        <!-- Spring Boot Plugin -->
        <plugin>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-maven-plugin</artifactId>
            <version>3.2.0</version>
        </plugin>
    </plugins>
</build>`}
                        />
                    </section>

                    {/* Maven Profiles */}
                    <section id="maven-profiles">
                        <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                            <Settings size={24} className="text-[#C71A36]" />
                            7. Maven Profiles
                        </h2>
                        <p className="text-gray-400 mb-4">
                            Profiles allow you to customize builds for different environments (dev, test, prod).
                        </p>
                        <CodeBlock
                            title="pom.xml - Profile Configuration"
                            code={`<profiles>
    <!-- Development Profile (Active by default) -->
    <profile>
        <id>dev</id>
        <activation>
            <activeByDefault>true</activeByDefault>
        </activation>
        <properties>
            <env>development</env>
            <db.url>jdbc:h2:mem:devdb</db.url>
        </properties>
    </profile>
    
    <!-- Production Profile -->
    <profile>
        <id>prod</id>
        <properties>
            <env>production</env>
            <db.url>jdbc:postgresql://prod-server:5432/db</db.url>
        </properties>
        <build>
            <plugins>
                <plugin>
                    <groupId>org.apache.maven.plugins</groupId>
                    <artifactId>maven-compiler-plugin</artifactId>
                    <configuration>
                        <optimize>true</optimize>
                    </configuration>
                </plugin>
            </plugins>
        </build>
    </profile>
    
    <!-- Integration Tests Profile -->
    <profile>
        <id>integration</id>
        <build>
            <plugins>
                <plugin>
                    <groupId>org.apache.maven.plugins</groupId>
                    <artifactId>maven-failsafe-plugin</artifactId>
                    <executions>
                        <execution>
                            <goals>
                                <goal>integration-test</goal>
                                <goal>verify</goal>
                            </goals>
                        </execution>
                    </executions>
                </plugin>
            </plugins>
        </build>
    </profile>
</profiles>`}
                        />
                        <div className="mt-4 grid gap-4">
                            <CommandCard
                                title="Activate Profile"
                                command={`# Activate single profile
mvn package -Pprod

# Activate multiple profiles
mvn package -Pdev,integration

# List active profiles
mvn help:active-profiles`}
                                description="Use profiles to customize builds for different environments."
                                color={mavenColor}
                            />
                        </div>
                    </section>

                    {/* Gradle Basics */}
                    <section id="gradle-basics">
                        <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                            <Zap size={24} className="text-[#1BA94C]" />
                            8. Gradle Fundamentals
                        </h2>
                        <p className="text-gray-400 mb-6">
                            Gradle uses <code className="text-[#1BA94C] bg-zinc-800 px-2 py-0.5 rounded">build.gradle</code> (Groovy) or <code className="text-[#1BA94C] bg-zinc-800 px-2 py-0.5 rounded">build.gradle.kts</code> (Kotlin DSL).
                            It offers <strong className="text-white">flexibility, speed, and powerful scripting</strong>.
                        </p>

                        <h3 className="text-xl font-bold text-white mb-4">Standard Directory Structure</h3>
                        <CodeBlock
                            title="Gradle Project Structure"
                            code={`my-project/
├── build.gradle(.kts)        # Build script
├── settings.gradle(.kts)     # Settings (multi-project)
├── gradle/
│   └── wrapper/
│       ├── gradle-wrapper.jar
│       └── gradle-wrapper.properties
├── gradlew                   # Unix wrapper script
├── gradlew.bat               # Windows wrapper script
├── src/
│   ├── main/
│   │   ├── java/
│   │   └── resources/
│   └── test/
│       ├── java/
│       └── resources/
└── build/                    # Build output (generated)`}
                        />

                        <h3 className="text-xl font-bold text-white mt-8 mb-4">Groovy DSL (build.gradle)</h3>
                        <CodeBlock
                            title="build.gradle"
                            code={`plugins {
    id 'java'
    id 'org.springframework.boot' version '3.2.0'
    id 'io.spring.dependency-management' version '1.1.4'
}

group = 'com.example'
version = '1.0.0-SNAPSHOT'

java {
    sourceCompatibility = JavaVersion.VERSION_17
    targetCompatibility = JavaVersion.VERSION_17
}

repositories {
    mavenCentral()
    // Maven Local
    mavenLocal()
    // Custom repository
    maven { url 'https://repo.example.com/maven2' }
}

dependencies {
    // Implementation dependencies
    implementation 'org.springframework.boot:spring-boot-starter-web'
    implementation 'org.springframework.boot:spring-boot-starter-data-jpa'
    
    // Compile-only (like Maven's provided)
    compileOnly 'org.projectlombok:lombok:1.18.30'
    annotationProcessor 'org.projectlombok:lombok:1.18.30'
    
    // Runtime only
    runtimeOnly 'com.mysql:mysql-connector-j:8.2.0'
    
    // Test dependencies
    testImplementation 'org.springframework.boot:spring-boot-starter-test'
    testImplementation 'org.junit.jupiter:junit-jupiter:5.10.0'
}

tasks.named('test') {
    useJUnitPlatform()
}

// Custom configuration
tasks.withType(JavaCompile) {
    options.encoding = 'UTF-8'
}`}
                        />

                        <h3 className="text-xl font-bold text-white mt-8 mb-4">Kotlin DSL (build.gradle.kts)</h3>
                        <CodeBlock
                            title="build.gradle.kts"
                            code={`plugins {
    java
    id("org.springframework.boot") version "3.2.0"
    id("io.spring.dependency-management") version "1.1.4"
}

group = "com.example"
version = "1.0.0-SNAPSHOT"

java {
    sourceCompatibility = JavaVersion.VERSION_17
    targetCompatibility = JavaVersion.VERSION_17
}

repositories {
    mavenCentral()
}

dependencies {
    implementation("org.springframework.boot:spring-boot-starter-web")
    implementation("org.springframework.boot:spring-boot-starter-data-jpa")
    
    compileOnly("org.projectlombok:lombok:1.18.30")
    annotationProcessor("org.projectlombok:lombok:1.18.30")
    
    runtimeOnly("com.mysql:mysql-connector-j:8.2.0")
    
    testImplementation("org.springframework.boot:spring-boot-starter-test")
}

tasks.test {
    useJUnitPlatform()
}`}
                        />
                    </section>

                    {/* Gradle Commands */}
                    <section id="gradle-commands">
                        <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                            <Terminal size={24} className="text-[#1BA94C]" />
                            9. Gradle Essential Commands
                        </h2>
                        <div className="bg-[#1BA94C]/10 border border-[#1BA94C]/30 rounded-lg p-4 mb-6">
                            <p className="text-[#1BA94C] text-sm">
                                <strong>💡 Best Practice:</strong> Always use the Gradle Wrapper (<code>./gradlew</code> or <code>gradlew.bat</code>) instead of system-installed Gradle for consistent builds.
                            </p>
                        </div>
                        <div className="grid gap-4">
                            <CommandCard
                                title="Initialize New Project"
                                command={`# Interactive initialization
gradle init

# Java application
gradle init --type java-application

# Java library
gradle init --type java-library

# With Kotlin DSL
gradle init --type java-application --dsl kotlin`}
                                description="Creates a new Gradle project with the specified type."
                                color={gradleColor}
                            />
                            <CommandCard
                                title="Generate Gradle Wrapper"
                                command={`# Generate wrapper files
gradle wrapper

# With specific version
gradle wrapper --gradle-version 8.5

# Verify wrapper
./gradlew --version`}
                                description="Creates wrapper scripts for consistent Gradle version across machines."
                                color={gradleColor}
                            />
                            <CommandCard
                                title="Clean Build"
                                command={`# Clean build directory
./gradlew clean

# Clean and build
./gradlew clean build

# Force clean
./gradlew clean --no-build-cache`}
                                description="Removes the build/ directory containing all build outputs."
                                color={gradleColor}
                            />
                            <CommandCard
                                title="Build Project"
                                command={`# Build (compile + test + jar)
./gradlew build

# Build without tests
./gradlew build -x test

# Build with stacktrace
./gradlew build --stacktrace

# Build with debug info
./gradlew build --debug`}
                                description="Compiles, tests, and creates the project artifacts."
                                color={gradleColor}
                            />
                            <CommandCard
                                title="Run Tests"
                                command={`# Run all tests
./gradlew test

# Run specific test class
./gradlew test --tests "UserServiceTest"

# Run tests matching pattern
./gradlew test --tests "*ServiceTest"

# Run single test method
./gradlew test --tests "UserServiceTest.testCreate"

# Rerun tests (ignore cache)
./gradlew test --rerun-tasks`}
                                description="Executes tests with JUnit Platform support."
                                color={gradleColor}
                            />
                            <CommandCard
                                title="Run Spring Boot Application"
                                command={`# Run application
./gradlew bootRun

# With arguments
./gradlew bootRun --args='--server.port=9090'

# With JVM args
./gradlew bootRun -Dspring.profiles.active=dev`}
                                description="Starts the Spring Boot application with the embedded server."
                                color={gradleColor}
                            />
                            <CommandCard
                                title="View Dependencies"
                                command={`# All dependencies
./gradlew dependencies

# Specific configuration
./gradlew dependencies --configuration implementation

# Dependency insight for specific dependency
./gradlew dependencyInsight --dependency spring-core`}
                                description="Displays the dependency tree for the project."
                                color={gradleColor}
                            />
                            <CommandCard
                                title="List All Tasks"
                                command={`# List available tasks
./gradlew tasks

# All tasks including hidden
./gradlew tasks --all

# Tasks for specific group
./gradlew tasks --group "build"`}
                                description="Shows all available tasks with their descriptions."
                                color={gradleColor}
                            />
                            <CommandCard
                                title="Refresh Dependencies"
                                command={`# Force refresh dependencies
./gradlew build --refresh-dependencies

# Clear Gradle cache
rm -rf ~/.gradle/caches`}
                                description="Forces Gradle to re-download all dependencies."
                                color={gradleColor}
                            />
                            <CommandCard
                                title="Gradle Daemon"
                                command={`# Check daemon status
./gradlew --status

# Stop all daemons
./gradlew --stop

# Run without daemon
./gradlew build --no-daemon`}
                                description="Manage the Gradle daemon for faster subsequent builds."
                                color={gradleColor}
                            />
                        </div>
                    </section>

                    {/* Gradle Tasks */}
                    <section id="gradle-tasks">
                        <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                            <TestTube size={24} className="text-[#1BA94C]" />
                            10. Gradle Tasks & Custom Tasks
                        </h2>
                        <CodeBlock
                            title="build.gradle - Custom Tasks"
                            code={`// Simple task
tasks.register('hello') {
    group = 'Custom'
    description = 'Prints a greeting'
    doLast {
        println 'Hello from Gradle!'
    }
}

// Task with dependencies
tasks.register('printVersion') {
    dependsOn 'build'
    doLast {
        println "Version: \${project.version}"
    }
}

// Copy task
tasks.register('copyResources', Copy) {
    from 'src/main/resources'
    into 'build/config'
    include '**/*.properties'
}

// Delete task
tasks.register('cleanLogs', Delete) {
    delete fileTree('logs') {
        include '**/*.log'
    }
}

// Task with inputs/outputs (incremental)
tasks.register('processData') {
    inputs.file 'data/input.json'
    outputs.file 'build/output.json'
    doLast {
        // Processing logic
    }
}

// Task ordering
tasks.register('deploy') {
    dependsOn 'build'
    mustRunAfter 'test'
    finalizedBy 'cleanup'
    doLast {
        println 'Deploying application...'
    }
}

// Exec task - run external command
tasks.register('runScript', Exec) {
    workingDir 'scripts'
    commandLine 'bash', 'deploy.sh'
}

// Run with: ./gradlew hello`}
                        />

                        <h3 className="text-xl font-bold text-white mt-8 mb-4">Kotlin DSL Custom Tasks</h3>
                        <CodeBlock
                            title="build.gradle.kts - Custom Tasks"
                            code={`tasks.register("hello") {
    group = "Custom"
    description = "Prints a greeting"
    doLast {
        println("Hello from Gradle with Kotlin DSL!")
    }
}

tasks.register<Copy>("copyResources") {
    from("src/main/resources")
    into("build/config")
    include("**/*.properties")
}

tasks.register<Delete>("cleanLogs") {
    delete(fileTree("logs").matching {
        include("**/*.log")
    })
}`}
                        />
                    </section>

                    {/* Gradle Dependencies */}
                    <section id="gradle-dependencies">
                        <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                            <Layers size={24} className="text-[#1BA94C]" />
                            11. Gradle Dependencies
                        </h2>
                        <div className="grid gap-4">
                            <div className="bg-zinc-900/50 border border-[#1BA94C]/20 rounded-lg p-4">
                                <h4 className="text-[#1BA94C] font-semibold mb-2">implementation</h4>
                                <CodeBlock code={`dependencies {
    implementation 'org.springframework:spring-core:6.1.0'
}`} />
                                <p className="text-gray-400 text-sm">Compile-time and runtime dependency. NOT exposed to consumers (API doesn't leak).</p>
                            </div>
                            <div className="bg-zinc-900/50 border border-[#1BA94C]/20 rounded-lg p-4">
                                <h4 className="text-[#1BA94C] font-semibold mb-2">api</h4>
                                <CodeBlock code={`dependencies {
    api 'org.springframework:spring-core:6.1.0'
}`} />
                                <p className="text-gray-400 text-sm">Compile-time and runtime. EXPOSED to consumers. Use for library modules.</p>
                            </div>
                            <div className="bg-zinc-900/50 border border-[#1BA94C]/20 rounded-lg p-4">
                                <h4 className="text-[#1BA94C] font-semibold mb-2">compileOnly</h4>
                                <CodeBlock code={`dependencies {
    compileOnly 'org.projectlombok:lombok:1.18.30'
    annotationProcessor 'org.projectlombok:lombok:1.18.30'
}`} />
                                <p className="text-gray-400 text-sm">Only for compilation, not included in runtime (like Maven's 'provided').</p>
                            </div>
                            <div className="bg-zinc-900/50 border border-[#1BA94C]/20 rounded-lg p-4">
                                <h4 className="text-[#1BA94C] font-semibold mb-2">runtimeOnly</h4>
                                <CodeBlock code={`dependencies {
    runtimeOnly 'com.mysql:mysql-connector-j:8.2.0'
}`} />
                                <p className="text-gray-400 text-sm">Only needed at runtime, not for compilation (e.g., JDBC drivers).</p>
                            </div>
                            <div className="bg-zinc-900/50 border border-[#1BA94C]/20 rounded-lg p-4">
                                <h4 className="text-[#1BA94C] font-semibold mb-2">testImplementation</h4>
                                <CodeBlock code={`dependencies {
    testImplementation 'org.junit.jupiter:junit-jupiter:5.10.0'
    testImplementation 'org.mockito:mockito-core:5.8.0'
}`} />
                                <p className="text-gray-400 text-sm">Only for test compilation and execution.</p>
                            </div>
                        </div>
                    </section>

                    {/* Gradle Multi-Project */}
                    <section id="gradle-multiproject">
                        <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                            <FolderTree size={24} className="text-[#1BA94C]" />
                            12. Gradle Multi-Project Builds
                        </h2>
                        <CodeBlock
                            title="Project Structure"
                            code={`my-project/
├── build.gradle
├── settings.gradle
├── app/
│   └── build.gradle
├── core/
│   └── build.gradle
└── web/
    └── build.gradle`}
                        />
                        <CodeBlock
                            title="settings.gradle"
                            code={`rootProject.name = 'my-project'

include 'app'
include 'core'
include 'web'`}
                        />
                        <CodeBlock
                            title="Root build.gradle"
                            code={`// Common configuration for all subprojects
subprojects {
    apply plugin: 'java'
    
    group = 'com.example'
    version = '1.0.0'
    
    java {
        sourceCompatibility = JavaVersion.VERSION_17
    }
    
    repositories {
        mavenCentral()
    }
    
    dependencies {
        testImplementation 'org.junit.jupiter:junit-jupiter:5.10.0'
    }
    
    tasks.named('test') {
        useJUnitPlatform()
    }
}

// Configure specific project
project(':web') {
    dependencies {
        implementation project(':core')
    }
}`}
                        />
                        <CodeBlock
                            title="Subproject build.gradle (app/build.gradle)"
                            code={`plugins {
    id 'application'
}

dependencies {
    implementation project(':core')
    implementation 'org.springframework.boot:spring-boot-starter-web:3.2.0'
}

application {
    mainClass = 'com.example.App'
}`}
                        />
                    </section>

                    {/* Troubleshooting */}
                    <section id="troubleshooting">
                        <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                            <AlertTriangle size={24} className="text-amber-500" />
                            13. Troubleshooting Guide
                        </h2>

                        <h3 className="text-xl font-bold text-[#C71A36] mb-4">Maven Troubleshooting</h3>
                        <div className="grid gap-4 mb-8">
                            <CommandCard
                                title="Force Update Snapshots"
                                command={`mvn clean install -U`}
                                description="Forces Maven to check for updated snapshots on remote repositories."
                                color={mavenColor}
                            />
                            <CommandCard
                                title="Debug Mode"
                                command={`mvn clean install -X`}
                                description="Enables debug output for troubleshooting build issues."
                                color={mavenColor}
                            />
                            <CommandCard
                                title="Offline Mode"
                                command={`mvn clean install -o`}
                                description="Runs Maven in offline mode using only cached dependencies."
                                color={mavenColor}
                            />
                            <CommandCard
                                title="Clear Local Repository"
                                command={`# Remove specific artifact
rm -rf ~/.m2/repository/com/example/my-artifact

# Clear entire cache (use with caution)
rm -rf ~/.m2/repository`}
                                description="Clears cached dependencies when you have corruption issues."
                                color={mavenColor}
                            />
                            <CommandCard
                                title="Analyze Dependencies"
                                command={`# Find unused/undeclared dependencies
mvn dependency:analyze

# Resolve conflicts
mvn dependency:tree -Dverbose -Dincludes=groupId:artifactId`}
                                description="Helps identify dependency issues and conflicts."
                                color={mavenColor}
                            />
                        </div>

                        <h3 className="text-xl font-bold text-[#1BA94C] mb-4">Gradle Troubleshooting</h3>
                        <div className="grid gap-4">
                            <CommandCard
                                title="Build Scan"
                                command={`./gradlew build --scan`}
                                description="Generates a detailed build report to diagnose issues."
                                color={gradleColor}
                            />
                            <CommandCard
                                title="Stacktrace and Info"
                                command={`./gradlew build --stacktrace --info`}
                                description="Shows full stacktrace and additional info for debugging."
                                color={gradleColor}
                            />
                            <CommandCard
                                title="Clean Cache"
                                command={`# Stop daemon first
./gradlew --stop

# Clear project build cache
rm -rf .gradle build

# Clear global cache
rm -rf ~/.gradle/caches`}
                                description="Clears Gradle caches when experiencing strange build behaviors."
                                color={gradleColor}
                            />
                            <CommandCard
                                title="Check Build Configuration"
                                command={`# Show all properties
./gradlew properties

# Show specific project info
./gradlew projects

# Configuration report
./gradlew buildEnvironment`}
                                description="Displays build configuration for debugging."
                                color={gradleColor}
                            />
                        </div>
                    </section>

                    {/* Best Practices */}
                    <section id="best-practices">
                        <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                            <Rocket size={24} className="text-accent" />
                            14. Best Practices
                        </h2>
                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="bg-zinc-900/50 border border-[#C71A36]/20 rounded-lg p-6">
                                <h3 className="text-[#C71A36] font-bold text-lg mb-4 flex items-center gap-2">
                                    <Package size={20} />
                                    Maven Best Practices
                                </h3>
                                <ul className="space-y-3 text-gray-400 text-sm">
                                    <li className="flex items-start gap-2">
                                        <span className="text-[#C71A36]">✓</span>
                                        Use Maven Wrapper (mvnw) for consistency
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-[#C71A36]">✓</span>
                                        Define versions in &lt;properties&gt; section
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-[#C71A36]">✓</span>
                                        Use dependencyManagement for multi-module
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-[#C71A36]">✓</span>
                                        Keep pom.xml organized and well-commented
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-[#C71A36]">✓</span>
                                        Use profiles for different environments
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-[#C71A36]">✓</span>
                                        Pin plugin versions explicitly
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-[#C71A36]">✓</span>
                                        Use BOM for dependency version management
                                    </li>
                                </ul>
                            </div>
                            <div className="bg-zinc-900/50 border border-[#1BA94C]/20 rounded-lg p-6">
                                <h3 className="text-[#1BA94C] font-bold text-lg mb-4 flex items-center gap-2">
                                    <Zap size={20} />
                                    Gradle Best Practices
                                </h3>
                                <ul className="space-y-3 text-gray-400 text-sm">
                                    <li className="flex items-start gap-2">
                                        <span className="text-[#1BA94C]">✓</span>
                                        Always use Gradle Wrapper (gradlew)
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-[#1BA94C]">✓</span>
                                        Prefer Kotlin DSL for type safety
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-[#1BA94C]">✓</span>
                                        Enable build cache for faster builds
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-[#1BA94C]">✓</span>
                                        Use implementation over compile (deprecated)
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-[#1BA94C]">✓</span>
                                        Configure parallel execution
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-[#1BA94C]">✓</span>
                                        Use version catalogs for dependency management
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-[#1BA94C]">✓</span>
                                        Leverage the Gradle daemon
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="mt-8 bg-accent/10 border border-accent/30 rounded-lg p-6">
                            <h4 className="text-accent font-semibold mb-4 text-lg">💡 Which Tool Should You Choose?</h4>
                            <div className="grid md:grid-cols-2 gap-6 text-gray-400">
                                <div>
                                    <h5 className="text-[#C71A36] font-semibold mb-2">Choose Maven When:</h5>
                                    <ul className="text-sm space-y-1">
                                        <li>• Your team is familiar with XML</li>
                                        <li>• You want convention over configuration</li>
                                        <li>• Using enterprise Java with stable setup</li>
                                        <li>• Project structure is simple and standard</li>
                                    </ul>
                                </div>
                                <div>
                                    <h5 className="text-[#1BA94C] font-semibold mb-2">Choose Gradle When:</h5>
                                    <ul className="text-sm space-y-1">
                                        <li>• Building Android applications</li>
                                        <li>• Need complex multi-module projects</li>
                                        <li>• Build performance is critical</li>
                                        <li>• Need custom build logic flexibility</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="mt-6 bg-zinc-900/50 border border-white/10 rounded-lg p-6">
                            <h4 className="text-white font-semibold mb-4 flex items-center gap-2">
                                <Shield size={20} className="text-accent" />
                                Performance Optimization Tips
                            </h4>
                            <div className="grid md:grid-cols-2 gap-4 text-sm text-gray-400">
                                <div>
                                    <h5 className="text-[#C71A36] font-semibold mb-2">Maven</h5>
                                    <CodeBlock code={`# Enable parallel builds
mvn -T 4 clean install

# Skip tests for faster builds
mvn package -DskipTests

# Use specific reactor options
mvn install -pl module-name -am`} />
                                </div>
                                <div>
                                    <h5 className="text-[#1BA94C] font-semibold mb-2">Gradle</h5>
                                    <CodeBlock code={`# gradle.properties
org.gradle.parallel=true
org.gradle.caching=true
org.gradle.daemon=true
org.gradle.jvmargs=-Xmx2g`} />
                                </div>
                            </div>
                        </div>
                    </section>
                </div>

                {/* Footer */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="mt-16 pt-8 border-t border-white/10"
                >
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        <p className="text-gray-400 text-sm">
                            Written by <span className="text-accent">Ramjee Prasad</span> • Backend Developer
                        </p>
                        <Link
                            href="/"
                            className="text-accent hover:underline text-sm"
                        >
                            ← Back to Portfolio
                        </Link>
                    </div>
                </motion.div>
            </div>
        </main>
    );
}
