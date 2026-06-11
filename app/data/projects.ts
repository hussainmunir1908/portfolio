import { StaticImageData } from "next/image";
import { PROJECT_DESCRIPTIONS } from "./project-descriptions";

import khataShowcase from "@/public/images/portfolio/KhataShowcase.png";
import khataInitial from "@/public/images/portfolio/KhataInitial.png";
import resqhubShowcase from "@/public/images/portfolio/ResQHubShowcase.png";
import resqhubInitial from "@/public/images/portfolio/ResQHubInitial.png";
import gpuShowcase from "@/public/images/portfolio/GPUShowcase.png";
import gpuInitial from "@/public/images/portfolio/GPUInitial.png";

export type Project = {
    slug: string;
    title: string;
    role: string;
    description: string;
    highlights: readonly string[];
    tech: readonly string[];
    github: string;
    live: string;
    featured: boolean;
    year: string;
    image: StaticImageData | string;
    initialImage: StaticImageData | string;
};

type ProjectCore = Omit<Project, "description">;

const projectCoreList: readonly ProjectCore[] = [
    {
        slug: "khata",
        title: "Khata",
        role: "Full-Stack Developer",
        highlights: [
            "Built a real-time financial ledger with instant transaction logging and balance tracking.",
            "Designed a secure data flow architecture with Supabase and PostgreSQL for persistent records.",
            "Delivered a clean, minimal UI focused on speed and daily usability.",
            "Shipped end-to-end in a hackathon sprint — from schema to deployment.",
        ],
        tech: ["Next.js", "TypeScript", "Supabase", "PostgreSQL", "Tailwind CSS"],
        github: "https://github.com/hussainmunir1908/Khata",
        live: "https://khata-ai-pk.vercel.app/",
        featured: true,
        year: "2026",
        image: khataShowcase,
        initialImage: khataInitial,
    },
    {
        slug: "resqhub",
        title: "ResQHub",
        role: "Full-Stack Developer",
        highlights: [
            "Architected an event-driven disaster response platform built for real-time incident coordination.",
            "Integrated Google Maps API for live incident mapping and responder deployment.",
            "Implemented high-availability deployment with Supabase and PostgreSQL backend.",
            "Designed for crisis conditions — fast load, clear UI, zero tolerance for failure.",
        ],
        tech: ["React", "Supabase", "PostgreSQL", "Google Maps API", "TypeScript"],
        github: "https://github.com/hussainmunir1908/ResQHub",
        live: "https://resqhub-three.vercel.app/",
        featured: true,
        year: "2025",
        image: resqhubShowcase,
        initialImage: resqhubInitial,
    },
    {
        slug: "virtualgpu",
        title: "VirtualGPU Simulator",
        role: "Developer",
        highlights: [
            "Developed an interactive web-based simulator visualizing GPU architecture and parallel processing.",
            "Built dynamic visualizations for thread execution, scheduling, and memory hierarchies.",
            "Engineered a performant state-management system to handle real-time simulation updates.",
            "Designed an intuitive, responsive interface making complex hardware concepts accessible."
        ],
        tech: ["React", "TypeScript", "Tailwind CSS", "Vercel"],
        github: "https://github.com/hussainmunir1908/VirtualGPU",
        live: "https://virtual-gpu.vercel.app",
        featured: true,
        year: "2026",
        image: gpuShowcase,
        initialImage: gpuInitial,
    },
];

function attachDescription(core: ProjectCore): Project {
    const description = PROJECT_DESCRIPTIONS[core.slug];
    if (description === undefined) {
        throw new Error(`Missing PROJECT_DESCRIPTIONS entry for slug: ${core.slug}`);
    }
    return { ...core, description };
}

export const projects: readonly Project[] = projectCoreList.map(attachDescription);

export const getProjectBySlug = (slug: string): Project | null => {
    return projects.find((project) => project.slug === slug) ?? null;
};
