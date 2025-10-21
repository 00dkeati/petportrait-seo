"use client";
import Image from "next/image";

export default function PublicGallery({ sources }: { sources: { src: string; alt: string }[] }) {
  const list = Array.isArray(sources) ? sources : [];
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {list.map((it, idx) => (
        <div key={idx} className="relative aspect-square overflow-hidden rounded-lg">
          <Image
            src={it.src}
            alt={it.alt}
            fill
            className="object-cover hover:scale-105 transition-transform duration-300"
            sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
          />
        </div>
      ))}
    </div>
  );
}

