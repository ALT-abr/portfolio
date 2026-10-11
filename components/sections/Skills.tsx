import SkillCard from "../cards/SkillCard"
import { CodeXml, Smartphone, Database, Palette} from "lucide-react"

export default function Skills() {
    return(
        <section className="flex w-full flex-col items-center gap-5">
            <h2 className="section-title">
                Mes compétences
            </h2>
            <section className="grid grid-cols-1 gap-8 min-[400px]:grid-cols-2 sm:grid-cols-3 lg:grid-cols-5">
                <SkillCard 
                    titre= "Langage"
                    tech= "Python, C, C#, JavaScript, SQL"
                    icon= {CodeXml}
                    icon_color="bg-violet-500 text-white"
                    />
                <SkillCard 
                    titre= "Frontend"
                    tech= "Next.js, React, TypeScript, HTML, CSS, Tailwind CSS"
                    icon= {CodeXml}
                    icon_color="bg-orange-500 text-white"
                    />
                <SkillCard 
                    titre= "Data"
                    tech= "MariaDB, PostgreSQL, MySQL, SQLite, MCD/MLD"
                    icon= {Database}
                    icon_color="bg-red-500 text-white"
                    />
                <SkillCard 
                    titre= "Mobile"
                    tech= "Flutter (dart)"
                    icon= {Smartphone}
                    icon_color="bg-blue-500 text-white"
                    />
                <SkillCard 
                    titre= "Design & Outils"
                    tech= "Git, GitHub, Figma, Looping, VS Code"
                    icon= {Palette}
                    icon_color="bg-green-500 text-white"
                    />
            </section>
        </section>
    )
}