import { Noto_Sans, Noto_Serif_JP } from "next/font/google";
import "./globals.css";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const notoSans = Noto_Sans({
  subsets: ["latin"],
  variable: "--font-noto-sans",
});

const notoSerifJP = Noto_Serif_JP({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-noto-serif-jp",
});

export const metadata = {
  title: {
    default: "Kazan Tattoo Irezumi · Estudio de Tatuaje en Bogotá",
    template: "%s · Kazan Tattoo Irezumi",
  },
  description:
    "Kazan Tattoo Irezumi es un estudio de tatuaje japonés en Bogotá, Colombia. Tatuaje tradicional, irezumi y arte sobre la piel.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body
        className={`${notoSans.variable} ${notoSerifJP.variable} texture-grain bg-ink text-yuki antialiased flex min-h-screen flex-col`}
      >
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
