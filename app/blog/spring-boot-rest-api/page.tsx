"use client";

import { motion } from "framer-motion";
import { ArrowLeft, Calendar, Clock, User, Copy, Check, ChevronDown, ChevronUp, Layers, Database, Shield, Settings } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import BackToTop from "../../components/BackToTop";

const springGreen = "#6db33f";

// Code block component
function CodeBlock({ code, language = "java", filename }: { code: string; language?: string; filename?: string }) {
    const [copied, setCopied] = useState(false);

    const copyCode = async () => {
        try {
            if (navigator.clipboard && window.isSecureContext) {
                await navigator.clipboard.writeText(code);
            } else {
                const textArea = document.createElement("textarea");
                textArea.value = code;
                textArea.style.position = "fixed";
                textArea.style.left = "-999999px";
                document.body.appendChild(textArea);
                textArea.focus();
                textArea.select();
                document.execCommand("copy");
                textArea.remove();
            }
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        } catch (err) {
            console.error("Failed to copy:", err);
        }
    };

    return (
        <div className="relative group my-4 md:my-6">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-[#6db33f]/30 to-[#6db33f]/10 rounded-lg blur opacity-50 group-hover:opacity-75 transition" />
            <div className="relative bg-[#0d1117] rounded-lg border border-white/10 overflow-hidden">
                <div className="flex items-center justify-between px-3 md:px-4 py-2 border-b border-white/10 bg-white/5">
                    <span className="text-[10px] md:text-xs text-gray-400 font-mono">{filename || language}</span>
                    <button
                        onClick={copyCode}
                        className="flex items-center gap-1 text-[10px] md:text-xs text-gray-400 hover:text-white transition-colors active:scale-95"
                    >
                        {copied ? <Check size={12} className="text-green-400" /> : <Copy size={12} />}
                        {copied ? "Copied!" : "Copy"}
                    </button>
                </div>
                <pre className="p-3 md:p-4 overflow-x-auto text-[11px] md:text-sm">
                    <code className="text-gray-300 font-mono whitespace-pre-wrap break-words md:whitespace-pre">{code}</code>
                </pre>
            </div>
        </div>
    );
}

// Section component
function Section({
    title,
    icon: Icon,
    children,
    defaultOpen = false
}: {
    title: string;
    icon: React.ElementType;
    children: React.ReactNode;
    defaultOpen?: boolean;
}) {
    const [isOpen, setIsOpen] = useState(defaultOpen);

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="border border-white/10 rounded-xl overflow-hidden mb-4 md:mb-6"
        >
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full flex items-center justify-between p-4 md:p-5 bg-white/5 hover:bg-white/10 transition-colors text-left"
            >
                <div className="flex items-center gap-3">
                    <div className="w-8 h-8 md:w-10 md:h-10 rounded-lg bg-[#6db33f]/20 flex items-center justify-center">
                        <Icon size={18} className="text-[#6db33f]" />
                    </div>
                    <span className="text-base md:text-lg font-bold text-white">{title}</span>
                </div>
                {isOpen ? <ChevronUp className="text-gray-400" size={20} /> : <ChevronDown className="text-gray-400" size={20} />}
            </button>

            {isOpen && (
                <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    className="p-4 md:p-5 bg-zinc-900/50"
                >
                    {children}
                </motion.div>
            )}
        </motion.div>
    );
}

