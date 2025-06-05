import type { Metadata } from "next";
import { tattoos } from "@/lib/tattoos";
import Link from "next/link";
import { notFound } from "next/navigation";
import Image from "next/image";

// Tipado para Next.js 15
type Props = {
  params: { id: string };
  searchParams?: { [key: string]: string | string[] | undefined };
};

// Generación de metadatos
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const tattoo = tattoos.find((t) => t.id.toString() === params.id);

  return {
    title: `${tattoo?.title || "Tatuaje"} | Kazan Tattoo`,
    description:
      tattoo?.description || "Detalles del diseño de tatuaje japonés",
    openGraph: {
      images: [tattoo?.image || "/default-og-image.jpg"],
    },
  };
}

// Generación de rutas estáticas (SSG)
export function generateStaticParams() {
  return tattoos.map((tattoo) => ({
    id: tattoo.id.toString(),
  }));
}

// Componente de página
export default function TattooDetail({ params }: Props) {
  const tattoo = tattoos.find((t) => t.id.toString() === params.id);

  if (!tattoo) {
    notFound();
  }

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
            priority
            className="object-cover rounded-lg shadow-lg"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
        <div>
          <h1 className="text-3xl font-serif mb-4 text-sumi dark:text-yuki">
            {tattoo.title}
          </h1>
          <p className="text-lg mb-6 text-shinobu dark:text-shinobu/70">
            {tattoo.description}
          </p>
          <div className="flex flex-wrap gap-2">
            <span className="px-3 py-1 bg-akebono/10 text-akebono dark:bg-yamabuki/20 dark:text-yamabuki rounded-full text-sm">
              {tattoo.style}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
