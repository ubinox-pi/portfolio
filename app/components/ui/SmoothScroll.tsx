"use client";

import { useEffect } from "react";
import Lenis from "lenis";

/**
 * Inertia-based smooth scrolling (Lenis).
 * Also routes in-page anchor clicks (#about, /#projects) through Lenis
 * so they glide instead of jumping. Disabled for reduced-motion users.
 */
export default function SmoothScroll() {
    useEffect(() => {
        if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

        const lenis = new Lenis({
            duration: 1.15,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            smoothWheel: true,
        });

        let frame = 0;
        const raf = (time: number) => {
            lenis.raf(time);
            frame = requestAnimationFrame(raf);
        };
        frame = requestAnimationFrame(raf);

        const onClick = (event: MouseEvent) => {
            const anchor = (event.target as HTMLElement | null)?.closest("a");
            if (!anchor) return;
            const href = anchor.getAttribute("href");
            if (!href || !href.includes("#")) return;

            const [path, hash] = href.split("#");
            if (path && path !== "/" && path !== window.location.pathname) return;

            const target = hash ? document.getElementById(hash) : null;
            if (!target && hash) return;

            event.preventDefault();
            lenis.scrollTo(target ?? 0, { offset: -88 });
            history.replaceState(null, "", hash ? `#${hash}` : window.location.pathname);
        };

        document.addEventListener("click", onClick);

        return () => {
            document.removeEventListener("click", onClick);
            cancelAnimationFrame(frame);
            lenis.destroy();
        };
    }, []);

    return null;
}
