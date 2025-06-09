"use client";
import Link from "next/link";
import { useState } from "react";
import ThemeToggle from "./ThemeToggle";
import { RxHamburgerMenu } from "react-icons/rx";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="py-6 border-b border-sumi/10 dark:border-yuki/10">
      <div className="flex justify-between items-center">
        <Link href="/" className="text-2xl font-serif">
          火山 彫り物 Kazan Tattoo Irezumi
        </Link>

        <div className="flex items-center gap-4">
          <div className="hidden md:flex space-x-8">
            <Link href="/gallery">Galería</Link>
            <Link href="/about">Nosotros</Link>
          </div>
          <ThemeToggle />
          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden">
            <RxHamburgerMenu className="w-6 h-6 cursor-pointer" />
          </button>
        </div>
      </div>

      {/* Menú móvil */}
      {isOpen && (
        <div className="md:hidden mt-4 space-y-4 pb-4">
          <Link href="/gallery" className="block">
            Galería
          </Link>
          <Link href="/about" className="block">
            Nosotros
          </Link>
        </div>
      )}
    </nav>
  );
}
