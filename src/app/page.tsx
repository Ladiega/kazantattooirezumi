import Link from "next/link";

export default function Home() {
  return (
    <>
      <section className="py-20 text-center">
        <h1 className="text-5xl md:text-7xl font-serif  mt-10 mb-6">
          !Los <span className="text-akebono">Tatuajes</span> son para siempre!.
        </h1>
        <Link
          href="/gallery"
          className="bg-sumi text-washi px-8 py-3 hover:bg-akebono hover:text-red-400 transition font-light rounded-lg text-lg md:text-xl"
        >
          Ver Galería
        </Link>
      </section>
    </>
  );
}
