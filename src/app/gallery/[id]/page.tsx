// app/gallery/[id]/page.tsx
import type { Metadata } from "next";
import { tattoos } from "@/lib/tattoos";
import Link from "next/link";
import { notFound } from "next/navigation";
import Image from "next/image";
import { FaArrowLeft } from "react-icons/fa";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const tattoo = tattoos.find((t) => t.id.toString() === id);
  return {
    title: tattoo?.title || "Tatuaje no encontrado",
    description: tattoo?.description || "Detalles del diseño",
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

  return (
    <div className="max-w-4xl mx-auto py-12 px-4">
      <div className="mb-8 ">
        <Link
          href="/gallery"
          className="text-sm underline hover:text-akebono hover:text-red-400 "
        >
          <div className="flex gap-2 items-center">
            <div>
              <FaArrowLeft />
            </div>
            <div>
              <p> Volver a la galería</p>
            </div>
          </div>
        </Link>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="relative h-96">
          <Image
            src={tattoo.image}
            alt={tattoo.title}
            fill
            className="object-cover rounded-lg"
            sizes="(max-width: 768px) 100vw, 50vw"
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
