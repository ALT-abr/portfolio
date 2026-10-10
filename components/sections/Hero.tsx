import {ArrowRight, Download, MapPin} from "lucide-react";
import AvailabilityCard from "../cards/AvailabilityCard";

export default function Hero() {
    return(
        <section className="hero">
            <section className="hero_content">
                <h1>
                    Bonjour, je suis <br />
                    Abderahmane Aliouat.
                </h1>
                <p>
                    Je transforme des idées utiles en expériences numériques claires, modernes et humaines.
                </p>
                <section className="hero_button">
                    <div> 
                        <a href="#">
                            <ArrowRight /> Voir mes projets
                        </a>
                    </div>
                    <div>
                        <button>
                            <Download /> Voir mon CV
                        </button>
                    </div>
                </section>
                <div>
                    <MapPin /> <p>Strasbourg, France</p>
                </div>
            </section>

            <section className="hero_side">
                <section className="hero_image">
                    <img src="#" alt="avatar" />
                </section>
                <section>
                    <AvailabilityCard />
                </section>
            </section>
        </section>
    )
}