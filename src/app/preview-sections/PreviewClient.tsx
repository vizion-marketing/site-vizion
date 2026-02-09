"use client";

import React from "react";
import {
  Zap, Target, Lightbulb, TrendingUp, Users, BarChart3,
  Rocket, Shield, Settings, Globe, Mail, Phone, MapPin,
  CheckCircle, Layers, Code, Briefcase, Award, Star,
} from "lucide-react";

import {
  // Homepage extracts
  FAQAccordion,
  CTASection,
  TeamCarousel,
  TestimonialsCarousel,
  IconGrid,
  LogoMarquee,
  // Static/layout
  PageHero,
  TwoColSection,
  StatsBar,
  TimelineSection,
  FeatureCards,
  LogoBanner,
  SingleTestimonial,
  PricingSection,
  ContactFormSection,
  FullWidthImage,
  ComparisonTable,
  // Interactive
  TabbedShowcase,
  TabbedFeatures,
  CaseStudiesCarousel,
  ImageSlider,
  BeforeAfter,
  AccordionList,
  ExpandableCards,
  HorizontalRoadmap,
  ProcessSteps,
  StickyScrollReveal,
  NumberCounter,
  HoverRevealGrid,
} from "@/components/sections";

/* ─── SECTION LABEL ─── */
function SectionLabel({ name, index }: { name: string; index: number }) {
  return (
    <div className="bg-[#1a1a1a] text-white px-4 sm:px-6 py-3 flex items-center gap-3 sticky top-0 z-50">
      <span className="text-[#D4FD00] font-mono text-xs">{String(index).padStart(2, "0")}</span>
      <span className="font-heading font-medium text-sm tracking-wide">{name}</span>
    </div>
  );
}

/* ─── SAMPLE DATA ─── */
const PLACEHOLDER_IMG = "/images/about/about-main.jpg";
const PLACEHOLDER_IMG_2 = "/images/about/about-card.jpg";
const PLACEHOLDER_AVATAR = "/images/about/leo-bouyssou.jpg";

