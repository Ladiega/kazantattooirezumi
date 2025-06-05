import Navbar from "@/components/Navbar";
import InkDivider from "@/components/InkDivider";

export default function Home() {
  return (
    <>
      <Navbar />
      {/* Hero Section */}
      <section className="py-20 text-center">
        <h1 className="text-5xl md:text-7xl font-serif mb-6">
          Arte <span className="text-akebono">Japonés</span> en Piel
        </h1>
        <p className="max-w-2xl mx-auto text-lg mb-8">
          Tatuajes tradicionales inspirados en el <i>wabi-sabi</i>, donde la
          imperfección encuentra su belleza.
        </p>
        <button className="bg-sumi text-yuki px-8 py-3 hover:bg-akebono transition">
          Ver Galería
        </button>
      </section>
      <InkDivider /> {/* Componente personalizado */}
      {/* Featured Work */}
      <section className="py-20">
        <h2 className="text-3xl font-serif mb-12 text-center">
          Trabajos Recientes
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Ejemplo con datos estáticos (en producción usa API o CMS) */}
          {[
            {
              id: 1,
              title: "Koi Nobori",
              image: "/koi-tattoo.jpg",
              style: "Tebori",
            },
            {
              id: 2,
              title: "Hannya Mask",
              image: "/hannya.jpg",
              style: "Modern Wabori",
            },
            {
              id: 3,
              title: "Sakura Waves",
              image: "/sakura.jpg",
              style: "Japonés Tradicional",
            },
          ].map((item) => (
            <div key={item.id} className="group overflow-hidden">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-80 object-cover group-hover:scale-105 transition duration-500"
              />
              <div className="mt-4">
                <h3 className="font-serif text-xl">{item.title}</h3>
                <p className="text-sm text-sumi/60">{item.style}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
