import { Languages, GraduationCap, FolderKanban } from "lucide-react"

export  default function About(){
    return(
        <section className="flex w-full flex-col gap-5 sm:flex-row sm:justify-between">
            <section 
                className="
                  flex flex-col gap-3 
                  border rounded-2xl 
                  p-5
                  bg-white">
                <h2 className="text-2xl font-semibold text-left">
                    À propos de moi
                </h2>
                <p className="font-base text-lg font-[400]">
                    Étudiant en développement informatique au CESI, name: "Abderahmane Aliouat" je conçois des applications web et mobiles en focus: {"["}"UI/UX", "Web", "Mobile"{"]"}, combinant code, données et UI/UX.
                </p>
                <section className="flex flex-col gap-2.5 justify-evenly min-[500px]:flex-row">
                    <div className="about-highlight-card">
                        <GraduationCap />
                        <div>
                            <h3>Etude</h3>
                            <p>univ Bejaia L3</p>
                            <p>CESI bac+2</p>
                        </div>
                    </div>
                    <div className="about-highlight-card">
                        <FolderKanban />
                        <div >
                            <h3>Projets</h3>
                            <p>historiya</p>
                            <p>on rolle</p>
                        </div>
                    </div>
                    <div className="about-highlight-card">
                        <Languages />
                        <div>
                            <h3>langue</h3>
                            <p>francais: B2</p>
                            <p>anglais: profitionelle</p>
                        </div>
                    </div>
                </section>
            </section>
            <section className="w-fit h-fit border rounded-2xl p-5 bg-white">
                <pre className="whitespace-pre font-mono leading-8">
                  <code>{`const devlopeur = {
    name: "ALIOUAT abderahmane,
    focus: ["UI/UX", "Web", "Mobile"],
    Location: "Strasbourg, France"
}`}
                </code>
                </pre>
            </section>
        </section>
    )
}