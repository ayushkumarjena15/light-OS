"use client";

import { useEffect, useRef } from "react";

export function CursorGlow() {
    const glowRef = useRef<HTMLDivElement>(null);
    const cursorRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        let mx = window.innerWidth / 2, my = window.innerHeight / 2;
        let gx = mx, gy = my; // ambient glow pos
        let cx = mx, cy = my; // custom cursor pos

        const onMove = (e: MouseEvent) => { 
            mx = e.clientX; 
            my = e.clientY; 
        };
        document.addEventListener("mousemove", onMove);

        // Detect hover state for interactive elements
        let isHovering = false;
        let isClicking = false;

        const handleMouseOver = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            const interactive = target.closest("a, button, input, textarea, [role='button'], canvas");
            isHovering = !!interactive;
        };

        const handleMouseDown = () => { isClicking = true; };
        const handleMouseUp = () => { isClicking = false; };

        document.addEventListener("mouseover", handleMouseOver);
        document.addEventListener("mousedown", handleMouseDown);
        document.addEventListener("mouseup", handleMouseUp);

        let raf: number;
        function animate() {
            // Ambient glow follows very slowly
            gx += (mx - gx) * 0.04;
            gy += (my - gy) * 0.04;
            
            // Cursor follows quickly with some smoothing
            cx += (mx - cx) * 0.25;
            cy += (my - cy) * 0.25;
            
            if (glowRef.current) {
                glowRef.current.style.transform = `translate3d(${gx}px, ${gy}px, 0) translate(-50%, -50%)`;
            }
            if (cursorRef.current) {
                // Scale up dynamically based on hover state, scale down slightly on click
                let scale = 1;
                if (isClicking) scale = 0.8;
                else if (isHovering) scale = 2.5;

                cursorRef.current.style.transform = `translate3d(${cx}px, ${cy}px, 0) translate(-50%, -50%) scale(${scale})`;
            }
            
            raf = requestAnimationFrame(animate);
        }
        raf = requestAnimationFrame(animate);

        // Hide default cursor globally but allow text cursor on inputs
        const style = document.createElement("style");
        style.innerHTML = `
            * { cursor: none !important; }
            input, textarea, [contenteditable="true"] { cursor: text !important; }
        `;
        document.head.appendChild(style);

        return () => {
            document.removeEventListener("mousemove", onMove);
            document.removeEventListener("mouseover", handleMouseOver);
            document.removeEventListener("mousedown", handleMouseDown);
            document.removeEventListener("mouseup", handleMouseUp);
            document.head.removeChild(style);
            cancelAnimationFrame(raf);
        };
    }, []);

    return (
        <div className="pointer-events-none fixed inset-0 z-[9999] overflow-hidden">
            {/* 1. Large ambient glow (warm/blue mixture) */}
            <div
                ref={glowRef}
                className="absolute w-[600px] h-[600px] rounded-full mix-blend-screen"
                style={{
                    background: "radial-gradient(circle, rgba(59,130,246,0.06) 0%, rgba(59,130,246,0.02) 40%, transparent 70%)",
                    willChange: "transform"
                }}
            />
            
            {/* 2. Sleek Difference Blend Solid Cursor */}
            <div
                ref={cursorRef}
                className="absolute w-5 h-5 bg-white rounded-full mix-blend-difference"
                style={{
                    transformOrigin: "center center",
                    transition: "transform 0.15s ease-out", 
                    willChange: "transform",
                }}
            />
        </div>
    );
}
