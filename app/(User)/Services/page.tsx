import ServiceGrid from "@/Components/ServiceGrid";
import { Service } from "@/Constants";

export default function Services() {
    return (
        <div>
            <section>
                <ServiceGrid services={Service}/>
            </section>
        </div>
    )
}