import { LucideIcon } from "lucide-react";

type SkillcardProps = {
    titre: string;
    tech: string;
    icon: LucideIcon;
}

export default function SkillCard({titre, tech, icon: Icon}: SkillcardProps) {
    return(
        <section 
            className="
              border rounded-[15px] 
              p-2.5 
              bg-white
              flex flex-col items-center">
            <div 
                className="
                  p-2.5
                  bg-blue-300
                  rounded-[100%]">
                <Icon />
            </div>
            <h2 className="font-semibold text-[18px]">
                {titre}
            </h2>
            <p className="text-base text-center">
                {tech}
            </p>
        </section>
    )
}