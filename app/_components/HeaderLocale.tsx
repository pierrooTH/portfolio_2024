/* eslint-disable @next/next/no-img-element */
import { Code } from "./Code";

export const HeroContentLocal: { [key: string]: { title: string; shortDescription: string; description: string } } = {
    "en": {
      title: "Hello, I'm Pierre 👋🏼",
      shortDescription: "Full-stack developer, passionate about IT and the web 🚀",
      description: `With over ${<Code>three years</Code>} of experience in ${<Code>web development</Code>}, I am seeking new ${<Code>opportunities</Code>} to enrich my career path. Based near ${<Code className="inline-flex items-center gap-1">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Flag_of_France_%281794%E2%80%931815%2C_1830%E2%80%931974%2C_2020%E2%80%93present%29.svg/langfr-450px-Flag_of_France_%281794%E2%80%931815%2C_1830%E2%80%931974%2C_2020%E2%80%93present%29.svg.png" alt="France flag" style={{width: 16, height: "auto"}} />
                        Lille</Code>} in France, I would be happy to connect with you. Feel free to reach out!`,
    },
    "fr": {
      title: "Bonjour, je suis Pierre 👋🏼",
      shortDescription: "Développeur full-stack, passionné par l'informatique et le web 🚀",
      description: `Fort de plus de ${<Code>trois ans</Code>} d'expérience en ${<Code>développement web</Code>}, je suis à la recherche de nouvelles ${<Code>opportunités</Code>} pour enrichir mon parcours. Basé près de ${<Code className="inline-flex items-center gap-1">
      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Flag_of_France_%281794%E2%80%931815%2C_1830%E2%80%931974%2C_2020%E2%80%93present%29.svg/langfr-450px-Flag_of_France_%281794%E2%80%931815%2C_1830%E2%80%931974%2C_2020%E2%80%93present%29.svg.png" alt="France flag" style={{width: 16, height: "auto"}} />
      Lille
  </Code>}, en France, je serais ravi d&apos;échanger avec vous. N&apos;hésitez pas à me contacter !`
    },
  };