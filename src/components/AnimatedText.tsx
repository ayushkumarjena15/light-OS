"use client";

import { motion } from "framer-motion";

interface AnimatedTextProps {
    text: string;
    className?: string;
    delayOffset?: number;
    staggerDelay?: number;
    animateBy?: "letter" | "word";
    animationStyle?: "3d-fold" | "blur-fade" | "slide-up";
}

export function AnimatedText({ 
    text, 
    className, 
    delayOffset = 0, 
    staggerDelay = 0.04, 
    animateBy = "letter",
    animationStyle = "blur-fade"
}: AnimatedTextProps) {
    const getVariants = () => {
        const baseTransition = (i: number) => ({
            duration: 1.5,
            ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
            delay: (i * staggerDelay) + delayOffset,
        });

        if (animationStyle === "blur-fade") {
            return {
                hidden: { opacity: 0, y: 30, filter: "blur(8px)" },
                visible: (i: number) => ({
                    opacity: 1, 
                    y: 0, 
                    filter: "blur(0px)",
                    transition: baseTransition(i)
                })
            };
        }
        
        if (animationStyle === "slide-up") {
            return {
                hidden: { opacity: 0, y: 50 },
                visible: (i: number) => ({
                    opacity: 1, 
                    y: 0, 
                    transition: baseTransition(i)
                })
            };
        }

        // Default 3d-fold
        return {
            hidden: { opacity: 0, y: 100, rotateX: -90 },
            visible: (i: number) => ({
                opacity: 1, 
                y: 0, 
                rotateX: 0,
                transition: baseTransition(i)
            })
        };
    };

    const textVariants = getVariants();

    return (
        <div 
            className={className}
            style={{ perspective: animationStyle === "3d-fold" ? "600px" : "none" }}
        >
            <span className="sr-only">{text}</span>
            <span aria-hidden="true" className="flex flex-wrap justify-center overflow-visible">
                {animateBy === "word" ? (
                    text.split(" ").map((word, i) => (
                        <span key={i} className="inline-block whitespace-pre">
                            <motion.span
                                custom={i}
                                variants={textVariants}
                                initial="hidden"
                                animate="visible"
                                className="inline-block"
                                style={{ transformOrigin: "bottom center" }}
                            >
                                {word}
                            </motion.span>
                            {/* Add space after word */}
                            {i < text.split(" ").length - 1 && " "}
                        </span>
                    ))
                ) : (
                    text.split("").map((char, i) => (
                        <motion.span
                            key={i}
                            custom={i}
                            variants={textVariants}
                            initial="hidden"
                            animate="visible"
                            className="inline-block"
                            style={{ 
                                transformOrigin: "bottom center",
                                whiteSpace: "pre"
                            }}
                        >
                            {char}
                        </motion.span>
                    ))
                )}
            </span>
        </div>
    );
}
