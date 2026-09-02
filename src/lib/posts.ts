import fs from "fs";
import path from "path";
import matter from "gray-matter";

export type Post = {
  slug: string;
  title: string;
  description: string;
  date: string;
  author: string;
  cover?: string;
  tags?: string[];
  readingTime?: string;
};

const BLOG_DIR = path.join(process.cwd(), "content", "blog");

export function getAllPosts(): Post[] {
  if (!fs.existsSync(BLOG_DIR)) return [];

  const files = fs.readdirSync(BLOG_DIR).filter((f) => f.endsWith(".mdx"));

  const posts = files.map((filename) => {
    const slug = filename.replace(/\.mdx$/, "");
    const raw = fs.readFileSync(path.join(BLOG_DIR, filename), "utf8");
    const { data } = matter(raw);
    return {
      slug,
      title: data.title || slug,
      description: data.description || "",
      date: data.date || "",
      author: data.author || "Kazan Tattoo Irezumi",
      cover: data.cover || "",
      tags: data.tags || [],
      readingTime: data.readingTime || "",
    };
  });

  return posts.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}

export function getPostBySlug(slug: string): {
  post: Post;
  content: string;
} | null {
  const filename = path.join(BLOG_DIR, `${slug}.mdx`);
  if (!fs.existsSync(filename)) return null;

  const raw = fs.readFileSync(filename, "utf8");
  const { data, content } = matter(raw);

  return {
    post: {
      slug,
      title: data.title || slug,
      description: data.description || "",
      date: data.date || "",
      author: data.author || "Kazan Tattoo Irezumi",
      cover: data.cover || "",
      tags: data.tags || [],
      readingTime: data.readingTime || "",
    },
    content,
  };
}
