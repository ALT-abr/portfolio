import { LucideIcon } from "lucide-react";

type SkillcardProps = {
    titre: string;
    tech: string;
    icon: LucideIcon;
}

export default function SkillCard({titre, tech, icon: Icon}: SkillcardProps) {
    return(
        <section>
            <div className="icon_cercle">
                <Icon />
            </div>
            <h2>{titre}</h2>
            <p>{tech}</p>
        </section>
    )
}