import { Badge } from "@/components/ui/badge"
import { Section } from "./Section"
import { ReactIcon } from "./icons/ReactIcon"
import { Code } from "./Code"
import { NodeJSIcon } from "./icons/NodeJSIcon"
import { TypeScriptIcon } from "./icons/TypeScriptIcon"

export const Skills = () => {
    return <Section className="flex flex-col items-start gap-4">
        <Badge variant="outline" color="primary">🛠️ Compétences</Badge>
        <h2 className="pb-2 text-3xl font-semibold tracking-tight first:mt-0">
        J&apos;adore travailler avec...
        </h2>
        <div className="flex max-md:flex-col gap-4">
            <div className="flex flex-col gap-2 flex-1">
                <ReactIcon size={42} className="animate-spin" style={{animationDuration: '10s'}}/>
    
                <h3 className="text-2xl font-semibold tracking-tight">
                    ReactJS
                </h3>
                <p className="text-sm text-muted-foreground leading-6">La bibliothèque que je <u>maîtrise</u> le mieux pour mes projets personnels est <Code>React</Code>. J&apos;utilise également <Code>Next.js</Code> comme framework full-stack, pour le front-end et le back-end.</p>
            </div>
            <div className="flex flex-col gap-2 flex-1">
                <NodeJSIcon size={42}/>
    
                <h3 className="text-2xl font-semibold tracking-tight">
                    NodeJS
                </h3>
                <p className="text-sm text-muted-foreground leading-6">Je développe des applications <u>fullstack</u> en intégrant <Code>Node.js</Code> et le framework <Code>Express.js</Code>pour concevoir des API RESTful <i>solides</i> et <i>rapides</i>.</p>
            </div>
            <div className="flex flex-col gap-2 flex-1">
                <TypeScriptIcon size={42}/>
    
                <h3 className="text-2xl font-semibold tracking-tight">
                    TypeScript
                </h3>
                <p className="text-sm text-muted-foreground leading-6">J&apos;utilise <Code>TypeScript</Code> pour écrire un code plus <u>robuste</u> et <u>maintenable</u>, en ajoutant des types statiques qui améliorent la <i>sécurité</i> et la <i>clarté</i> du développement.</p>
            </div>
        </div>

    </Section>
}