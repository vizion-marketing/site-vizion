import Link from "next/link";
import Image from "next/image";

export interface ProjectMarqueeItem {
  company: string;
  client?: string;
  sector: string;
  href?: string;
  image?: string;
}

interface ProjectsMarqueeProps {
  projects: ProjectMarqueeItem[];
}

export function ProjectsMarquee({ projects }: ProjectsMarqueeProps) {
  const displayProjects = [...projects, ...projects, ...projects];

  return (
    <section
      className="dark-section grain-overlay relative overflow-hidden border-y border-white/10"
      style={{ background: "var(--bg-dark)" }}
    >
      <div className="flex items-stretch py-4">
        {/* Scrolling strip */}
        <div className="flex-1 overflow-hidden">
          <div className="flex gap-3 animate-scroll-left">
            {displayProjects.map((project, idx) => (
              <Link
                key={`${project.company}-${idx}`}
                href={project.href ?? "/cas-clients"}
                className="relative w-[280px] h-[220px] group overflow-hidden flex-shrink-0 block"
              >
                {/* Image de fond */}
                {project.image ? (
                  <Image
                    src={project.image}
                    alt={project.company}
                    fill
                    className="object-cover brightness-75 group-hover:brightness-100 transition-all duration-500"
                    sizes="280px"
                  />
                ) : (
                  <div className="absolute inset-0 bg-white/5" />
                )}

                {/* Overlay sombre → clair au survol */}
                <div className="absolute inset-0 bg-black/60 group-hover:bg-black/20 transition-all duration-500" />

                {/* Dégradé bas permanent pour lisibilité du texte */}
                <div className="absolute inset-x-0 bottom-0 h-24 z-10 pointer-events-none" style={{ background: "linear-gradient(to top, rgba(0,0,0,0.75) 0%, transparent 100%)" }} />

                {/* Dégradé bas renforcé au survol */}
                <div className="absolute inset-x-0 bottom-0 h-32 z-10 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ background: "linear-gradient(to top, rgba(0,0,0,0.85) 0%, transparent 100%)" }} />

                {/* Contenu */}
                <div className="absolute inset-0 p-6 flex flex-col justify-end z-20">
                  <div className="mb-2">
                    <span className="text-[10px] uppercase tracking-[0.12em] font-light text-white/60">
                      {project.client}
                    </span>
                  </div>
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <span className="text-white font-heading font-medium text-lg tracking-tight leading-tight block">
                        {project.company}
                      </span>
                      <span className="text-accent text-[11px] font-medium tracking-wide underline underline-offset-2">
                        Parcourir le cas client →
                      </span>
                    </div>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="shrink-0 transition-all duration-300 group-hover:scale-110">
                      <path d="M7 17L17 7M17 7H7M17 7V17" stroke="var(--color-accent)" strokeWidth="2" strokeLinecap="square" />
                    </svg>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Sticky CTA */}
        <Link
          href="/cas-clients"
          className="relative z-10 flex items-center px-6 md:px-10 ml-3 border-l border-white/10 hover:bg-white/5 transition-colors duration-300 group whitespace-nowrap"
          style={{ background: "var(--bg-dark)" }}
        >
          <div className="absolute top-0 right-full h-full w-24 pointer-events-none bg-gradient-to-r from-transparent to-[#0c0c0a]" />
          <span className="text-[11px] uppercase tracking-[0.12em] font-medium text-white flex items-center gap-3">
            Voir tous nos projets
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              className="group-hover:translate-x-1 transition-transform duration-300"
            >
              <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="var(--color-accent)" strokeWidth="2" strokeLinecap="square" />
            </svg>
          </span>
        </Link>
      </div>
    </section>
  );
}
