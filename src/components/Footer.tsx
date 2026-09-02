import { FiInstagram } from "react-icons/fi";
import { MapPin } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-shinobu/60 bg-coal/60 relative overflow-hidden">
      <div className="absolute inset-0 bg-radial-gold pointer-events-none" />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16 relative">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Marca */}
          <div>
            <h2 className="font-serif text-3xl text-yuki">
              火山 彫り物
            </h2>
            <p className="text-fog mt-2 leading-relaxed">
              Kazan Tattoo Irezumi — Estudio de tatuaje tradicional y japonés
              en Bogotá, Colombia.
            </p>
          </div>

          {/* Navegación */}
          <div className="flex flex-col gap-3">
            <h3 className="text-xs uppercase tracking-widest-caps text-mist mb-1">
              Explorar
            </h3>
            <Link href="/gallery" className="text-fog hover:text-yuki text-sm transition-colors">
              Galería
            </Link>
            <Link href="/blog" className="text-fog hover:text-yuki text-sm transition-colors">
              Blog
            </Link>
            <Link href="/about" className="text-fog hover:text-yuki text-sm transition-colors">
              Nosotros
            </Link>
          </div>

          {/* Contacto */}
          <div className="flex flex-col gap-4">
            <h3 className="text-xs uppercase tracking-widest-caps text-mist mb-1">
              Contacto
            </h3>
            <div className="flex items-center gap-2 text-fog text-sm">
              <MapPin className="w-4 h-4 text-fog" />
              Bogotá, Colombia
            </div>
            <Link
              href="https://www.instagram.com/kazantattooirezumi"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 self-start px-4 py-2 rounded-full border border-ginko text-fog hover:border-yuki hover:text-yuki transition-colors text-sm"
            >
              <FiInstagram className="w-4 h-4" />
              @kazantattooirezumi
            </Link>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-shinobu/60 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-mist">
            © {new Date().getFullYear()} Kazan Tattoo Irezumi. Todos los derechos reservados.
          </p>
          <p className="text-xs text-mist">
            Hecho con tinta, aguja y respeto.
          </p>
        </div>
      </div>
    </footer>
  );
}
