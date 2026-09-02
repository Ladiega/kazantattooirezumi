import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, CalendarDays, Clock, User } from "lucide-react";
import { MDXRemote } from "next-mdx-remote/rsc";
import { getAllPosts, getPostBySlug } from "@/lib/posts";
import { formatDate } from "@/lib/utils";

export async function generateStaticParams() {
  return getAllPosts().map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const result = getPostBySlug(slug);
  return {
    title: result?.post.title || "Post",
    description: result?.post.description || "Artículo del blog Kazan.",
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const result = getPostBySlug(slug);

  if (!result) {
    notFound();
  }

  const { post, content } = result;

  return (
    <div className="pt-24 pb-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-fog hover:text-yuki text-sm transition-colors mb-10"
        >
          <ArrowLeft className="w-4 h-4" />
          Volver al blog
        </Link>

        {/* Cabecera */}
        <header className="mb-10">
          {post.tags && post.tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-4">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 text-xs uppercase tracking-wider text-mist bg-ash/40 rounded-full border border-ginko"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}

          <h1 className="font-serif text-4xl md:text-5xl text-yuki leading-tight mb-6">
            {post.title}
          </h1>

          <div className="flex flex-wrap items-center gap-5 text-sm text-mist">
            <span className="inline-flex items-center gap-2">
              <User className="w-4 h-4 text-fog" />
              {post.author}
            </span>
            <span className="inline-flex items-center gap-2">
              <CalendarDays className="w-4 h-4 text-fog" />
              {formatDate(post.date)}
            </span>
            {post.readingTime && (
              <span className="inline-flex items-center gap-2">
                <Clock className="w-4 h-4 text-fog" />
                {post.readingTime}
              </span>
            )}
          </div>
        </header>

        <hr className="border-shinobu/60 mb-10" />

        {/* Contenido */}
        <article className="prose prose-invert prose-neutral prose-lg max-w-none">
          <MDXRemote source={content} />
        </article>
      </div>
    </div>
  );
}
