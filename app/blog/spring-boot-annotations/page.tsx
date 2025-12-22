"use client";

import { motion } from "framer-motion";
import { ArrowLeft, Calendar, Clock, User, Copy, Check, ChevronDown, ChevronUp } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import BackToTop from "../../components/BackToTop";

const springGreen = "#6db33f";

// Code block component with copy functionality
function CodeBlock({ code, language = "java" }: { code: string; language?: string }) {
    const [copied, setCopied] = useState(false);

    const copyCode = () => {
        navigator.clipboard.writeText(code);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div className="relative group my-6">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-[#6db33f]/30 to-[#6db33f]/10 rounded-lg blur opacity-50 group-hover:opacity-75 transition" />
            <div className="relative bg-[#0d1117] rounded-lg border border-white/10 overflow-hidden">
                <div className="flex items-center justify-between px-4 py-2 border-b border-white/10 bg-white/5">
                    <span className="text-xs text-gray-400 font-mono">{language}</span>
                    <button
                        onClick={copyCode}
                        className="flex items-center gap-1 text-xs text-gray-400 hover:text-white transition-colors"
                    >
                        {copied ? <Check size={14} className="text-green-400" /> : <Copy size={14} />}
                        {copied ? "Copied!" : "Copy"}
                    </button>
                </div>
                <pre className="p-4 overflow-x-auto text-sm">
                    <code className="text-gray-300 font-mono">{code}</code>
                </pre>
            </div>
        </div>
    );
}

// Collapsible annotation section
function AnnotationSection({
    title,
    annotation,
    description,
    example,
    tips
}: {
    title: string;
    annotation: string;
    description: string;
    example: string;
    tips?: string[];
}) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="border border-white/10 rounded-lg overflow-hidden mb-4 hover:border-[#6db33f]/50 transition-colors"
        >
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full flex items-center justify-between p-4 bg-white/5 hover:bg-white/10 transition-colors text-left"
            >
                <div className="flex items-center gap-3">
                    <span className="text-[#6db33f] font-mono font-bold text-lg">{annotation}</span>
                    <span className="text-gray-400">-</span>
                    <span className="text-white">{title}</span>
                </div>
                {isOpen ? <ChevronUp className="text-gray-400" /> : <ChevronDown className="text-gray-400" />}
            </button>

            {isOpen && (
                <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    className="p-4 bg-zinc-900/50"
                >
                    <p className="text-gray-400 mb-4">{description}</p>
                    <CodeBlock code={example} />
                    {tips && tips.length > 0 && (
                        <div className="mt-4 p-3 bg-[#6db33f]/10 border border-[#6db33f]/30 rounded-lg">
                            <h4 className="text-[#6db33f] font-bold mb-2 text-sm">💡 Pro Tips:</h4>
                            <ul className="text-sm text-gray-400 space-y-1">
                                {tips.map((tip, i) => (
                                    <li key={i}>• {tip}</li>
                                ))}
                            </ul>
                        </div>
                    )}
                </motion.div>
            )}
        </motion.div>
    );
}

