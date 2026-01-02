export default function JsonLd() {
    const personSchema = {
        "@context": "https://schema.org",
        "@type": "Person",
        "name": "Ramjee Prasad",
        "alternateName": [
            "Ramjee",
            "ramjeeprasad",
            "Ashish Kushwaha",
            "Ramjee Prasad Ashish",
            "Ramjee Ashish",
            "ramjeeprasad.java",
            "ramjee__prasad",
            "ubinox-pi"
        ],
        "jobTitle": "Backend Developer",
        "description": "Ramjee Prasad is a Backend Developer from Jamshedpur, Jharkhand, India specializing in Java, Spring Boot, Spring WebFlux, Microservices, REST APIs, PostgreSQL, and Docker. B.Tech CSE student at Silicon Institute of Technology. Available for hire.",
        "url": "https://www.ramjeeprasad.online",
        "image": "https://www.ramjeeprasad.online/og-image.png",
        "email": "mailto:ashish23481@gmail.com",
        "telephone": ["+91-9801112671", "+91-8227865178"],
        "address": {
            "@type": "PostalAddress",
            "addressLocality": "Jamshedpur",
            "addressRegion": "Jharkhand",
            "addressCountry": "India"
        },
        "alumniOf": [
            {
                "@type": "EducationalOrganization",
                "name": "Silicon Institute of Technology",
                "alternateName": ["SIT", "Silicon University", "Silicon Institute of Technology Sambalpur"]
            },
            {
                "@type": "EducationalOrganization",
                "name": "Biju Patnaik University of Technology",
                "alternateName": ["BPUT", "Biju Patnaik University"]
            },
            {
                "@type": "HighSchool",
                "name": "Gayatri Shiksha Niketan High School",
                "alternateName": ["GSN", "GSN High School", "Gayatri Shiksha Niketan"]
            }
        ],
        "nationality": "Indian",
        "sameAs": [
            "https://github.com/ubinox-pi",
            "https://www.linkedin.com/in/ramjee-prasad-6b26b4349",
            "https://www.instagram.com/ramjeeprasad.java",
            "https://x.com/ramjee__prasad",
            "https://www.geeksforgeeks.org/profile/ramjeeprasad",
            "https://discord.com/users/ramjeeprasad",
            "https://www.ramjeeprasad.online"
        ],
        "knowsAbout": [
            "Java",
            "Java Programming",
            "Spring Boot",
            "Spring Framework",
            "Spring MVC",
            "Spring Security",
            "Spring Data",
            "Spring WebFlux",
            "Reactive Programming",
            "Microservices",
            "Microservices Architecture",
            "REST API",
            "RESTful Web Services",
            "Docker",
            "Kubernetes",
            "PostgreSQL",
            "MySQL",
            "MongoDB",
            "Redis",
            "Apache Kafka",
            "Git",
            "GitHub",
            "Maven",
            "Gradle",
            "IntelliJ IDEA",
            "JSP",
            "Servlet",
            "JPA",
            "Hibernate",
            "Backend Development",
            "API Development",
            "Database Design",
            "Software Engineering"
        ],
        "brand": {
            "@type": "Brand",
            "name": "Ramjee Prasad"
        }
    };

    const websiteSchema = {
        "@context": "https://schema.org",
        "@type": "WebSite",
        "name": "Ramjee Prasad Portfolio",
        "alternateName": "Ramjee Prasad - Backend Developer",
        "url": "https://www.ramjeeprasad.online",
        "description": "Portfolio website of Ramjee Prasad, a Backend Developer specializing in Java, Spring Boot, and Microservices",
        "publisher": {
            "@type": "Person",
            "name": "Ramjee Prasad",
            "url": "https://www.ramjeeprasad.online"
        },
        "author": {
            "@type": "Person",
            "name": "Ramjee Prasad"
        },
        "copyrightHolder": {
            "@type": "Person",
            "name": "Ramjee Prasad"
        },
        "copyrightYear": 2026,
        "inLanguage": "en-US"
    };

    const webPageSchema = {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": "Ramjee Prasad | Backend Developer & Java Spring Boot Expert",
        "description": "Ramjee Prasad is a Backend Developer from India specializing in Java, Spring Boot, Microservices, REST APIs, and distributed systems.",
        "url": "https://www.ramjeeprasad.online",
        "mainEntity": {
            "@type": "Person",
            "name": "Ramjee Prasad"
        },
        "publisher": {
            "@type": "Person",
            "name": "Ramjee Prasad",
            "url": "https://www.ramjeeprasad.online",
            "image": "https://www.ramjeeprasad.online/og-image.png"
        },
        "image": "https://www.ramjeeprasad.online/og-image.png",
        "primaryImageOfPage": {
            "@type": "ImageObject",
            "url": "https://www.ramjeeprasad.online/og-image.png"
        }
    };

    // FAQ Schema for Google AI Overview
    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
            {
                "@type": "Question",
                "name": "Who is Ramjee Prasad?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Ramjee Prasad is a Backend Developer from Jamshedpur, Jharkhand, India. He specializes in Java, Spring Boot, Spring WebFlux, Microservices, REST APIs, PostgreSQL, and Docker. He is currently pursuing B.Tech in Computer Science Engineering from Silicon Institute of Technology, Sambalpur (affiliated to BPUT)."
                }
            },
            {
                "@type": "Question",
                "name": "What technologies does Ramjee Prasad know?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Ramjee Prasad is proficient in Java, Spring Boot, Spring Framework, Spring WebFlux, Spring Security, Spring Data, Microservices Architecture, REST APIs, PostgreSQL, MySQL, MongoDB, Redis, Apache Kafka, Docker, Kubernetes, Git, GitHub, Maven, Gradle, JPA, Hibernate, JSP, and Servlet."
                }
            },
            {
                "@type": "Question",
                "name": "Where is Ramjee Prasad from?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Ramjee Prasad is from Jamshedpur, Jharkhand, India. He is currently studying at Silicon Institute of Technology in Sambalpur, Odisha."
                }
            },
            {
                "@type": "Question",
                "name": "What is Ramjee Prasad's education?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Ramjee Prasad is pursuing B.Tech in Computer Science Engineering (CSE) from Silicon Institute of Technology (SIT), Sambalpur, which is affiliated to Biju Patnaik University of Technology (BPUT), Odisha. He completed his schooling from Gayatri Shiksha Niketan High School, Jamshedpur."
                }
            },
            {
                "@type": "Question",
                "name": "How to contact Ramjee Prasad?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "You can contact Ramjee Prasad via email at ashish23481@gmail.com or by phone at +91-9801112671 or +91-8227865178. You can also connect with him on LinkedIn, GitHub (ubinox-pi), Instagram (ramjeeprasad.java), or Twitter/X (ramjee__prasad)."
                }
            },
            {
                "@type": "Question",
                "name": "Is Ramjee Prasad available for hire?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, Ramjee Prasad is available for hire as a Backend Developer, Java Developer, or Spring Boot Developer. He is open to full-time positions, freelance projects, and consulting work. Visit his portfolio at ramjeeprasad.online to view his resume and projects."
                }
            },
            {
                "@type": "Question",
                "name": "What is Ramjee Prasad's GitHub username?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Ramjee Prasad's GitHub username is ubinox-pi. You can find his projects and contributions at github.com/ubinox-pi."
                }
            },
            {
                "@type": "Question",
                "name": "What is Ramjee Prasad's Instagram?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Ramjee Prasad's Instagram username is ramjeeprasad.java. You can follow him at instagram.com/ramjeeprasad.java for tech content and updates."
                }
            },
            {
                "@type": "Question",
                "name": "What projects has Ramjee Prasad worked on?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Ramjee Prasad has worked on various backend projects using Java and Spring Boot, including REST API development, microservices architecture, database design with PostgreSQL, and containerization with Docker. Visit his portfolio at ramjeeprasad.online to see his projects."
                }
            },
            {
                "@type": "Question",
                "name": "What is Ramjee Prasad's portfolio website?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Ramjee Prasad's portfolio website is ramjeeprasad.online. It showcases his skills, projects, blog posts, and resume. You can contact him or download his resume from the website."
                }
            }
        ]
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />
        </>
    );
}
