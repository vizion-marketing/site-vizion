export default function CasClientsLoading() {
  return (
    <div className="min-h-screen bg-white">
      <div className="bg-gradient-to-br from-[#B7B7B7] via-[#000] to-[#6D6D6D] pt-[120px] pb-[80px] px-6 md:px-12">
        <div className="max-w-[82.5rem] mx-auto">
          <div className="h-8 w-48 bg-white/10 rounded animate-pulse mb-6" />
          <div className="h-16 w-80 bg-white/10 rounded animate-pulse mb-4" />
          <div className="h-6 w-64 bg-white/10 rounded animate-pulse" />
        </div>
      </div>
      <div className="max-w-[82.5rem] mx-auto px-6 md:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {Array.from({ length: 4 }).map((_, i) => (
            <div key={i} className="bg-zinc-100 rounded-2xl h-64 animate-pulse" />
          ))}
        </div>
      </div>
    </div>
  );
}
