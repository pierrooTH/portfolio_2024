
import { Badge } from "@/components/ui/badge";
import { Section } from "./Section"
import { ContactCard } from "./ContactCard";

export const Contact = () => {
    return (
        <Section className="flex flex-col items-start gap-4">
            <Badge variant="outline" color="primary">📞 Contact</Badge>
            <h2 className="pb-2 text-3xl font-semibold tracking-tight first:mt-0">
                Je serais ravi de travailler avec vous 
            </h2>
            <div className="flex max-md:flex-col w-full gap-4">
            <ContactCard url="mailto:pierre.thouvenot1711@gmail.com" image="/images/photo-tp.png" mediumImage="https://cdn4.iconfinder.com/data/icons/social-media-logos-6/512/112-gmail_email_mail-512.png" name="Email" description="Mailez moi" />
            <ContactCard url="https://www.linkedin.com/in/pierre-thouvenot/" image="/images/photo-tp.png" mediumImage="https://img.freepik.com/vecteurs-premium/linkedin-logo_578229-227.jpg" name="LinkedIn" description="Contactez-moi" />
            <ContactCard image="/images/photo-tp.png" mediumImage="https://png.pngtree.com/png-vector/20190927/ourmid/pngtree-phone-icon-png-image_1757859.jpg" name="Appelez moi" description="06 67 84 67 27" />
            </div>

        </Section>
    );
}