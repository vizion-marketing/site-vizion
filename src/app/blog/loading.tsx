export default function BlogLoading() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero skeleton */}
      <div className="bg-gradient-to-br from-[#B7B7B7] via-[#000] to-[#6D6D6D] pt-[120px] pb-[80px] px-6 md:px-12">
        <div className="max-w-[82.5rem] mx-auto">
          <div className="h-8 w-48 bg-white/10 rounded animate-pulse mb-6" />
          <div className="h-16 w-96 bg-white/10 rounded animate-pulse mb-4" />
          <div className="h-6 w-72 bg-white/10 rounded animate-pulse" />
        </div>
      </div>
      {/* Content skeleton */}
      <div className="max-w-[82.5rem] mx-auto px-6 md:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="bg-zinc-100 rounded-2xl h-80 animate-pulse" />
          ))}
        </div>
      </div>
    </div>
  );
}
