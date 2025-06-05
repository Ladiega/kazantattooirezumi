import { ThemeProvider } from "next-themes";
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
  variable: "--font-noto-serif-jp",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className={`${notoSans.variable} ${notoSerifJP.variable}`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <main className="max-w-6xl mx-auto px-4 bg-washi text-sumi dark:bg-sumi dark:text-yuki min-h-screen">
            <Navbar />
            {children}
            <Footer />
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
