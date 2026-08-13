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
            className={`group relative overflow-hidden rounded-2xl border border-surface-border bg-black/25 ${
              index === 0 ? "aspect-[16/9]" : "aspect-square"
            }`}
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              sizes={
                index === 0
                  ? "(min-width: 1024px) 50vw, 100vw"
                  : "(min-width: 1024px) 25vw, 50vw"
              }
              className="object-contain p-2 transition-transform duration-700 ease-expo group-hover:scale-105"
            />
          </div>
        </RevealItem>
      ))}
    </div>
  );
}
