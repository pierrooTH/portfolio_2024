/* eslint-disable @next/next/no-img-element */
import { Section } from "./Section";
import Image from 'next/image'
import { Code } from "./Code";

export const Hero = () => {
    return (
        <Section className="flex max-lg:flex-col  items-center gap-4">
            <div className="flex-[3] w-full">
                <div className="w-full flex flex-col gap-2">
                    <h2 className="font-caption font-bold text-4xl text-primary animate-in">Bonjour, je suis Pierre 👋🏼</h2>
                    <h3 className="font-caption text-2xl animate-in" style={{ "--index": 1 } as React.CSSProperties}>Développeur full-stack, passionné par l&apos;informatique et le web 🚀</h3>
                    <p className="leading-8 text-sm animate-in" style={{ "--index": 2 } as React.CSSProperties}>Fort de plus de <Code>trois ans</Code> d&apos;expérience en <Code>développement web</Code>, je suis à la recherche de nouvelles <Code>opportunités</Code> pour enrichir mon parcours. Basé près de <Code className="inline-flex items-center gap-1">
                        <img  src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Flag_of_France_%281794%E2%80%931815%2C_1830%E2%80%931974%2C_2020%E2%80%93present%29.svg/langfr-450px-Flag_of_France_%281794%E2%80%931815%2C_1830%E2%80%931974%2C_2020%E2%80%93present%29.svg.png" alt="France flag" style={{width: 16, height: "auto"}} />
                        Lille
                    </Code>, en France, je serais ravi d&apos;échanger avec vous. N&apos;hésitez pas à me contacter !</p>
                </div>
            </div>
            <div className="flex-[2] w-full flex flex-col gap-4 items-center animate-in" style={{ "--index": 3 } as React.CSSProperties}>
                <Image src='/images/programmer.png' alt="hero" className="max-w-xs rounded-md" width={300} height={300}  />
            </div>

        </Section>
    )
}