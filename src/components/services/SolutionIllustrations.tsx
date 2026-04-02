"use client";

/* ─────────────────────────────────────────────────────
   Illustrations HTML custom pour la section SolutionSticky.
   Chaque illustration mime un outil / écran pertinent
   pour le service concerné.
   ───────────────────────────────────────────────────── */

// ── LinkedIn Post (personal branding) ──
function LinkedInPost() {
  return (
    <div className="w-full space-y-3">
      {/* Profil LinkedIn header */}
      <div className="bg-white/[0.07] backdrop-blur-md border border-white/10 w-full">
        {/* Banniere */}
        <div className="h-14 bg-gradient-to-r from-accent/10 via-accent/5 to-transparent relative">
          <div className="absolute -bottom-5 left-4 w-12 h-12 bg-accent/20 border-2 border-accent/40 flex items-center justify-center text-accent text-sm font-bold">
            LG
          </div>
        </div>
        <div className="pt-7 pb-3 px-4">
          <p className="text-white text-[13px] font-semibold">Lucas Gonzalez</p>
          <p className="text-white/60 text-[10px] leading-relaxed mt-0.5">
            Marketing B2B, Positionnement, Activation des Ventes. Top 300 LinkedIn FR.
          </p>
          <div className="flex items-center gap-3 mt-2">
            <span className="text-accent text-[10px] font-medium">12 847 abonnes</span>
            <span className="text-white/30 text-[10px]">500+ relations</span>
          </div>
        </div>
      </div>

      {/* Post LinkedIn */}
      <div className="bg-white/[0.07] backdrop-blur-md border border-white/10 p-4 w-full">
        <div className="flex items-center gap-3 mb-3">
          <div className="w-8 h-8 bg-accent/20 border border-accent/30 flex items-center justify-center text-accent text-[10px] font-bold shrink-0">
            LG
          </div>
          <div className="min-w-0">
            <p className="text-white text-[11px] font-semibold">Lucas Gonzalez</p>
            <p className="text-white/40 text-[9px]">Fondateur, Vizion &middot; 2j</p>
          </div>
        </div>

        {/* Texte du post */}
        <div className="text-[10px] leading-relaxed space-y-2 mb-3">
          <p className="text-white/80">
            En B2B, les decideurs achetent a des personnes avant d&apos;acheter a des entreprises.
          </p>
          <p className="text-white/60">
            Votre profil LinkedIn est votre premier canal d&apos;acquisition.
            Pas votre CV en ligne.
          </p>
          <p className="text-white/60">
            3 actions qui changent tout :
          </p>
          <div className="pl-1 space-y-0.5 text-white/60">
            <p>1. Un positionnement editorial clair</p>
            <p>2. Une cadence de publication tenable</p>
            <p>3. Des metriques business, pas des likes</p>
          </div>
          <p className="text-accent/80 text-[9px]">
            #PersonalBranding #B2B #LinkedIn #MarketingStrategique
          </p>
        </div>

        {/* Engagement bar */}
        <div className="flex items-center gap-1 mb-2">
          <div className="flex -space-x-1">
            <div className="w-3.5 h-3.5 bg-blue-500/60 flex items-center justify-center text-[6px] text-white">&#9786;</div>
            <div className="w-3.5 h-3.5 bg-accent/40 flex items-center justify-center text-[6px] text-white">&#9733;</div>
            <div className="w-3.5 h-3.5 bg-red-400/50 flex items-center justify-center text-[6px] text-white">&#9829;</div>
          </div>
          <span className="text-white/40 text-[9px]">1 247</span>
        </div>

        <div className="flex items-center justify-between pt-2 border-t border-white/[0.08]">
          <span className="text-white/40 text-[9px]">87 commentaires</span>
          <span className="text-white/40 text-[9px]">34 partages</span>
        </div>

        {/* Action bar */}
        <div className="flex items-center justify-between mt-2 pt-2 border-t border-white/[0.08]">
          {["J\u2019aime", "Commenter", "Partager", "Envoyer"].map((action) => (
            <span key={action} className="text-white/30 text-[9px] hover:text-white/60 transition-colors">{action}</span>
          ))}
        </div>
      </div>

      {/* Analytics panel */}
      <div className="bg-white/[0.07] backdrop-blur-md border border-white/10 p-4 w-full">
        <div className="flex items-center justify-between mb-3">
          <span className="text-white text-[11px] font-semibold">Analytics du profil</span>
          <span className="text-white/30 text-[9px]">30 derniers jours</span>
        </div>
        <div className="grid grid-cols-3 gap-2 mb-3">
          {[
            { label: "Impressions", value: "48.2k", trend: "+300%" },
            { label: "Messages recus", value: "23", trend: "+156%" },
            { label: "RDV decroches", value: "7", trend: "+250%" },
          ].map((m) => (
            <div key={m.label} className="bg-white/[0.04] border border-white/[0.06] p-2 text-center">
              <p className="text-white text-[13px] font-bold">{m.value}</p>
              <p className="text-accent text-[9px] font-medium">{m.trend}</p>
              <p className="text-white/40 text-[8px] mt-0.5">{m.label}</p>
            </div>
          ))}
        </div>

        {/* Mini bar chart */}
        <div className="flex items-end gap-[2px] h-[32px]">
          {[15, 22, 18, 30, 35, 28, 45, 40, 55, 50, 65, 60, 72, 68, 80, 75, 88, 82, 95, 90].map((h, i) => (
            <div
              key={i}
              className="flex-1 bg-accent/25 origin-bottom"
              style={{ height: `${h}%` }}
            />
          ))}
        </div>
        <div className="flex justify-between mt-1">
          <span className="text-white/20 text-[7px]">S1</span>
          <span className="text-white/20 text-[7px]">S2</span>
          <span className="text-white/20 text-[7px]">S3</span>
          <span className="text-white/20 text-[7px]">S4</span>
        </div>
      </div>
    </div>
  );
}

