'use client'
/* eslint-disable @next/next/no-img-element */
import { Card } from "@/components/ui/card"
import { Section } from "./Section"
import { Building2, Figma, Film, Leaf, LucideIcon, Wallet } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { ContactCard } from "./ContactCard"
import { motion } from "framer-motion";
import Image from "next/image"
import { useRef, useState } from "react"

function getRelativeCoordinates(
    event: React.MouseEvent<HTMLUListElement>,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    referenceElement: any
  ) {
    const position = {
      x: event.pageX,
      y: event.pageY,
    };
  
    const offset = {
      left: referenceElement.offsetLeft,
      top: referenceElement.clientTop,
      width: referenceElement.clientWidth,
      height: referenceElement.clientHeight,
    };
  
    let reference = referenceElement.offsetParent;
  
    while (reference) {
      offset.left += reference.offsetLeft;
      offset.top += reference.offsetTop;
      reference = reference.offsetParent;
    }
  
    return {
      x: position.x - offset.left,
      y: position.y - offset.top,
    };
  }

export const Status = () => {
    const [mousePosition, setMousePosition] = useState({
        x: 240,
        y: 0,
      });
      const listRef = useRef(null);
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const handleMouseMove = (e: React.MouseEvent<any>) => {
        setMousePosition(getRelativeCoordinates(e, listRef.current));
      };

    return (
        <Section className="flex max-lg:flex-col items-start gap-4">
            <div className="flex-[3] w-full animate-in" style={{ "--index": 4 } as React.CSSProperties}>
                <Card ref={listRef}
                    onMouseMove={(e) => handleMouseMove(e)} className="w-full p-4 flex flex-col gap-2">
                    <p className="text-lg text-muted-foreground font-bold">Projets annexes, fun & professionnels</p>
                    <div className="flex flex-col gap-4">
                        {SIDE_PROJECTS.map((project, index) => (
                            <SideProject key={index} {...project} mousePosition={mousePosition} />
                        ))}
                    </div>
                </Card>
            </div>
            <div className="flex-[2] w-full flex flex-col gap-4 animate-in -z-10" style={{ "--index": 4} as React.CSSProperties}>
                <Card className="p-4 flex-1">
                    <p className="text-lg text-muted-foreground font-bold">Expériences professionnelles</p>
                    <div className="flex flex-col gap-4">
                        {WORKS.map((project, index) => (
                            <Work key={index} {...project} />
                        ))}
                    </div>
                </Card>
                <Card className="p-4 flex-1 flex flex-col gap-2">
                    <p className="text-lg text-muted-foreground font-bold">Contactez-moi</p>
                    <ContactCard url="mailto:pierre.thouvenot1711@gmail.com" image="/images/photo-tp.png" mediumImage="https://cdn4.iconfinder.com/data/icons/social-media-logos-6/512/112-gmail_email_mail-512.png" name="Pierre Thouvenot" description="Email" />
                    <ContactCard url="https://www.linkedin.com/in/pierre-thouvenot/" image="/images/photo-tp.png" mediumImage="https://img.freepik.com/vecteurs-premium/linkedin-logo_578229-227.jpg" name="Pierre Thouvenot" description="LinkedIn" />
                </Card>
            </div>
        </Section>
    )
}

const SIDE_PROJECTS: SideProjectProps[] = [
    {
        Logo: Building2,
        title: "4RH",
        description: "Conception et développement d'une application web interne pour la gestion des ressources humaines de l'entreprise Neo4T.",
        image: "/images/4RH.png"
    },
    {
        Logo: Leaf,
        title: "Permacool",
        description: "Conception et développement from scratch d'une application mobile permettant aux utilisateurs de suivre leurs plantations et d'accéder à des informations détaillées sur les plantes.",
        image: "/images/permacool.png"
    },
    {
        Logo: Figma,
        title: "OOTD",
        description: "Réalisation des maquettes de design pour une application de réseau social dédiée aux passionnés de mode et de vêtements. Élaboration du modèle de données et lancement des premières étapes de développement.",
        image: "/images/ootd3.png"
    },
    {
        Logo: Film,
        title: "MiPi",
        description: "Création des maquettes de design pour une application de réseau social dédiée aux passionnés de cinéma et de séries TV.",
        image: "/images/mipi.png"
    },
    {
        Logo: Wallet,
        title: "SmartBuget",
        description: "Première phase de conception d'une application multiplateforme pour la gestion des budgets et des dépenses mensuelles."
    },
    

]

