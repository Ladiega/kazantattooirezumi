import Image from "next/image";
import { FiInstagram } from "react-icons/fi";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const artists = [
  {
    name: "Nelson Neva",
    handle: "@nevatattoos",
    instagram: "https://www.instagram.com/nevatattoos/",
    image: "/img/nevaProfile.jpeg",
    role: "Tatuador",
    bio: "Nelson Neva tiene más de 30 años de experiencia y es uno de los nombres fundamentales en la historia del tatuaje en Colombia. Su estilo es único, resultado de muchos años explorando distintas influencias: desde el tradicional americano hasta el japonés, el chicano y más. Reconocido por construir máquinas de bobina completamente artesanales, hechas a mano con precisión y dedicación.",
  },
  {
    name: "Diego Gutiérrez",
    handle: "@ladiegatattoo",
    instagram: "https://www.instagram.com/ladiegatattoo/",
    image: "/img/diegoProfile.jpeg",
    role: "Tatuador · Especialista en irezumi",
    bio: "Diego Gutiérrez, conocido como La Diego, lleva más de 20 años tatuando. Su especialidad es el tatuaje japonés (irezumi), una tradición que aborda con respeto por su historia, simbología y estructura. Busca que cada pieza tenga vida, cuerpo y coherencia, siempre desde un lugar reflexivo y técnico.",
  },
  {
    name: "Cristian",
    handle: "@cristiantattoos",
    instagram: "https://www.instagram.com/Cristianxvargasm/",
    image: "/img/cristianProfile.jpeg",
    role: "Tatuador",
    bio: "Cristian es parte del equipo de Kazan. Su estilo se acerca al tatuaje tradicional, con líneas limpias y composiciones directas que hablan por sí solas.",
  },
];

export default function About() {
  return (
    <div className="pt-28 pb-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Cabecera */}
        <div className="max-w-2xl mb-20">
          <p className="text-xs uppercase tracking-widest-caps text-mist mb-4">
            Nosotros
          </p>
          <h1 className="font-serif text-4xl md:text-5xl text-yuki leading-tight mb-6">
            Kazan Tattoo Irezumi
          </h1>
          <p className="text-xs text-mist tracking-widest mb-6">火山 彫り物</p>
          <p className="text-fog leading-relaxed">
            Kazan Tattoo Irezumi es un estudio donde el tatuaje se toma en
            serio, pero también se vive con cercanía y respeto. Creemos en el
            oficio, en la historia detrás de cada estilo, y en el valor que
            tiene marcar la piel con intención. Tres tatuadores con visiones
            particulares, unidos por una misma ética: técnica, compromiso y
            honestidad.
          </p>
        </div>

        {/* Artistas */}
        <div className="space-y-20">
          {artists.map((artist, i) => (
            <div
              key={artist.handle}
              className={`grid md:grid-cols-[2fr_3fr] gap-8 md:gap-14 items-start ${
                i % 2 === 1 ? "md:[direction:rtl]" : ""
              }`}
            >
              <div className="md:[direction:ltr]">
                <div className="relative aspect-[3/4] max-w-sm mx-auto md:mx-0 rounded-lg overflow-hidden border border-shinobu/60">
                  <Image
                    src={artist.image}
                    alt={artist.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 400px"
                    className="object-cover grayscale"
                  />
                </div>
              </div>

              <div className="md:[direction:ltr]">
                <p className="text-xs uppercase tracking-wider text-mist mb-2">
                  {artist.role}
                </p>
                <h2 className="font-serif text-2xl md:text-3xl text-yuki mb-4">
                  {artist.name}
                </h2>
                <p className="text-fog leading-relaxed mb-6">
                  {artist.bio}
                </p>
                <Link
                  href={artist.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-fog hover:text-yuki transition-colors"
                >
                  <FiInstagram className="w-4 h-4" />
                  {artist.handle}
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Montaña */}
        <div className="relative mt-20 rounded-lg overflow-hidden border border-shinobu/60">
          <div className="relative aspect-[21/9]">
            <Image
              src="/img/montana.jpg"
              alt="El estudio"
              fill
              sizes="100vw"
              className="object-cover opacity-80"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/40 via-transparent to-transparent" />
          </div>
        </div>

        {/* Cierre */}
        <div className="max-w-2xl mt-20">
          <h2 className="font-serif text-2xl md:text-3xl text-yuki mb-4">
            Estás en buenas manos.
          </h2>
          <p className="text-fog leading-relaxed mb-8">
            En Kazan hacemos tanto tatuajes tradicionales como propuestas más
            actuales. No trabajamos en serie ni por moda: creemos en el proceso
            y en construir piezas que tengan sentido a largo plazo.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/gallery"
              className="group inline-flex items-center gap-2 px-6 py-3 border border-ginko text-yuki hover:border-yuki transition-colors text-sm"
            >
              Ver nuestra galería
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/blog"
              className="px-6 py-3 text-fog hover:text-yuki transition-colors text-sm"
            >
              Leer el blog
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
