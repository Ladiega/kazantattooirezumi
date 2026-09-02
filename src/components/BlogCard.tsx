import Image from "next/image";
import { formatDate, featuredImage } from "@/lib/utils";
import { ArrowUpRight, Clock, User } from "lucide-react";
import Link from "next/link";
import type { Post } from "@/lib/posts";

export default function BlogCard({ post }: { post: Post }) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group flex flex-col rounded-xl border border-shinobu/60 bg-coal/40 overflow-hidden shadow-card hover:border-ginko transition-colors"
    >
      <div className="relative aspect-[16/10] overflow-hidden">
        <Image
          src={featuredImage(post.cover, post.slug)}
          alt={post.title}
          fill
          className="object-cover grayscale-[0.3] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-coal via-transparent to-transparent" />
        <ArrowUpRight className="absolute top-4 right-4 w-5 h-5 text-yuki opacity-0 group-hover:opacity-100 transition-opacity" />
      </div>

      <div className="p-6 flex flex-col flex-1">
        {post.tags && post.tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-3">
            {post.tags.slice(0, 2).map((tag) => (
              <span
                key={tag}
                className="px-2.5 py-0.5 text-[11px] uppercase tracking-wider text-mist bg-ash/40 rounded-full border border-ginko"
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        <h3 className="font-serif text-xl text-yuki leading-snug mb-3 group-hover:text-yuki transition-colors">
          {post.title}
        </h3>

        <p className="text-sm text-fog leading-relaxed mb-5 line-clamp-3">
          {post.description}
        </p>

        <div className="mt-auto flex items-center gap-4 text-xs text-mist">
          <span className="inline-flex items-center gap-1.5">
            <User className="w-3.5 h-3.5" />
            {post.author}
          </span>
          <span className="inline-flex items-center gap-1.5">
            <Clock className="w-3.5 h-3.5" />
            {post.readingTime}
          </span>
          <span className="ml-auto">{formatDate(post.date)}</span>
        </div>
      </div>
    </Link>
  );
}
