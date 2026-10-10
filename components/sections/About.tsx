import { Languages, GraduationCap, FolderKanban } from "lucide-react"

export  default function About(){
    return(
        <section className="about">
            <section>
                <section className="about_cart">
                    <h2>
                        À propos de moi
                    </h2>
                    <p>Étudiant en développement informatique au CESI, name: "Abderahmane Aliouat" je conçois des applications web et mobiles en focus: {"["}"UI/UX", "Web", "Mobile"{"]"}, combinant code, données et UI/UX.</p>
                    <section>
                        <div>
                            <GraduationCap />
                            <div>
                                <h3>Etude</h3>
                                <p>univ Bejaia L3</p>
                                <p>CESI bac+2</p>
                            </div>
                        </div>
                        <div>
                            <FolderKanban />
                            <div>
                                <h3>Projets</h3>
                                <p>historiya</p>
                                <p>on rolle</p>
                            </div>
                        </div>
                        <div>
                            <Languages />
                            <div>
                                <h3>langue</h3>
                                <p>francais: B2</p>
                                <p>anglais: profitionelle</p>
                            </div>
                        </div>
                    </section>
                </section>
                <section className="code_cart">
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
        </section>
    )
}