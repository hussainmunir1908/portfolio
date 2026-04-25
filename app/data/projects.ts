import { PROJECT_DESCRIPTIONS } from "./project-descriptions";

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
    image: string;
    initialImage: string;
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
        image: "/images/portfolio/KhataShowcase.png",
        initialImage: "/images/portfolio/KhataInitial.png",
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
        image: "/images/portfolio/ResQHubShowcase.png",
        initialImage: "/images/portfolio/ResQHubInitial.png",
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
