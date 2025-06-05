import { tattoos } from "@/lib/tattoos";
import Link from "next/link";
import { notFound } from "next/navigation";

import { FaLongArrowAltLeft } from "react-icons/fa";

import Image from "next/image";

export default function TattooDetails({ params }: { params: { id: string } }) {
  // Convertir el ID a número
  const tattooId = Number(params.id);
  const tattoo = tattoos.find((t) => t.id === tattooId);

  // Mostrar 404 si no existe
  if (!tattoo) return notFound();

  return (
    <div className="max-w-4xl mx-auto py-12 px-4">
      <div className="mb-8">
        <Link
          href="/gallery"
          className="text-sm underline hover:text-akebono flex items-center gap-2"
        >
          <FaLongArrowAltLeft /> Volver a la galería
        </Link>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="relative h-96">
          <Image
            src={tattoo.image}
            alt={tattoo.title}
            fill
            className="object-cover rounded-lg"
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

// Genera metadata dinámica
export async function generateMetadata({ params }: { params: { id: string } }) {
  const tattoo = tattoos.find((t) => t.id === Number(params.id));
  return {
    title: tattoo?.title || "Tatuaje no encontrado",
  };
}

// Opcional: Generar rutas estáticas en build time
export async function generateStaticParams() {
  return tattoos.map((tattoo) => ({
    id: tattoo.id.toString(),
  }));
}
