"use client";

import { useState } from "react";
import Image from "next/image";
import { Icon } from "./Icon";

interface LiteYouTubeProps {
  youtubeId: string;
  title: string;
  className?: string;
}

/**
 * Leichtgewichtige YouTube-Facade: lädt nur ein Thumbnail-Bild,
 * das iframe wird erst nach Klick eingebettet (spart Ladezeit/Requests).
 */
export function LiteYouTube({ youtubeId, title, className }: LiteYouTubeProps) {
  const [active, setActive] = useState(false);

  if (active) {
    return (
      <div className={className}>
        <iframe
          className="h-full w-full"
          src={`https://www.youtube-nocookie.com/embed/${youtubeId}?autoplay=1&rel=0`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    );
  }

  return (
    <button
      type="button"
      onClick={() => setActive(true)}
      aria-label={`Video abspielen: ${title}`}
      className={`group block overflow-hidden ${className ?? ""}`}
    >
      <Image
        src={`https://img.youtube.com/vi/${youtubeId}/maxresdefault.jpg`}
        alt={title}
        fill
        sizes="(min-width: 1024px) 640px, 100vw"
        className="object-cover transition-transform duration-700 ease-expo group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
      <span className="absolute inset-0 flex items-center justify-center">
        <span className="flex h-16 w-16 items-center justify-center rounded-full bg-accent text-white shadow-glow transition-transform duration-300 ease-expo group-hover:scale-110">
          <Icon name="play" className="h-6 w-6 translate-x-0.5" />
        </span>
      </span>
    </button>
  );
}
