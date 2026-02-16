"use client";

import { motion } from "framer-motion";
import { ArrowLeft, Calendar, Clock, User, Copy, Check, ChevronDown, ChevronUp } from "lucide-react";
import Link from "next/link";
import { useState, useEffect } from "react";
import BackToTop from "../../components/BackToTop";

const themeColor = "#7C3AED";

function CodeBlock({ code, language = "java" }: { code: string; language?: string }) {
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
                textArea.style.top = "-999999px";
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
            <div className="absolute -inset-0.5 bg-gradient-to-r from-[#7C3AED]/30 to-[#7C3AED]/10 rounded-lg blur opacity-50 group-hover:opacity-75 transition" />
            <div className="relative bg-[#0d1117] rounded-lg border border-white/10 overflow-hidden">
                <div className="flex items-center justify-between px-3 md:px-4 py-2 border-b border-white/10 bg-white/5">
                    <span className="text-[10px] md:text-xs text-gray-400 font-mono">{language}</span>
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

function ExpandableSection({ title, emoji, children, defaultOpen = false }: { title: string; emoji: string; children: React.ReactNode; defaultOpen?: boolean }) {
    const [isOpen, setIsOpen] = useState(defaultOpen);

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="border border-white/10 rounded-xl overflow-hidden mb-6 hover:border-[#7C3AED]/40 transition-colors"
        >
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full flex items-center justify-between p-4 md:p-5 bg-white/5 hover:bg-white/10 transition-colors text-left"
            >
                <div className="flex items-center gap-3">
                    <span className="text-xl">{emoji}</span>
                    <span className="text-white font-bold text-base md:text-lg">{title}</span>
                </div>
                {isOpen ? <ChevronUp className="text-gray-400 flex-shrink-0" size={18} /> : <ChevronDown className="text-gray-400 flex-shrink-0" size={18} />}
            </button>
            {isOpen && (
                <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    className="p-4 md:p-6 bg-zinc-900/50"
                >
                    {children}
                </motion.div>
            )}
        </motion.div>
    );
}

const tocItems = [
    "Reactive Programming Basics",
    "Publisher, Subscriber & Subscription",
    "What is Mono?",
    "What is Flux?",
    "Mono Operators",
    "Flux Operators",
    "Error Handling",
    "Mono vs Flux Comparison",
    "Real-World Patterns",
    "Best Practices",
];

