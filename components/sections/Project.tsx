import ProjectCard from "../cards/ProjectCard"

export default function Project() {
    return(
        <section className="flex flex-col items-center gap-5">
            <h2 className="section-title">
                Mes projets
            </h2>
            <section className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
                <ProjectCard 
                    titre="Historiya"
                    description="Plateforme de lecture d’histoires avec favoris, listes de lecture et suivi de progression."
                    img="/projets/historiya.png"
                    img_description="#"
                />
                <ProjectCard 
                    titre="Annuaire"
                    description="Application de gestion d’un annuaire permettant d’organiser et de retrouver facilement des informations."
                    img="/projets/annuaire.png"
                    img_description="#"
                />
                <ProjectCard 
                    titre="TimuchFarm"
                    description="Application de gestion d’élevage permettant de suivre les animaux, leur alimentation et la production laitière."
                    img="/projets/timuchfarm.png"
                    img_description="#"
                />
                <ProjectCard 
                    titre="Clavier d’Or"
                    description="Jeu éducatif interactif de quiz informatiques, avec plusieurs catégories, progression par niveaux et suivi des scores."
                    img="/projets/clavier_dor.png"
                    img_description="#"
                />
                <ProjectCard 
                    titre="Tifinagh Converter"
                    description="Application web de conversion de texte latin en alphabet tifinagh, dédiée à l’écriture amazighe."
                    img="/projets/tifinagh_converter.png"
                    img_description="#"
                />
            </section>
        </section>
    )
}