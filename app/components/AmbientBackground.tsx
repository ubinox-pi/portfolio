"use client";

export default function AmbientBackground() {
    return (
        <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden" aria-hidden="true">
            {/* Top Warm Amber Ambient Glow */}
            <div
                className="absolute -top-[20%] left-1/2 -translate-x-1/2 w-[1000px] h-[600px] rounded-full blur-[140px] opacity-25"
                style={{
                    background: "radial-gradient(ellipse at center, rgba(245, 158, 11, 0.45), rgba(217, 119, 6, 0.15), transparent 70%)",
                }}
            />

            {/* Mid Page Ambient Indigo Depth */}
            <div
                className="absolute top-[40%] -left-[10%] w-[700px] h-[700px] rounded-full blur-[160px] opacity-15"
                style={{
                    background: "radial-gradient(circle, rgba(99, 102, 241, 0.3), transparent 70%)",
                }}
            />

            {/* Bottom Warm Amber Glow */}
            <div
                className="absolute top-[75%] -right-[10%] w-[800px] h-[800px] rounded-full blur-[160px] opacity-15"
                style={{
                    background: "radial-gradient(circle, rgba(245, 158, 11, 0.25), transparent 70%)",
                }}
            />

            {/* Architectural Subtle Grid with Radial Fade Mask */}
            <div
                className="absolute inset-0 opacity-[0.14]"
                style={{
                    backgroundImage: `
                        linear-gradient(to right, rgba(255, 255, 255, 0.08) 1px, transparent 1px),
                        linear-gradient(to bottom, rgba(255, 255, 255, 0.08) 1px, transparent 1px)
                    `,
                    backgroundSize: "48px 48px",
                    maskImage: "radial-gradient(ellipse 90% 80% at 50% 30%, black 40%, transparent 90%)",
                    WebkitMaskImage: "radial-gradient(ellipse 90% 80% at 50% 30%, black 40%, transparent 90%)",
                }}
            />

            {/* Very Subtle Noise Texture for Cinematic Depth */}
            <div className="absolute inset-0 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:32px_32px] opacity-[0.03]" />
        </div>
    );
}
