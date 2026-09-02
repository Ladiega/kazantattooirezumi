import { tattoos } from "@/lib/tattoos";
import TattooCard from "@/components/TattooCard";

export default function Gallery() {
  return (
    <div className="pt-24 pb-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="mb-14">
          <p className="text-xs uppercase tracking-widest-caps text-mist mb-3">
            Galería
          </p>
          <h1 className="font-serif text-3xl md:text-5xl text-yuki">
            Tatuajes que cuentan historias
          </h1>
          <p className="mt-4 text-fog max-w-2xl leading-relaxed">
            Una selección del trabajo de Nelson Neva, Diego Gutiérrez y
            Cristian. Cada pieza tiene su propia mitología: clickea para
            conocer el significado detrás de cada diseño.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {tattoos.map((tattoo) => (
            <TattooCard
              key={tattoo.id}
              id={tattoo.id}
              by={tattoo.by || "Kazan"}
              title={tattoo.title}
              image={tattoo.image}
              style={tattoo.style}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
