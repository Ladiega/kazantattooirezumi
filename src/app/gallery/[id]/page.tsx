import type { Metadata } from "next";
import { tattoos } from "@/lib/tattoos";
import Link from "next/link";
import { notFound } from "next/navigation";
import Image from "next/image";
import { ArrowLeft, ArrowRight } from "lucide-react";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const tattoo = tattoos.find((t) => t.id.toString() === id);
  const by = tattoo?.by ? `por ${tattoo.by}` : "";
  return {
    title: tattoo?.title || "Tatuaje no encontrado",
    description: `${tattoo?.title || "Detalles del diseño"} ${by} · Kazan Tattoo Irezumi`,
  };
}

export function generateStaticParams() {
  return tattoos.map((tattoo) => ({
    id: tattoo.id.toString(),
  }));
}

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const tattoo = tattoos.find((t) => t.id.toString() === id);

  if (!tattoo) {
    notFound();
  }

  const index = tattoos.findIndex((t) => t.id === tattoo.id);
  const prev = tattoos[(index - 1 + tattoos.length) % tattoos.length];
  const next = tattoos[(index + 1) % tattoos.length];

  return (
    <div className="pt-28 pb-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <Link
          href="/gallery"
          className="inline-flex items-center gap-2 text-fog hover:text-yuki text-sm transition-colors mb-10"
        >
          <ArrowLeft className="w-4 h-4" />
          Volver a la galería
        </Link>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="relative lg:sticky lg:top-28">
            <div className="relative aspect-[4/5] rounded-xl overflow-hidden border border-shinobu/60 shadow-card">
              <Image
                src={tattoo.image}
                alt={tattoo.title}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>

          <div className="lg:pt-2">
            <div className="flex flex-wrap items-center gap-3 mb-6">
              <span className="px-3 py-1 text-xs uppercase tracking-wider text-fog rounded-full border border-ginko">
                {tattoo.style}
              </span>
              <span className="text-sm text-fog">
                por <span className="text-yuki capitalize">{tattoo.by}</span>
              </span>
            </div>

            <h1 className="font-serif text-4xl md:text-5xl text-yuki leading-tight mb-6">
              {tattoo.title}
            </h1>

            <div className="prose prose-invert prose-neutral prose-lg max-w-none">
              <p className="text-fog leading-relaxed whitespace-pre-line">
                {tattoo.description}
              </p>
            </div>
          </div>
        </div>

        {/* Navegación entre piezas */}
        <div className="mt-20 flex flex-col sm:flex-row justify-between gap-4 border-t border-shinobu/60 pt-8">
          <Link
            href={`/gallery/${prev.id}`}
            className="group inline-flex items-center gap-3 text-fog hover:text-yuki transition-colors"
          >
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            <div>
              <p className="text-[11px] uppercase tracking-wider text-mist">Anterior</p>
              <p className="font-serif">{prev.title}</p>
            </div>
          </Link>
          <Link
            href={`/gallery/${next.id}`}
            className="group inline-flex items-center gap-3 text-fog hover:text-yuki transition-colors sm:text-right"
          >
            <div>
              <p className="text-[11px] uppercase tracking-wider text-mist">Siguiente</p>
              <p className="font-serif">{next.title}</p>
            </div>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </div>
  );
}
