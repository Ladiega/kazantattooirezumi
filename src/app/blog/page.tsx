import BlogCard from "@/components/BlogCard";
import { getAllPosts } from "@/lib/posts";

export const metadata = {
  title: "Blog",
  description:
    "Artículos sobre tatuaje, irezumi, historia, cuidados y cultura del tatuaje japonés. Blog del estudio Kazan Tattoo Irezumi.",
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <div className="pt-28 pb-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="mb-14">
          <p className="text-xs uppercase tracking-widest-caps text-mist mb-3">
            Blog
          </p>
          <h1 className="font-serif text-3xl md:text-5xl text-yuki">
            Historias de tinta
          </h1>
          <p className="mt-4 text-fog max-w-2xl leading-relaxed">
            Reflexiones, guías y conocimiento sobre el tatuaje japonés, la
            técnica y la cultura que hay detrás de cada aguja.
          </p>
        </div>

        {posts.length === 0 ? (
          <div className="text-center py-20 text-fog">
            <p className="font-serif text-2xl">Próximamente</p>
            <p className="mt-2 text-sm">
              Estamos preparando nuestro primer artículo. Vuelve pronto.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
