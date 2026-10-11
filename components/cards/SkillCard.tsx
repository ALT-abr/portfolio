import { LucideIcon } from "lucide-react";

type SkillcardProps = {
    titre: string;
    tech: string;
    icon: LucideIcon;
    icon_color: string;
}

export default function SkillCard({titre, tech, icon: Icon, icon_color}: SkillcardProps) {
    return(
        <section 
            className="
              flex h-full flex-col items-center
              gap-3
              border border-slate-200/60
              rounded-[18px] 
              px-3 py-5
              text-center
              shadow-[0_6px_24px_rgba(30,60,100,0.06)]
              bg-white/90">
            <div 
                className={`
                  p-2.5
                  ${icon_color}
                  rounded-full
                  flex items-center justify-center
                  h-12 w-12`}>
                <Icon />
            </div>
            <h3 className="font-semibold text-[18px] text-foreground">
                {titre}
            </h3>
            <p className="text-base text-center leading-6 text-secondary">
                {tech}
            </p>
        </section>
    )
}