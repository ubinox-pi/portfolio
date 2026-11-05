"use client";

/**
 * Quiet, warm backdrop: two slow-drifting blobs in Java orange & blue,
 * a faint column grid, and film grain on top. Gives the glass surfaces
 * something soft to blur without shouting.
 */
export default function AmbientBackground() {
    return (
        <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden" aria-hidden="true">
            {/* Warm orange glow, top-right */}
            <div
                className="absolute -top-[18%] right-[-12%] h-[70vh] w-[70vw] max-w-[900px] rounded-full blur-[120px] opacity-[0.22] animate-drift"
                style={{ background: "radial-gradient(circle at center, #e76f00 0%, rgba(231,111,0,0.25) 40%, transparent 70%)" }}
            />

            {/* Cool Java-blue glow, left */}
            <div
                className="absolute top-[35%] -left-[18%] h-[70vh] w-[60vw] max-w-[800px] rounded-full blur-[140px] opacity-[0.14] animate-drift-slow"
                style={{ background: "radial-gradient(circle at center, #5382a1 0%, rgba(83,130,161,0.2) 45%, transparent 70%)" }}
            />

            {/* Column guides — like a typesetter's grid */}
            <div className="absolute inset-0 mx-auto hidden max-w-6xl px-6 md:block">
                <div className="grid h-full grid-cols-4 border-x border-white/[0.03]">
                    <div className="border-r border-white/[0.03]" />
                    <div className="border-r border-white/[0.03]" />
                    <div className="border-r border-white/[0.03]" />
                    <div />
                </div>
            </div>

            {/* Vignette */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,rgba(0,0,0,0.55)_100%)]" />

            {/* Grain */}
            <div className="grain absolute inset-0" />
        </div>
    );
}
