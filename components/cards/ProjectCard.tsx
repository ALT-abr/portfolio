import Image from "next/image"

type ProjetProps = {
    titre: string;
    description: string;
    img: string;
    img_description: string;
}

export default function({titre, description, img, img_description}: ProjetProps){
    return(
        <section>
            <div className="image_projet">
                <Image 
                    src={img}
                    alt={img_description}
                    width={300}
                    height={150}
                />
            </div>
            <section>
                <h3 className="titre_projet">{titre}</h3>
                <p className="description_projet">{description}</p>
            </section>
        </section>
    )
}