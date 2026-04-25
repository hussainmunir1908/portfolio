/**
 * Long-form project blurbs keyed by slug.
 * Kept separate from the main project list so detail routing and static generation stay predictable.
 */
export const PROJECT_DESCRIPTIONS: Readonly<Record<string, string>> = {
    "khata":
        "Khata started as a hackathon experiment. It became something more deliberate. A real-time financial ledger system built for speed, clarity, and trust. Secure data flows, instant transaction records, and a UI designed to make finance feel less like a spreadsheet and more like a product. Hackathon-born. Production-ready in thinking.",
    "resqhub":
        "When infrastructure fails, software has to hold. ResQHub is a disaster response platform built around event-driven architecture — real-time incident mapping via Google Maps API, high-availability deployment, and a backend that doesn't blink under pressure. Built as part of Software Engineering coursework. Designed like it was meant for production.",
};

export function getProjectDescription(slug: string): string | undefined {
    return PROJECT_DESCRIPTIONS[slug];
}
