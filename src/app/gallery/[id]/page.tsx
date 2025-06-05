import { Metadata } from "next";
import { tattoos } from "@/lib/tattoos";
import Link from "next/link";
import { notFound } from "next/navigation";
import Image from "next/image";

// Tipos para los parámetros
type Props = {
  params: { id: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const tattoo = tattoos.find((t) => t.id.toString() === params.id);

  return {
    title: tattoo?.title || "Tatuaje no encontrado",
    description: tattoo?.description || "Detalles del tatuaje",
  };
}

export async function generateStaticParams() {
  return tattoos.map((tattoo) => ({
    id: tattoo.id.toString(),
  }));
}

export default function TattooDetails({ params }: Props) {
  const tattoo = tattoos.find((t) => t.id.toString() === params.id);

  if (!tattoo) return notFound();

  return (
    <div className="max-w-4xl mx-auto py-12 px-4">
      <div className="mb-8">
        <Link href="/gallery" className="text-sm underline hover:text-akebono">
          ← Volver a la galería
        </Link>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="relative h-96">
          <Image
            src={tattoo.image}
            alt={tattoo.title}
            fill
            className="object-cover rounded-lg"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
        <div>
          <h1 className="text-3xl font-serif mb-4">{tattoo.title}</h1>
          <p className="text-lg mb-4">{tattoo.description}</p>
          <span className="inline-block px-3 py-1 bg-akebono/10 text-akebono rounded-full">
            {tattoo.style}
          </span>
        </div>
      </div>
    </div>
  );
}
