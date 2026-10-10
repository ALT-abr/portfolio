import ProjectCard from "../cards/ProjectCard"

export default function Project() {
    return(
        <section className="mes_projet">
            <h2>
                Mes projets
            </h2>
            <section className="projet_container">
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