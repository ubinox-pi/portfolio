export default function JsonLd() {
    const personSchema = {
        "@context": "https://schema.org",
        "@type": "Person",
        "name": "Ramjee Prasad",
        "jobTitle": "Backend Developer",
        "description": "Backend Engineer specializing in Java, Spring Boot, Microservices, and Distributed Systems",
        "url": "https://portfolio-three-azure-84.vercel.app",
        "image": "https://portfolio-three-azure-84.vercel.app/ramjee_passport.png",
        "email": "mailto:ashish23481@gmail.com",
        "telephone": "+91-9801112671",
        "address": {
            "@type": "PostalAddress",
            "addressLocality": "Jamshedpur",
            "addressCountry": "India"
        },
        "sameAs": [
            "https://github.com/ubinox-pi",
            "https://www.linkedin.com/in/ramjee-prasad-6b26b4349"
        ],
        "knowsAbout": [
            "Java",
            "Spring Boot",
            "Spring WebFlux",
            "Microservices",
            "REST API",
            "Docker",
            "Kubernetes",
            "PostgreSQL",
            "Redis",
            "Apache Kafka"
        ],
        "alumniOf": {
            "@type": "EducationalOrganization",
            "name": "Bachelor of Technology in Computer Science"
        }
    };

    const websiteSchema = {
        "@context": "https://schema.org",
        "@type": "WebSite",
        "name": "Ramjee Prasad - Backend Developer Portfolio",
        "url": "https://portfolio-three-azure-84.vercel.app",
        "description": "Portfolio website of Ramjee Prasad, a Backend Developer specializing in Java, Spring Boot, and Microservices",
        "author": {
            "@type": "Person",
            "name": "Ramjee Prasad"
        }
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
        </>
    );
}
