import Image from "next/image";
import type { GalleryImage } from "@/lib/data";
import { RevealItem } from "@/components/ui/Reveal";

export function ProjectGallery({ images }: { images: GalleryImage[] }) {
  return (
    <div className="grid grid-cols-2 gap-3">
      {images.map((image, index) => (
        <RevealItem
          key={image.src}
          className={index === 0 ? "col-span-2" : undefined}
        >
          <div
            className={`group relative overflow-hidden rounded-2xl border border-surface-border ${
              index === 0 ? "aspect-[16/9]" : "aspect-square"
            }`}
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              sizes="(min-width: 1024px) 45vw, 100vw"
              className="object-cover transition-transform duration-700 ease-expo group-hover:scale-105"
            />
          </div>
        </RevealItem>
      ))}
    </div>
  );
}
