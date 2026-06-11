"use client";

import Image from "next/image";
import { useRef } from "react";
import { useGSAP } from "@/app/hooks/useGSAP";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const hobbiesData = [
  {
    id: "piano",
    title: "Piano",
    description: "I have been playing the piano for 5 years now. I'm completely self-taught, exploring melodies and expressing creativity through music. Check out my Instagram handle @broccoli.wav for some of my stuff. For spotify, search up \"Hussain Munir\" :)",
    image: "/images/hobbies/PianoImage.PNG",
  },
  {
    id: "gaming",
    title: "Gaming & Video Editing",
    description: "I've been gaming since childhood. Recently, I blended my love for gaming and video editing skills to create aesthetic videogame edits of cars and immersive gaming moments.",
    image: "/images/hobbies/GamingAndVideoEditing.png",
  },
  {
    id: "toys",
    title: "Collecting Toys",
    description: "I find these miniature figures and collectibles incredibly adorable. I love discovering unique pieces and carefully curating my collection.",
    image: "/images/hobbies/Toys.png",
  }
];

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}

export default function Hobbies() {
    const sectionRef = useRef<HTMLElement>(null);

    useGSAP(() => {
        gsap.from(".hobby-card", {
            scrollTrigger: {
                trigger: sectionRef.current,
                start: "top 80%",
            },
            y: 50,
            opacity: 0,
            duration: 0.8,
            stagger: 0.2,
            ease: "power3.out"
        });
    }, []);

    return (
        <section
            ref={sectionRef}
            id="hobbies"
            className="relative bg-background overflow-hidden py-16 sm:py-20 lg:py-28"
        >
            <div className="mx-auto max-w-[1920px] px-6 md:px-12 lg:px-20 xl:px-32">
                <div className="mb-10 lg:mb-16">
                    <span className="mb-3 block font-mono text-[10px] uppercase tracking-[0.35em] text-foreground/45">
                        Beyond the Code
                    </span>
                    <h2 className="text-3xl md:text-5xl lg:text-7xl font-black text-foreground uppercase leading-[0.9] tracking-tighter italic mb-4">
                        Interests &<br />
                        Hobbies
                    </h2>
                </div>

                <div className="grid grid-cols-1 gap-6 lg:gap-10">
                    {hobbiesData.map((hobby) => (
                        <div 
                            key={hobby.id} 
                            className="hobby-card group relative aspect-[4/3] md:aspect-video lg:aspect-[21/9] overflow-hidden rounded-sm border border-border bg-muted"
                        >
                            {/* Background Image */}
                            <Image
                                src={hobby.image}
                                alt={hobby.title}
                                fill
                                className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-110"
                                sizes="(max-width: 1024px) 100vw, 33vw"
                            />
                            
                            {/* Overlay Gradient for contrast */}
                            <div className="absolute inset-0 bg-black/10 transition-colors duration-500 group-hover:bg-black/30" />

                            {/* Centered Text Overlay */}
                            <div className="absolute inset-0 flex items-center justify-center p-6">
                                <div className="bg-background/40 backdrop-blur-md border border-border/30 rounded-sm p-6 sm:p-8 md:p-10 text-center shadow-xl transition-transform duration-500 ease-out group-hover:scale-105">
                                    <h3 className="text-2xl font-black uppercase tracking-tight text-foreground sm:text-3xl md:text-4xl mb-4">
                                        {hobby.title}
                                    </h3>
                                    <p className="text-sm leading-relaxed text-foreground/90 sm:text-base md:text-lg italic max-w-2xl mx-auto">
                                        {hobby.description}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
