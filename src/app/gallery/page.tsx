import { tattoos } from "@/lib/tattoos";
import TattooCard from "@/components/TattooCard";

export default function Gallery() {
  return (
    <div className="py-12 px-4 ">
      <h1 className="text-4xl font-serif text-center mb-12 text-sumi dark:text-yuki">
        Galería de Tatuajes
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {tattoos.map(
          (tattoo: {
            id: number;
            title: string;
            image: string;
            style: string;
            description?: string;
            by?: string;
          }) => (
            <TattooCard
              key={tattoo.id}
              {...tattoo}
              description={tattoo.description || "Default description"}
              by={tattoo.by || "Unknown artist"}
            />
          )
        )}
      </div>
    </div>
  );
}
