export function formatDate(date: string): string {
  if (!date) return "";
  const d = new Date(date);
  if (isNaN(d.getTime())) return date;
  return d.toLocaleDateString("es-ES", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export function featuredImage(cover: string | undefined, slug: string): string {
  if (cover) return cover;
  return "/img/montana1.png";
}
