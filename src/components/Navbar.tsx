"use client";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { RxHamburgerMenu, RxCross1 } from "react-icons/rx";
import { cn } from "@/lib/cn";

const NAV_LINKS = [
  { href: "/", label: "Inicio" },
  { href: "/gallery", label: "Galería" },
  { href: "/blog", label: "Blog" },
  { href: "/about", label: "Nosotros" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="fixed top-0 inset-x-0 z-40 border-b border-shinobu/60 bg-ink/70 backdrop-blur-xl">
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 flex justify-between items-center h-20">
        <Link href="/" className="flex flex-col leading-none group">
          <span className="font-serif text-xl sm:text-2xl tracking-wide text-yuki transition-colors">
            火山 彫り物
          </span>
          <span className="text-[10px] uppercase tracking-widest-caps text-mist mt-1">
            Kazan Tattoo Irezumi
          </span>
        </Link>

        <div className="flex items-center gap-2 sm:gap-6">
          {/* Navegación desktop */}
          <div className="hidden md:flex items-center space-x-1">
            {NAV_LINKS.map((link) => {
              const active =
                link.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "relative px-4 py-2 text-sm tracking-wide transition-colors",
                    active
                      ? "text-yuki"
                      : "text-mist hover:text-yuki"
                  )}
                >
                  {link.label}
                  {active && (
                    <span className="absolute bottom-0 left-4 right-4 h-px bg-yuki" />
                  )}
                </Link>
              );
            })}
          </div>

          {/* Botón móvil */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 -mr-2 text-fog hover:text-yuki transition-colors"
            aria-label="Abrir menú"
          >
            {isOpen ? (
              <RxCross1 className="w-6 h-6" />
            ) : (
              <RxHamburgerMenu className="w-6 h-6" />
            )}
          </button>
        </div>
      </nav>

      {/* Menú móvil */}
      {isOpen && (
        <div className="md:hidden border-t border-shinobu/60 bg-ink/95 backdrop-blur-xl">
          <div className="px-4 py-4 space-y-1">
            {NAV_LINKS.map((link) => {
              const active =
                link.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    "block px-3 py-3 text-base rounded-md transition-colors",
                    active
                      ? "text-yuki bg-ash/60"
                      : "text-mist hover:text-yuki hover:bg-ash/40"
                  )}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </header>
  );
}