type SideProjectProps = {
    Logo: LucideIcon,
    title: string,
    description: string
    image?: string
    mousePosition?: { x: number, y: number }

}

const SideProject = (props: SideProjectProps) => {
    const imageHeight = 150;
    const imageWidth = 300;
    const imageOffset = 22;
    return (
        <div className="inline-flex items-center gap-4 hover:bg-accent/50 transition-colors p-1 rounded group">

                {props.image && props.mousePosition && (
                <motion.div
                    animate={{
                    top: props.mousePosition.y - imageHeight - imageOffset,
                    left: props.mousePosition.x + imageOffset,
                    }}
                    initial={false}
                    transition={{ ease: "easeOut" }}
                    style={{ width: imageWidth, height: imageHeight }}
                    className="absolute z-10 hidden overflow-hidden rounded shadow-sm pointer-events-none sm:group-hover:block bg-primary"
                >
                    <Image
                    src={props.image}
                    alt={props.title}
                    width={imageWidth}
                    height={imageHeight}
                    />
                </motion.div>
            )}
            
            <span className="bg-accent text-accent-foreground p-3 rounded-sm">
                <props.Logo size={16} />
            </span>
            <div>
            <p className="text-lg font-semibold">{props.title}</p>
            <p className="text-sm text-muted-foreground">{props.description}</p>
            </div>
           
        </div>
    )
    
}

const WORKS: WorkProps[] = [
    {
        image: "https://media.licdn.com/dms/image/v2/C4E0BAQFnQkl-W3z7aw/company-logo_100_100/company-logo_100_100/0/1630637061344?e=1739404800&v=beta&t=akJykwjQ1PGGhPUjTbBfV1truaS46O41Cp8nM2atXWc",
        title: "Neo4T",
        date: "2022 - 2024",
        role: "Développeur fullstack ReactJS/NodeJS",
        alternance: true,
        stage: false


    },
    {
        image: "https://media.licdn.com/dms/image/v2/C4E0BAQFfOEfwmpRheA/company-logo_100_100/company-logo_100_100/0/1679301996743/papivegetaliselesespacespublicetprives_logo?e=1739404800&v=beta&t=O2mn7ZpUqW5MGlvqyjrjq8IcA-HcfYob4OLVphvKBUI",
        title: "PAPI",
        date: "2021 - 2022",
        role: "Développeur mobile React Native",
        alternance: true,
        stage: false


    },
    {
        image: "https://media.licdn.com/dms/image/v2/D4E0BAQEK-0BvyJ6KNg/company-logo_100_100/company-logo_100_100/0/1664800358241/groupe_projex_logo?e=1739404800&v=beta&t=4hQqaT7V0mLPzl6iEP0TX0fHb6uFJfdvd4Yn0y0WNko",
        title: "Groupe Projex",
        date: "2021",
        role: "Développeur front-end Next.js",
        alternance: false,
        stage: true


    }
]

type WorkProps = {
    image: string,
    title: string,
    date: string,
    role: string,
    alternance?: boolean,
    stage?: boolean

}

const Work = (props: WorkProps) => {
    return (
        <div className="inline-flex items-center gap-4 hover:bg-accent/50 transition-colors p-1 rounded">
                <img src={props.image} alt={props.title} className="w-10 h-10 object-contain rounded-md" />  
            <div>
                <div className="flex items-center gap-2">
                    <p className="text-lg font-semibold">{props.title}</p>
                    
                </div>
                <p className="text-xs text-muted-foreground">{props.date}</p>
                <p className="text-xs text-muted-foreground">{props.role}</p>
            </div>
            <div className="ml-auto">
               
                {props.alternance && <Badge className="bg-[#29342B] text-[#2B914E] p-1" color="#2B914E" variant="outline">Alternance</Badge>}
                    {props.stage && <Badge className="bg-[#29342B] text-[#2B914E] p-1" color="#2B914E" variant="outline">Stage</Badge>}
            </div>
        </div>
    )
    
}

