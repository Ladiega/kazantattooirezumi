// components/Footer.tsx
"use client";
import { FiInstagram } from "react-icons/fi";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-shinobu/20 mt-24 py-12 bg-washi dark:bg-sumi/50">
      <div className="max-w-6xl mx-auto px-4">
        {/* Logo y Especialidad */}
        <div className="flex flex-col items-center md:flex-row md:justify-between">
          <div className="text-center md:text-left mb-6 md:mb-0">
            <h2 className="font-serif text-2xl text-sumi dark:text-yuki">
              火山 彫り物
            </h2>
            <p className="text-sm text-shinobu dark:text-shinobu/70 mt-1">
              Kazan Tattoo Irezumi · ボゴタ市
            </p>
          </div>

          {/* Enlace a Instagram */}
          <Link
            href="https://www.instagram.com/kazantattooirezumi"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 bg-sumi/5 dark:bg-yuki/5 hover:bg-sumi/10 dark:hover:bg-yuki/10 px-4 py-2 rounded-full transition-colors"
          >
            <FiInstagram className="w-5 h-5 text-akebono dark:text-yamabuki" />
            <span className="text-sm text-sumi dark:text-yuki">
              @kazantattooirezumi
            </span>
          </Link>
        </div>

        {/* Derechos */}
        <div className="mt-8 pt-8 border-t border-shinobu/10 text-center">
          <p className="text-xs text-shinobu dark:text-shinobu/60">
            © {new Date().getFullYear()} Kazan Tattoo Irezumi. Todos los
            derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
