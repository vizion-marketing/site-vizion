export default function CaseStudyLoading() {
  return (
    <div className="min-h-screen bg-white">
      <div className="bg-gradient-to-br from-[#B7B7B7] via-[#000] to-[#6D6D6D] pt-[140px] pb-[80px] px-6 md:px-12">
        <div className="max-w-[82.5rem] mx-auto">
          <div className="h-5 w-32 bg-white/10 rounded animate-pulse mb-6" />
          <div className="h-14 w-[60%] bg-white/10 rounded animate-pulse mb-4" />
          <div className="h-5 w-48 bg-white/10 rounded animate-pulse" />
        </div>
      </div>
      <div className="max-w-4xl mx-auto px-6 py-16 space-y-6">
        {Array.from({ length: 10 }).map((_, i) => (
          <div key={i} className="h-5 bg-zinc-100 rounded animate-pulse" style={{ width: `${60 + Math.random() * 40}%` }} />
        ))}
      </div>
    </div>
  );
}
