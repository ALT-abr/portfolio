import ProjectCard from "../cards/ProjectCard"

export default function Project() {
    return(
        <section className="flex flex-col items-center gap-5">
            <h2 className="section-title">
                Mes projets
            </h2>
            <section className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                <ProjectCard 
                    titre="Historiya"
                    description="un site de lecteur des histoire"
                    img="/placeholder.png"
                    img_description="image de la page daceuil hisotriya"
                />
                <ProjectCard 
                    titre="Tifinagh"
                    description="transforme un text latin en text avec aphabet tifinagh"
                    img="/placeholder.png"
                    img_description="le photo du site"
                />
            </section>
        </section>
    )
}