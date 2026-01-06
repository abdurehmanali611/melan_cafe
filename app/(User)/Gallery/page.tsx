import GalleryGrid from "@/Components/GalleryGrid";
import { Galleries } from "@/Constants";

export default function Gallery() {
    return (
        <div>
            <section>
                <GalleryGrid gallery={Galleries}/>
            </section>
        </div>
    )
}