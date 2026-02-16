import GalleryGrid from "@/components/GalleryGrid";
import { Galleries } from "@/siteConstants";

export default function Gallery() {
  return (
    <div>
      <GalleryGrid gallery={Galleries} />
    </div>
  );
}
