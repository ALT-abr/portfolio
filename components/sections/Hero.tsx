import {ArrowRight, Download, MapPin} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import AvailabilityCard from "../cards/AvailabilityCard";

export default function Hero() {
    return(
        <section className="grid grid-cols-1 gap-5 sm:grid-cols-2 ">
            <section className="flex flex-col gap-5">
                <h1 className="font-bold text-3xl">
                    Bonjour, je suis <br />
                    Abderahmane Aliouat.
                </h1>
                <p className="font-medium text-xl text-gray-700">
                    Je transforme des idées utiles en expériences numériques claires, modernes et humaines.
                </p>
                <section className="flex flex-col gap-8 sm:flex-row ">
                    <Link href="#" className="hero-button">
                        <span className="text-[15px] font-medium">Voir mes projets</span>
                        <ArrowRight aria-hidden="true" />
                    </Link>
                    <a href="#" className="hero-button">
                        <Download aria-hidden="true"/>
                        <span className="text-[15px] font-medium">Telecharge mon CV</span>
                    </a>
                </section>
                <div className="flex gap-2 items-center">
                    <MapPin /> 
                    <p className="font-medium text-lg">Strasbourg, France</p>
                </div>
            </section>

            <section className="flex flex-col gap-10">
                <section className="hero_image">
                    <Image 
                        src="/mon-avatar.png"
                        alt="mon-avatar"
                        width={600}
                        height={300}/>
                </section>
                <section>
                    <AvailabilityCard />
                </section>
            </section>
        </section>
    )
}