export default function SpringBootRestApiPost() {
    return (
        <main className="min-h-screen bg-[#0a0a0a] text-white">
            {/* Header */}
            <div className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a0a]/80 backdrop-blur-xl border-b border-white/5">
                <div className="max-w-4xl mx-auto px-4 md:px-6 py-3 md:py-4 flex items-center justify-between">
                    <Link
                        href="/#blog"
                        className="flex items-center gap-1 md:gap-2 text-gray-400 hover:text-[#6db33f] transition-colors"
                    >
                        <ArrowLeft size={18} />
                        <span className="text-sm md:text-base">Back</span>
                    </Link>
                    <div className="flex items-center gap-2">
                        <div className="w-7 h-7 md:w-8 md:h-8 rounded-full bg-[#6db33f]/20 flex items-center justify-center">
                            <span className="text-[#6db33f] text-xs font-bold">S</span>
                        </div>
                        <span className="text-xs md:text-sm font-mono text-[#6db33f]">Spring Boot</span>
                    </div>
                </div>
            </div>

            {/* Hero Section */}
            <section className="pt-24 md:pt-32 pb-10 md:pb-16 px-4 md:px-6 relative overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <div className="absolute top-20 left-10 w-64 md:w-96 h-64 md:h-96 bg-[#6db33f]/10 rounded-full blur-[150px]" />
                    <div className="absolute bottom-20 right-10 w-48 md:w-64 h-48 md:h-64 bg-[#6db33f]/5 rounded-full blur-[100px]" />
                </div>

                <div className="max-w-4xl mx-auto relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <div className="flex items-center gap-2 md:gap-3 mb-4 md:mb-6">
                            <span className="px-2 md:px-3 py-1 bg-[#6db33f]/20 text-[#6db33f] rounded-full text-xs md:text-sm font-mono">
                                Spring Boot
                            </span>
                            <span className="px-2 md:px-3 py-1 bg-white/5 text-gray-400 rounded-full text-xs md:text-sm">
                                REST API
                            </span>
                        </div>

                        <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 leading-tight">
                            Building <span className="text-[#6db33f]">RESTful APIs</span> with Spring Boot
                        </h1>

                        <p className="text-base md:text-xl text-gray-400 mb-6 md:mb-8 leading-relaxed">
                            Complete guide to building production-ready REST APIs using
                            MVC architecture, DTOs, validation, and best practices.
                        </p>

                        <div className="flex flex-wrap items-center gap-3 md:gap-6 text-xs md:text-sm text-gray-500">
                            <div className="flex items-center gap-1 md:gap-2">
                                <User size={14} />
                                <span>Ramjee Prasad</span>
                            </div>
                            <div className="flex items-center gap-1 md:gap-2">
                                <Calendar size={14} />
                                <span>Dec 22, 2025</span>
                            </div>
                            <div className="flex items-center gap-1 md:gap-2">
                                <Clock size={14} />
                                <span>15 min</span>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Architecture Overview */}
            <section className="py-6 md:py-8 px-4 md:px-6 border-y border-white/5 bg-white/[0.02]">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-base md:text-lg font-bold text-white mb-4">🏗️ MVC Architecture Layers</h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-3">
                        {[
                            { name: "Controller", desc: "HTTP Layer", color: "#6db33f" },
                            { name: "Service", desc: "Business Logic", color: "#5a9934" },
                            { name: "Repository", desc: "Data Access", color: "#4a7a2a" },
                            { name: "Model/DTO", desc: "Data Objects", color: "#3a6020" },
                        ].map((layer, i) => (
                            <div
                                key={i}
                                className="p-3 md:p-4 bg-white/5 rounded-lg border border-white/10 text-center"
                                style={{ borderColor: `${layer.color}50` }}
                            >
                                <div className="font-mono text-sm md:text-base font-bold" style={{ color: layer.color }}>{layer.name}</div>
                                <div className="text-[10px] md:text-xs text-gray-500">{layer.desc}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Main Content */}
            <section className="py-8 md:py-12 px-4 md:px-6">
                <div className="max-w-4xl mx-auto">

                    {/* Model / Entity */}
                    <Section title="1. Model (Entity)" icon={Database} defaultOpen={true}>
                        <p className="text-sm md:text-base text-gray-400 mb-4">
                            The <strong className="text-[#6db33f]">Model</strong> represents your database entity.
                            It maps directly to a database table using JPA annotations.
                        </p>
                        <CodeBlock
                            filename="User.java"
                            code={`@Entity
@Table(name = "users")
@Data  // Lombok for getters/setters
@NoArgsConstructor
@AllArgsConstructor
public class User {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    @Column(nullable = false)
    private String name;
    
    @Column(unique = true, nullable = false)
    private String email;
    
    @Column(nullable = false)
    private String password;
    
    @CreatedDate
    private LocalDateTime createdAt;
    
    @LastModifiedDate
    private LocalDateTime updatedAt;
}`}
                        />
                    </Section>

                    {/* DTO */}
                    <Section title="2. DTO (Data Transfer Object)" icon={Layers}>
                        <p className="text-sm md:text-base text-gray-400 mb-4">
                            <strong className="text-[#6db33f]">DTOs</strong> separate API contracts from database entities.
                            They control what data is exposed to clients.
                        </p>
                        <CodeBlock
                            filename="UserDTO.java"
                            code={`// Request DTO - what client sends
@Data
public class CreateUserRequest {
    
    @NotBlank(message = "Name is required")
    private String name;
    
    @Email(message = "Invalid email format")
    @NotBlank(message = "Email is required")
    private String email;
    
    @Size(min = 8, message = "Password must be 8+ characters")
    private String password;
}

// Response DTO - what we return (no password!)
@Data
@Builder
public class UserResponse {
    private Long id;
    private String name;
    private String email;
    private LocalDateTime createdAt;
}`}
                        />
                        <div className="mt-4 p-3 bg-[#6db33f]/10 border border-[#6db33f]/30 rounded-lg">
                            <p className="text-xs md:text-sm text-gray-300">
                                <span className="text-[#6db33f] font-bold">💡 Why DTOs? </span>
                                Never expose passwords or internal IDs. DTOs give you full control over API responses.
                            </p>
                        </div>
                    </Section>

                    {/* Repository */}
                    <Section title="3. Repository (DAO Layer)" icon={Database}>
                        <p className="text-sm md:text-base text-gray-400 mb-4">
                            The <strong className="text-[#6db33f]">Repository</strong> handles database operations.
                            Extend JpaRepository for free CRUD methods.
                        </p>
                        <CodeBlock
                            filename="UserRepository.java"
                            code={`@Repository
public interface UserRepository extends JpaRepository<User, Long> {
    
    // Spring Data derives query from method name
    Optional<User> findByEmail(String email);
    
    List<User> findByNameContainingIgnoreCase(String name);
    
    boolean existsByEmail(String email);
    
    // Custom JPQL query
    @Query("SELECT u FROM User u WHERE u.createdAt > :date")
    List<User> findRecentUsers(@Param("date") LocalDateTime date);
}`}
                        />
                    </Section>

                    {/* Service */}
                    <Section title="4. Service (Business Logic)" icon={Settings}>
                        <p className="text-sm md:text-base text-gray-400 mb-4">
                            The <strong className="text-[#6db33f]">Service</strong> layer contains business logic.
                            Keep controllers thin and services thick!
                        </p>
                        <CodeBlock
                            filename="UserService.java"
                            code={`@Service
@RequiredArgsConstructor
@Transactional
public class UserService {
    
    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;
    
    public UserResponse createUser(CreateUserRequest request) {
        // Check if email exists
        if (userRepository.existsByEmail(request.getEmail())) {
            throw new EmailAlreadyExistsException(request.getEmail());
        }
        
        // Create entity from DTO
        User user = new User();
        user.setName(request.getName());
        user.setEmail(request.getEmail());
        user.setPassword(passwordEncoder.encode(request.getPassword()));
        
        // Save and convert to response DTO
        User saved = userRepository.save(user);
        return toResponse(saved);
    }
    
    public UserResponse getUserById(Long id) {
        User user = userRepository.findById(id)
            .orElseThrow(() -> new UserNotFoundException(id));
        return toResponse(user);
    }
    
    public List<UserResponse> getAllUsers() {
        return userRepository.findAll().stream()
            .map(this::toResponse)
            .collect(Collectors.toList());
    }
    
    private UserResponse toResponse(User user) {
        return UserResponse.builder()
            .id(user.getId())
            .name(user.getName())
            .email(user.getEmail())
            .createdAt(user.getCreatedAt())
            .build();
    }
}`}
                        />
                    </Section>

                    {/* Controller */}
                    <Section title="5. Controller (HTTP Layer)" icon={Layers}>
                        <p className="text-sm md:text-base text-gray-400 mb-4">
                            The <strong className="text-[#6db33f]">Controller</strong> handles HTTP requests.
                            It should only delegate to services, no business logic here!
                        </p>
                        <CodeBlock
                            filename="UserController.java"
                            code={`@RestController
@RequestMapping("/api/v1/users")
@RequiredArgsConstructor
public class UserController {
    
    private final UserService userService;
    
    @GetMapping
    public ResponseEntity<List<UserResponse>> getAllUsers() {
        return ResponseEntity.ok(userService.getAllUsers());
    }
    
    @GetMapping("/{id}")
    public ResponseEntity<UserResponse> getUserById(@PathVariable Long id) {
        return ResponseEntity.ok(userService.getUserById(id));
    }
    
    @PostMapping
    public ResponseEntity<UserResponse> createUser(
            @Valid @RequestBody CreateUserRequest request) {
        UserResponse created = userService.createUser(request);
        return ResponseEntity
            .status(HttpStatus.CREATED)
            .body(created);
    }
    
    @PutMapping("/{id}")
    public ResponseEntity<UserResponse> updateUser(
            @PathVariable Long id,
            @Valid @RequestBody UpdateUserRequest request) {
        return ResponseEntity.ok(userService.updateUser(id, request));
    }
    
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteUser(@PathVariable Long id) {
        userService.deleteUser(id);
        return ResponseEntity.noContent().build();
    }
}`}
                        />
                    </Section>

                    {/* Error Handling */}
                    <Section title="6. Global Error Handling" icon={Shield}>
                        <p className="text-sm md:text-base text-gray-400 mb-4">
                            Use <strong className="text-[#6db33f]">@ControllerAdvice</strong> for centralized
                            exception handling across all controllers.
                        </p>
                        <CodeBlock
                            filename="GlobalExceptionHandler.java"
                            code={`@RestControllerAdvice
public class GlobalExceptionHandler {
    
    @ExceptionHandler(UserNotFoundException.class)
    public ResponseEntity<ErrorResponse> handleNotFound(
            UserNotFoundException ex) {
        ErrorResponse error = new ErrorResponse(
            HttpStatus.NOT_FOUND.value(),
            ex.getMessage(),
            LocalDateTime.now()
        );
        return ResponseEntity.status(HttpStatus.NOT_FOUND).body(error);
    }
    
    @ExceptionHandler(MethodArgumentNotValidException.class)
    public ResponseEntity<ErrorResponse> handleValidation(
            MethodArgumentNotValidException ex) {
        
        List<String> errors = ex.getBindingResult()
            .getFieldErrors()
            .stream()
            .map(e -> e.getField() + ": " + e.getDefaultMessage())
            .collect(Collectors.toList());
            
        ErrorResponse error = new ErrorResponse(
            HttpStatus.BAD_REQUEST.value(),
            "Validation failed",
            errors,
            LocalDateTime.now()
        );
        return ResponseEntity.badRequest().body(error);
    }
}`}
                        />
                    </Section>

                </div>
            </section>

            {/* API Versioning */}
            <section className="py-8 md:py-12 px-4 md:px-6 bg-gradient-to-b from-transparent via-[#6db33f]/5 to-transparent">
                <div className="max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-xl md:text-2xl font-bold text-white mb-6 flex items-center gap-3">
                            <span className="text-[#6db33f]">🔢</span> API Versioning
                        </h2>

                        <div className="grid md:grid-cols-2 gap-4">
                            <div className="bg-zinc-900/50 p-4 rounded-lg border border-white/10">
                                <h3 className="text-[#6db33f] font-bold mb-2">URL Versioning ✅</h3>
                                <code className="text-xs md:text-sm text-gray-300">/api/v1/users</code>
                                <p className="text-xs text-gray-500 mt-2">Most common and recommended</p>
                            </div>
                            <div className="bg-zinc-900/50 p-4 rounded-lg border border-white/10">
                                <h3 className="text-gray-400 font-bold mb-2">Header Versioning</h3>
                                <code className="text-xs md:text-sm text-gray-300">X-API-Version: 1</code>
                                <p className="text-xs text-gray-500 mt-2">Cleaner URLs, harder to test</p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Conclusion */}
            <section className="py-12 md:py-16 px-4 md:px-6">
                <div className="max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center"
                    >
                        <h2 className="text-xl md:text-2xl font-bold text-white mb-4">🎉 You're Ready!</h2>
                        <p className="text-sm md:text-base text-gray-400 mb-8 max-w-2xl mx-auto">
                            You now have all the building blocks for a production-ready REST API.
                            Remember: Controllers handle HTTP, Services handle logic, Repositories handle data.
                        </p>

                        <Link
                            href="/blog/spring-boot-annotations"
                            className="inline-flex items-center gap-2 px-6 py-3 bg-[#6db33f] text-white font-bold rounded-lg hover:bg-[#5a9934] transition-colors"
                        >
                            Read: Spring Boot Annotations
                            <ArrowLeft size={18} className="rotate-180" />
                        </Link>
                    </motion.div>
                </div>
            </section>

            {/* Footer */}
            <footer className="py-8 px-4 md:px-6 border-t border-white/5">
                <div className="max-w-4xl mx-auto text-center text-gray-500 text-sm">
                    <p>Written by <span className="text-[#6db33f]">Ramjee Prasad</span> • Backend Developer</p>
                </div>
            </footer>

            <BackToTop />
        </main>
    );
}
