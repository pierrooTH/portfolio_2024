import Link from "next/link";
import { Section } from "./Section";

export const Footer = () => {
    const year = new Date().getFullYear();
    return (
        <footer className="bg-card">
            <Section className="py-8">
                <p className="text-muted-foreground text-sm text-center">@Copyright {year} - Réalisé avec ❤️ par <Link href={"https://www.linkedin.com/in/pierre-thouvenot/"} target="_blank" className="underline">Pierre Thouvenot</Link></p>
            </Section>
        </footer>
    );
};

