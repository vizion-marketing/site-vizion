export default function BlogPostLoading() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero skeleton */}
      <div className="grain-overlay pt-40 pb-24 px-6 md:px-12" style={{ background: "#0c0c0a" }}>
        <div className="max-w-[82.5rem] mx-auto">
          <div className="h-6 w-32 bg-white/10 rounded animate-pulse mb-4" />
          <div className="h-12 w-[70%] bg-white/10 rounded animate-pulse mb-6" />
          <div className="h-5 w-48 bg-white/10 rounded animate-pulse" />
        </div>
      </div>
      {/* Article skeleton */}
      <div className="max-w-4xl mx-auto px-6 py-16 space-y-6">
        {Array.from({ length: 8 }).map((_, i) => (
          <div key={i} className="h-5 bg-zinc-100 rounded animate-pulse" style={{ width: `${70 + Math.random() * 30}%` }} />
        ))}
      </div>
    </div>
  );
}
