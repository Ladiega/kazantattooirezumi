import Link from "next/link";
import { tattoos } from "@/lib/tattoos";
import { ArrowRight } from "lucide-react";
import FeaturedCard from "@/components/FeaturedCard";
import Hero from "@/components/Hero";

const featured = [tattoos[0], tattoos[1], tattoos[21]];

export default function Home() {
  return (
    <>
      <Hero />

      {/* SECCIÓN TRABAJO DESTACADO */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-24">
        <div className="flex items-end justify-between mb-12">
          <div>
            <p className="text-xs uppercase tracking-widest-caps text-mist mb-3">
              Trabajo reciente
            </p>
            <h2 className="font-serif text-3xl md:text-4xl text-yuki">
              Piezas que hablan
            </h2>
          </div>
          <Link
            href="/gallery"
            className="hidden sm:inline-flex items-center gap-2 text-fog hover:text-yuki text-sm transition-colors"
          >
            Ver todo
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featured.map((tattoo) => (
            <FeaturedCard key={tattoo.id} {...tattoo} />
          ))}
        </div>
      </section>

      {/* SECCIÓN FILOSOFÍA */}
      <section className="relative border-y border-shinobu/60 bg-coal/40 overflow-hidden">
        <div className="absolute inset-0 bg-radial-gold pointer-events-none" />
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-24 relative grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-xs uppercase tracking-widest-caps text-mist mb-3">
              Nuestra filosofía
            </p>
            <h2 className="font-serif text-3xl md:text-4xl text-yuki leading-tight mb-6">
              No trabajamos en serie, construimos piezas con intención.
            </h2>
            <p className="text-fog leading-relaxed mb-8">
              Creemos en el oficio, en la historia detrás de cada estilo y en el
              valor que tiene marcar la piel con intención. Cada tatuaje es un
              diálogo: entre el artista y quien lo lleva, entre la tradición y
              el presente.
            </p>
            <div className="grid grid-cols-2 gap-6 max-w-sm">
              <div>
                <p className="font-serif text-4xl text-yuki">20+</p>
                <p className="text-sm text-fog mt-1">Años de experiencia</p>
              </div>
              <div>
                <p className="font-serif text-4xl text-yuki">{tattoos.length}</p>
                <p className="text-sm text-fog mt-1">Piezas en nuestra galería</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative aspect-[4/3] rounded-xl overflow-hidden border border-shinobu/60 shadow-card">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/img/montana.jpg"
                alt="El estudio"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-5 -left-5 bg-coal border border-ginko rounded-lg px-6 py-4 shadow-card hidden sm:block">
              <p className="font-serif text-yuki text-3xl">火山</p>
              <p className="text-xs text-fog uppercase tracking-widest mt-1">Kazan · Volcán</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-24 text-center">
        <h2 className="font-serif text-3xl md:text-4xl text-yuki mb-4">
          ¿Listo para marcar tu historia?
        </h2>
        <p className="text-fog max-w-xl mx-auto mb-10">
          Escríbenos por Instagram y agenda una cita. Estás en buenas manos.
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          <Link
            href="https://www.instagram.com/kazantattooirezumi"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 border border-ginko text-yuki hover:border-yuki transition-colors text-sm"
          >
            Contactar por Instagram
          </Link>
          <Link
            href="/blog"
            className="px-6 py-3 text-fog hover:text-yuki transition-colors text-sm"
          >
            Leer el blog
          </Link>
        </div>
      </section>
    </>
  );
}
