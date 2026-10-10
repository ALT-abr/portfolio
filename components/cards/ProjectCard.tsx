import Image from "next/image"

type ProjetProps = {
    titre: string;
    description: string;
    img: string;
    img_description: string;
}

export default function({titre, description, img, img_description}: ProjetProps){
    return(
        <section 
            className="
              border rounded-2xl
              bg-white
              p-4
              flex flex-col gap-2">
            <Image 
                src={img}
                alt={img_description}
                width={300}
                height={150}
                className="h-auto w-full object-cover border rounded-xl border-gray-300"
            />
            <section>
                <h2 className="font-semibold text-[18px]">
                    {titre}
                </h2>
                <p className="font-medium text-base text-gray-600">
                    {description}
                </p>
            </section>
        </section>
    )
}