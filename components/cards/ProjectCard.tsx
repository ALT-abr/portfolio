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
              flex h-full flex-col 
              gap-3
              p-3
              border border-slate-200/60
              rounded-[18px]
              bg-white/90
              shadow-[0_6px_24px_rgba(30,60,100,0.06)]
              transition-all duration-300
              hover:-translate-y-1
              hover:shadow-[0_12px_32px_rgba(30,60,100,0.10)]

              ">
            <div className="relative aspect-[4/2] w-full overflow-hidden rounded-xl">
                <Image 
                src={img}
                alt={img_description}
                fill
                sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 25vw"
                className="object-cover"
            />
            </div>
            <section>
                <h3 className="font-semibold text-[18px] text-foreground">
                    {titre}
                </h3>
                <p className="font-medium text-[14px] leading-6 text-secondary">
                    {description}
                </p>
            </section>
        </section>
    )
}