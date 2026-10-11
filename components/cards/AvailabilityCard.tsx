import { BriefcaseBusiness } from "lucide-react"

export default function AvailabilityCard() {
    return(
        <section className="w-fit border rounded-2xl p-5 bg-white">            
            <div className="function_intershipe">
                <pre>
                    {`function lookingForInternship(competence) {
    return {
        available: true,
        starting_from: "march",
        duration: "4 months min"
    };
}`}
                </pre>
            </div>

            <div className="w-fit border rounded-[8px] p-2 ">
                <BriefcaseBusiness size={30} />   
            </div>
        </section>
    )
}