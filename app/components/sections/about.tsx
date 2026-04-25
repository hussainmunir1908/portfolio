"use client";

import { useGSAP } from "@/app/hooks/useGSAP";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}

type SkillItem = {
    name: string;
    icon: string;
    type: "img";
};

const skills: Record<string, SkillItem[]> = {
    Frontend: [
        { name: "React", icon: "/images/frontend/React.svg", type: "img" },
        { name: "Next.js", icon: "/images/frontend/Next.js.svg", type: "img" },
        { name: "TypeScript", icon: "/images/frontend/TypeScript.svg", type: "img" },
        { name: "Tailwind", icon: "/images/frontend/Tailwind CSS.svg", type: "img" },
    ],
    Backend: [
        { name: "Node.js", icon: "/images/backend/Node.js.svg", type: "img" },
        { name: "Supabase", icon: "/images/portfolio/supabaseIcon.webp", type: "img" },
    ],
    Database: [
        { name: "PostgreSQL", icon: "/images/database/PostgresSQL.svg", type: "img" },
        { name: "MongoDB", icon: "/images/database/MongoDB.svg", type: "img" },
    ],
    Tools: [
        { name: "Git", icon: "/images/tools/Git.svg", type: "img" },
    ],
};

export default function About() {
    const sectionRef = useGSAP(() => {
        gsap.from(".about-left", {
            scrollTrigger: {
                trigger: ".about-section",
                start: "top 75%",
            },
            opacity: 0,
            x: -30,
            duration: 0.8,
            ease: "power2.out",
        });
        gsap.from(".about-right", {
            scrollTrigger: {
                trigger: ".about-section",
                start: "top 75%",
            },
            opacity: 0,
            x: 30,
            duration: 0.8,
            delay: 0.15,
            ease: "power2.out",
        });
        gsap.from(".skill-category", {
            scrollTrigger: {
                trigger: ".about-section",
                start: "top 65%",
            },
            opacity: 0,
            y: 20,
            duration: 0.5,
            stagger: 0.12,
            ease: "power2.out",
        });
    }, []);

    return (
        <section
            ref={sectionRef}
            id="about"
            className="about-section relative w-full bg-background py-24 md:py-32"
        >
            <div className="mx-auto w-full max-w-[1920px] px-5 sm:px-8 md:px-12 lg:px-14 xl:px-18">
                {/* Section label */}
                <span className="mb-8 block font-mono text-[10px] uppercase tracking-[0.35em] text-foreground/45">
                    About
                </span>

                <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:gap-24">
                    {/* ——— Left: Bio copy ——— */}
                    <div className="about-left space-y-8">
                        <h2 className="text-[clamp(2.2rem,5vw,4rem)] font-black uppercase leading-[0.92] tracking-tight text-foreground">
                            Who
                            <br />
                            I Am
                        </h2>

                        <div className="space-y-6 max-w-xl">
                            <p className="text-base leading-relaxed text-foreground/70 md:text-lg">
                                Full-Stack Engineer with a foundation in Computer Engineering from{" "}
                                <span className="text-foreground font-semibold">GIKI</span>. I specialize in
                                bridging the gap between hardware-level precision and modern,
                                high-performance digital experiences.
                            </p>
                            <p className="text-base leading-relaxed text-foreground/70 md:text-lg">
                                From architecting event-driven disaster response platforms to developing
                                real-time applications for community safety, I focus on building scalable
                                systems that solve tangible problems.
                            </p>
                            <p className="text-base leading-relaxed text-foreground/70 md:text-lg">
                                I am driven by the intersection of creative flow and technical
                                implementation — what I call{" "}
                                <span className="text-foreground font-semibold italic">&ldquo;Coding&rdquo;</span>{" "}
                                — ensuring every line of code serves both the machine&apos;s efficiency and
                                the user&apos;s intuition.
                            </p>
                        </div>
                    </div>

                    {/* ——— Right: Skills grid ——— */}
                    <div className="about-right">
                        <div className="space-y-10">
                            {Object.entries(skills).map(([category, items]) => (
                                <div key={category} className="skill-category">
                                    <span className="mb-4 block font-mono text-[9px] uppercase tracking-[0.35em] text-foreground/40">
                                        {category}
                                    </span>
                                    <div className="flex flex-wrap gap-3">
                                        {items.map((skill) => (
                                            <div
                                                key={skill.name}
                                                className="group flex items-center gap-2 rounded-full border border-border bg-muted/40 px-3.5 py-2 transition-all duration-200 hover:border-foreground/25 hover:bg-muted"
                                            >
                                                <div className="relative h-4 w-4 shrink-0">
                                                    <Image
                                                        src={skill.icon}
                                                        alt={skill.name}
                                                        fill
                                                        className="object-contain"
                                                        sizes="16px"
                                                    />
                                                </div>
                                                <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-foreground/65 group-hover:text-foreground/90 transition-colors">
                                                    {skill.name}
                                                </span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
