"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

type TattooCardProps = {
  id: number;
  by: string;
  title: string;
  image: string;
  style: string;
  description: string;
};

export default function TattooCard({
  id,
  by,
  title,
  image,
  style,
}: TattooCardProps) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="group relative overflow-hidden rounded-lg border border-shinobu/20 bg-washi dark:bg-sumi/80 shadow-tattoo-card dark:shadow-tattoo-card-dark transition-all duration-300"
    >
      <div className="relative h-64 overflow-hidden">
        <Link
          href={`/gallery/${id}`}
          className="text-xs underline text-shinobu dark:text-shinobu/70 hover:text-akebono dark:hover:text-yamabuki"
        >
          <Image
            src={image}
            alt={title}
            fill
            className=" grayscale-100 hover:grayscale-0 object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </Link>
      </div>

      <div className="p-4">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="font-serif text-lg text-sumi dark:text-yuki">
              {title}
            </h3>
            <h2>Por: {by}</h2>
            <span className="inline-block mt-1  text-xs bg-akebono/10 dark:bg-yamabuki/20 text-akebono dark:text-yamabuki rounded-full">
              {style}
            </span>
          </div>
          <Link
            href={`/gallery/${id}`}
            className="text-xs underline text-shinobu dark:text-shinobu/70 hover:text-akebono dark:hover:text-yamabuki"
          >
            Ver más
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
