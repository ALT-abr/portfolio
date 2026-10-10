import { CodeXml } from "lucide-react"

export default function AvailabilityCard() {
    return(
        <section className="availabilitycard">
            <div className="bull"></div>
            
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
             <div className="code_icon">
                <CodeXml />
             </div>
        </section>
    )
}