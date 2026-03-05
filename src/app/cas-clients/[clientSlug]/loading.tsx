export default function ClientProfileLoading() {
  return (
    <div className="min-h-screen bg-white">
      <div className="grain-overlay pt-[120px] pb-[80px] px-6 md:px-12 dark-section" style={{ background: "var(--bg-dark)" }}>
        <div className="max-w-[82.5rem] mx-auto">
          <div className="h-5 w-32 bg-white/10 rounded-none animate-pulse mb-6" />
          <div className="h-14 w-[60%] bg-white/10 rounded-none animate-pulse mb-4" />
          <div className="h-5 w-48 bg-white/10 rounded-none animate-pulse" />
        </div>
      </div>
      <div className="max-w-[82.5rem] mx-auto px-6 md:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Array.from({ length: 3 }).map((_, i) => (
            <div key={i} className="bg-zinc-100 rounded-none h-64 animate-pulse" />
          ))}
        </div>
      </div>
    </div>
  );
}
