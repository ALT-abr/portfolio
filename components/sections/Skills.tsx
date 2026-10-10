import SkillCard from "../cards/SkillCard"
import { CodeXml, Smartphone, Database, Palette} from "lucide-react"

export default function Skills() {
    return(
        <section className="flex flex-col items-center gap-5">
            <h2 className="text-2xl font-semibold">
                Mes competences
            </h2>
            <section className="grid grid-cols-1 gap-4 sm:grid-cols-3 lg:grid-cols-5">
                <SkillCard 
                    titre= "Langage"
                    tech= "C, C#, Python, JavaScript, SQL"
                    icon= {CodeXml}
                    />
                <SkillCard 
                    titre= "Frontend"
                    tech= "Next.js, React, TypeScript, HTML, CSS, Tailwind CSS"
                    icon= {CodeXml}
                    />
                <SkillCard 
                    titre= "Data"
                    tech= "MariaDB, PostgreSQL, MySQL, SQLite, MCD/MLD"
                    icon= {Database}
                    />
                <SkillCard 
                    titre= "Mobile"
                    tech= "Flutter"
                    icon= {Smartphone}
                    />
                <SkillCard 
                    titre= "Design & Outils"
                    tech= "Git, GitHub, Figma, Looping, VS Code"
                    icon= {Palette}
                    />
            </section>
        </section>
    )
}