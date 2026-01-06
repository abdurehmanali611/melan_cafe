import Image from "next/image";
import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip";

interface GalleryProp {
  image: string;
  type: string;
  title: string;
}

export default function GalleryItem({ image, type, title }: GalleryProp) {
  return (
    <Tooltip>
      <TooltipTrigger>
        <Image
          src={image}
          alt={title}
          width={400}
          height={400}
          loading="eager"
          className="rounded-xl"
        />
      </TooltipTrigger>
      <TooltipContent>
        {title}: {type}
      </TooltipContent>
    </Tooltip>
  );
}
