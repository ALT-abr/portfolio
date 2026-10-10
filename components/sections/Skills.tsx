import SkillCard from "../cards/SkillCard"
import { CodeXml, Smartphone, Database, Palette} from "lucide-react"

export default function Skills() {
    return(
        <section className="skills">
            <h2>
                Mes competences
            </h2>
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
    )
}