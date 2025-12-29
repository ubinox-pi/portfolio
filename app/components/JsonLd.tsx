export default function JsonLd() {
    const personSchema = {
        "@context": "https://schema.org",
        "@type": "Person",
        "name": "Ramjee Prasad",
        "jobTitle": "Backend Developer",
        "description": "Backend Developer specializing in Java, Spring Boot, Microservices, and REST APIs",
        "url": "https://ramjeeprasad.online",
        "image": "https://ramjeeprasad.online/ramjee_passport.png",
        "email": "mailto:ashish23481@gmail.com",
        "telephone": "+91-9801112671",
        "address": {
            "@type": "PostalAddress",
            "addressLocality": "Jamshedpur",
            "addressCountry": "India"
        },
        "sameAs": [
            "https://github.com/ubinox-pi",
            "https://www.linkedin.com/in/ramjee-prasad-6b26b4349",
            "https://ramjeeprasad.online",
            "https://ramjeeprasad.vercel.app",
            "https://ashishkushwaha.vercel.app"
        ],
        "knowsAbout": [
            "Java",
            "Spring Boot",
            "Microservices",
            "REST API",
            "Docker",
            "PostgreSQL",
            "Redis"
        ]
    };

    const websiteSchema = {
        "@context": "https://schema.org",
        "@type": "WebSite",
        "name": "Ramjee Prasad Portfolio",
        "alternateName": "Ramjee Prasad - Backend Developer",
        "url": "https://ramjeeprasad.online",
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
