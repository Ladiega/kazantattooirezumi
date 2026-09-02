"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="/img/montana.jpg"
          alt="Estudio Kazan Tattoo Irezumi"
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-25"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/70 via-ink/30 to-ink" />
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 pt-32 pb-24 w-full">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-2xl"
        >
          <p className="text-sm text-fog mb-8 tracking-wide">
            Estudio de tatuaje · Bogotá, Colombia
          </p>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl leading-tight text-yuki">
            El tatuaje es para siempre.
          </h1>
          <p className="mt-6 text-base text-fog max-w-md leading-relaxed">
            Kazan —volcán en japonés— es un estudio donde el tatuaje japonés
            tradicional se trabaja con intención, técnica y más de 20 años de
            experiencia.
          </p>

          <div className="mt-10 flex flex-wrap gap-3">
            <Link
              href="/gallery"
              className="group inline-flex items-center gap-2 px-6 py-3 border border-ginko text-yuki hover:border-yuki transition-colors text-sm"
            >
              Ver Galería
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/about"
              className="inline-flex items-center gap-2 px-6 py-3 text-fog hover:text-yuki transition-colors text-sm"
            >
              Conócenos
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
