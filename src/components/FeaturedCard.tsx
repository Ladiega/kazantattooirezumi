"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

type FeaturedCardProps = {
  id: number;
  title: string;
  image: string;
  style: string;
  by?: string;
};

export default function FeaturedCard({ id, title, image, style, by }: FeaturedCardProps) {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="group"
    >
      <Link href={`/gallery/${id}`} className="block">
        <div className="relative aspect-[4/5] overflow-hidden rounded-xl border border-shinobu/60 bg-coal shadow-card">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover grayscale-[0.3] transition-all duration-700 group-hover:grayscale-0 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, 33vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-transparent to-transparent" />
          <span className="absolute top-4 left-4 px-3 py-1 text-[11px] uppercase tracking-wider bg-ink/60 backdrop-blur text-fog rounded-full border border-ginko">
            {style}
          </span>
          <div className="absolute bottom-4 left-4 right-4">
            {by && (
              <p className="text-xs text-mist uppercase tracking-wider mb-1">
                {by}
              </p>
            )}
            <h3 className="font-serif text-lg text-yuki">{title}</h3>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