export default function MonoFluxReactiveJavaPost() {
    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: "instant" as ScrollBehavior });
        document.documentElement.scrollTop = 0;
        document.body.scrollTop = 0;
        const timer = setTimeout(() => {
            window.scrollTo({ top: 0, left: 0, behavior: "instant" as ScrollBehavior });
        }, 50);
        return () => clearTimeout(timer);
    }, []);

    return (
        <main className="min-h-screen bg-[#0a0a0a] text-white">
            {/* Header */}
            <div className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a0a]/80 backdrop-blur-xl border-b border-white/5">
                <div className="max-w-4xl mx-auto px-4 md:px-6 py-3 md:py-4 flex items-center justify-between">
                    <Link
                        href="/#blog"
                        className="flex items-center gap-1 md:gap-2 text-gray-400 hover:text-[#7C3AED] transition-colors"
                    >
                        <ArrowLeft size={18} />
                        <span className="text-sm md:text-base">Back</span>
                    </Link>
                    <div className="flex items-center gap-2">
                        <div className="w-7 h-7 md:w-8 md:h-8 rounded-full bg-[#7C3AED]/20 flex items-center justify-center">
                            <span className="text-[#7C3AED] text-xs font-bold">⚛</span>
                        </div>
                        <span className="text-xs md:text-sm font-mono text-[#7C3AED]">Reactive Java</span>
                    </div>
                </div>
            </div>

            {/* Hero */}
            <section className="pt-24 md:pt-32 pb-10 md:pb-16 px-4 md:px-6 relative overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <div className="absolute top-20 left-10 w-64 md:w-96 h-64 md:h-96 bg-[#7C3AED]/10 rounded-full blur-[150px]" />
                    <div className="absolute bottom-20 right-10 w-48 md:w-64 h-48 md:h-64 bg-[#7C3AED]/5 rounded-full blur-[100px]" />
                    <div className="absolute top-40 right-20 w-32 h-32 bg-[#A855F7]/8 rounded-full blur-[80px]" />
                </div>

                <div className="max-w-4xl mx-auto relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <div className="flex items-center gap-2 md:gap-3 mb-4 md:mb-6">
                            <span className="px-2 md:px-3 py-1 bg-[#7C3AED]/20 text-[#7C3AED] rounded-full text-xs md:text-sm font-mono">
                                Reactive
                            </span>
                            <span className="px-2 md:px-3 py-1 bg-white/5 text-gray-400 rounded-full text-xs md:text-sm">
                                Spring WebFlux
                            </span>
                            <span className="px-2 md:px-3 py-1 bg-white/5 text-gray-400 rounded-full text-xs md:text-sm">
                                Project Reactor
                            </span>
                        </div>

                        <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 leading-tight">
                            Mastering <span className="text-[#7C3AED]">Mono</span> & <span className="text-[#A855F7]">Flux</span> in Reactive Java
                        </h1>

                        <p className="text-base md:text-xl text-gray-400 mb-6 md:mb-8 leading-relaxed">
                            A deep dive into reactive programming with Project Reactor. From Publisher-Subscriber patterns
                            to building real-world reactive pipelines with Mono and Flux.
                        </p>

                        <div className="flex flex-wrap items-center gap-3 md:gap-6 text-xs md:text-sm text-gray-500">
                            <div className="flex items-center gap-1 md:gap-2">
                                <User size={14} />
                                <span>Ramjee Prasad</span>
                            </div>
                            <div className="flex items-center gap-1 md:gap-2">
                                <Calendar size={14} />
                                <span>Feb 16, 2026</span>
                            </div>
                            <div className="flex items-center gap-1 md:gap-2">
                                <Clock size={14} />
                                <span>18 min read</span>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Table of Contents */}
            <section className="py-6 md:py-8 px-4 md:px-6 border-y border-white/5 bg-white/[0.02]">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-base md:text-lg font-bold text-white mb-3 md:mb-4">📑 What You&apos;ll Learn</h2>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-3">
                        {tocItems.map((item, i) => (
                            <div
                                key={i}
                                className="px-3 py-2 bg-white/5 rounded-lg border border-white/10 hover:border-[#7C3AED]/50 transition-colors"
                            >
                                <span className="text-[#7C3AED] font-mono text-[10px] md:text-xs">{String(i + 1).padStart(2, "0")}.</span>
                                <span className="text-gray-300 text-xs md:text-sm ml-2">{item}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Section 1: Reactive Programming Basics */}
            <section className="py-12 md:py-16 px-4 md:px-6">
                <div className="max-w-4xl mx-auto">
                    <ExpandableSection title="Reactive Programming Basics" emoji="⚡" defaultOpen={true}>
                        <p className="text-gray-400 leading-relaxed mb-4">
                            <strong className="text-white">Reactive Programming</strong> is a programming paradigm focused on <strong className="text-[#7C3AED]">asynchronous data streams</strong> and the <strong className="text-[#7C3AED]">propagation of change</strong>. Instead of pulling data (imperative), you react to data as it arrives.
                        </p>
                        <p className="text-gray-400 leading-relaxed mb-4">
                            Think of it like a spreadsheet: when cell A1 changes, all cells that reference A1 automatically update. That&apos;s reactive — data flows downstream and consumers react to changes.
                        </p>

                        <div className="p-4 bg-[#7C3AED]/10 border border-[#7C3AED]/30 rounded-lg mb-4">
                            <p className="text-[#7C3AED] font-bold mb-2">🔑 Key Principles:</p>
                            <ul className="text-gray-400 text-sm space-y-1">
                                <li>• <strong className="text-white">Asynchronous</strong> — Non-blocking operations, no thread waiting</li>
                                <li>• <strong className="text-white">Event-driven</strong> — React to events as they happen</li>
                                <li>• <strong className="text-white">Backpressure</strong> — Consumer controls the flow of data</li>
                                <li>• <strong className="text-white">Lazy execution</strong> — Nothing happens until you subscribe</li>
                            </ul>
                        </div>

                        <h3 className="text-white font-bold text-lg mb-3">Imperative vs Reactive</h3>
                        <CodeBlock language="java" code={`// ❌ Imperative (Blocking) — Thread waits for each call
List<User> users = userRepository.findAll();        // Thread BLOCKED
List<Order> orders = orderService.getOrders(users);  // Thread BLOCKED again
return processOrders(orders);                        // Finally returns

// ✅ Reactive (Non-blocking) — Thread is free immediately
Flux<User> users = userRepository.findAll();         // Returns immediately
return users
    .flatMap(user -> orderService.getOrders(user))   // Lazy pipeline
    .map(order -> processOrder(order));               // Executes when subscribed`} />

                        <div className="p-4 bg-zinc-900/50 border border-white/10 rounded-lg">
                            <p className="text-gray-400 text-sm">
                                <strong className="text-[#A855F7]">Why does this matter?</strong> In a traditional servlet-based app, each HTTP request occupies one thread.
                                With 200 threads, you can handle at most 200 concurrent requests. In reactive, a single thread can handle thousands of
                                concurrent connections because it never blocks.
                            </p>
                        </div>
                    </ExpandableSection>

                    {/* Section 2: Publisher, Subscriber & Subscription */}
                    <ExpandableSection title="Publisher, Subscriber & Subscription" emoji="🔗">
                        <p className="text-gray-400 leading-relaxed mb-4">
                            The <strong className="text-white">Reactive Streams specification</strong> defines four core interfaces. Understanding these is essential
                            before using Mono and Flux, because Mono and Flux <em>implement</em> these interfaces.
                        </p>

                        <h3 className="text-white font-bold text-lg mb-3 mt-6">The 4 Core Interfaces</h3>
                        <CodeBlock language="java" code={`// 1. Publisher<T> — Source of data
//    Mono and Flux both implement this interface
public interface Publisher<T> {
    void subscribe(Subscriber<? super T> subscriber);
}

// 2. Subscriber<T> — Consumer of data
//    Receives signals: onSubscribe, onNext, onError, onComplete
public interface Subscriber<T> {
    void onSubscribe(Subscription subscription);  // Called first
    void onNext(T item);                          // Called 0..N times
    void onError(Throwable error);                // Terminal signal (error)
    void onComplete();                            // Terminal signal (success)
}

// 3. Subscription — The link between Publisher and Subscriber
//    Controls backpressure via request(n)
public interface Subscription {
    void request(long n);   // Request n items from upstream
    void cancel();          // Cancel the subscription
}

// 4. Processor<T, R> — Both Publisher AND Subscriber
//    Rarely used directly, acts as a transformation stage
public interface Processor<T, R> extends Subscriber<T>, Publisher<R> {
}`} />

                        <h3 className="text-white font-bold text-lg mb-3 mt-6">The Subscription Flow</h3>
                        <div className="p-4 bg-[#7C3AED]/10 border border-[#7C3AED]/30 rounded-lg mb-4">
                            <div className="font-mono text-xs md:text-sm text-gray-300 space-y-1">
                                <p><span className="text-[#7C3AED]">Step 1:</span> Subscriber calls <code className="text-[#A855F7]">publisher.subscribe(subscriber)</code></p>
                                <p><span className="text-[#7C3AED]">Step 2:</span> Publisher calls <code className="text-[#A855F7]">subscriber.onSubscribe(subscription)</code></p>
                                <p><span className="text-[#7C3AED]">Step 3:</span> Subscriber calls <code className="text-[#A855F7]">subscription.request(n)</code> — &quot;give me n items&quot;</p>
                                <p><span className="text-[#7C3AED]">Step 4:</span> Publisher calls <code className="text-[#A855F7]">subscriber.onNext(item)</code> up to n times</p>
                                <p><span className="text-[#7C3AED]">Step 5:</span> Publisher calls <code className="text-[#A855F7]">subscriber.onComplete()</code> or <code className="text-[#A855F7]">subscriber.onError(e)</code></p>
                            </div>
                        </div>

                        <h3 className="text-white font-bold text-lg mb-3 mt-6">Practical Example</h3>
                        <CodeBlock language="java" code={`// Creating a custom subscriber (rarely needed, but good to understand)
Flux.range(1, 5).subscribe(new BaseSubscriber<Integer>() {
    @Override
    protected void hookOnSubscribe(Subscription subscription) {
        System.out.println("Subscribed!");
        request(2); // Request 2 items initially (backpressure)
    }

    @Override
    protected void hookOnNext(Integer value) {
        System.out.println("Received: " + value);
        request(1); // Request 1 more after processing
    }

    @Override
    protected void hookOnComplete() {
        System.out.println("All done!");
    }
});

// Output:
// Subscribed!
// Received: 1
// Received: 2
// Received: 3
// Received: 4
// Received: 5
// All done!`} />

                        <div className="p-4 bg-zinc-900/50 border border-white/10 rounded-lg">
                            <p className="text-[#A855F7] font-bold mb-2">💡 Key Takeaway</p>
                            <p className="text-gray-400 text-sm">
                                <strong className="text-white">Nothing happens until you subscribe.</strong> A Mono or Flux is like a blueprint.
                                Calling operators like <code className="text-[#7C3AED]">.map()</code> or <code className="text-[#7C3AED]">.filter()</code> just assembles the pipeline.
                                Data only flows when <code className="text-[#7C3AED]">.subscribe()</code> is called (or when Spring WebFlux subscribes for you).
                            </p>
                        </div>
                    </ExpandableSection>

                    {/* Section 3: What is Mono? */}
                    <ExpandableSection title="What is Mono<T>?" emoji="1️⃣">
                        <p className="text-gray-400 leading-relaxed mb-4">
                            <strong className="text-[#7C3AED]">Mono&lt;T&gt;</strong> is a Publisher that emits <strong className="text-white">at most one item</strong>, then completes.
                            Think of it as a reactive version of <code className="text-[#A855F7]">Optional&lt;T&gt;</code> or <code className="text-[#A855F7]">CompletableFuture&lt;T&gt;</code>.
                        </p>

                        <div className="p-4 bg-[#7C3AED]/10 border border-[#7C3AED]/30 rounded-lg mb-4">
                            <p className="text-[#7C3AED] font-bold mb-2">Signal Pattern:</p>
                            <p className="text-gray-300 font-mono text-sm">onSubscribe → [onNext(item)] → onComplete</p>
                            <p className="text-gray-300 font-mono text-sm">onSubscribe → onError(e)</p>
                            <p className="text-gray-300 font-mono text-sm">onSubscribe → onComplete (empty Mono)</p>
                        </div>

                        <h3 className="text-white font-bold text-lg mb-3">Creating Mono Instances</h3>
                        <CodeBlock language="java" code={`// Static factory methods
Mono<String> just      = Mono.just("Hello");           // Emit one value
Mono<String> empty     = Mono.empty();                  // Empty (no value)
Mono<String> error     = Mono.error(new RuntimeException("Oops!"));
Mono<String> never     = Mono.never();                  // Never signals anything
Mono<String> deferred  = Mono.defer(() -> Mono.just(getValue()));  // Lazy

// From other types
Mono<String> fromFuture    = Mono.fromFuture(completableFuture);
Mono<String> fromCallable  = Mono.fromCallable(() -> expensiveCall());
Mono<String> fromSupplier  = Mono.fromSupplier(() -> "computed");
Mono<Void>   fromRunnable  = Mono.fromRunnable(() -> doSomething());

// From Optional
Mono<String> fromOptional = Mono.justOrEmpty(Optional.of("value"));
Mono<String> fromNullable = Mono.justOrEmpty(null); // becomes Mono.empty()`} />

                        <h3 className="text-white font-bold text-lg mb-3 mt-6">When to Use Mono</h3>
                        <CodeBlock language="java" code={`// ✅ Perfect Mono use cases:

// 1. Find by ID (returns 0 or 1 result)
Mono<User> user = userRepository.findById(userId);

// 2. Save operation (returns the saved entity)
Mono<User> saved = userRepository.save(newUser);

// 3. Delete operation (returns void/completion signal)
Mono<Void> deleted = userRepository.deleteById(userId);

// 4. HTTP call that returns a single response
Mono<ApiResponse> response = webClient.get()
    .uri("/api/data")
    .retrieve()
    .bodyToMono(ApiResponse.class);

// 5. Authentication check
Mono<Boolean> isValid = authService.validateToken(token);`} />
                    </ExpandableSection>

                    {/* Section 4: What is Flux? */}
                    <ExpandableSection title="What is Flux<T>?" emoji="🌊">
                        <p className="text-gray-400 leading-relaxed mb-4">
                            <strong className="text-[#A855F7]">Flux&lt;T&gt;</strong> is a Publisher that emits <strong className="text-white">0 to N items</strong>, then completes (or errors).
                            Think of it as a reactive version of <code className="text-[#A855F7]">List&lt;T&gt;</code> or <code className="text-[#A855F7]">Stream&lt;T&gt;</code> — but asynchronous.
                        </p>

                        <div className="p-4 bg-[#A855F7]/10 border border-[#A855F7]/30 rounded-lg mb-4">
                            <p className="text-[#A855F7] font-bold mb-2">Signal Pattern:</p>
                            <p className="text-gray-300 font-mono text-sm">onSubscribe → onNext(1) → onNext(2) → ... → onNext(N) → onComplete</p>
                            <p className="text-gray-300 font-mono text-sm">onSubscribe → onNext(1) → onError(e)</p>
                        </div>

                        <h3 className="text-white font-bold text-lg mb-3">Creating Flux Instances</h3>
                        <CodeBlock language="java" code={`// Static factory methods
Flux<String> just     = Flux.just("A", "B", "C");           // Known values
Flux<Integer> range   = Flux.range(1, 10);                   // 1 to 10
Flux<String> fromList = Flux.fromIterable(List.of("X","Y")); // From collection
Flux<String> fromArr  = Flux.fromArray(new String[]{"a","b"});
Flux<String> empty    = Flux.empty();                         // Empty flux
Flux<String> error    = Flux.error(new RuntimeException());

// Generating sequences
Flux<Long> interval = Flux.interval(Duration.ofSeconds(1));  // 0,1,2,3... every sec
Flux<String> generated = Flux.generate(
    () -> 0,                              // Initial state
    (state, sink) -> {
        sink.next("Value-" + state);
        if (state == 5) sink.complete();
        return state + 1;
    }
);

// Programmatic creation
Flux<String> created = Flux.create(sink -> {
    sink.next("event-1");
    sink.next("event-2");
    sink.complete();
});

// Combining multiple sources
Flux<String> merged = Flux.merge(flux1, flux2);       // Interleave
Flux<String> concat = Flux.concat(flux1, flux2);      // Sequential
Flux<Tuple2<String,Integer>> zipped = Flux.zip(fluxA, fluxB);`} />

                        <h3 className="text-white font-bold text-lg mb-3 mt-6">When to Use Flux</h3>
                        <CodeBlock language="java" code={`// ✅ Perfect Flux use cases:

// 1. Find all records
Flux<User> allUsers = userRepository.findAll();

// 2. Search results (multiple matches)
Flux<Product> results = productRepository.findByCategory("electronics");

// 3. Real-time event stream (SSE)
Flux<ServerSentEvent<String>> events = Flux.interval(Duration.ofSeconds(1))
    .map(i -> ServerSentEvent.builder("tick-" + i).build());

// 4. Processing a batch of items
Flux<ProcessedItem> batch = Flux.fromIterable(rawItems)
    .flatMap(item -> processAsync(item));

// 5. WebSocket messages
Flux<WebSocketMessage> messages = session.receive();`} />
                    </ExpandableSection>

                    {/* Section 5: Mono Operators */}
                    <ExpandableSection title="Essential Mono Operators" emoji="🔧">
                        <p className="text-gray-400 leading-relaxed mb-4">
                            Operators transform, filter, and combine reactive streams. Here are the most commonly used Mono operators:
                        </p>

                        <h3 className="text-white font-bold text-lg mb-3">Transformation Operators</h3>
                        <CodeBlock language="java" code={`// map() — Transform the value synchronously
Mono<String> upper = Mono.just("hello").map(String::toUpperCase);
// Result: "HELLO"

// flatMap() — Transform into another Mono (async chaining)
Mono<OrderDetails> details = userService.findById(userId)
    .flatMap(user -> orderService.getLatestOrder(user.getId()));

// flatMap is the MOST IMPORTANT operator — it chains async calls:
Mono<Response> pipeline = authService.validate(token)        // Mono<User>
    .flatMap(user -> orderService.createOrder(user, cart))    // Mono<Order>
    .flatMap(order -> paymentService.charge(order))           // Mono<Payment>
    .flatMap(payment -> emailService.sendReceipt(payment));   // Mono<Response>

// transform() — Apply a reusable function to the Mono
Function<Mono<User>, Mono<UserDTO>> toDTO =
    mono -> mono.map(user -> new UserDTO(user.getName(), user.getEmail()));
Mono<UserDTO> dto = userService.findById(1L).transform(toDTO);`} />

                        <h3 className="text-white font-bold text-lg mb-3 mt-6">Default & Fallback Operators</h3>
                        <CodeBlock language="java" code={`// defaultIfEmpty() — Provide default if Mono is empty
Mono<String> withDefault = Mono.empty()
    .defaultIfEmpty("No data found");

// switchIfEmpty() — Switch to another Mono if empty
Mono<User> user = userCache.findById(id)
    .switchIfEmpty(userDatabase.findById(id));  // Fallback to DB

// or() — Try another publisher if current is empty
Mono<Config> config = localConfig.get()
    .or(remoteConfig.get());`} />

                        <h3 className="text-white font-bold text-lg mb-3 mt-6">Side-Effect Operators</h3>
                        <CodeBlock language="java" code={`// doOnNext() — Perform action when item is emitted
Mono<User> user = userService.findById(id)
    .doOnNext(u -> log.info("Found user: {}", u.getName()));

// doOnSuccess() — Called on success (even if empty)
// doOnError() — Called on error
// doFinally() — Always called (like try-finally)
Mono<Data> pipeline = fetchData()
    .doOnSuccess(data -> metrics.recordSuccess())
    .doOnError(err -> metrics.recordError(err))
    .doFinally(signal -> metrics.recordLatency());`} />

                        <h3 className="text-white font-bold text-lg mb-3 mt-6">Timing Operators</h3>
                        <CodeBlock language="java" code={`// timeout() — Fail if Mono doesn't complete in time
Mono<Response> response = webClient.get()
    .retrieve()
    .bodyToMono(Response.class)
    .timeout(Duration.ofSeconds(5));

// delayElement() — Delay emission
Mono<String> delayed = Mono.just("hello")
    .delayElement(Duration.ofSeconds(2));

// cache() — Cache the result for subsequent subscribers
Mono<Config> cached = configService.load()
    .cache(Duration.ofMinutes(10));`} />
                    </ExpandableSection>

                    {/* Section 6: Flux Operators */}
                    <ExpandableSection title="Essential Flux Operators" emoji="⚙️">
                        <p className="text-gray-400 leading-relaxed mb-4">
                            Flux operators work on streams of multiple items. Many are shared with Mono, but some are unique to Flux:
                        </p>

                        <h3 className="text-white font-bold text-lg mb-3">Filtering & Limiting</h3>
                        <CodeBlock language="java" code={`// filter() — Keep only matching items
Flux<User> admins = userFlux.filter(user -> user.getRole() == Role.ADMIN);

// distinct() — Remove duplicates
Flux<String> unique = Flux.just("a","b","a","c","b").distinct();
// Result: a, b, c

// take() / skip() — Limit items
Flux<Integer> first5 = Flux.range(1, 100).take(5);      // 1,2,3,4,5
Flux<Integer> skip5  = Flux.range(1, 10).skip(5);       // 6,7,8,9,10
Flux<Integer> timed  = Flux.interval(Duration.ofMillis(100))
    .take(Duration.ofSeconds(1));                         // ~10 items`} />

                        <h3 className="text-white font-bold text-lg mb-3 mt-6">Combining Operators</h3>
                        <CodeBlock language="java" code={`// flatMap() — Async transformation (items may interleave)
Flux<OrderDTO> orders = userFlux
    .flatMap(user -> orderService.getOrders(user.getId()))
    .map(order -> toDTO(order));

// concatMap() — Like flatMap but preserves order (sequential)
Flux<Result> results = Flux.fromIterable(urls)
    .concatMap(url -> webClient.get().uri(url).retrieve().bodyToMono(Result.class));

// zipWith() — Combine two fluxes pair by pair
Flux<String> names  = Flux.just("Alice", "Bob");
Flux<Integer> ages  = Flux.just(25, 30);
Flux<String> zipped = names.zipWith(ages, (n, a) -> n + " is " + a);
// Result: "Alice is 25", "Bob is 30"

// merge() vs concat()
Flux<String> merged = Flux.merge(fast, slow);   // Interleaved by time
Flux<String> concat = Flux.concat(fast, slow);  // fast first, then slow`} />

                        <h3 className="text-white font-bold text-lg mb-3 mt-6">Aggregation Operators</h3>
                        <CodeBlock language="java" code={`// collectList() — Collect all items into a List (Flux → Mono<List>)
Mono<List<User>> allUsers = userFlux.collectList();

// collectMap() — Collect into a Map
Mono<Map<Long, User>> userMap = userFlux
    .collectMap(User::getId, Function.identity());

// reduce() — Aggregate into a single value
Mono<Integer> sum = Flux.range(1, 10)
    .reduce(0, Integer::sum);  // Result: 55

// count() — Count items
Mono<Long> count = userFlux.count();

// buffer() — Group items into batches
Flux<List<Integer>> batches = Flux.range(1, 10).buffer(3);
// Result: [1,2,3], [4,5,6], [7,8,9], [10]

// window() — Like buffer but returns Flux<Flux<T>>
Flux<Flux<Integer>> windows = Flux.range(1, 10).window(3);`} />
                    </ExpandableSection>

                    {/* Section 7: Error Handling */}
                    <ExpandableSection title="Error Handling" emoji="🛡️">
                        <p className="text-gray-400 leading-relaxed mb-4">
                            Error handling in reactive streams is fundamentally different. An error signal terminates the stream — but
                            you have powerful operators to recover gracefully.
                        </p>

                        <CodeBlock language="java" code={`// onErrorReturn() — Replace error with a default value
Mono<String> safe = riskyMono
    .onErrorReturn("default-value");

// onErrorResume() — Switch to a fallback publisher on error
Mono<User> user = primaryDB.findById(id)
    .onErrorResume(ex -> {
        log.warn("Primary DB failed, trying replica", ex);
        return replicaDB.findById(id);
    });

// onErrorMap() — Transform the error into a different exception
Mono<Data> data = fetchData()
    .onErrorMap(IOException.class,
        ex -> new ServiceException("Data fetch failed", ex));

// retry() — Retry on error
Mono<Response> response = webClient.get()
    .retrieve()
    .bodyToMono(Response.class)
    .retry(3);  // Retry up to 3 times

// retryWhen() — Advanced retry with backoff
Mono<Response> withBackoff = webClient.get()
    .retrieve()
    .bodyToMono(Response.class)
    .retryWhen(Retry.backoff(3, Duration.ofSeconds(1))
        .maxBackoff(Duration.ofSeconds(10))
        .filter(ex -> ex instanceof TimeoutException));

// doOnError() — Side-effect on error (logging, metrics)
Mono<Data> monitored = fetchData()
    .doOnError(ex -> {
        log.error("Operation failed", ex);
        metrics.recordError("fetchData", ex);
    })
    .onErrorResume(ex -> Mono.empty());`} />

                        <div className="p-4 bg-red-500/10 border border-red-500/30 rounded-lg mt-4">
                            <p className="text-red-400 font-bold mb-2">⚠️ Common Mistake</p>
                            <p className="text-gray-400 text-sm">
                                Never use <code className="text-red-400">try-catch</code> around reactive operators — exceptions in the assembly phase
                                won&apos;t be caught. Always use <code className="text-[#7C3AED]">onErrorResume</code> or <code className="text-[#7C3AED]">onErrorReturn</code> instead.
                            </p>
                        </div>
                    </ExpandableSection>

                    {/* Section 8: Mono vs Flux Comparison */}
                    <ExpandableSection title="Mono vs Flux — Quick Comparison" emoji="⚖️">
                        <div className="overflow-x-auto">
                            <table className="w-full text-sm border border-white/10 rounded-lg overflow-hidden">
                                <thead>
                                    <tr className="bg-white/5">
                                        <th className="text-left p-3 text-gray-400 font-medium">Feature</th>
                                        <th className="text-left p-3 text-[#7C3AED] font-bold">Mono&lt;T&gt;</th>
                                        <th className="text-left p-3 text-[#A855F7] font-bold">Flux&lt;T&gt;</th>
                                    </tr>
                                </thead>
                                <tbody className="text-gray-400">
                                    <tr className="border-t border-white/5"><td className="p-3">Items emitted</td><td className="p-3">0 or 1</td><td className="p-3">0 to N</td></tr>
                                    <tr className="border-t border-white/5 bg-white/[0.02]"><td className="p-3">Equivalent to</td><td className="p-3">CompletableFuture</td><td className="p-3">Stream / List</td></tr>
                                    <tr className="border-t border-white/5"><td className="p-3">Use case</td><td className="p-3">findById, save</td><td className="p-3">findAll, search</td></tr>
                                    <tr className="border-t border-white/5 bg-white/[0.02]"><td className="p-3">Can become</td><td className="p-3">Mono → Flux (.flux())</td><td className="p-3">Flux → Mono (.next(), .collectList())</td></tr>
                                    <tr className="border-t border-white/5"><td className="p-3">Backpressure</td><td className="p-3">Not applicable</td><td className="p-3">Supported</td></tr>
                                    <tr className="border-t border-white/5 bg-white/[0.02]"><td className="p-3">Spring Web return</td><td className="p-3">Single JSON object</td><td className="p-3">JSON array or SSE stream</td></tr>
                                </tbody>
                            </table>
                        </div>

                        <h3 className="text-white font-bold text-lg mb-3 mt-6">Converting Between Mono & Flux</h3>
                        <CodeBlock language="java" code={`// Mono → Flux
Flux<String> flux = Mono.just("hello").flux();  // Flux with 1 item

// Flux → Mono
Mono<String> first  = Flux.just("a","b","c").next();           // "a"
Mono<String> single = Flux.just("only").single();              // "only" (error if >1)
Mono<String> last   = Flux.just("a","b","c").last();           // "c"
Mono<List<String>> all = Flux.just("a","b","c").collectList(); // ["a","b","c"]
Mono<Long> count    = Flux.just("a","b","c").count();          // 3`} />
                    </ExpandableSection>

                    {/* Section 9: Real-World Patterns */}
                    <ExpandableSection title="Real-World Patterns" emoji="🏗️">
                        <h3 className="text-white font-bold text-lg mb-3">1. Reactive REST Controller</h3>
                        <CodeBlock language="java" code={`@RestController
@RequestMapping("/api/users")
@RequiredArgsConstructor
public class UserController {

    private final UserService userService;

    @GetMapping("/{id}")
    public Mono<ResponseEntity<UserDTO>> getUser(@PathVariable String id) {
        return userService.findById(id)
            .map(user -> ResponseEntity.ok(toDTO(user)))
            .defaultIfEmpty(ResponseEntity.notFound().build());
    }

    @GetMapping
    public Flux<UserDTO> getAllUsers(
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "20") int size) {
        return userService.findAll()
            .skip((long) page * size)
            .take(size)
            .map(this::toDTO);
    }

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public Mono<UserDTO> createUser(@Valid @RequestBody Mono<UserDTO> userDTO) {
        return userDTO
            .map(dto -> fromDTO(dto))
            .flatMap(userService::save)
            .map(this::toDTO);
    }
}`} />

                        <h3 className="text-white font-bold text-lg mb-3 mt-6">2. Reactive Service with Caching</h3>
                        <CodeBlock language="java" code={`@Service
@RequiredArgsConstructor
public class ProductService {

    private final ReactiveRedisTemplate<String, Product> redisTemplate;
    private final ProductRepository productRepository;

    public Mono<Product> findById(String id) {
        String cacheKey = "product:" + id;

        return redisTemplate.opsForValue().get(cacheKey)    // Try cache first
            .switchIfEmpty(
                productRepository.findById(id)               // Fallback to DB
                    .flatMap(product ->
                        redisTemplate.opsForValue()
                            .set(cacheKey, product, Duration.ofMinutes(30))
                            .thenReturn(product)             // Cache & return
                    )
            );
    }

    public Flux<Product> search(String query) {
        return productRepository.findByNameContaining(query)
            .filter(p -> p.getStock() > 0)
            .sort(Comparator.comparing(Product::getPrice));
    }
}`} />

                        <h3 className="text-white font-bold text-lg mb-3 mt-6">3. Parallel Processing</h3>
                        <CodeBlock language="java" code={`// Process items in parallel with controlled concurrency
Flux<ProcessedItem> results = Flux.fromIterable(items)
    .flatMap(
        item -> processAsync(item)
            .onErrorResume(ex -> {
                log.warn("Failed to process: {}", item.getId());
                return Mono.empty();  // Skip failed items
            }),
        8  // Max concurrency = 8 parallel operations
    );

// Fan-out / Fan-in pattern
Mono<AggregatedResult> aggregated = Mono.zip(
    serviceA.getData(),
    serviceB.getData(),
    serviceC.getData()
).map(tuple -> new AggregatedResult(
    tuple.getT1(), tuple.getT2(), tuple.getT3()
));`} />
                    </ExpandableSection>

                    {/* Section 10: Best Practices */}
                    <ExpandableSection title="Best Practices" emoji="✨">
                        <div className="grid md:grid-cols-2 gap-4 mb-4">
                            <div className="p-5 bg-zinc-900/50 rounded-lg border border-white/10">
                                <h4 className="text-[#7C3AED] font-bold mb-3">✅ Do</h4>
                                <ul className="text-gray-400 space-y-2 text-sm">
                                    <li>• Use <code className="text-[#7C3AED]">flatMap</code> for async chaining</li>
                                    <li>• Handle errors with <code className="text-[#7C3AED]">onErrorResume</code></li>
                                    <li>• Use <code className="text-[#7C3AED]">switchIfEmpty</code> for fallbacks</li>
                                    <li>• Add <code className="text-[#7C3AED]">timeout()</code> to external calls</li>
                                    <li>• Use <code className="text-[#7C3AED]">Schedulers.boundedElastic()</code> for blocking</li>
                                    <li>• Keep the chain unbroken</li>
                                    <li>• Test with <code className="text-[#7C3AED]">StepVerifier</code></li>
                                </ul>
                            </div>
                            <div className="p-5 bg-zinc-900/50 rounded-lg border border-white/10">
                                <h4 className="text-red-400 font-bold mb-3">❌ Avoid</h4>
                                <ul className="text-gray-400 space-y-2 text-sm">
                                    <li>• Calling <code className="text-red-400">.block()</code> in reactive code</li>
                                    <li>• Using <code className="text-red-400">try-catch</code> around operators</li>
                                    <li>• Blocking I/O on event loop threads</li>
                                    <li>• Subscribing inside reactive chains</li>
                                    <li>• Ignoring backpressure in Flux</li>
                                    <li>• Mutable state in operators</li>
                                    <li>• <code className="text-red-400">.subscribe()</code> without error handler</li>
                                </ul>
                            </div>
                        </div>

                        <h3 className="text-white font-bold text-lg mb-3 mt-4">Testing with StepVerifier</h3>
                        <CodeBlock language="java" code={`// Test a Mono
StepVerifier.create(userService.findById("123"))
    .expectNextMatches(user -> user.getName().equals("Ramjee"))
    .verifyComplete();

// Test a Flux
StepVerifier.create(Flux.just("a", "b", "c"))
    .expectNext("a")
    .expectNext("b")
    .expectNext("c")
    .verifyComplete();

// Test error handling
StepVerifier.create(userService.findById("invalid"))
    .expectError(UserNotFoundException.class)
    .verify();

// Test with virtual time (for intervals/delays)
StepVerifier.withVirtualTime(() -> Flux.interval(Duration.ofHours(1)).take(3))
    .thenAwait(Duration.ofHours(3))
    .expectNext(0L, 1L, 2L)
    .verifyComplete();`} />
                    </ExpandableSection>
                </div>
            </section>

            {/* Conclusion */}
            <section className="py-16 px-4 md:px-6 bg-gradient-to-b from-transparent via-[#7C3AED]/5 to-transparent">
                <div className="max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center"
                    >
                        <h2 className="text-2xl font-bold text-white mb-4">🚀 Go Reactive!</h2>
                        <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
                            Mono and Flux are the foundation of reactive Java development. Master these concepts and you&apos;ll unlock
                            the full power of Spring WebFlux, R2DBC, and reactive microservices.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link
                                href="/blog/spring-boot-annotations"
                                className="inline-flex items-center gap-2 px-6 py-3 bg-[#7C3AED] text-white font-bold rounded-lg hover:bg-[#6D28D9] transition-colors"
                            >
                                Spring Boot Annotations
                                <ArrowLeft size={18} className="rotate-180" />
                            </Link>
                            <Link
                                href="/blog/spring-boot-rest-api"
                                className="inline-flex items-center gap-2 px-6 py-3 border border-[#7C3AED]/30 text-[#7C3AED] font-bold rounded-lg hover:bg-[#7C3AED]/10 transition-colors"
                            >
                                REST APIs Guide
                                <ArrowLeft size={18} className="rotate-180" />
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Footer */}
            <footer className="py-8 px-6 border-t border-white/5">
                <div className="max-w-4xl mx-auto text-center text-gray-500 text-sm">
                    <p>Written by <span className="text-[#7C3AED]">Ramjee Prasad</span> • Backend Developer</p>
                </div>
            </footer>

            <BackToTop />
        </main>
    );
}
