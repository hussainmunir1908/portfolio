"use client";

import { useRef } from "react";
import { useGSAP } from "@/app/hooks/useGSAP";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Quote } from "lucide-react";

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}

const testimonials = [
    {
        name: "Fatima Liaquat",
        role: "Data Science Student & Project Collaborator",
        company: "GIKI",
        image: "👩‍💻",
        content: "Hussain has a rare ability to translate complex data requirements into fluid, high-performance interfaces. His work on our shared projects showed a deep understanding of both the logic and the 'vibe' of the product.",
        rating: 5
    },
    {
        name: "Muhammad Sufyan",
        role: "Project Peer",
        company: "GIKI",
        image: "👨‍💻",
        content: "Hussain's architectural choices on ResQHub were brilliant. He didn't just write code; he built a scalable, event-driven system that handled real-time mapping with zero friction. He's an engineer who thinks three steps ahead.",
        rating: 5
    },
    {
        name: "Engr. Dr. Muhammad Hanif",
        role: "Associate Professor",
        company: "GIKI",
        image: "👨‍🏫",
        content: "Hussain possesses a sharp analytical mind for complex system modeling. His implementation of signal processing techniques, such as IIR filters and spectral analysis, reflects a deep mastery of the mathematical foundations of engineering that goes far beyond standard application development.",
        rating: 5
    }
];

export default function Testimonials() {
    const sliderRef = useRef<HTMLDivElement>(null);
    
    // Create a looped array of testimonials to ensure infinite scrolling covers wide screens
    // duplicating 4 times to ensure enough length for large screens
    const loopedTestimonials = [...testimonials, ...testimonials, ...testimonials, ...testimonials];

    const containerRef = useGSAP(() => {
        const slider = sliderRef.current;
        if (!slider) return;
        const section = slider.closest(".testimonials-section");
        if (!section) return;

        const totalWidth = slider.scrollWidth;
        const widthPerSet = totalWidth / 4; // Since we quadrupled the items

        gsap.to(slider, {
            x: -widthPerSet,
            duration: 20,
            ease: "none",
            repeat: -1,
            modifiers: {
                x: gsap.utils.unitize(x => parseFloat(x) % widthPerSet)
            }
        });

        // Specific animation for the section title
        gsap.from(".testimonial-header", {
            scrollTrigger: {
                trigger: section,
                start: "top 80%",
            },
            y: 50,
            opacity: 0,
            duration: 1,
            stagger: 0.2,
            ease: "power3.out"
        });

    }, []);

    return (
        <section ref={containerRef} className="testimonials-section relative w-full py-32 overflow-hidden bg-background">
            <div className="max-w-[1920px] mx-auto px-4 sm:px-6 md:px-12 lg:px-20 mb-20">
                <div className="flex flex-col gap-4">
                    <span className="testimonial-header text-xs uppercase tracking-[0.3em] text-foreground/45 font-medium">Testimonials</span>
                    <h2 className="testimonial-header text-[clamp(2.5rem,6vw,6rem)] font-black uppercase leading-[0.9] text-foreground">
                        What People <br /> Say
                    </h2>
                </div>
            </div>

            <div className="relative w-full overflow-hidden mask-fade-sides">
                {/* Gradient Masks for smooth fade out at edges */}
                <div className="absolute left-0 top-0 bottom-0 w-20 md:w-40 z-10 bg-linear-to-r from-background to-transparent pointer-events-none"></div>
                <div className="absolute right-0 top-0 bottom-0 w-20 md:w-40 z-10 bg-linear-to-l from-background to-transparent pointer-events-none"></div>

                <div ref={sliderRef} className="flex gap-6 w-max items-stretch pl-4 sm:pl-6 md:pl-12 lg:pl-20">
                    {loopedTestimonials.map((testimonial, index) => (
                        <div 
                            key={index} 
                            className="w-[350px] md:w-[500px] shrink-0 group relative"
                        >
                            <div className="h-full bg-transparent border-t border-border hover:border-foreground/40 transition-colors duration-500 pt-8 flex flex-col justify-between">
                                <div>
                                    <div className="mb-6 text-foreground/40">
                                        <Quote className="w-8 h-8 opacity-50" />
                                    </div>
                                    
                                    <p className="text-lg md:text-xl text-foreground/80 leading-relaxed font-light mb-8">
                                        "{testimonial.content}"
                                    </p>
                                </div>

                                <div className="flex items-center gap-4 mt-auto">
                                    <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-lg border border-border">
                                        {testimonial.image}
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-foreground uppercase tracking-wider text-xs">{testimonial.name}</h4>
                                        <p className="text-[10px] text-foreground/45 uppercase tracking-widest mt-1">{testimonial.company}</p>
                                    </div>
                                    <div className="ml-auto flex gap-0.5 opacity-50">
                                        {[...Array(testimonial.rating)].map((_, i) => (
                                            <span key={i} className="text-foreground text-[10px]">★</span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
