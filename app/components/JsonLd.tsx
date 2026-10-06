export default function JsonLd() {
    const baseUrl = "https://www.ramjeeprasad.online";

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
        "description": "Ramjee Prasad is a Backend Developer from Jamshedpur, Jharkhand, India specializing in Java, Spring Boot, Spring WebFlux, Microservices, REST APIs, PostgreSQL, Docker, and distributed architectures. NPTEL Elite certified in Java, DBMS, and Computer Networks. Certified in Spring WebFlux and Reactive Java. Available for hire.",
        "url": baseUrl,
        "image": `${baseUrl}/og-image.png`,
        "email": ["mailto:ramjeeprasad.dev@gmail.com", "mailto:ramjeeprasad@zohomail.in"],
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
        "hasCredential": [
            {
                "@type": "EducationalOccupationalCredential",
                "name": "Spring WebFlux Masterclass: High-Performance Reactive APIs",
                "credentialCategory": "Certificate",
                "recognizedBy": {
                    "@type": "Organization",
                    "name": "Udemy"
                },
                "url": `${baseUrl}/Spring_WebFlux_Masterclass_High-Performance_Reactive_APIs_Ramjee.jpg`
            },
            {
                "@type": "EducationalOccupationalCredential",
                "name": "Mastering Java Reactive Programming [From Scratch]",
                "credentialCategory": "Certificate",
                "recognizedBy": {
                    "@type": "Organization",
                    "name": "Udemy"
                },
                "url": `${baseUrl}/Mastering_Java_Reactive_Programming_Ramjee.jpg`
            },
            {
                "@type": "EducationalOccupationalCredential",
                "name": "Programming In Java - Elite Certification",
                "credentialCategory": "Certificate",
                "recognizedBy": {
                    "@type": "EducationalOrganization",
                    "name": "NPTEL - Ministry of Education, Govt. of India"
                },
                "url": `${baseUrl}/Programming_In_Java_Ramjee.jpg`
            },
            {
                "@type": "EducationalOccupationalCredential",
                "name": "Database Management System - Elite Certification",
                "credentialCategory": "Certificate",
                "recognizedBy": {
                    "@type": "EducationalOrganization",
                    "name": "NPTEL - Ministry of Education, Govt. of India"
                },
                "url": `${baseUrl}/Data_Base_Management_System_Ramjee.jpg`
            },
            {
                "@type": "EducationalOccupationalCredential",
                "name": "Computer Networks and Internet Protocol - Elite Certification",
                "credentialCategory": "Certificate",
                "recognizedBy": {
                    "@type": "EducationalOrganization",
                    "name": "NPTEL - Ministry of Education, Govt. of India"
                },
                "url": `${baseUrl}/Computer_Networks_and_Internet_Protocol_Ramjee.jpg`
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
            baseUrl
        ],
        "knowsAbout": [
            "Java",
            "Java Programming",
            "Java 21",
            "Java 25",
            "Spring Boot",
            "Spring Boot 3",
            "Spring Boot 4",
            "Spring Framework",
            "Spring MVC",
            "Spring Security",
            "Spring Data",
            "Spring data JPA",
            "Spring WebFlux",
            "Reactive Programming",
            "Project Reactor",
            "Microservices",
            "Microservices Architecture",
            "REST API",
            "RESTful Web Services",
            "Docker",
            "Docker Compose",
            "Kubernetes",
            "PostgreSQL",
            "MySQL",
            "MongoDB",
            "Redis",
            "Apache Kafka",
            "Neo4j",
            "JavaFX",
            "Peer-to-Peer (P2P)",
            "Kademlia DHT",
            "Cryptography",
            "Stripe Payments",
            "Next.js",
            "WebRTC",
            "WebSocket",
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
            "Software Engineering",
            "Software Architecture",
            "Database Design"
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
        "url": baseUrl,
        "description": "Portfolio website of Ramjee Prasad, a Backend Developer specializing in Java, Spring Boot, Microservices, and Reactive Systems.",
        "publisher": {
            "@type": "Person",
            "name": "Ramjee Prasad",
            "url": baseUrl
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
        "url": baseUrl,
        "mainEntity": {
            "@type": "Person",
            "name": "Ramjee Prasad"
        },
        "publisher": {
            "@type": "Person",
            "name": "Ramjee Prasad",
            "url": baseUrl,
            "image": `${baseUrl}/og-image.png`
        },
        "image": `${baseUrl}/og-image.png`,
        "primaryImageOfPage": {
            "@type": "ImageObject",
            "url": `${baseUrl}/og-image.png`
        }
    };

    // Projects schema for rich Google Search indexing
    const projectsSchema = {
        "@context": "https://schema.org",
        "@type": "ItemList",
        "name": "Featured Projects by Ramjee Prasad",
        "itemListElement": [
            {
                "@type": "SoftwareSourceCode",
                "position": 1,
                "name": "Neptune Bank",
                "description": "Modular banking system with 10+ independently deployable microservices including auth, transaction, and accounts, with reactive API Gateway and Docker Compose.",
                "programmingLanguage": "Java",
                "codeRepository": "https://github.com/ubinox-pi/Banking-System",
                "author": {
                    "@type": "Person",
                    "name": "Ramjee Prasad"
                }
            },
            {
                "@type": "SoftwareSourceCode",
                "position": 2,
                "name": "Convo",
                "description": "Real-time bidirectional chat and user presence backend using WebSocket, STOMP, WebRTC signaling for audio/video calling, and Firebase cloud storage.",
                "programmingLanguage": "Java",
                "codeRepository": "https://github.com/ubinox-pi/Convo",
                "author": {
                    "@type": "Person",
                    "name": "Ramjee Prasad"
                }
            },
            {
                "@type": "SoftwareSourceCode",
                "position": 3,
                "name": "Lovable Clone",
                "description": "AI-powered full-stack web development platform with Spring AI agentic streaming, Kubernetes sandbox runners, and dynamic reverse proxy live previews.",
                "programmingLanguage": "Java",
                "codeRepository": "https://github.com/ubinox-pi/lovable",
                "author": {
                    "@type": "Person",
                    "name": "Ramjee Prasad"
                }
            },
            {
                "@type": "SoftwareSourceCode",
                "position": 4,
                "name": "ANONET",
                "description": "Encrypted peer-to-peer file transfer system featuring JavaFX client, deterministic EC seed identities, Kademlia DHT lookup, NAT traversal, and onion routing relays.",
                "programmingLanguage": "Java",
                "codeRepository": "https://github.com/ubinox-pi/anonet",
                "author": {
                    "@type": "Person",
                    "name": "Ramjee Prasad"
                }
            },
            {
                "@type": "SoftwareSourceCode",
                "position": 5,
                "name": "Airbnb Clone",
                "description": "Hotel booking and property management REST API built with Spring Boot, dynamic inventory surge pricing, Stripe payments, and manager analytics.",
                "programmingLanguage": "Java",
                "codeRepository": "https://github.com/ubinox-pi/airbnb",
                "author": {
                    "@type": "Person",
                    "name": "Ramjee Prasad"
                }
            },
            {
                "@type": "SoftwareSourceCode",
                "position": 6,
                "name": "LinkedIn Clone",
                "description": "Distributed microservices social platform featuring Eureka discovery, API Gateway, event-driven messaging with Apache Kafka, Neo4j graph database, and Kubernetes manifests.",
                "programmingLanguage": "Java",
                "codeRepository": "https://github.com/ubinox-pi/linkdin-clone",
                "author": {
                    "@type": "Person",
                    "name": "Ramjee Prasad"
                }
            }
        ]
    };

    // FAQ Schema for Google AI Overviews and Rich Snippets
    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
            {
                "@type": "Question",
                "name": "Who is Ramjee Prasad?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Ramjee Prasad is a Backend Developer from Jamshedpur, Jharkhand, India specializing in Java, Spring Boot, Spring WebFlux, Microservices, REST APIs, PostgreSQL, Docker, and distributed architectures. He is a B.Tech CSE student at Silicon Institute of Technology, Sambalpur."
                }
            },
            {
                "@type": "Question",
                "name": "What certifications does Ramjee Prasad hold?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Ramjee Prasad holds 5 verified credentials: Spring WebFlux Masterclass: High-Performance Reactive APIs (Udemy - Vinoth Selvaraj), Mastering Java Reactive Programming [From Scratch] (Udemy - Vinoth Selvaraj), Programming In Java (NPTEL Elite Certification), Database Management System (NPTEL Elite Certification), and Computer Networks and Internet Protocol (NPTEL Elite Certification)."
                }
            },
            {
                "@type": "Question",
                "name": "What projects has Ramjee Prasad worked on?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Ramjee Prasad has built major backend systems: 1) Neptune Bank (10+ microservices modular banking architecture), 2) Convo (WebSocket/STOMP & WebRTC real-time chat backend), 3) Lovable Clone (AI web development platform with Spring AI & Kubernetes sandbox), 4) ANONET (Decentralized encrypted P2P file transfer with JavaFX, DHT, & onion relays), 5) Airbnb Clone (Hotel booking API with dynamic surge pricing & Stripe checkout), and 6) LinkedIn Clone (Event-driven social platform microservices with Apache Kafka & Neo4j)."
                }
            },
            {
                "@type": "Question",
                "name": "What is ANONET created by Ramjee Prasad?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "ANONET is an encrypted peer-to-peer (P2P) file transfer desktop application built with Java 25 and JavaFX. It includes decentralized deterministic EC identity creation via 12-word seed phrases, Kademlia DHT peer lookup, NAT traversal with UDP hole punching, relay/onion routing fallback, and a Next.js 16 marketing website."
                }
            },
            {
                "@type": "Question",
                "name": "What is Ramjee Prasad's LinkedIn Clone microservices architecture?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Ramjee Prasad's LinkedIn Clone is a distributed microservices platform featuring user, post, connections, notification, and uploader services orchestrated with Spring Cloud Gateway and Eureka Discovery Server. It uses PostgreSQL for relational data, Neo4j graph database for user connections, and Apache Kafka with Zookeeper for asynchronous event streaming, containerized with Docker and Kubernetes manifests."
                }
            },
            {
                "@type": "Question",
                "name": "What technologies does Ramjee Prasad know?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Ramjee Prasad is proficient in Java, Spring Boot, Spring WebFlux, Spring Security, Spring Data JPA, Microservices Architecture, REST APIs, PostgreSQL, MySQL, MongoDB, Redis, Apache Kafka, Neo4j, Docker, Kubernetes, JavaFX, P2P networking, Stripe API, Git, GitHub, Maven, Gradle, JPA, and Hibernate."
                }
            },
            {
                "@type": "Question",
                "name": "Where is Ramjee Prasad from?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Ramjee Prasad is from Jamshedpur, Jharkhand, India. He studies at Silicon Institute of Technology in Sambalpur, Odisha."
                }
            },
            {
                "@type": "Question",
                "name": "How to contact Ramjee Prasad?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "You can contact Ramjee Prasad via email at ramjeeprasad.dev@gmail.com or ramjeeprasad@zohomail.in, or by phone at +91-9801112671 or +91-8227865178. You can also connect on GitHub (ubinox-pi), LinkedIn, Instagram (ramjeeprasad.java), or Twitter/X (ramjee__prasad)."
                }
            },
            {
                "@type": "Question",
                "name": "Is Ramjee Prasad available for hire?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, Ramjee Prasad is actively available for hire as a Backend Developer, Java Developer, or Spring Boot Engineer. He is open to full-time roles, internships, and freelance projects. Visit ramjeeprasad.online to view his projects and resume."
                }
            },
            {
                "@type": "Question",
                "name": "What is Ramjee Prasad's GitHub username?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Ramjee Prasad's GitHub username is ubinox-pi. You can find his repositories at github.com/ubinox-pi."
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
                dangerouslySetInnerHTML={{ __html: JSON.stringify(projectsSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />
        </>
    );
}
