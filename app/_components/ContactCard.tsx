/* eslint-disable @next/next/no-img-element */
import { Card } from "@/components/ui/card"
import { ArrowUpRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export const ContactCard = (props: {
    image: string,
    name: string,
    description: string,
    url?: string

}) => {
    return props.url ? (
        <Link href={props.url} target="_blank" className="w-full">
            <Card className="p-3 bg-accent/10 hover:bg-accent/30 transition-colors group flex items-center gap-4">
                <div className="relative">
                    <Image src={props.image} alt={props.name} width={40} height={40} className="rounded-lg object-contain" />
                </div>
                <div className="flex-1">
                    <div className="flex items-center gap-2">
                        <p className="text-lg font-semibold">{props.name}</p>
                    </div>
                    <p className="text-xs text-muted-foreground">{props.description}</p>
                </div>
                <ArrowUpRight className="group-hover:translate-x-2 mr-2 group-hover:-translate-y-2 transition-transform" size={16} />
            </Card>
        </Link>
    ) : (
        <Card className="p-3 bg-accent/10 hover:bg-accent/30 transition-colors group flex  w-full items-center gap-4">
            <div className="relative">
                <Image src={props.image} alt={props.name} width={40} height={40} className="rounded-full object-contain" />
            </div>
            <div className="flex-1">
                <div className="flex items-center gap-2">
                    <p className="text-lg font-semibold">{props.name}</p>
                </div>
                <p className="text-xs text-muted-foreground">{props.description}</p>
            </div>
        </Card>
    );

}