const annotations = [
    {
        title: "Application Entry Point",
        annotation: "@SpringBootApplication",
        description: "The heart of every Spring Boot application. This annotation combines @Configuration, @EnableAutoConfiguration, and @ComponentScan, making it the perfect starting point for your application.",
        example: `@SpringBootApplication
public class MyApplication {
    public static void main(String[] args) {
        SpringApplication.run(MyApplication.class, args);
    }
}`,
        tips: [
            "Place this in your root package for optimal component scanning",
            "Use exclude attribute to disable specific auto-configurations",
            "Combines three annotations: @Configuration, @EnableAutoConfiguration, @ComponentScan"
        ]
    },
    {
        title: "REST Controller",
        annotation: "@RestController",
        description: "Marks a class as a RESTful web controller. Combines @Controller and @ResponseBody, meaning every method returns domain objects instead of views.",
        example: `@RestController
@RequestMapping("/api/users")
public class UserController {
    
    @GetMapping("/{id}")
    public User getUser(@PathVariable Long id) {
        return userService.findById(id);
    }
    
    @PostMapping
    public User createUser(@RequestBody User user) {
        return userService.save(user);
    }
}`,
        tips: [
            "Use @RequestMapping at class level for base path",
            "Prefer @GetMapping, @PostMapping over @RequestMapping for clarity",
            "Always use proper HTTP methods for RESTful design"
        ]
    },
    {
        title: "Dependency Injection",
        annotation: "@Autowired",
        description: "Enables automatic dependency injection by Spring's IoC container. Spring automatically resolves and injects collaborating beans into your class.",
        example: `@Service
public class OrderService {
    
    private final UserRepository userRepository;
    private final PaymentService paymentService;
    
    @Autowired // Optional on constructor injection since Spring 4.3
    public OrderService(UserRepository userRepository, 
                        PaymentService paymentService) {
        this.userRepository = userRepository;
        this.paymentService = paymentService;
    }
}`,
        tips: [
            "Prefer constructor injection over field injection",
            "@Autowired is optional on single constructor since Spring 4.3",
            "Use @Qualifier when multiple beans of same type exist"
        ]
    },
    {
        title: "Service Layer",
        annotation: "@Service",
        description: "Indicates that a class holds business logic. It's a specialization of @Component that makes the intent clearer and enables exception translation.",
        example: `@Service
@Transactional
public class ProductService {
    
    private final ProductRepository productRepository;
    
    public ProductService(ProductRepository productRepository) {
        this.productRepository = productRepository;
    }
    
    public Product createProduct(ProductDTO dto) {
        Product product = new Product(dto.getName(), dto.getPrice());
        return productRepository.save(product);
    }
}`,
        tips: [
            "Keep business logic here, not in controllers",
            "Use @Transactional for database operations",
            "Services should be stateless for thread safety"
        ]
    },
    {
        title: "Data Access Layer",
        annotation: "@Repository",
        description: "Marks a class as a Data Access Object (DAO). Provides exception translation from database-specific exceptions to Spring's DataAccessException.",
        example: `@Repository
public interface UserRepository extends JpaRepository<User, Long> {
    
    Optional<User> findByEmail(String email);
    
    @Query("SELECT u FROM User u WHERE u.status = :status")
    List<User> findByStatus(@Param("status") UserStatus status);
    
    @Modifying
    @Query("UPDATE User u SET u.lastLogin = :time WHERE u.id = :id")
    void updateLastLogin(@Param("id") Long id, @Param("time") LocalDateTime time);
}`,
        tips: [
            "Extend JpaRepository for CRUD operations out of the box",
            "Use method naming conventions for query derivation",
            "@Modifying is required for UPDATE/DELETE queries"
        ]
    },
    {
        title: "Configuration Class",
        annotation: "@Configuration",
        description: "Indicates that a class declares one or more @Bean methods. Spring container will process these and generate bean definitions at runtime.",
        example: `@Configuration
public class AppConfig {
    
    @Bean
    public RestTemplate restTemplate() {
        return new RestTemplateBuilder()
            .setConnectTimeout(Duration.ofSeconds(5))
            .setReadTimeout(Duration.ofSeconds(10))
            .build();
    }
    
    @Bean
    @Profile("dev")
    public DataSource devDataSource() {
        return DataSourceBuilder.create()
            .url("jdbc:h2:mem:devdb")
            .build();
    }
}`,
        tips: [
            "Use @Profile for environment-specific beans",
            "@Bean methods can have parameters that are auto-injected",
            "Consider using @Conditional for conditional bean creation"
        ]
    },
    {
        title: "Request Mapping",
        annotation: "@RequestMapping",
        description: "Maps HTTP requests to handler methods. Can specify path, HTTP method, consumes, produces, headers, and params attributes.",
        example: `@RestController
@RequestMapping("/api/v1/products")
public class ProductController {
    
    @GetMapping(produces = MediaType.APPLICATION_JSON_VALUE)
    public List<Product> getAllProducts() {
        return productService.findAll();
    }
    
    @PostMapping(consumes = MediaType.APPLICATION_JSON_VALUE)
    @ResponseStatus(HttpStatus.CREATED)
    public Product createProduct(@Valid @RequestBody ProductDTO dto) {
        return productService.create(dto);
    }
}`,
        tips: [
            "Use produces/consumes for content negotiation",
            "@ResponseStatus sets the HTTP status code",
            "Combine with @Valid for request body validation"
        ]
    },
    {
        title: "Path Variables & Parameters",
        annotation: "@PathVariable & @RequestParam",
        description: "Extract values from URI path and query parameters respectively. Essential for building RESTful APIs with dynamic endpoints.",
        example: `@GetMapping("/users/{userId}/orders/{orderId}")
public Order getOrder(
        @PathVariable Long userId,
        @PathVariable Long orderId,
        @RequestParam(defaultValue = "false") boolean includeItems,
        @RequestParam(required = false) String status) {
    
    return orderService.findOrder(userId, orderId, includeItems, status);
}

// Example URL: /users/123/orders/456?includeItems=true&status=PENDING`,
        tips: [
            "Use required=false for optional query params",
            "defaultValue provides fallback for missing params",
            "@PathVariable name must match URI template variable"
        ]
    }
];

