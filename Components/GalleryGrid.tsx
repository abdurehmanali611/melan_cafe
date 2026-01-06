import GalleryItem from "./GalleryItem";
import SectionHeader from "./SectionHeader";

interface GalleryProp {
  image: string;
  type: string;
  title: string;
}

interface Gallery {
  gallery: GalleryProp[];
}
export default function GalleryGrid({ gallery }: Gallery) {
  return (
    <div className="w-full py-5">
      <div className="container mx-auto px-4 py-5 flex flex-col gap-5">
        <SectionHeader subtitle="Gallery" title="What's with Us ?" />
        <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-6 mt-8 items-center">
          {gallery &&
            gallery.length > 0 &&
            gallery.map((gallery: GalleryProp, idx: number) => (
              <GalleryItem
                key={idx}
                image={gallery.image}
                type={gallery.type}
                title={gallery.title}
              />
            ))}
        </div>
      </div>
    </div>
  );
}
