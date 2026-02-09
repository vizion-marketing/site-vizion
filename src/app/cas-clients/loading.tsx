export default function CasClientsLoading() {
  return (
    <div className="min-h-screen bg-white">
      <div className="grain-overlay pt-[120px] pb-[80px] px-6 md:px-12" style={{ background: "#0c0c0a" }}>
        <div className="max-w-[82.5rem] mx-auto">
          <div className="h-8 w-48 bg-white/10 rounded-none animate-pulse mb-6" />
          <div className="h-16 w-80 bg-white/10 rounded-none animate-pulse mb-4" />
          <div className="h-6 w-64 bg-white/10 rounded-none animate-pulse" />
        </div>
      </div>
      <div className="max-w-[82.5rem] mx-auto px-6 md:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {Array.from({ length: 4 }).map((_, i) => (
            <div key={i} className="bg-zinc-100 rounded-none h-64 animate-pulse" />
          ))}
        </div>
      </div>
    </div>
  );
}