export default function SpringBootAnnotationsPost() {
    return (
        <main className="min-h-screen bg-[#0a0a0a] text-white">
            {/* Header */}
            <div className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a0a]/80 backdrop-blur-xl border-b border-white/5">
                <div className="max-w-4xl mx-auto px-6 py-4 flex items-center justify-between">
                    <Link
                        href="/#blog"
                        className="flex items-center gap-2 text-gray-400 hover:text-[#6db33f] transition-colors"
                    >
                        <ArrowLeft size={20} />
                        <span>Back to Portfolio</span>
                    </Link>
                    <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-full bg-[#6db33f]/20 flex items-center justify-center">
                            <span className="text-[#6db33f] text-xs font-bold">S</span>
                        </div>
                        <span className="text-sm font-mono text-[#6db33f]">Spring Boot</span>
                    </div>
                </div>
            </div>

            {/* Hero Section */}
            <section className="pt-32 pb-16 px-6 relative overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <div className="absolute top-20 left-10 w-96 h-96 bg-[#6db33f]/10 rounded-full blur-[150px]" />
                    <div className="absolute bottom-20 right-10 w-64 h-64 bg-[#6db33f]/5 rounded-full blur-[100px]" />
                </div>

                <div className="max-w-4xl mx-auto relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <div className="flex items-center gap-3 mb-6">
                            <span className="px-3 py-1 bg-[#6db33f]/20 text-[#6db33f] rounded-full text-sm font-mono">
                                Spring Framework
                            </span>
                            <span className="px-3 py-1 bg-white/5 text-gray-400 rounded-full text-sm">
                                Backend
                            </span>
                        </div>

                        <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                            Mastering <span className="text-[#6db33f]">Spring Boot</span> Annotations
                        </h1>

                        <p className="text-xl text-gray-400 mb-8 leading-relaxed">
                            A comprehensive guide to the most essential annotations that power
                            modern Spring Boot applications. From <span className="text-[#6db33f]">@SpringBootApplication</span> to
                            <span className="text-[#6db33f]"> @Repository</span>, master them all.
                        </p>

                        <div className="flex flex-wrap items-center gap-6 text-sm text-gray-500">
                            <div className="flex items-center gap-2">
                                <User size={16} />
                                <span>Ramjee Prasad</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Calendar size={16} />
                                <span>December 22, 2025</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Clock size={16} />
                                <span>10 min read</span>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Table of Contents */}
            <section className="py-8 px-6 border-y border-white/5 bg-white/[0.02]">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-lg font-bold text-white mb-4">📑 What You'll Learn</h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                        {annotations.map((ann, i) => (
                            <div
                                key={i}
                                className="px-3 py-2 bg-white/5 rounded-lg border border-white/10 hover:border-[#6db33f]/50 transition-colors cursor-pointer"
                            >
                                <span className="text-[#6db33f] font-mono text-sm">{ann.annotation}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Introduction */}
            <section className="py-16 px-6">
                <div className="max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="prose prose-invert max-w-none"
                    >
                        <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                            <span className="text-[#6db33f]">🌱</span> Introduction to Spring Boot Annotations
                        </h2>
                        <p className="text-gray-400 leading-relaxed mb-6">
                            Spring Boot revolutionized Java development by eliminating boilerplate configuration.
                            At its core are <strong className="text-[#6db33f]">annotations</strong> - metadata markers that tell
                            the Spring framework how to configure and wire your application components.
                        </p>
                        <p className="text-gray-400 leading-relaxed mb-6">
                            Understanding these annotations is crucial for any backend developer working with the
                            Spring ecosystem. In this guide, we'll explore the most important annotations with
                            practical examples and pro tips.
                        </p>

                        <div className="p-4 bg-[#6db33f]/10 border border-[#6db33f]/30 rounded-lg mb-8">
                            <p className="text-[#6db33f] font-bold mb-2">🎯 Prerequisites:</p>
                            <ul className="text-gray-400 text-sm space-y-1">
                                <li>• Basic understanding of Java</li>
                                <li>• Familiarity with OOP concepts</li>
                                <li>• Spring Boot project setup (Maven/Gradle)</li>
                            </ul>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Annotations Deep Dive */}
            <section className="py-8 px-6">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
                        <span className="text-[#6db33f]">📚</span> Core Annotations Deep Dive
                    </h2>
                    <p className="text-gray-400 mb-8">
                        Click on each annotation to expand and explore its usage, examples, and best practices.
                    </p>

                    {annotations.map((ann, i) => (
                        <AnnotationSection key={i} {...ann} />
                    ))}
                </div>
            </section>

            {/* Best Practices */}
            <section className="py-16 px-6 bg-gradient-to-b from-transparent via-[#6db33f]/5 to-transparent">
                <div className="max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
                            <span className="text-[#6db33f]">✨</span> Best Practices Summary
                        </h2>

                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="p-6 bg-zinc-900/50 rounded-lg border border-white/10">
                                <h3 className="text-[#6db33f] font-bold mb-4">✅ Do</h3>
                                <ul className="text-gray-400 space-y-2 text-sm">
                                    <li>• Use constructor injection over field injection</li>
                                    <li>• Keep controllers thin, services thick</li>
                                    <li>• Use proper layered architecture</li>
                                    <li>• Apply @Transactional at service layer</li>
                                    <li>• Use @Valid for request validation</li>
                                </ul>
                            </div>
                            <div className="p-6 bg-zinc-900/50 rounded-lg border border-white/10">
                                <h3 className="text-red-400 font-bold mb-4">❌ Avoid</h3>
                                <ul className="text-gray-400 space-y-2 text-sm">
                                    <li>• Circular dependencies between beans</li>
                                    <li>• Business logic in controllers</li>
                                    <li>• Using @Autowired on fields directly</li>
                                    <li>• Ignoring exception handling</li>
                                    <li>• Hardcoding configuration values</li>
                                </ul>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Conclusion */}
            <section className="py-16 px-6">
                <div className="max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center"
                    >
                        <h2 className="text-2xl font-bold text-white mb-4">🚀 Keep Learning!</h2>
                        <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
                            Spring Boot annotations are the foundation of modern Java backend development.
                            Master these, and you'll be well on your way to building robust, scalable applications.
                        </p>

                        <Link
                            href="/#projects"
                            className="inline-flex items-center gap-2 px-6 py-3 bg-[#6db33f] text-white font-bold rounded-lg hover:bg-[#5a9934] transition-colors"
                        >
                            View My Spring Projects
                            <ArrowLeft size={18} className="rotate-180" />
                        </Link>
                    </motion.div>
                </div>
            </section>

            {/* Footer */}
            <footer className="py-8 px-6 border-t border-white/5">
                <div className="max-w-4xl mx-auto text-center text-gray-500 text-sm">
                    <p>Written by <span className="text-[#6db33f]">Ramjee Prasad</span> • Backend Developer</p>
                </div>
            </footer>

            <BackToTop />
        </main>
    );
}
