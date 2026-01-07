import GalleryGrid from "@/components/GalleryGrid";
import { Galleries } from "@/siteConstants";

export default function Gallery() {
  return (
    <div>
      <section>
        <GalleryGrid gallery={Galleries} />
      </section>
    </div>
  );
}