// ── Browser Window (site web) ──
function BrowserMockup() {
  const lighthouseScores = [
    { label: "Perf.", value: 98, color: "text-green-400" },
    { label: "A11y", value: 95, color: "text-green-400" },
    { label: "SEO", value: 100, color: "text-green-400" },
    { label: "BP", value: 96, color: "text-green-400" },
  ];
  const navItems = ["Accueil", "Services", "Cas clients", "Blog", "Contact"];
  const siteMetrics = [
    { value: "+40", suffix: " sites", label: "livres depuis 2021" },
    { value: "90+", suffix: "", label: "score Lighthouse" },
    { value: "4 min", suffix: "", label: "temps de session" },
  ];
  return (
    <div className="bg-white/[0.07] backdrop-blur-md border border-white/10 w-full">
      {/* Barre onglets */}
      <div className="flex items-center border-b border-white/[0.06] bg-white/[0.03]">
        <div className="flex items-center gap-px">
          <div className="flex items-center gap-2 px-3 py-1.5 bg-white/[0.07] border-r border-white/[0.06]">
            <div className="w-2 h-2 rounded-full bg-accent/40" />
            <span className="text-[9px] text-white/70">votre-site.fr</span>
            <span className="text-[8px] text-white/20 ml-1">&times;</span>
          </div>
          <div className="flex items-center gap-2 px-3 py-1.5 border-r border-white/[0.06]">
            <div className="w-2 h-2 rounded-full bg-white/20" />
            <span className="text-[9px] text-white/30">analytics</span>
            <span className="text-[8px] text-white/20 ml-1">&times;</span>
          </div>
        </div>
        <div className="ml-auto flex gap-1.5 pr-2">
          <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
          <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
          <div className="w-2.5 h-2.5 rounded-full bg-red-400/30" />
        </div>
      </div>

      {/* Barre adresse */}
      <div className="flex items-center gap-2 px-3 py-1.5 border-b border-white/[0.08] bg-white/[0.02]">
        <div className="flex gap-1.5">
          <span className="text-white/20 text-[10px]">&larr;</span>
          <span className="text-white/20 text-[10px]">&rarr;</span>
          <span className="text-white/20 text-[10px]">&#x21bb;</span>
        </div>
        <div className="flex-1 flex items-center gap-1.5 bg-white/[0.06] px-2.5 py-1">
          <span className="text-green-400/60 text-[9px]">&#x1f512;</span>
          <span className="text-white/50 text-[10px]">https://</span>
          <span className="text-white/80 text-[10px] font-medium">votre-site.fr</span>
        </div>
      </div>

      {/* Contenu du site wireframe */}
      <div className="relative">
        {/* Nav */}
        <div className="flex items-center justify-between px-4 py-2 border-b border-white/[0.06]">
          <div className="flex items-center gap-1.5">
            <div className="w-4 h-4 bg-accent/20 border border-accent/30" />
            <span className="text-[9px] text-white/60 font-semibold">LOGO</span>
          </div>
          <div className="flex gap-3">
            {navItems.map((item) => (
              <span key={item} className="text-[8px] text-white/40">{item}</span>
            ))}
          </div>
          <div className="bg-accent/20 px-2 py-0.5 text-[8px] text-accent font-medium">Contact</div>
        </div>

        {/* Hero section */}
        <div className="px-4 py-5 border-b border-white/[0.06] bg-white/[0.02]">
          <div className="flex gap-4">
            <div className="flex-1 space-y-2">
              <div className="flex items-center gap-1.5 mb-1">
                <div className="w-1 h-1 rounded-full bg-accent" />
                <span className="text-[7px] text-accent/70 uppercase tracking-widest">Votre partenaire B2B</span>
              </div>
              <div className="h-3.5 bg-white/15 w-[95%]" />
              <div className="h-3.5 bg-white/15 w-[70%]" />
              <div className="h-2 bg-white/[0.06] w-[85%] mt-2" />
              <div className="h-2 bg-white/[0.06] w-[60%]" />
              <div className="flex gap-2 mt-3">
                <div className="h-6 bg-accent/30 px-3 flex items-center text-[8px] text-accent font-medium">Demander un devis</div>
                <div className="h-6 border border-white/15 px-3 flex items-center text-[8px] text-white/40">Voir les cas</div>
              </div>
            </div>
            <div className="w-[35%] bg-white/[0.04] border border-white/[0.06] flex items-center justify-center shrink-0">
              <div className="text-center p-2">
                <div className="w-8 h-8 bg-accent/10 border border-accent/20 mx-auto mb-1 flex items-center justify-center">
                  <span className="text-accent text-[10px]">&#9654;</span>
                </div>
                <span className="text-[7px] text-white/30">Video</span>
              </div>
            </div>
          </div>
        </div>

        {/* Metriques */}
        <div className="grid grid-cols-3 gap-0 border-b border-white/[0.06]">
          {siteMetrics.map((m, i) => (
            <div key={m.label} className={`text-center py-2.5 px-2 ${i < 2 ? "border-r border-white/[0.06]" : ""}`}>
              <p className="text-accent text-[13px] font-bold leading-none">{m.value}<span className="text-[10px] font-normal">{m.suffix}</span></p>
              <p className="text-white/30 text-[7px] mt-0.5">{m.label}</p>
            </div>
          ))}
        </div>

        {/* Section services */}
        <div className="px-4 py-3 border-b border-white/[0.06]">
          <div className="h-2.5 bg-white/10 w-[40%] mx-auto mb-2" />
          <div className="grid grid-cols-3 gap-1.5">
            {["Strategie", "Site web", "SEO"].map((s, i) => (
              <div key={s} className={`p-2 border ${i === 1 ? "bg-accent/10 border-accent/20" : "bg-white/[0.04] border-white/[0.06]"}`}>
                <div className={`w-3.5 h-3.5 mb-1.5 ${i === 1 ? "bg-accent/20" : "bg-white/[0.06]"}`} />
                <span className={`text-[8px] font-medium ${i === 1 ? "text-accent" : "text-white/50"}`}>{s}</span>
                <div className="h-1 bg-white/[0.06] w-[80%] mt-1" />
                <div className="h-1 bg-white/[0.06] w-[55%] mt-0.5" />
              </div>
            ))}
          </div>
        </div>

        {/* Temoignage */}
        <div className="px-4 py-3 border-b border-white/[0.06] bg-white/[0.02]">
          <div className="flex items-start gap-2">
            <div className="w-6 h-6 bg-white/10 shrink-0 flex items-center justify-center text-[8px] text-white/30">T</div>
            <div className="flex-1">
              <div className="h-1.5 bg-white/[0.08] w-full mb-1" />
              <div className="h-1.5 bg-white/[0.08] w-[90%] mb-1" />
              <div className="h-1.5 bg-white/[0.08] w-[60%]" />
              <span className="text-[7px] text-accent/60 mt-1.5 block">Dirigeant, Groupe Aura</span>
            </div>
          </div>
        </div>

        {/* CTA final */}
        <div className="px-4 py-3 border-b border-white/[0.06] text-center bg-white/[0.03]">
          <div className="h-2.5 bg-white/10 w-[55%] mx-auto mb-1.5" />
          <div className="h-2 bg-white/[0.06] w-[40%] mx-auto mb-2" />
          <div className="h-5 bg-accent/25 w-28 mx-auto flex items-center justify-center text-[8px] text-accent font-medium">Discuter du projet</div>
        </div>

        {/* Footer */}
        <div className="px-4 py-2 bg-white/[0.02] flex items-center justify-between">
          <div className="flex items-center gap-1">
            <div className="w-3 h-3 bg-white/10" />
            <span className="text-[7px] text-white/25">votre-site.fr</span>
          </div>
          <div className="flex gap-3">
            {["Mentions", "Contact", "LinkedIn"].map((f) => (
              <span key={f} className="text-[7px] text-white/20">{f}</span>
            ))}
          </div>
        </div>
      </div>

      {/* Lighthouse scores */}
      <div className="border-t border-white/[0.08] px-3 py-2.5 bg-white/[0.03]">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-1.5">
            <span className="text-[9px] text-white/40 font-medium">Lighthouse</span>
            <span className="text-[8px] text-white/20">v12.0</span>
          </div>
          <span className="text-green-400/80 text-[8px] font-medium">Tous les voyants au vert</span>
        </div>
        <div className="grid grid-cols-4 gap-2">
          {lighthouseScores.map((s) => (
            <div key={s.label} className="text-center">
              <div className="relative w-9 h-9 mx-auto mb-1">
                <svg viewBox="0 0 36 36" className="w-full h-full -rotate-90">
                  <circle cx="18" cy="18" r="15" fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="3" />
                  <circle cx="18" cy="18" r="15" fill="none" stroke="currentColor" strokeWidth="3" strokeDasharray={`${s.value * 0.94} 100`} className={s.color} strokeLinecap="butt" />
                </svg>
                <span className={`absolute inset-0 flex items-center justify-center text-[9px] font-bold ${s.color}`}>{s.value}</span>
              </div>
              <span className="text-[7px] text-white/40">{s.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ── CRM Pipeline (déploiement CRM) ──
function CRMPipeline() {
  const columns = [
    {
      label: "Qualification",
      count: 8,
      value: "38 500",
      color: "bg-white/[0.06]",
      deals: [
        { name: "Indusol Group", amount: "14 200", proba: 20, progress: 25 },
        { name: "Nextech SAS", amount: "8 500", proba: 30, progress: 40 },
        { name: "Aeroparts EU", amount: "15 800", proba: 15, progress: 15 },
      ],
    },
    {
      label: "Proposition",
      count: 5,
      value: "62 800",
      color: "bg-accent/5",
      deals: [
        { name: "DataServ Pro", amount: "24 000", proba: 55, progress: 60 },
        { name: "LogiFlow", amount: "18 800", proba: 50, progress: 55 },
        { name: "Vectis Conseil", amount: "20 000", proba: 45, progress: 50 },
      ],
    },
    {
      label: "Negociation",
      count: 3,
      value: "51 200",
      color: "bg-accent/10",
      deals: [
        { name: "Helios Energie", amount: "32 000", proba: 75, progress: 80 },
        { name: "CloudFirst", amount: "19 200", proba: 80, progress: 85 },
      ],
    },
    {
      label: "Closing",
      count: 2,
      value: "41 500",
      color: "bg-accent/15",
      deals: [
        { name: "Syntec Digital", amount: "28 000", proba: 95, progress: 95 },
        { name: "MediPharma", amount: "13 500", proba: 90, progress: 90 },
      ],
    },
  ];

  return (
    <div className="w-full space-y-2.5">
      {/* Header metrics */}
      <div className="bg-white/[0.07] backdrop-blur-md border border-white/10 p-4 w-full">
        <div className="flex items-center justify-between mb-3">
          <span className="text-white text-[12px] font-semibold">Pipeline commercial</span>
          <span className="text-white/30 text-[9px]">T1 2026</span>
        </div>
        <div className="grid grid-cols-4 gap-2">
          <div className="bg-white/[0.04] border border-white/[0.06] p-2 text-center">
            <p className="text-accent text-[14px] font-bold">194 000 &euro;</p>
            <p className="text-white/40 text-[8px] mt-0.5">Pipeline total</p>
          </div>
          <div className="bg-white/[0.04] border border-white/[0.06] p-2 text-center">
            <p className="text-white text-[14px] font-bold">87 400 &euro;</p>
            <p className="text-white/40 text-[8px] mt-0.5">Previsionnel pondere</p>
          </div>
          <div className="bg-white/[0.04] border border-white/[0.06] p-2 text-center">
            <p className="text-accent text-[14px] font-bold">32%</p>
            <p className="text-white/40 text-[8px] mt-0.5">Taux de conversion</p>
          </div>
          <div className="bg-white/[0.04] border border-white/[0.06] p-2 text-center">
            <p className="text-white text-[14px] font-bold">12</p>
            <p className="text-white/40 text-[8px] mt-0.5">Deals gagnes (YTD)</p>
          </div>
        </div>
      </div>

      {/* Kanban pipeline */}
      <div className="bg-white/[0.07] backdrop-blur-md border border-white/10 p-4 w-full">
        <div className="grid grid-cols-4 gap-2">
          {columns.map((col) => (
            <div key={col.label}>
              {/* Column header */}
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-1.5">
                  <span className="text-white/60 text-[9px] font-medium uppercase tracking-wider">{col.label}</span>
                  <span className="bg-white/10 text-white/40 text-[8px] px-1 py-px">{col.count}</span>
                </div>
              </div>
              <div className="text-accent text-[10px] font-medium mb-2">{col.value} &euro;</div>

              {/* Deal cards */}
              <div className="space-y-1.5">
                {col.deals.map((deal) => (
                  <div key={deal.name} className={`${col.color} border border-white/[0.08] p-2`}>
                    <div className="flex items-start justify-between mb-1">
                      <p className="text-white/80 text-[10px] font-medium leading-tight">{deal.name}</p>
                      <span className="text-accent text-[9px] font-medium shrink-0 ml-1">{deal.proba}%</span>
                    </div>
                    <p className="text-white/40 text-[9px] mb-1.5">{deal.amount} &euro;</p>
                    {/* Progress bar */}
                    <div className="h-1 bg-white/[0.06] w-full">
                      <div className="h-full bg-accent/40" style={{ width: `${deal.progress}%` }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Conversion funnel bar */}
      <div className="bg-white/[0.07] backdrop-blur-md border border-white/10 p-4 w-full">
        <div className="flex items-center justify-between mb-2">
          <span className="text-white/60 text-[10px]">Taux de conversion par etape</span>
        </div>
        <div className="flex items-center gap-1 h-5">
          <div className="bg-accent/15 h-full flex items-center justify-center flex-[4]">
            <span className="text-white/50 text-[8px]">100%</span>
          </div>
          <div className="text-white/20 text-[8px]">&rsaquo;</div>
          <div className="bg-accent/25 h-full flex items-center justify-center flex-[3]">
            <span className="text-white/60 text-[8px]">62%</span>
          </div>
          <div className="text-white/20 text-[8px]">&rsaquo;</div>
          <div className="bg-accent/35 h-full flex items-center justify-center flex-[2]">
            <span className="text-white/70 text-[8px]">48%</span>
          </div>
          <div className="text-white/20 text-[8px]">&rsaquo;</div>
          <div className="bg-accent/50 h-full flex items-center justify-center flex-1">
            <span className="text-white/80 text-[8px]">32%</span>
          </div>
        </div>
        <div className="flex items-center gap-1 mt-1">
          <div className="flex-[4] text-center"><span className="text-white/30 text-[7px]">Qualif.</span></div>
          <div className="w-2" />
          <div className="flex-[3] text-center"><span className="text-white/30 text-[7px]">Prop.</span></div>
          <div className="w-2" />
          <div className="flex-[2] text-center"><span className="text-white/30 text-[7px]">Nego.</span></div>
          <div className="w-2" />
          <div className="flex-1 text-center"><span className="text-white/30 text-[7px]">Close</span></div>
        </div>
      </div>
    </div>
  );
}

// ── Google SERP (SEO) ──
function GoogleSERP() {
  return (
    <div className="bg-white/[0.07] backdrop-blur-md border border-white/10 p-5 w-full">
      <div className="flex items-center gap-2 mb-4">
        <div className="text-white/60 text-[13px] font-medium">G</div>
        <div className="flex-1 bg-white/[0.06] px-3 py-1.5 text-[10px] text-white/40">agence marketing b2b toulouse</div>
      </div>
      <div className="space-y-4">
        <div className="bg-accent/10 border border-accent/20 p-3">
          <p className="text-accent text-[12px] font-medium mb-0.5">by-vizion.com</p>
          <p className="text-white text-[13px] font-semibold mb-1">Vizion : Agence Marketing B2B</p>
          <div className="h-2 bg-white/10 w-[90%]" />
          <div className="h-2 bg-white/10 w-[70%] mt-1" />
          <span className="inline-block mt-2 text-[9px] text-accent font-medium bg-accent/10 px-1.5 py-0.5">#1</span>
        </div>
        <div className="p-3 opacity-50">
          <p className="text-white/40 text-[11px] mb-0.5">concurrent-a.com</p>
          <div className="h-2 bg-white/[0.06] w-[80%]" />
          <div className="h-2 bg-white/[0.06] w-[65%] mt-1" />
        </div>
        <div className="p-3 opacity-30">
          <p className="text-white/40 text-[11px] mb-0.5">concurrent-b.com</p>
          <div className="h-2 bg-white/[0.06] w-[75%]" />
          <div className="h-2 bg-white/[0.06] w-[55%] mt-1" />
        </div>
      </div>
    </div>
  );
}

// ── Ad Dashboard (campagnes publicitaires) ──
function AdDashboard() {
  return (
    <div className="bg-white/[0.07] backdrop-blur-md border border-white/10 p-5 w-full">
      <div className="flex items-center justify-between mb-4">
        <span className="text-white text-[12px] font-semibold">Performance ads</span>
        <span className="text-accent text-[10px]">30 derniers jours</span>
      </div>
      <div className="grid grid-cols-3 gap-3 mb-4">
        {[
          { label: "Impressions", value: "124k" },
          { label: "Clics", value: "3.8k" },
          { label: "CPL", value: "18 \u20ac" },
        ].map((m) => (
          <div key={m.label} className="bg-white/[0.04] border border-white/[0.06] p-2.5 text-center">
            <p className="text-accent text-[16px] font-bold">{m.value}</p>
            <p className="text-white/40 text-[9px] mt-0.5">{m.label}</p>
          </div>
        ))}
      </div>
      <div className="flex items-end gap-[3px] h-[50px]">
        {[30, 45, 35, 60, 55, 75, 50, 80, 65, 90, 70, 85].map((h, i) => (
          <div key={i} className="flex-1 bg-accent/30 origin-bottom" style={{ height: `${h}%` }} />
        ))}
      </div>
      <div className="flex justify-between mt-2">
        <span className="text-white/30 text-[8px]">1 mars</span>
        <span className="text-white/30 text-[8px]">30 mars</span>
      </div>
    </div>
  );
}

// ── Email Sequence (cold outreach) ──
function EmailSequence() {
  const steps = [
    { day: "J+0", subject: "Approche initiale", open: "62%", status: "sent" },
    { day: "J+3", subject: "Relance valeur", open: "45%", status: "sent" },
    { day: "J+7", subject: "Cas client similaire", open: "38%", status: "pending" },
  ];
  return (
    <div className="bg-white/[0.07] backdrop-blur-md border border-white/10 p-5 w-full">
      <p className="text-white text-[12px] font-semibold mb-4">Sequence outreach</p>
      <div className="space-y-0">
        {steps.map((s, i) => (
          <div key={s.day}>
            <div className="flex items-center gap-3 py-3">
              <div className={`w-7 h-7 flex items-center justify-center text-[10px] font-bold shrink-0 ${s.status === "sent" ? "bg-accent/20 text-accent" : "bg-white/[0.06] text-white/40"}`}>
                {s.day}
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-white/80 text-[12px] truncate">{s.subject}</p>
                <p className="text-white/30 text-[10px]">Ouverture : {s.open}</p>
              </div>
            </div>
            {i < steps.length - 1 && (
              <div className="ml-3.5 w-px h-3 bg-accent/30" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

// ── Roadmap Timeline (roadmap stratégique) ──
function RoadmapTimeline() {
  const quarters = [
    { label: "T1", items: ["Audit", "Positionnement"], active: true },
    { label: "T2", items: ["Site web", "SEO"], active: true },
    { label: "T3", items: ["Contenu", "Ads"], active: false },
    { label: "T4", items: ["Nurturing", "Scale"], active: false },
  ];
  return (
    <div className="bg-white/[0.07] backdrop-blur-md border border-white/10 p-5 w-full">
      <p className="text-white text-[12px] font-semibold mb-4">Feuille de route 12 mois</p>
      <div className="relative">
        <div className="absolute top-3 left-0 right-0 h-[2px] bg-white/[0.08]" />
        <div className="absolute top-3 left-0 h-[2px] bg-accent/40" style={{ width: "45%" }} />
        <div className="grid grid-cols-4 gap-2 relative">
          {quarters.map((q) => (
            <div key={q.label}>
              <div className={`w-2.5 h-2.5 mb-3 mx-auto relative z-10 ${q.active ? "bg-accent" : "bg-white/20"}`} />
              <p className={`text-[11px] font-semibold text-center mb-2 ${q.active ? "text-accent" : "text-white/40"}`}>{q.label}</p>
              <div className="space-y-1">
                {q.items.map((item) => (
                  <div key={item} className={`text-[9px] px-1.5 py-1 text-center ${q.active ? "bg-accent/10 text-accent/80" : "bg-white/[0.04] text-white/30"}`}>{item}</div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ── Audit Scores (audit marketing / site web) ──
function AuditScores() {
  const scores = [
    { label: "Performance", score: 72, color: "bg-amber-400" },
    { label: "SEO technique", score: 45, color: "bg-red-400" },
    { label: "Conversion", score: 58, color: "bg-amber-400" },
    { label: "Contenu", score: 34, color: "bg-red-400" },
    { label: "Analytics", score: 81, color: "bg-accent" },
  ];
  return (
    <div className="bg-white/[0.07] backdrop-blur-md border border-white/10 p-5 w-full">
      <div className="flex items-center justify-between mb-4">
        <span className="text-white text-[12px] font-semibold">Rapport d&apos;audit</span>
        <span className="text-amber-400 text-[11px] font-medium">Score : 58/100</span>
      </div>
      <div className="space-y-3">
        {scores.map((s) => (
          <div key={s.label}>
            <div className="flex justify-between mb-1">
              <span className="text-white/60 text-[11px]">{s.label}</span>
              <span className="text-white/80 text-[11px] font-medium">{s.score}%</span>
            </div>
            <div className="h-1.5 bg-white/[0.06] w-full">
              <div className={`h-full ${s.color}`} style={{ width: `${s.score}%` }} />
            </div>
          </div>
        ))}
      </div>
      <div className="mt-4 pt-3 border-t border-white/[0.08]">
        <span className="text-[10px] text-accent">12 recommandations prioritaires identifiees</span>
      </div>
    </div>
  );
}

// ── Message Matrix (positionnement / messaging) ──
function MessageMatrix() {
  return (
    <div className="bg-white/[0.07] backdrop-blur-md border border-white/10 p-5 w-full">
      <p className="text-white text-[12px] font-semibold mb-4">Architecture de message</p>
      <div className="bg-accent/10 border border-accent/20 p-3 mb-3 text-center">
        <p className="text-accent text-[11px] font-medium">Promesse principale</p>
        <p className="text-white text-[13px] font-semibold mt-1">Votre marketing sert vos ventes</p>
      </div>
      <div className="grid grid-cols-3 gap-2 mb-3">
        {["Pilier 1\nExpertise", "Pilier 2\nResultats", "Pilier 3\nMethode"].map((p) => (
          <div key={p} className="bg-white/[0.04] border border-white/[0.06] p-2 text-center">
            <p className="text-white/50 text-[9px] whitespace-pre-line">{p}</p>
          </div>
        ))}
      </div>
      <div className="grid grid-cols-3 gap-2">
        {["Preuve 1", "Preuve 2", "Preuve 3"].map((p) => (
          <div key={p} className="bg-white/[0.04] p-1.5 text-center">
            <p className="text-white/30 text-[8px]">{p}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

// ── Landing Page Wireframe ──
function LandingWireframe() {
  return (
    <div className="bg-white/[0.07] backdrop-blur-md border border-white/10 w-full">
      <div className="bg-accent/10 p-4 text-center border-b border-white/[0.08]">
        <div className="h-3 bg-white/10 w-[70%] mx-auto mb-2" />
        <div className="h-2 bg-white/[0.06] w-[50%] mx-auto mb-3" />
        <div className="h-7 bg-accent/30 w-24 mx-auto flex items-center justify-center text-[9px] text-accent font-medium">CTA</div>
      </div>
      <div className="p-4 space-y-3">
        <div className="flex gap-3">
          <div className="w-8 h-8 bg-accent/10 shrink-0" />
          <div className="flex-1 space-y-1">
            <div className="h-2 bg-white/10 w-[80%]" />
            <div className="h-2 bg-white/[0.06] w-[60%]" />
          </div>
        </div>
        <div className="flex gap-3">
          <div className="w-8 h-8 bg-accent/10 shrink-0" />
          <div className="flex-1 space-y-1">
            <div className="h-2 bg-white/10 w-[75%]" />
            <div className="h-2 bg-white/[0.06] w-[55%]" />
          </div>
        </div>
        <div className="h-16 bg-white/[0.04] border border-white/[0.06] flex items-center justify-center">
          <span className="text-white/20 text-[9px]">Temoignage client</span>
        </div>
        <div className="h-7 bg-accent/20 w-full flex items-center justify-center text-[9px] text-accent/60">Formulaire</div>
      </div>
    </div>
  );
}

// ── Slide Preview (pitch decks) ──
function SlidePreview() {
  return (
    <div className="bg-white/[0.07] backdrop-blur-md border border-white/10 p-5 w-full">
      <div className="aspect-[16/9] bg-black/30 border border-white/[0.08] p-5 flex flex-col justify-between mb-3">
        <div>
          <div className="h-3 bg-accent/30 w-[40%] mb-2" />
          <div className="h-5 bg-white/10 w-[80%] mb-1" />
          <div className="h-5 bg-white/10 w-[60%]" />
        </div>
        <div className="flex gap-4">
          {["34%", "2.8x", "89%"].map((v) => (
            <div key={v} className="text-center">
              <p className="text-accent text-[14px] font-bold">{v}</p>
              <div className="h-1.5 bg-white/10 w-10 mt-1" />
            </div>
          ))}
        </div>
      </div>
      <div className="flex gap-2">
        {[1, 2, 3, 4].map((n) => (
          <div key={n} className={`flex-1 aspect-[16/9] border ${n === 2 ? "border-accent/40 bg-accent/5" : "border-white/[0.08] bg-white/[0.03]"}`} />
        ))}
      </div>
    </div>
  );
}

// ── Battlecard Comparison ──
function BattlecardComparison() {
  const comparisonRows = [
    { label: "Positionnement sectoriel", us: "Expert", them: "Generaliste" },
    { label: "Interviews clients", us: "Incluses", them: "En supplement" },
    { label: "Mise a jour trimestrielle", us: "Incluse", them: "Non proposee" },
    { label: "Format adapte (CRM, Notion)", us: "Sur mesure", them: "PDF unique" },
    { label: "Donnees chiffrees verifiees", us: "Systematique", them: "Partiel" },
    { label: "Formation equipe commerciale", us: "Incluse", them: "Non proposee" },
  ];

  const objections = [
    {
      objection: "Votre solution est plus chere que le concurrent X.",
      reponse: "Notre tarif inclut l\u2019accompagnement strategique et les mises a jour trimestrielles. Sur 12 mois, le cout total est inferieur de 30%.",
    },
    {
      objection: "Le concurrent propose un essai gratuit.",
      reponse: "Un essai ne remplace pas un audit de vos besoins. Nous garantissons un ROI mesurable des le premier trimestre.",
    },
  ];

  return (
    <div className="w-full space-y-3">
      {/* Header battlecard */}
      <div className="bg-white/[0.07] backdrop-blur-md border border-white/10 p-4 w-full">
        <div className="flex items-center justify-between mb-1">
          <p className="text-white text-[12px] font-semibold">Battlecard : Concurrent Alpha</p>
          <span className="bg-accent/15 text-accent text-[8px] font-medium px-2 py-0.5 border border-accent/20">PRIORITE HAUTE</span>
        </div>
        <p className="text-white/40 text-[9px]">Secteur SaaS B2B &middot; Derniere mise a jour : Mars 2026</p>
      </div>

      {/* Tableau comparatif detaille */}
      <div className="bg-white/[0.07] backdrop-blur-md border border-white/10 p-4 w-full">
        <p className="text-white/60 text-[9px] uppercase tracking-widest font-light mb-3">Comparatif detaille</p>
        <div className="grid grid-cols-[1fr_80px_80px] gap-y-0 text-[10px]">
          <span className="text-white/30 pb-2 text-[9px]">Critere</span>
          <span className="text-accent text-center pb-2 text-[9px] font-medium">Nous</span>
          <span className="text-white/30 text-center pb-2 text-[9px]">Concurrent</span>
          {comparisonRows.map((r) => (
            <div key={r.label} className="contents">
              <span className="text-white/60 py-1.5 border-t border-white/[0.06]">{r.label}</span>
              <span className="text-accent text-center py-1.5 border-t border-white/[0.06] font-medium">{r.us}</span>
              <span className="text-white/30 text-center py-1.5 border-t border-white/[0.06]">{r.them}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Points de differenciation */}
      <div className="bg-white/[0.07] backdrop-blur-md border border-white/10 p-4 w-full">
        <p className="text-white/60 text-[9px] uppercase tracking-widest font-light mb-3">Arguments cles</p>
        <div className="space-y-2">
          {[
            "Un directeur marketing dedie comme interlocuteur unique",
            "Documentation alignee sur votre cycle de vente (3 a 18 mois)",
            "+80 battlecards et case studies livres pour des PME et ETI B2B",
          ].map((arg) => (
            <div key={arg} className="flex items-start gap-2">
              <span className="text-accent text-[10px] mt-px shrink-0">&#10003;</span>
              <span className="text-white/70 text-[10px] leading-relaxed">{arg}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Objections et reponses */}
      <div className="bg-white/[0.07] backdrop-blur-md border border-white/10 p-4 w-full">
        <p className="text-white/60 text-[9px] uppercase tracking-widest font-light mb-3">Objections et reponses</p>
        <div className="space-y-3">
          {objections.map((o) => (
            <div key={o.objection} className="space-y-1.5">
              <div className="bg-white/[0.04] border border-white/[0.06] px-3 py-2">
                <p className="text-white/50 text-[10px] leading-relaxed">
                  <span className="text-white/30 text-[8px] font-medium mr-1.5">OBJECTION</span>
                  {o.objection}
                </p>
              </div>
              <div className="bg-accent/[0.07] border border-accent/15 px-3 py-2">
                <p className="text-white/70 text-[10px] leading-relaxed">
                  <span className="text-accent text-[8px] font-medium mr-1.5">REPONSE</span>
                  {o.reponse}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Temoignage client */}
      <div className="bg-white/[0.07] backdrop-blur-md border border-white/10 p-4 w-full">
        <p className="text-white/60 text-[9px] uppercase tracking-widest font-light mb-3">Temoignage client</p>
        <div className="border-l-2 border-accent/30 pl-3">
          <p className="text-white/60 text-[10px] leading-relaxed italic">
            &laquo; Nos commerciaux repondent a chaque objection concurrentielle en 10 secondes.
            Le taux de transformation sur les deals disputes a progresse significativement. &raquo;
          </p>
          <p className="text-white/40 text-[9px] mt-2">Directeur des ventes &middot; Client B2B SaaS</p>
        </div>
      </div>
    </div>
  );
}

// ── Funnel Flow (lead nurturing) ──
function NurturingFunnel() {
  const stages = [
    { label: "Visiteur", width: "100%", count: "1 200" },
    { label: "Lead", width: "65%", count: "780" },
    { label: "MQL", width: "35%", count: "420" },
    { label: "SQL", width: "18%", count: "216" },
    { label: "Client", width: "8%", count: "96" },
  ];
  return (
    <div className="bg-white/[0.07] backdrop-blur-md border border-white/10 p-5 w-full">
      <p className="text-white text-[12px] font-semibold mb-4">Tunnel de conversion</p>
      <div className="space-y-1.5">
        {stages.map((s) => (
          <div key={s.label} className="flex items-center gap-3">
            <div className="flex-1">
              <div className="bg-accent/20 h-6 flex items-center px-2 transition-all" style={{ width: s.width }}>
                <span className="text-[9px] text-white/80 whitespace-nowrap">{s.label}</span>
              </div>
            </div>
            <span className="text-white/40 text-[10px] w-10 text-right shrink-0">{s.count}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

// ── Automation Flow (workflows) ──
function AutomationFlow() {
  const nodes = [
    { label: "Formulaire soumis", type: "trigger" },
    { label: "Email bienvenue", type: "action" },
    { label: "Attendre 3j", type: "wait" },
    { label: "A ouvert ?", type: "condition" },
    { label: "Sequence nurturing", type: "action" },
  ];
  return (
    <div className="bg-white/[0.07] backdrop-blur-md border border-white/10 p-5 w-full">
      <p className="text-white text-[12px] font-semibold mb-4">Workflow automatise</p>
      <div className="space-y-0">
        {nodes.map((n, i) => (
          <div key={n.label}>
            <div className={`flex items-center gap-3 px-3 py-2.5 border text-[11px] ${
              n.type === "trigger" ? "bg-accent/10 border-accent/20 text-accent" :
              n.type === "condition" ? "bg-amber-400/10 border-amber-400/20 text-amber-400" :
              n.type === "wait" ? "bg-white/[0.04] border-white/[0.08] text-white/40" :
              "bg-white/[0.06] border-white/[0.08] text-white/70"
            }`}>
              <span className="w-4 text-center shrink-0">{n.type === "trigger" ? "▶" : n.type === "condition" ? "◇" : n.type === "wait" ? "◷" : "→"}</span>
              {n.label}
            </div>
            {i < nodes.length - 1 && (
              <div className="ml-5 w-px h-2 bg-white/20" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

// ── AI Chat (applications IA) ──
function AIChatInterface() {
  return (
    <div className="bg-white/[0.07] backdrop-blur-md border border-white/10 p-5 w-full">
      <div className="flex items-center gap-2 mb-4">
        <div className="w-6 h-6 bg-accent/20 flex items-center justify-center text-accent text-[10px] font-bold">IA</div>
        <span className="text-white text-[12px] font-semibold">Assistant Vizion</span>
      </div>
      <div className="space-y-3">
        <div className="bg-white/[0.04] p-3 text-white/50 text-[11px] leading-relaxed mr-8">
          Analyse les performances de notre dernier article et suggere des optimisations.
        </div>
        <div className="bg-accent/10 border border-accent/20 p-3 text-white/80 text-[11px] leading-relaxed ml-4">
          <p>L&apos;article genere <span className="text-accent font-medium">+340% de trafic organique</span> vs la moyenne. 3 axes d&apos;optimisation :</p>
          <div className="mt-2 space-y-1">
            <div className="flex items-center gap-1.5"><span className="text-accent">1.</span><span>Enrichir la FAQ</span></div>
            <div className="flex items-center gap-1.5"><span className="text-accent">2.</span><span>Ajouter des backlinks</span></div>
            <div className="flex items-center gap-1.5"><span className="text-accent">3.</span><span>Optimiser les meta</span></div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ── Content Calendar (contenu B2B) ──
function ContentCalendar() {
  const items = [
    { type: "Article", title: "Marketing Produit B2B", status: "Publie", accent: true },
    { type: "LinkedIn", title: "Retour client Havas", status: "Planifie", accent: false },
    { type: "Newsletter", title: "Tendances Q2 2026", status: "Brouillon", accent: false },
    { type: "Case study", title: "EasyVirtual.tours", status: "En cours", accent: false },
  ];
  return (
    <div className="bg-white/[0.07] backdrop-blur-md border border-white/10 p-5 w-full">
      <p className="text-white text-[12px] font-semibold mb-4">Calendrier editorial</p>
      <div className="space-y-2">
        {items.map((item) => (
          <div key={item.title} className={`flex items-center gap-3 p-2.5 border ${item.accent ? "bg-accent/10 border-accent/20" : "bg-white/[0.04] border-white/[0.06]"}`}>
            <div className={`text-[9px] font-medium px-1.5 py-0.5 shrink-0 ${item.accent ? "bg-accent/20 text-accent" : "bg-white/[0.06] text-white/40"}`}>{item.type}</div>
            <p className="text-white/70 text-[11px] flex-1 truncate">{item.title}</p>
            <span className={`text-[9px] shrink-0 ${item.accent ? "text-accent" : "text-white/30"}`}>{item.status}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

// ── Dashboard Overview (direction marketing externalisée) ──
function MarketingDashboard() {
  return (
    <div className="bg-white/[0.07] backdrop-blur-md border border-white/10 p-5 w-full">
      <div className="flex items-center justify-between mb-4">
        <span className="text-white text-[12px] font-semibold">Tableau de bord CMO</span>
        <span className="text-white/30 text-[10px]">Mars 2026</span>
      </div>
      <div className="grid grid-cols-2 gap-2 mb-4">
        {[
          { label: "Leads generes", value: "247", trend: "+23%" },
          { label: "Pipeline", value: "890k", trend: "+18%" },
          { label: "CAC", value: "142 \u20ac", trend: "-12%" },
          { label: "MRR", value: "34k", trend: "+8%" },
        ].map((m) => (
          <div key={m.label} className="bg-white/[0.04] border border-white/[0.06] p-2.5">
            <p className="text-white/40 text-[9px]">{m.label}</p>
            <p className="text-white text-[15px] font-bold mt-0.5">{m.value}</p>
            <p className="text-accent text-[10px] font-medium">{m.trend}</p>
          </div>
        ))}
      </div>
      <div className="h-1 bg-white/[0.06] w-full">
        <div className="h-full bg-accent/40" style={{ width: "72%" }} />
      </div>
      <p className="text-white/30 text-[9px] mt-1">Objectif trimestriel : 72%</p>
    </div>
  );
}

// ── Connected Stack (stack acquisition) ──
function ConnectedStack() {
  const tools = [
    ["Site web", "CRM"],
    ["Emailing", "Ads", "LinkedIn"],
    ["Analytics"],
  ];
  return (
    <div className="bg-white/[0.07] backdrop-blur-md border border-white/10 p-5 w-full">
      <p className="text-white text-[12px] font-semibold mb-4">Stack d&apos;acquisition</p>
      <div className="space-y-2">
        {tools.map((row, i) => (
          <div key={i}>
            <div className="flex justify-center gap-2">
              {row.map((tool) => (
                <div key={tool} className="bg-white/[0.06] border border-white/[0.08] px-3 py-2 text-[10px] text-white/60 text-center hover:border-accent/30 hover:text-accent transition-colors">
                  {tool}
                </div>
              ))}
            </div>
            {i < tools.length - 1 && (
              <div className="flex justify-center py-1">
                <div className="w-px h-3 bg-accent/30" />
              </div>
            )}
          </div>
        ))}
      </div>
      <div className="mt-4 pt-3 border-t border-white/[0.08] text-center">
        <span className="text-accent text-[10px]">Tous les canaux connectes</span>
      </div>
    </div>
  );
}

// ─── Map slug → Illustration ───
// Seuls les services sans photo réelle utilisent une illustration HTML.
const ILLUSTRATIONS: Record<string, () => React.JSX.Element> = {
  "roadmap-strategique": RoadmapTimeline,
  "stack-acquisition": ConnectedStack,
};

export function SolutionIllustration({ slug }: { slug: string }) {
  const Component = ILLUSTRATIONS[slug];
  if (!Component) return null;
  return (
    <div className="w-full h-full flex items-center justify-center">
      <Component />
    </div>
  );
}

export function hasIllustration(slug: string): boolean {
  return slug in ILLUSTRATIONS;
}