export function PreviewClient() {
  let idx = 0;

  return (
    <div>
      {/* ===== NAV TOC ===== */}
      <div className="bg-[#0c0c0a] text-white py-12 sm:py-16 px-4 sm:px-6 md:px-12">
        <div className="max-w-[82.5rem] mx-auto">
          <h1 className="font-heading font-medium text-[32px] sm:text-[44px] leading-[1.05] tracking-[-0.02em] mb-3">
            Section Library <span className="text-[#D4FD00]">Preview</span>
          </h1>
          <p className="text-white/60 font-[var(--font-body)] text-[15px] mb-8 max-w-xl">
            29 sections réutilisables. Scrolle pour les voir toutes avec des données fictives.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2">
            {[
              "PageHero", "StatsBar", "TwoColSection", "IconGrid", "FeatureCards",
              "FAQAccordion", "CTASection", "TeamCarousel", "TestimonialsCarousel",
              "SingleTestimonial", "LogoMarquee", "LogoBanner", "TimelineSection",
              "PricingSection", "ContactFormSection", "FullWidthImage", "ComparisonTable",
              "TabbedShowcase", "TabbedFeatures", "CaseStudiesCarousel", "ImageSlider",
              "BeforeAfter", "AccordionList", "ExpandableCards", "HorizontalRoadmap",
              "ProcessSteps", "StickyScrollReveal", "NumberCounter", "HoverRevealGrid",
            ].map((name, i) => (
              <div key={name} className="flex items-center gap-2 text-white/50 text-[12px] font-mono">
                <span className="text-[#D4FD00]">{String(i + 1).padStart(2, "0")}</span>
                {name}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ===== 01 — PageHero ===== */}
      <SectionLabel name="PageHero" index={++idx} />
      <PageHero
        surtitre="À propos"
        title="Une agence qui"
        titleHighlight="fait la différence"
        description="Nous concevons des stratégies marketing alignées sur vos objectifs business."
        breadcrumbs={[{ label: "Accueil", href: "/" }, { label: "À propos" }]}
        primaryCta={{ text: "Nous contacter", href: "/contact" }}
        secondaryCta={{ text: "Nos cas clients", href: "/cas-clients" }}
        variant="dark"
      />

      {/* ===== 02 — StatsBar ===== */}
      <SectionLabel name="StatsBar" index={++idx} />
      <StatsBar
        stats={[
          { value: "+70", label: "Clients accompagnés" },
          { value: "98%", label: "Taux de satisfaction" },
          { value: "4 ans", label: "D'expertise" },
          { value: "x3", label: "ROI moyen" },
        ]}
        variant="accent"
      />

      {/* ===== 03 — TwoColSection ===== */}
      <SectionLabel name="TwoColSection" index={++idx} />
      <TwoColSection
        surtitre="Notre approche"
        title="Le marketing au service de la performance commerciale"
        paragraphs={[
          "Notre approche se distingue par une intervention tout au long du cycle de vente, y compris dans les phases de négociation et de closing.",
          "Présentations commerciales, argumentaires de vente, supports d'aide à la décision : nous dotons vos équipes des outils nécessaires à la conversion.",
        ]}
        image={PLACEHOLDER_IMG}
        imageAlt="Notre approche"
        badge={{ text: "Depuis 2021" }}
      />

      {/* ===== 04 — IconGrid ===== */}
      <SectionLabel name="IconGrid" index={++idx} />
      <IconGrid
        surtitre="Problématiques"
        title="Des défis que nous"
        titleHighlight="résolvons"
        items={[
          { icon: Target, title: "Positionnement flou", description: "Votre offre manque de clarté et vos prospects ne comprennent pas votre valeur." },
          { icon: Users, title: "Équipes désalignées", description: "Marketing et ventes ne parlent pas le même langage." },
          { icon: TrendingUp, title: "Croissance en plateau", description: "Les méthodes qui ont fonctionné hier ne suffisent plus." },
          { icon: BarChart3, title: "ROI invisible", description: "Impossible de mesurer l'impact de vos actions marketing." },
          { icon: Zap, title: "Exécution trop lente", description: "Les projets avancent mais les résultats tardent." },
          { icon: Lightbulb, title: "Innovation mal packagée", description: "Votre technologie est avancée mais le marché ne comprend pas." },
        ]}
        variant="dark"
      />

      {/* ===== 05 — FeatureCards ===== */}
      <SectionLabel name="FeatureCards" index={++idx} />
      <FeatureCards
        surtitre="Nos expertises"
        title="Ce que nous"
        titleHighlight="maîtrisons"
        description="Cinq piliers d'expertise pour accompagner votre croissance."
        features={[
          { icon: Target, title: "Stratégie & positionnement", description: "Définition du positionnement et de l'architecture de message.", tags: ["Marketing produit", "PMM"], image: PLACEHOLDER_IMG },
          { icon: Globe, title: "Actifs digitaux", description: "Sites, landing pages et tunnels d'acquisition performants.", tags: ["Web", "Conversion"], image: PLACEHOLDER_IMG_2 },
          { icon: Briefcase, title: "Sales enablement", description: "Outils et contenus pour réduire les cycles de vente.", tags: ["Ventes", "Contenu"], image: PLACEHOLDER_IMG },
          { icon: Rocket, title: "Acquisition", description: "Campagnes ciblées pour générer des opportunités qualifiées.", tags: ["SEA", "Email"], image: PLACEHOLDER_IMG_2 },
          { icon: Settings, title: "Automatisation", description: "Workflows et intégrations pour industrialiser vos processus.", tags: ["CRM", "Ops"], image: PLACEHOLDER_IMG },
          { icon: Shield, title: "Formation", description: "Transfert de compétences et montée en autonomie de vos équipes.", tags: ["Workshop", "Coaching"], image: PLACEHOLDER_IMG_2 },
        ]}
        columns={3}
      />

      {/* ===== 06 — FAQAccordion ===== */}
      <SectionLabel name="FAQAccordion" index={++idx} />
      <FAQAccordion
        surtitre="Questions fréquentes"
        title="Vos questions, nos réponses"
        description="Tout ce que vous devez savoir avant de travailler avec nous."
        ctaText="Une autre question ?"
        ctaHref="/contact"
        faqs={[
          { question: "Quel est votre processus d'accompagnement ?", answer: "Nous démarrons par un audit de votre situation actuelle, suivi d'ateliers stratégiques pour définir les priorités. Un plan d'action est ensuite déployé avec des jalons mensuels." },
          { question: "Combien de temps dure un accompagnement ?", answer: "La durée varie selon les objectifs. Un projet de positionnement peut prendre 6 à 8 semaines, tandis qu'un accompagnement continu s'étend généralement sur 6 à 12 mois." },
          { question: "Travaillez-vous avec des entreprises hors de Toulouse ?", answer: "Absolument. Nous accompagnons des entreprises partout en France et à l'international, en combinant sessions en présentiel et travail à distance." },
          { question: "Quelle est la différence avec une agence classique ?", answer: "Nous sommes des stratèges, pas des exécutants. Chaque livrable s'inscrit dans une feuille de route marketing alignée sur vos objectifs business." },
        ]}
        defaultOpenIndex={0}
      />

      {/* ===== 07 — CTASection ===== */}
      <SectionLabel name="CTASection" index={++idx} />
      <CTASection
        badge="Prêt à passer à l'action ?"
        title="Construisons ensemble votre"
        titleHighlight="stratégie de croissance"
        description="Réservez un appel découverte de 30 minutes pour discuter de vos enjeux et voir comment nous pouvons vous aider."
        primaryCta={{ text: "Réserver un appel", href: "/contact" }}
        secondaryCta={{ text: "Voir nos cas clients", href: "/cas-clients" }}
        trustElements={[
          { icon: CheckCircle, text: "+70 entreprises accompagnées" },
          { icon: Star, text: "4.9/5 de satisfaction" },
          { icon: Shield, text: "Résultats garantis" },
        ]}
      />

      {/* ===== 08 — TeamCarousel ===== */}
      <SectionLabel name="TeamCarousel" index={++idx} />
      <TeamCarousel
        surtitre="L'équipe"
        title="Les visages derrière Vizion"
        description="Une équipe de stratèges passionnés par le marketing B2B."
        ctaText="Rejoindre l'équipe"
        ctaHref="/contact"
        members={[
          { name: "Lucas Gonzalez", role: "Co-fondateur & Stratège", specialty: "Marketing produit & positionnement", img: PLACEHOLDER_AVATAR, skills: ["Stratégie", "PMM", "Messaging"] },
          { name: "Hugo Schuppe", role: "Co-fondateur & CTO", specialty: "Automatisation & intégrations", img: PLACEHOLDER_AVATAR, skills: ["CRM", "Ops", "Dev"] },
          { name: "Léo Bouyssou", role: "Consultant Marketing", specialty: "Acquisition & campagnes", img: PLACEHOLDER_AVATAR, skills: ["SEA", "Email", "LinkedIn"] },
        ]}
      />

      {/* ===== 09 — TestimonialsCarousel ===== */}
      <SectionLabel name="TestimonialsCarousel" index={++idx} />
      <TestimonialsCarousel
        surtitre="Témoignages"
        title="Ce que disent nos clients"
        testimonials={[
          { id: "t1", quote: "Vizion a transformé notre approche commerciale. En 6 mois, nous avons doublé notre pipeline.", author: "Marie Dupont", role: "Directrice Marketing", company: "TechCorp", avatar: PLACEHOLDER_AVATAR, rating: 5 },
          { id: "t2", quote: "Un accompagnement de qualité, avec une vraie expertise stratégique. Pas juste de l'exécution.", author: "Jean Martin", role: "CEO", company: "InnoSoft", avatar: PLACEHOLDER_AVATAR, rating: 5 },
          { id: "t3", quote: "Les résultats parlent d'eux-mêmes. Notre taux de conversion a augmenté de 45%.", author: "Sophie Bernard", role: "VP Sales", company: "DataFlow", avatar: PLACEHOLDER_AVATAR, rating: 5 },
        ]}
      />

      {/* ===== 10 — SingleTestimonial ===== */}
      <SectionLabel name="SingleTestimonial" index={++idx} />
      <SingleTestimonial
        quote="Vizion nous a permis de structurer notre marketing produit et d'aligner nos équipes. Le ROI a été visible dès le premier trimestre."
        author="Pierre Leroy"
        role="Directeur Commercial"
        company="Industrie Plus"
        avatar={PLACEHOLDER_AVATAR}
        rating={5}
        variant="accent"
      />

      {/* ===== 11 — LogoMarquee ===== */}
      <SectionLabel name="LogoMarquee" index={++idx} />
      <LogoMarquee
        items={[
          "TechCorp", "InnoSoft", "DataFlow",
          "Industrie Plus", "GrowthLab", "MarketPro",
          "SalesForge", "StratVision",
        ]}
      />

      {/* ===== 12 — LogoBanner ===== */}
      <SectionLabel name="LogoBanner" index={++idx} />
      <LogoBanner
        surtitre="Ils nous font confiance"
        logos={[
          { name: "Vizion", src: "/logo-vizion.svg" },
          { name: "Vizion", src: "/logo-vizion.svg" },
          { name: "Vizion", src: "/logo-vizion.svg" },
          { name: "Vizion", src: "/logo-vizion.svg" },
          { name: "Vizion", src: "/logo-vizion.svg" },
          { name: "Vizion", src: "/logo-vizion.svg" },
        ]}
      />

      {/* ===== 13 — TimelineSection ===== */}
      <SectionLabel name="TimelineSection" index={++idx} />
      <TimelineSection
        surtitre="Notre méthode"
        title="Un processus en"
        titleHighlight="4 étapes"
        steps={[
          { title: "Audit & diagnostic", description: "Analyse de votre situation actuelle, de vos forces et de vos opportunités.", icon: Target },
          { title: "Stratégie & roadmap", description: "Définition de la feuille de route marketing alignée sur vos objectifs business.", icon: Lightbulb },
          { title: "Déploiement & exécution", description: "Mise en œuvre des actions prioritaires avec des jalons mesurables.", icon: Rocket },
          { title: "Mesure & optimisation", description: "Suivi des KPIs et ajustements continus pour maximiser les résultats.", icon: BarChart3 },
        ]}
        variant="dark"
      />

      {/* ===== 14 — PricingSection ===== */}
      <SectionLabel name="PricingSection" index={++idx} />
      <PricingSection
        surtitre="Tarifs"
        title="Des formules adaptées à"
        titleHighlight="vos ambitions"
        description="Choisissez l'accompagnement qui correspond à votre stade de développement."
        backgroundImage={PLACEHOLDER_IMG}
        tiers={[
          {
            name: "Starter",
            price: "4 500€",
            priceLabel: "/ mois",
            description: "Pour les entreprises qui démarrent leur structuration marketing.",
            features: ["Audit & positionnement", "Plan marketing 90 jours", "1 réunion mensuelle", "Support email"],
            cta: { text: "Démarrer", href: "/contact" },
          },
          {
            name: "Growth",
            price: "8 500€",
            priceLabel: "/ mois",
            description: "Pour les entreprises en phase d'accélération.",
            features: ["Tout Starter +", "Sales enablement", "Création de contenus", "2 réunions mensuelles", "Automatisations", "Reporting mensuel"],
            cta: { text: "Accélérer", href: "/contact" },
            highlighted: true,
            badge: "Populaire",
          },
          {
            name: "Enterprise",
            price: "Sur mesure",
            description: "Pour les ETI avec des besoins spécifiques.",
            features: ["Tout Growth +", "Directeur marketing dédié", "Formations équipe", "Intégrations CRM", "Accompagnement illimité"],
            cta: { text: "Nous contacter", href: "/contact" },
          },
        ]}
        footnote="Engagement minimum de 3 mois. Tous les prix sont HT."
      />

      {/* ===== 15 — ContactFormSection ===== */}
      <SectionLabel name="ContactFormSection" index={++idx} />
      <ContactFormSection
        surtitre="Contact"
        title="Parlons de votre projet"
        description="Remplissez le formulaire ci-dessous et nous vous recontactons sous 24h."
        fields={[
          { name: "prenom", label: "Prénom", type: "text", placeholder: "Jean", required: true },
          { name: "nom", label: "Nom", type: "text", placeholder: "Dupont", required: true },
          { name: "email", label: "Email", type: "email", placeholder: "jean@entreprise.com", required: true },
          { name: "telephone", label: "Téléphone", type: "tel", placeholder: "06 12 34 56 78" },
          { name: "sujet", label: "Sujet", type: "select", options: ["Positionnement", "Sales enablement", "Site web", "Automatisation", "Autre"], required: true, colSpan: 2 },
          { name: "message", label: "Message", type: "textarea", placeholder: "Décrivez brièvement votre projet...", required: true, colSpan: 2 },
        ]}
        contactInfo={[
          { icon: Mail, label: "Email", value: "contact@by-vizion.com", href: "mailto:contact@by-vizion.com" },
          { icon: Phone, label: "Téléphone", value: "07 50 83 65 43", href: "tel:+33750836543" },
          { icon: MapPin, label: "Adresse", value: "Toulouse, France" },
        ]}
        variant="light"
      />

      {/* ===== 16 — FullWidthImage ===== */}
      <SectionLabel name="FullWidthImage" index={++idx} />
      <FullWidthImage
        image={PLACEHOLDER_IMG}
        imageAlt="Notre bureau"
        surtitre="Nos locaux"
        title="Basés à Toulouse, nous accompagnons des entreprises partout en France"
        description="Un cadre de travail propice à la créativité et à la collaboration."
        cta={{ text: "Nous rendre visite", href: "/contact" }}
        height="lg"
      />

      {/* ===== 17 — ComparisonTable ===== */}
      <SectionLabel name="ComparisonTable" index={++idx} />
      <ComparisonTable
        surtitre="Comparaison"
        title="Vizion vs agence"
        titleHighlight="classique"
        description="Pourquoi les entreprises B2B nous choisissent."
        leftLabel="Agence classique"
        rightLabel="Vizion"
        rows={[
          { feature: "Interlocuteur", left: "Chef de projet junior", right: "Directeur marketing senior" },
          { feature: "Approche stratégique", left: false, right: true },
          { feature: "Sales enablement", left: false, right: true },
          { feature: "Automatisation", left: "partial", right: true },
          { feature: "Formation équipes", left: false, right: true },
          { feature: "Intelligence artificielle", left: "partial", right: true },
          { feature: "Reporting ROI", left: "partial", right: true },
        ]}
        highlightColumn="right"
      />

      {/* ===== 18 — TabbedShowcase ===== */}
      <SectionLabel name="TabbedShowcase" index={++idx} />
      <TabbedShowcase
        surtitre="Intelligence artificielle"
        title="L'IA au service de"
        titleHighlight="votre croissance"
        description="Nous déployons l'IA là où elle apporte une valeur ajoutée mesurable."
        tabs={[
          { id: "lead", number: "01", label: "Lead magnets", title: "Créez des contenus d'acquisition en un temps record", description: "L'IA nous permet de produire des livres blancs, guides et templates en une fraction du temps habituel.", example: "Un livre blanc de 20 pages produit en 48h au lieu de 3 semaines.", metric: "x8", metricLabel: "Plus rapide", image: PLACEHOLDER_IMG },
          { id: "scoring", number: "02", label: "Lead scoring", title: "Priorisez vos comptes à fort potentiel", description: "Tri et enrichissement automatique de vos listes de prospection pour se concentrer sur les meilleurs leads.", metric: "+62%", metricLabel: "Conversion", image: PLACEHOLDER_IMG_2 },
          { id: "perso", number: "03", label: "Personnalisation", title: "Personnalisez vos approches commerciales à l'échelle", description: "Des messages ciblés pour chaque segment, sans sacrifier la pertinence ni la qualité.", metric: "x3", metricLabel: "Taux réponse", image: PLACEHOLDER_IMG },
        ]}
        variant="dark"
      />

      {/* ===== 19 — TabbedFeatures ===== */}
      <SectionLabel name="TabbedFeatures" index={++idx} />
      <TabbedFeatures
        surtitre="Fonctionnalités"
        title="Tout ce dont vous avez"
        titleHighlight="besoin"
        features={[
          { id: "strat", label: "Stratégie", icon: Target, title: "Positionnement & architecture de message", description: "Nous définissons un positionnement clair et différenciant pour votre offre.", bullets: ["Ateliers de positionnement", "Matrice de messages", "Analyse concurrentielle"], image: PLACEHOLDER_IMG },
          { id: "digital", label: "Digital", icon: Globe, title: "Sites et tunnels de conversion", description: "Des interfaces pensées pour le B2B et les parcours de décision longs.", bullets: ["Landing pages optimisées", "Sites institutionnels", "Tunnels d'acquisition"], image: PLACEHOLDER_IMG_2 },
          { id: "sales", label: "Ventes", icon: Briefcase, title: "Sales enablement complet", description: "Équipez vos commerciaux pour chaque étape du cycle de vente.", bullets: ["Présentations sur mesure", "Battle cards", "Études de cas"], image: PLACEHOLDER_IMG },
        ]}
      />

      {/* ===== 20 — CaseStudiesCarousel ===== */}
      <SectionLabel name="CaseStudiesCarousel" index={++idx} />
      <CaseStudiesCarousel
        surtitre="Cas clients & résultats"
        title="Des résultats concrets, mesurables"
        cases={[
          { id: "1", logo: "TechCorp", category: "SaaS B2B", metric: "+180%", metricLabel: "Pipeline", title: "Refonte du positionnement et lancement produit", description: "TechCorp avait besoin de clarifier son message pour un marché saturé.", slug: "techcorp", image: PLACEHOLDER_IMG },
          { id: "2", logo: "InnoSoft", category: "Éditeur logiciel", metric: "x3", metricLabel: "Leads qualifiés", title: "Sales enablement et automatisation CRM", description: "InnoSoft souhaitait structurer son approche commerciale.", slug: "innosoft", image: PLACEHOLDER_IMG_2 },
          { id: "3", logo: "DataFlow", category: "Data & Analytics", metric: "+45%", metricLabel: "Conversion", title: "Tunnel d'acquisition et campagnes ciblées", description: "DataFlow cherchait à industrialiser sa génération de leads.", slug: "dataflow", image: PLACEHOLDER_IMG },
        ]}
      />

      {/* ===== 21 — ImageSlider ===== */}
      <SectionLabel name="ImageSlider" index={++idx} />
      <ImageSlider
        surtitre="Portfolio"
        title="Nos réalisations"
        slides={[
          { image: PLACEHOLDER_IMG, caption: "Refonte site corporate — TechCorp" },
          { image: PLACEHOLDER_IMG_2, caption: "Landing page produit — InnoSoft" },
          { image: PLACEHOLDER_IMG, caption: "Campagne acquisition — DataFlow" },
        ]}
        showThumbnails
        showCounter
      />

      {/* ===== 22 — BeforeAfter ===== */}
      <SectionLabel name="BeforeAfter" index={++idx} />
      <BeforeAfter
        surtitre="Transformation"
        title="Avant / Après notre intervention"
        description="Glissez le curseur pour voir la différence."
        beforeImage={PLACEHOLDER_IMG_2}
        afterImage={PLACEHOLDER_IMG}
        beforeLabel="Avant"
        afterLabel="Après"
      />

      {/* ===== 23 — AccordionList ===== */}
      <SectionLabel name="AccordionList" index={++idx} />
      <AccordionList
        surtitre="Services détaillés"
        title="Ce que comprend notre"
        titleHighlight="accompagnement"
        items={[
          { id: "a1", icon: Target, label: "Phase 1", title: "Audit & diagnostic stratégique", content: "Nous analysons en profondeur votre marché, votre positionnement actuel et vos performances pour identifier les leviers de croissance.", bullets: ["Audit de l'existant", "Analyse concurrentielle", "Interviews stakeholders"] },
          { id: "a2", icon: Lightbulb, label: "Phase 2", title: "Stratégie & architecture de message", content: "Nous définissons un positionnement différenciant et construisons une architecture de message cohérente.", bullets: ["Proposition de valeur", "Matrice de messages", "Pitch deck"] },
          { id: "a3", icon: Rocket, label: "Phase 3", title: "Déploiement & création d'actifs", content: "Nous produisons les supports nécessaires au déploiement de la stratégie sur le terrain.", bullets: ["Site web", "Contenus marketing", "Supports commerciaux"] },
          { id: "a4", icon: BarChart3, label: "Phase 4", title: "Mesure & optimisation continue", content: "Nous suivons les KPIs définis et ajustons la stratégie en continu pour maximiser les résultats." },
        ]}
        defaultOpen={[0]}
        variant="dark"
      />

      {/* ===== 24 — ExpandableCards ===== */}
      <SectionLabel name="ExpandableCards" index={++idx} />
      <ExpandableCards
        surtitre="Méthodologie"
        title="Nos piliers"
        titleHighlight="d'intervention"
        cards={[
          { id: "e1", number: "01", title: "Marketing produit", subtitle: "Fondation", content: "Positionnement, messaging et go-to-market. Nous transformons votre offre en proposition de valeur claire.", bullets: ["Ateliers stratégiques", "Architecture de message", "Plan de lancement"], image: PLACEHOLDER_IMG },
          { id: "e2", number: "02", title: "Sales enablement", subtitle: "Conversion", content: "Outils et contenus qui réduisent les cycles de vente et augmentent les taux de conversion.", bullets: ["Présentations commerciales", "Battle cards", "Études de cas"], image: PLACEHOLDER_IMG_2 },
          { id: "e3", number: "03", title: "Automatisation", subtitle: "Efficience", content: "Workflows et intégrations pour industrialiser vos processus marketing et commerciaux.", bullets: ["CRM setup", "Scoring automatique", "Séquences email"], image: PLACEHOLDER_IMG },
          { id: "e4", number: "04", title: "Formation", subtitle: "Autonomie", content: "Transfert de compétences pour rendre vos équipes autonomes sur le long terme.", bullets: ["Workshops", "Documentation", "Coaching individuel"], image: PLACEHOLDER_IMG_2 },
        ]}
        columns={2}
      />

      {/* ===== 25 — HorizontalRoadmap ===== */}
      <SectionLabel name="HorizontalRoadmap" index={++idx} />
      <HorizontalRoadmap
        surtitre="Roadmap"
        title="Votre parcours avec"
        titleHighlight="Vizion"
        milestones={[
          { id: "m1", phase: "Semaine 1-2", title: "Kick-off & audit", description: "Rencontre, analyse de l'existant et définition des objectifs.", status: "completed" },
          { id: "m2", phase: "Semaine 3-4", title: "Stratégie", description: "Ateliers de positionnement et construction de la feuille de route.", status: "completed" },
          { id: "m3", phase: "Mois 2-3", title: "Déploiement", description: "Production des premiers livrables et mise en place des automatisations.", status: "in-progress" },
          { id: "m4", phase: "Mois 4+", title: "Optimisation", description: "Itérations basées sur les données et scaling des actions performantes.", status: "upcoming" },
        ]}
        variant="dark"
      />

      {/* ===== 26 — ProcessSteps ===== */}
      <SectionLabel name="ProcessSteps" index={++idx} />
      <ProcessSteps
        surtitre="Processus"
        title="Comment nous"
        titleHighlight="travaillons"
        description="Une méthode structurée pour des résultats prévisibles."
        steps={[
          { id: "s1", icon: Target, title: "Diagnostic", description: "Analyse approfondie de votre marché et de votre positionnement.", bullets: ["Audit marketing", "Analyse concurrentielle", "Benchmark sectoriel"], image: PLACEHOLDER_IMG },
          { id: "s2", icon: Lightbulb, title: "Stratégie", description: "Construction d'une feuille de route claire et actionnable.", bullets: ["Positionnement", "Architecture de message", "Plan d'action 90 jours"], image: PLACEHOLDER_IMG_2 },
          { id: "s3", icon: Layers, title: "Exécution", description: "Production et déploiement des actifs marketing et commerciaux.", bullets: ["Supports de vente", "Site web", "Campagnes"], image: PLACEHOLDER_IMG },
          { id: "s4", icon: BarChart3, title: "Optimisation", description: "Mesure des résultats et amélioration continue.", bullets: ["KPIs tracking", "A/B testing", "Reporting mensuel"], image: PLACEHOLDER_IMG_2 },
        ]}
        layout="zigzag"
      />

      {/* ===== 27 — StickyScrollReveal ===== */}
      <SectionLabel name="StickyScrollReveal" index={++idx} />
      <StickyScrollReveal
        surtitre="En détail"
        title="Nos domaines"
        titleHighlight="d'expertise"
        items={[
          { id: "sr1", label: "Expertise 1", title: "Marketing produit", description: "Définition du positionnement et de l'architecture de message pour transformer votre offre en référence marché.", image: PLACEHOLDER_IMG },
          { id: "sr2", label: "Expertise 2", title: "Sales enablement", description: "Création d'outils et de contenus adaptés à chaque phase du cycle de vente pour équiper vos commerciaux.", image: PLACEHOLDER_IMG_2 },
          { id: "sr3", label: "Expertise 3", title: "Automatisation & CRM", description: "Structuration des systèmes d'information marketing et commerciaux pour soutenir la croissance.", image: PLACEHOLDER_IMG },
        ]}
        variant="dark"
      />

      {/* ===== 28 — NumberCounter ===== */}
      <SectionLabel name="NumberCounter" index={++idx} />
      <NumberCounter
        surtitre="En chiffres"
        title="Les résultats"
        titleHighlight="parlent"
        counters={[
          { value: 70, prefix: "+", label: "Clients accompagnés", description: "Depuis 2021" },
          { value: 98, suffix: "%", label: "Taux de satisfaction", description: "Enquête annuelle" },
          { value: 3, suffix: "x", label: "ROI moyen constaté", description: "Sur 12 mois" },
          { value: 45, suffix: "%", prefix: "+", label: "Conversion moyenne", description: "Pipeline qualifié" },
        ]}
        variant="dark"
      />

      {/* ===== 29 — HoverRevealGrid ===== */}
      <SectionLabel name="HoverRevealGrid" index={++idx} />
      <HoverRevealGrid
        surtitre="Services"
        title="Survolez pour"
        titleHighlight="découvrir"
        description="Chaque service est conçu pour répondre à un besoin précis de votre croissance."
        items={[
          { id: "h1", icon: Target, title: "Positionnement", description: "Clarifiez votre proposition de valeur et démarquez-vous de la concurrence.", image: PLACEHOLDER_IMG },
          { id: "h2", icon: Code, title: "Site web B2B", description: "Des interfaces performantes pensées pour la conversion B2B.", image: PLACEHOLDER_IMG_2 },
          { id: "h3", icon: Briefcase, title: "Sales enablement", description: "Équipez vos commerciaux avec les bons outils au bon moment.", image: PLACEHOLDER_IMG },
          { id: "h4", icon: Rocket, title: "Acquisition", description: "Générez un flux régulier d'opportunités commerciales qualifiées.", image: PLACEHOLDER_IMG_2 },
          { id: "h5", icon: Settings, title: "Automatisation", description: "Industrialisez vos processus marketing et commerciaux.", image: PLACEHOLDER_IMG },
          { id: "h6", icon: Award, title: "Formation IA", description: "Intégrez l'intelligence artificielle dans vos méthodologies.", image: PLACEHOLDER_IMG_2 },
        ]}
        columns={3}
        variant="dark"
      />

      {/* ===== END ===== */}
      <div className="bg-[#0c0c0a] text-center py-16 px-4">
        <p className="text-white/40 font-[var(--font-body)] text-sm">
          Fin de la preview — 29 sections
        </p>
      </div>
    </div>
  );
}
