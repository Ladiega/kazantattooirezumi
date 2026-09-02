export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-ink">
      <div className="flex flex-col items-center gap-4">
        <div className="w-10 h-10 rounded-full border-2 border-ash border-t-yuki animate-spin" />
        <p className="font-serif text-fog text-sm tracking-widest">Cargando...</p>
      </div>
    </div>
  );
}
