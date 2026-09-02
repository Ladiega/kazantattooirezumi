"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

type TattooCardProps = {
  id: number;
  by: string;
  title: string;
  image: string;
  style: string;
};

export default function TattooCard({ id, by, title, image, style }: TattooCardProps) {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ type: "spring", stiffness: 300, damping: 22 }}
      className="group"
    >
      <Link href={`/gallery/${id}`} className="block">
        <div className="relative aspect-[4/5] overflow-hidden rounded-xl border border-shinobu/60 bg-coal shadow-card">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover grayscale-[0.4] transition-all duration-700 group-hover:grayscale-0 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/10 to-transparent opacity-80 group-hover:opacity-100 transition-opacity" />

          <span className="absolute top-4 left-4 px-3 py-1 text-[11px] uppercase tracking-wider bg-ink/60 backdrop-blur text-fog rounded-full border border-ginko">
            {style}
          </span>

          <ArrowUpRight className="absolute top-4 right-4 w-5 h-5 text-yuki opacity-0 group-hover:opacity-100 transition-opacity translate-x-1 group-hover:translate-x-0" />

          <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between">
            <div>
              <p className="text-[11px] uppercase tracking-widest text-mist mb-1">
                {by}
              </p>
              <h3 className="font-serif text-xl text-yuki leading-tight">
                {title}
              </h3>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
