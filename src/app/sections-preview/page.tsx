"use client";

import React from "react";
import Link from "next/link";
import {
  Target,
  Zap,
  Users,
  TrendingUp,
  Shield,
  Clock,
  CheckCircle,
  MessageSquare,
  BarChart3,
  Lightbulb,
  Rocket,
  Award,
  Brain,
  Megaphone,
  PieChart,
  Settings,
  FileText,
  Search,
  LineChart,
  Layers,
  Globe,
  Mail,
  Phone,
  MapPin,
  Calendar,
  Briefcase,
  GraduationCap,
  HeartHandshake,
  Sparkles,
  Gauge,
  ArrowRight,
} from "lucide-react";

import {
  PageHero,
  TwoColSection,
  StatsBar,
  FeatureCards,
  IconGrid,
  FAQAccordion,
  CTASection,
  TestimonialsCarousel,
  TimelineSection,
  AccordionList,
  NumberCounter,
  ProcessSteps,
  LogoBanner,
  SingleTestimonial,
  PricingSection,
  ComparisonTable,
  FullWidthImage,
  BeforeAfter,
  CaseStudiesCarousel,
  ExpandableCards,
  HorizontalRoadmap,
  HoverRevealGrid,
  ImageSlider,
  StickyScrollReveal,
  TabbedShowcase,
  TabbedFeatures,
  TeamCarousel,
} from "@/components/sections";

// ============================================================================
// SECTION DIVIDER COMPONENT
// ============================================================================
function SectionDivider({ title, id }: { title: string; id: string }) {
  return (
    <div id={id} className="bg-[#1a1a18] border-y border-[#D4FD00]/20 py-6 px-4 sm:px-6 md:px-12">
      <div className="max-w-[82.5rem] mx-auto flex items-center justify-between">
        <h2 className="text-xl sm:text-2xl font-semibold text-white font-instrument">
          {title}
        </h2>
        <span className="text-sm text-zinc-500 font-mono">&lt;{id} /&gt;</span>
      </div>
    </div>
  );
}

// ============================================================================
// NAVIGATION COMPONENT
// ============================================================================
function SectionsNav() {
  const sections = [
    // Existing sections
    { id: "PageHero", label: "Page Hero" },
    { id: "StatsBar", label: "Stats Bar" },
    { id: "FeatureCards", label: "Feature Cards" },
    { id: "TwoColSection", label: "Two Col Section" },
    { id: "IconGrid", label: "Icon Grid" },
    { id: "TimelineSection", label: "Timeline" },
    { id: "ProcessSteps", label: "Process Steps" },
    { id: "AccordionList", label: "Accordion List" },
    { id: "NumberCounter", label: "Number Counter" },
    { id: "TestimonialsCarousel", label: "Testimonials" },
    { id: "SingleTestimonial", label: "Single Testimonial" },
    { id: "FAQAccordion", label: "FAQ Accordion" },
    { id: "PricingSection", label: "Pricing" },
    { id: "ComparisonTable", label: "Comparison Table" },
    { id: "LogoBanner", label: "Logo Banner" },
    { id: "FullWidthImage", label: "Full Width Image" },
    { id: "CTASection", label: "CTA Section" },
    // New sections
    { id: "BeforeAfter", label: "Before/After" },
    { id: "CaseStudiesCarousel", label: "Case Studies" },
    { id: "ExpandableCards", label: "Expandable Cards" },
    { id: "HorizontalRoadmap", label: "Roadmap" },
    { id: "HoverRevealGrid", label: "Hover Reveal" },
    { id: "ImageSlider", label: "Image Slider" },
    { id: "StickyScrollReveal", label: "Sticky Scroll" },
    { id: "TabbedShowcase", label: "Tabbed Showcase" },
    { id: "TabbedFeatures", label: "Tabbed Features" },
    { id: "TeamCarousel", label: "Team Carousel" },
    // SEO sections
    { id: "SEO-Marketing-Produit", label: "Marketing Produit" },
    { id: "SEO-Sales-Enablement", label: "Sales Enablement" },
    { id: "SEO-IA-Marketing", label: "IA & Marketing" },
    { id: "SEO-PME-ETI", label: "PME & ETI" },
    { id: "SEO-Toulouse", label: "Toulouse" },
    { id: "SEO-ROI", label: "ROI Marketing" },
    { id: "SEO-Transformation", label: "Transformation" },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-[#0c0c0a]/95 backdrop-blur-sm border-b border-zinc-800 py-3 px-4 sm:px-6 md:px-12">
      <div className="max-w-[82.5rem] mx-auto">
        <div className="flex items-center gap-4 mb-3">
          <Link href="/" className="text-[#D4FD00] hover:underline text-sm">
            ← Retour au site
          </Link>
          <h1 className="text-white font-semibold">Sections Preview</h1>
          <span className="text-zinc-500 text-sm">({sections.length} sections)</span>
        </div>
        <div className="flex flex-wrap gap-2 max-h-[120px] overflow-y-auto">
          {sections.map((section) => (
            <a
              key={section.id}
              href={`#${section.id}`}
              className="text-xs px-2.5 py-1.5 rounded-full bg-zinc-800 text-zinc-300 hover:bg-[#D4FD00] hover:text-black transition-colors"
            >
              {section.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}

// ============================================================================
// SAMPLE DATA - EXISTING
// ============================================================================

const sampleStats = [
  { value: "+70", label: "Clients accompagnés" },
  { value: "98%", label: "Taux de satisfaction" },
  { value: "4 ans", label: "D'expérience" },
  { value: "x3", label: "ROI moyen" },
];

const sampleFeatures = [
  {
    icon: Target,
    title: "Stratégie marketing",
    description: "Définition du positionnement et de l'architecture de message pour une proposition de valeur différenciante.",
    tags: ["Positionnement", "Messaging"],
  },
  {
    icon: Zap,
    title: "Sales enablement",
    description: "Outils et contenus pour équiper vos commerciaux et réduire les cycles de vente.",
    tags: ["Conversion", "Ventes"],
  },
  {
    icon: TrendingUp,
    title: "Automatisation",
    description: "Workflows et intégrations pour industrialiser vos processus marketing et commerciaux.",
    tags: ["CRM", "Workflows"],
  },
];

const sampleIconGridItems = [
  { icon: Shield, title: "Orientation solutions", description: "Nous identifions des réponses adaptées, même face aux problématiques les plus complexes." },
  { icon: CheckCircle, title: "Exigence", description: "Chaque projet bénéficie de notre engagement total, sans compromis sur la qualité." },
  { icon: MessageSquare, title: "Transparence", description: "Nous communiquons avec réalisme sur les résultats attendus." },
  { icon: Clock, title: "Résilience", description: "Nous maintenons notre cap face aux obstacles et capitalisons sur chaque expérience." },
];

const sampleFAQs = [
  { question: "Comment se déroule un accompagnement type ?", answer: "Chaque mission débute par un diagnostic approfondi de votre situation. Nous définissons ensemble les objectifs, la méthodologie et les livrables attendus." },
  { question: "Quels sont vos délais d'intervention ?", answer: "Nous pouvons généralement démarrer sous 2 à 3 semaines. La durée dépend de la complexité du projet." },
  { question: "Travaillez-vous avec des équipes internes ?", answer: "Absolument. Nous travaillons main dans la main avec vos équipes marketing et commerciales pour maximiser l'impact." },
];

const sampleTestimonials = [
  { id: "1", quote: "Vizion a transformé notre approche marketing. Les résultats ont dépassé nos attentes.", author: "Marie Dupont", role: "Directrice Marketing", company: "TechCorp", rating: 5 },
  { id: "2", quote: "Une équipe à l'écoute qui comprend vraiment les enjeux B2B.", author: "Pierre Martin", role: "CEO", company: "IndustrieX", rating: 5 },
  { id: "3", quote: "Professionnalisme et expertise au rendez-vous. Je recommande vivement.", author: "Sophie Bernard", role: "CMO", company: "SaaS Pro", rating: 5 },
];

const sampleTimelineSteps = [
  { number: "01", title: "Diagnostic", description: "Analyse approfondie de votre situation actuelle et identification des opportunités." },
  { number: "02", title: "Stratégie", description: "Définition de la feuille de route et des objectifs mesurables." },
  { number: "03", title: "Exécution", description: "Mise en œuvre des actions avec un suivi régulier des performances." },
  { number: "04", title: "Optimisation", description: "Itérations continues basées sur les données et retours terrain." },
];

const sampleAccordionItems = [
  { id: "1", title: "Marketing produit", content: "Positionnement, architecture de message, stratégie de mise en marché.", bullets: ["Ateliers stratégiques", "Plans de lancement", "Messaging framework"] },
  { id: "2", title: "Sales enablement", content: "Renforcement de l'efficacité commerciale par des outils adaptés.", bullets: ["Présentations commerciales", "Supports d'aide à la vente", "Stratégies LinkedIn"] },
  { id: "3", title: "Automatisation", content: "Structuration des systèmes d'information marketing et commerciaux.", bullets: ["Déploiement CRM", "Workflows automatisés", "Intégrations sur mesure"] },
];

const sampleCounters = [
  { value: 70, prefix: "+", suffix: "", label: "Clients", description: "Entreprises accompagnées" },
  { value: 98, suffix: "%", label: "Satisfaction", description: "Taux de recommandation" },
  { value: 3, prefix: "x", label: "ROI", description: "Retour sur investissement moyen" },
  { value: 4, suffix: " ans", label: "Expérience", description: "D'expertise B2B" },
];

const sampleProcessSteps = [
  { id: "1", number: "01", title: "Découverte", description: "Nous analysons votre marché, vos concurrents et vos objectifs business.", bullets: ["Audit de l'existant", "Benchmark concurrentiel", "Définition des KPIs"] },
  { id: "2", number: "02", title: "Stratégie", description: "Nous construisons une feuille de route alignée sur vos ambitions.", bullets: ["Positionnement", "Messaging", "Plan d'action"] },
  { id: "3", number: "03", title: "Déploiement", description: "Nous exécutons les actions et mesurons les résultats en continu.", bullets: ["Production des livrables", "Formation des équipes", "Suivi des performances"] },
];

const sampleLogos = [
  { name: "Client 1", src: "/images/logos/logo-placeholder.svg" },
  { name: "Client 2", src: "/images/logos/logo-placeholder.svg" },
  { name: "Client 3", src: "/images/logos/logo-placeholder.svg" },
  { name: "Client 4", src: "/images/logos/logo-placeholder.svg" },
];

const samplePricingTiers = [
  { name: "Starter", price: "4 500€", priceLabel: "/mois", description: "Pour les entreprises qui débutent leur structuration marketing.", features: ["Audit stratégique", "Positionnement", "1 livrable/mois"], cta: { text: "Commencer", href: "/contact" } },
  { name: "Growth", price: "8 500€", priceLabel: "/mois", description: "Pour les entreprises en phase d'accélération.", features: ["Tout Starter +", "Sales enablement", "3 livrables/mois", "Accompagnement dédié"], cta: { text: "Choisir Growth", href: "/contact" }, highlighted: true },
  { name: "Enterprise", price: "Sur devis", priceLabel: "", description: "Pour les ETI avec des besoins complexes.", features: ["Tout Growth +", "Équipe dédiée", "Livrables illimités", "Reporting avancé"], cta: { text: "Nous contacter", href: "/contact" } },
];

const sampleComparisonRows = [
  { feature: "Audit stratégique", left: true, right: true },
  { feature: "Positionnement", left: true, right: true },
  { feature: "Sales enablement", left: false, right: true },
  { feature: "Accompagnement dédié", left: false, right: true },
  { feature: "Livrables illimités", left: false, right: true },
];

// ============================================================================
// NEW SAMPLE DATA - FOR NEW COMPONENTS
// ============================================================================

// Case Studies Carousel
const sampleCaseStudies = [
  {
    id: "1",
    logo: "/images/logos/logo-placeholder.svg",
    category: "SaaS B2B",
    metric: "+340%",
    metricLabel: "Leads qualifiés",
    title: "Comment DataFlow a multiplié par 4 ses opportunités commerciales",
    description: "Repositionnement stratégique et mise en place d'un système d'acquisition multicanal pour cet éditeur de logiciels industriels.",
    slug: "dataflow-saas",
    image: "/images/placeholder.jpg",
  },
  {
    id: "2",
    logo: "/images/logos/logo-placeholder.svg",
    category: "Industrie",
    metric: "-45%",
    metricLabel: "Cycle de vente",
    title: "Precision Industries : du positionnement à la conquête commerciale",
    description: "Refonte complète du discours de marque et création d'outils de sales enablement pour ce fabricant d'équipements de précision.",
    slug: "precision-industries",
    image: "/images/placeholder.jpg",
  },
  {
    id: "3",
    logo: "/images/logos/logo-placeholder.svg",
    category: "Services B2B",
    metric: "+180%",
    metricLabel: "Trafic qualifié",
    title: "Comment Expertis Conseil a dominé son marché local",
    description: "Stratégie de contenu et référencement local pour ce cabinet de conseil en transformation digitale basé à Toulouse.",
    slug: "expertis-conseil",
    image: "/images/placeholder.jpg",
  },
];

// Expandable Cards
const sampleExpandableCards = [
  {
    id: "1",
    icon: Target,
    number: "01",
    title: "Positionnement stratégique",
    subtitle: "Fondation de votre croissance",
    content: "Définissez un positionnement qui vous différencie durablement de la concurrence. Nous analysons votre marché, vos forces et les attentes de vos clients pour construire une proposition de valeur unique.",
    bullets: ["Audit de marché approfondi", "Analyse concurrentielle", "Définition de la proposition de valeur", "Architecture de message"],
    image: "/images/placeholder.jpg",
  },
  {
    id: "2",
    icon: Megaphone,
    number: "02",
    title: "Stratégie de contenu B2B",
    subtitle: "Attirez les décideurs",
    content: "Créez du contenu qui parle aux décideurs et influence leur parcours d'achat. Du livre blanc au cas client, chaque contenu sert un objectif commercial précis.",
    bullets: ["Calendrier éditorial", "Livres blancs & guides", "Cas clients", "Articles de fond"],
    image: "/images/placeholder.jpg",
  },
  {
    id: "3",
    icon: LineChart,
    number: "03",
    title: "Acquisition multicanale",
    subtitle: "Générez des opportunités",
    content: "Mettez en place un système d'acquisition qui génère un flux régulier d'opportunités qualifiées. SEO, LinkedIn, email marketing : chaque canal est optimisé pour la conversion.",
    bullets: ["Référencement naturel", "LinkedIn Ads & organique", "Email marketing", "Lead magnets"],
    image: "/images/placeholder.jpg",
  },
  {
    id: "4",
    icon: Settings,
    number: "04",
    title: "Automatisation marketing",
    subtitle: "Industrialisez vos processus",
    content: "Automatisez les tâches répétitives pour vous concentrer sur ce qui compte : la relation client. CRM, workflows, scoring : nous structurons votre stack marketing.",
    bullets: ["Déploiement CRM", "Workflows automatisés", "Lead scoring", "Intégrations"],
    image: "/images/placeholder.jpg",
  },
];

// Horizontal Roadmap
const sampleRoadmapMilestones = [
  {
    id: "1",
    icon: Search,
    phase: "Semaine 1-2",
    title: "Audit & Diagnostic",
    description: "Analyse approfondie de votre écosystème marketing et commercial actuel.",
    status: "completed" as const,
  },
  {
    id: "2",
    icon: Lightbulb,
    phase: "Semaine 3-4",
    title: "Stratégie & Roadmap",
    description: "Définition de la stratégie et du plan d'action détaillé.",
    status: "completed" as const,
  },
  {
    id: "3",
    icon: Rocket,
    phase: "Mois 2-3",
    title: "Déploiement",
    description: "Mise en œuvre des premiers livrables et quick wins.",
    status: "in-progress" as const,
  },
  {
    id: "4",
    icon: TrendingUp,
    phase: "Mois 4+",
    title: "Optimisation",
    description: "Mesure des résultats et optimisation continue.",
    status: "upcoming" as const,
  },
];

// Hover Reveal Grid
const sampleHoverRevealItems = [
  {
    id: "1",
    icon: Brain,
    title: "Intelligence artificielle",
    description: "Nous intégrons l'IA dans vos processus marketing : génération de contenu, enrichissement de données, personnalisation à l'échelle.",
    image: "/images/placeholder.jpg",
    imageAlt: "IA appliquée au marketing",
  },
  {
    id: "2",
    icon: PieChart,
    title: "Data & Analytics",
    description: "Tableaux de bord, attribution, analyse des performances : prenez des décisions basées sur les données.",
    image: "/images/placeholder.jpg",
    imageAlt: "Analytics marketing",
  },
  {
    id: "3",
    icon: Globe,
    title: "Présence digitale",
    description: "Site web, landing pages, référencement : nous construisons votre vitrine digitale pour convertir.",
    image: "/images/placeholder.jpg",
    imageAlt: "Présence digitale B2B",
  },
  {
    id: "4",
    icon: Users,
    title: "Personal branding",
    description: "Développez la visibilité de vos dirigeants sur LinkedIn pour amplifier votre portée.",
    image: "/images/placeholder.jpg",
    imageAlt: "Personal branding LinkedIn",
  },
];

// Image Slider
const sampleImageSlides = [
  { image: "/images/placeholder.jpg", alt: "Atelier stratégique", caption: "Atelier de positionnement avec l'équipe dirigeante" },
  { image: "/images/placeholder.jpg", alt: "Dashboard analytics", caption: "Tableau de bord de suivi des performances" },
  { image: "/images/placeholder.jpg", alt: "Présentation commerciale", caption: "Kit de sales enablement livré au client" },
  { image: "/images/placeholder.jpg", alt: "Équipe Vizion", caption: "L'équipe Vizion en session de travail" },
];

// Sticky Scroll Reveal
const sampleStickyRevealItems = [
  {
    id: "1",
    icon: Target,
    label: "Étape 1",
    title: "Comprendre votre marché",
    description: "Nous commençons par une immersion complète dans votre univers : marché, concurrents, clients, enjeux. Cette phase de découverte est essentielle pour construire une stratégie pertinente.",
    image: "/images/placeholder.jpg",
    imageAlt: "Analyse de marché",
  },
  {
    id: "2",
    icon: Lightbulb,
    label: "Étape 2",
    title: "Définir votre positionnement",
    description: "Sur la base de notre analyse, nous définissons un positionnement différenciant. Pas de promesses vagues : une proposition de valeur claire, étayée par des preuves concrètes.",
    image: "/images/placeholder.jpg",
    imageAlt: "Positionnement stratégique",
  },
  {
    id: "3",
    icon: FileText,
    label: "Étape 3",
    title: "Créer vos assets marketing",
    description: "Site web, présentations commerciales, contenus : nous produisons les assets qui porteront votre message sur le terrain. Chaque livrable est pensé pour convertir.",
    image: "/images/placeholder.jpg",
    imageAlt: "Production d'assets",
  },
  {
    id: "4",
    icon: TrendingUp,
    label: "Étape 4",
    title: "Mesurer et optimiser",
    description: "Nous suivons les indicateurs clés et ajustons la stratégie en fonction des résultats. L'objectif : une amélioration continue de vos performances marketing et commerciales.",
    image: "/images/placeholder.jpg",
    imageAlt: "Optimisation des performances",
  },
];

// Tabbed Showcase
const sampleTabbedShowcaseTabs = [
  {
    id: "positioning",
    number: "01",
    label: "Positionnement",
    icon: Target,
    title: "Définissez un positionnement qui vous différencie",
    description: "Nous vous aidons à identifier ce qui vous rend unique et à le traduire en un message clair pour vos prospects. Un bon positionnement, c'est moins de friction commerciale et des cycles de vente plus courts.",
    example: "\"Le CRM qui comprend les cycles de vente longs\" plutôt que \"Un CRM moderne et intuitif\"",
    metric: "-40%",
    metricLabel: "de cycle de vente en moyenne",
    image: "/images/placeholder.jpg",
  },
  {
    id: "messaging",
    number: "02",
    label: "Messaging",
    icon: MessageSquare,
    title: "Construisez une architecture de message cohérente",
    description: "Du elevator pitch au cas client détaillé, nous structurons votre discours pour qu'il résonne à chaque étape du parcours d'achat. Vos commerciaux parlent d'une seule voix.",
    example: "Proposition de valeur, messages clés par persona, arguments par objection",
    metric: "+65%",
    metricLabel: "d'efficacité commerciale",
    image: "/images/placeholder.jpg",
  },
  {
    id: "enablement",
    number: "03",
    label: "Sales Enablement",
    icon: Briefcase,
    title: "Équipez vos commerciaux pour gagner",
    description: "Présentations, battle cards, ROI calculators : nous créons les outils qui permettent à vos commerciaux de convaincre. Chaque support est conçu pour faciliter la décision.",
    example: "Deck commercial, one-pagers, calculateur de ROI interactif",
    metric: "x2",
    metricLabel: "de deals conclus",
    image: "/images/placeholder.jpg",
  },
];

// Tabbed Features
const sampleTabbedFeatures = [
  {
    id: "pme",
    label: "PME",
    icon: Briefcase,
    title: "Accompagnement marketing pour PME",
    description: "Les PME de 10 à 50 collaborateurs ont besoin d'un marketing structuré mais agile. Nous apportons l'expertise d'une direction marketing externalisée, sans les coûts fixes.",
    bullets: ["Positionnement et messaging", "Site web et présence digitale", "Premiers workflows d'acquisition", "Formation des équipes"],
    image: "/images/placeholder.jpg",
  },
  {
    id: "eti",
    label: "ETI",
    icon: TrendingUp,
    title: "Transformation marketing des ETI",
    description: "Les ETI de 50 à 250 collaborateurs font face à des enjeux de structuration et de scalabilité. Nous les aidons à professionnaliser leur marketing et à aligner leurs équipes.",
    bullets: ["Refonte du positionnement", "Sales enablement complet", "Automatisation des processus", "Accompagnement du changement"],
    image: "/images/placeholder.jpg",
  },
  {
    id: "scaleup",
    label: "Scale-ups",
    icon: Rocket,
    title: "Accélération marketing des scale-ups",
    description: "Les scale-ups en hypercroissance ont besoin d'un marketing qui suit leur rythme. Nous les aidons à structurer sans freiner, à industrialiser sans déshumaniser.",
    bullets: ["Stratégie de growth marketing", "Stack marketing optimisée", "Content factory", "International readiness"],
    image: "/images/placeholder.jpg",
  },
];

// Team Carousel
const sampleTeamMembers = [
  {
    name: "Lucas Gonzalez",
    role: "Co-fondateur",
    specialty: "Stratégie & Positionnement",
    img: "/images/placeholder.jpg",
    skills: ["Marketing produit", "Messaging", "LinkedIn Top Voice"],
  },
  {
    name: "Hugo Schuppe",
    role: "Co-fondateur",
    specialty: "Technique & Automatisation",
    img: "/images/placeholder.jpg",
    skills: ["CRM & Intégrations", "Automatisation", "Data"],
  },
  {
    name: "Marie Laurent",
    role: "Directrice de projets",
    specialty: "Gestion & Coordination",
    img: "/images/placeholder.jpg",
    skills: ["Project management", "Client success", "Formation"],
  },
  {
    name: "Thomas Dubois",
    role: "Consultant senior",
    specialty: "Sales Enablement",
    img: "/images/placeholder.jpg",
    skills: ["Présentations", "Content", "Copywriting"],
  },
];

// ============================================================================
// SEO-OPTIMIZED DATA
// ============================================================================

// Marketing Produit B2B
const marketingProduitFeatures = [
  {
    icon: Target,
    title: "Positionnement différenciant",
    description: "Identifiez ce qui vous rend unique sur votre marché. Nous analysons votre environnement concurrentiel pour définir un positionnement qui résonne avec vos prospects.",
    tags: ["Différenciation", "Analyse"],
  },
  {
    icon: MessageSquare,
    title: "Architecture de message",
    description: "Structurez votre discours commercial de l'elevator pitch au cas client. Une cohérence qui renforce votre crédibilité à chaque point de contact.",
    tags: ["Messaging", "Cohérence"],
  },
  {
    icon: Rocket,
    title: "Stratégie de lancement",
    description: "Planifiez le lancement de vos nouveaux produits ou services. Timing, canaux, messages : rien n'est laissé au hasard.",
    tags: ["Go-to-market", "Lancement"],
  },
];

// Sales Enablement
const salesEnablementAccordion = [
  {
    id: "presentations",
    icon: FileText,
    title: "Présentations commerciales",
    content: "Des decks qui vendent. Nous concevons des présentations structurées pour guider vos commerciaux dans leur argumentation et convaincre les décideurs.",
    bullets: ["Structure narrative éprouvée", "Design professionnel", "Slides modulaires", "Formation à l'utilisation"],
  },
  {
    id: "battlecards",
    icon: Shield,
    title: "Battle cards & objections",
    content: "Anticipez les objections et équipez vos équipes pour y répondre. Chaque battle card traite un concurrent ou une objection fréquente.",
    bullets: ["Matrice concurrentielle", "Réponses aux objections", "Arguments différenciants", "Mise à jour régulière"],
  },
  {
    id: "roi-tools",
    icon: BarChart3,
    title: "Outils de calcul de ROI",
    content: "Quantifiez la valeur de votre offre. Nos calculateurs interactifs permettent à vos prospects de projeter le retour sur investissement.",
    bullets: ["Calculateurs personnalisés", "Données sectorielles", "Export PDF", "Intégration CRM"],
  },
  {
    id: "cases",
    icon: Award,
    title: "Cas clients & témoignages",
    content: "Transformez vos succès en preuves commerciales. Nous rédigeons des cas clients structurés qui démontrent votre valeur ajoutée.",
    bullets: ["Interviews clients", "Métriques d'impact", "Format storytelling", "Versions courtes et longues"],
  },
];

// IA & Marketing
const iaMarketingTimeline = [
  { number: "01", title: "Génération de contenu", description: "Produisez du contenu de qualité plus rapidement. L'IA assiste la création sans remplacer l'expertise humaine." },
  { number: "02", title: "Enrichissement de données", description: "Qualifiez et enrichissez vos bases de prospection. Identifiez les comptes à fort potentiel." },
  { number: "03", title: "Personnalisation à l'échelle", description: "Personnalisez vos approches commerciales sans sacrifier le volume. Chaque message reste pertinent." },
  { number: "04", title: "Analyse prédictive", description: "Anticipez les comportements d'achat. Priorisez les actions à plus fort impact." },
];

// Transformation digitale
const transformationFAQs = [
  {
    question: "Combien de temps dure une transformation marketing ?",
    answer: "Une transformation marketing complète prend généralement 6 à 12 mois. Nous travaillons par phases pour délivrer des quick wins dès les premières semaines tout en construisant les fondations long terme.",
  },
  {
    question: "Comment impliquer les équipes internes dans la transformation ?",
    answer: "La réussite d'une transformation dépend de l'adhésion des équipes. Nous intégrons formation, documentation et accompagnement du changement dans chaque mission. L'objectif : rendre vos équipes autonomes.",
  },
  {
    question: "Quels sont les premiers indicateurs de succès ?",
    answer: "Nous définissons des KPIs dès le départ : nombre de leads qualifiés, taux de conversion, durée du cycle de vente, satisfaction client. Les premiers résultats sont visibles sous 2 à 3 mois.",
  },
  {
    question: "Comment gérer la résistance au changement ?",
    answer: "La résistance est naturelle. Nous l'anticipons en impliquant les équipes dès le diagnostic, en montrant des quick wins rapides, et en formant progressivement plutôt qu'en imposant.",
  },
];

// ============================================================================
// MAIN PAGE COMPONENT
// ============================================================================
export default function SectionsPreviewPage() {
  return (
    <div className="min-h-screen bg-[#0c0c0a] dark-section">
      <SectionsNav />

      {/* ================================================================== */}
      {/* EXISTING SECTIONS */}
      {/* ================================================================== */}

      {/* PageHero */}
      <SectionDivider title="Page Hero" id="PageHero" />
      <PageHero
        surtitre="Agence marketing B2B"
        title="Transformez votre"
        titleHighlight="marketing en levier de croissance"
        description="Vizion accompagne les entreprises B2B dans leurs moments de transformation : lancement, innovation, restructuration, accélération."
        breadcrumbs={[{ label: "Accueil", href: "/" }, { label: "Services" }]}
        primaryCta={{ text: "Découvrir nos services", href: "/services" }}
        secondaryCta={{ text: "Nous contacter", href: "/contact" }}
        variant="dark"
      />

      {/* StatsBar */}
      <SectionDivider title="Stats Bar" id="StatsBar" />
      <StatsBar stats={sampleStats} variant="accent" />
      <StatsBar stats={sampleStats} variant="dark" />
      <StatsBar stats={sampleStats} variant="light" />

      {/* FeatureCards */}
      <SectionDivider title="Feature Cards" id="FeatureCards" />
      <FeatureCards
        surtitre="Nos expertises"
        title="Des compétences au service de"
        titleHighlight="votre croissance"
        description="Nous intervenons sur l'ensemble du cycle marketing et commercial."
        features={sampleFeatures}
        columns={3}
        variant="dark"
      />

      {/* TwoColSection */}
      <SectionDivider title="Two Col Section" id="TwoColSection" />
      <TwoColSection
        surtitre="Notre approche"
        title="Un marketing qui"
        titleHighlight="facilite la vente"
        paragraphs={[
          "Le marketing s'est perdu. Trop souvent cantonné à la communication, il a oublié sa raison d'être : faciliter la vente.",
          "Chez Vizion, nous ramenons le marketing à sa mission originelle. Il doit servir la stratégie de l'entreprise, équiper les commerciaux, raccourcir les cycles de décision.",
        ]}
        image="/images/placeholder.jpg"
        imagePosition="right"
        cta={{ text: "En savoir plus", href: "/agence" }}
        variant="dark"
        badge={{ text: "+70", subtext: "clients" }}
      />

      {/* IconGrid */}
      <SectionDivider title="Icon Grid" id="IconGrid" />
      <IconGrid
        surtitre="Nos engagements"
        title="Ce qui nous"
        titleHighlight="différencie"
        items={sampleIconGridItems}
        variant="dark"
      />

      {/* TimelineSection */}
      <SectionDivider title="Timeline Section" id="TimelineSection" />
      <TimelineSection
        surtitre="Notre méthode"
        title="Un processus"
        titleHighlight="éprouvé"
        description="4 étapes pour transformer votre marketing."
        steps={sampleTimelineSteps}
        variant="dark"
      />

      {/* ProcessSteps */}
      <SectionDivider title="Process Steps" id="ProcessSteps" />
      <ProcessSteps
        surtitre="Comment ça marche"
        title="Notre"
        titleHighlight="méthodologie"
        description="Un accompagnement structuré pour des résultats mesurables."
        steps={sampleProcessSteps}
        layout="zigzag"
        variant="dark"
      />

      {/* AccordionList */}
      <SectionDivider title="Accordion List" id="AccordionList" />
      <AccordionList
        surtitre="Nos services"
        title="Domaines"
        titleHighlight="d'expertise"
        description="Découvrez nos champs d'intervention."
        items={sampleAccordionItems}
        defaultOpen={[0]}
        variant="dark"
      />

      {/* NumberCounter */}
      <SectionDivider title="Number Counter" id="NumberCounter" />
      <NumberCounter
        surtitre="Nos chiffres"
        title="Des résultats"
        titleHighlight="mesurables"
        description="Quelques indicateurs clés de notre accompagnement."
        counters={sampleCounters}
        columns={4}
        variant="dark"
      />

      {/* TestimonialsCarousel */}
      <SectionDivider title="Testimonials Carousel" id="TestimonialsCarousel" />
      <TestimonialsCarousel
        surtitre="Témoignages"
        title="Ce qu'ils disent de nous"
        testimonials={sampleTestimonials}
      />

      {/* SingleTestimonial */}
      <SectionDivider title="Single Testimonial" id="SingleTestimonial" />
      <SingleTestimonial
        quote="Vizion a transformé notre approche marketing. Une équipe à l'écoute, experte et pragmatique. Les résultats sont au rendez-vous."
        author="Marie Dupont"
        role="Directrice Marketing"
        company="TechCorp"
        avatar="/images/avatars/placeholder.jpg"
        rating={5}
        variant="dark"
      />

      {/* FAQAccordion */}
      <SectionDivider title="FAQ Accordion" id="FAQAccordion" />
      <FAQAccordion
        surtitre="Questions fréquentes"
        title="Vous avez des questions ?"
        description="Les réponses aux interrogations les plus courantes."
        faqs={sampleFAQs}
        ctaText="Une autre question ?"
        ctaHref="/contact"
        variant="dark"
      />

      {/* PricingSection */}
      <SectionDivider title="Pricing Section" id="PricingSection" />
      <PricingSection
        surtitre="Nos offres"
        title="Des formules adaptées à"
        titleHighlight="vos ambitions"
        description="Choisissez l'accompagnement qui correspond à votre situation."
        tiers={samplePricingTiers}
      />

      {/* ComparisonTable */}
      <SectionDivider title="Comparison Table" id="ComparisonTable" />
      <ComparisonTable
        surtitre="Comparatif"
        title="Comparez nos"
        titleHighlight="offres"
        leftLabel="Agence classique"
        rightLabel="Vizion"
        rows={sampleComparisonRows}
        highlightColumn="right"
        variant="dark"
      />

      {/* LogoBanner */}
      <SectionDivider title="Logo Banner" id="LogoBanner" />
      <LogoBanner
        title="Ils nous font confiance"
        logos={sampleLogos}
        variant="dark"
      />

      {/* FullWidthImage */}
      <SectionDivider title="Full Width Image" id="FullWidthImage" />
      <FullWidthImage
        image="/images/placeholder.jpg"
        imageAlt="Image pleine largeur"
        title="Image avec contenu"
        description="Une section avec image pleine largeur et overlay de contenu."
        cta={{ text: "En savoir plus", href: "/contact" }}
        height="lg"
      />

      {/* CTASection */}
      <SectionDivider title="CTA Section" id="CTASection" />
      <CTASection
        badge="Prêt à démarrer ?"
        title="Transformez votre marketing en"
        titleHighlight="levier de croissance"
        description="Discutons de votre projet et voyons comment Vizion peut vous accompagner."
        primaryCta={{ text: "Prendre rendez-vous", href: "/contact" }}
        secondaryCta={{ text: "Découvrir nos cas clients", href: "/cas-clients" }}
        trustElements={[
          { icon: CheckCircle, text: "+70 clients accompagnés" },
          { icon: Award, text: "98% de satisfaction" },
        ]}
      />

      {/* ================================================================== */}
      {/* NEW INTERACTIVE SECTIONS */}
      {/* ================================================================== */}

      {/* BeforeAfter */}
      <SectionDivider title="Before/After Slider" id="BeforeAfter" />
      <BeforeAfter
        surtitre="Transformation"
        title="Avant / Après Vizion"
        description="Découvrez la transformation d'un site web B2B après notre intervention."
        beforeImage="/images/placeholder.jpg"
        afterImage="/images/placeholder.jpg"
        beforeLabel="Avant"
        afterLabel="Après"
        variant="dark"
      />
      <BeforeAfter
        surtitre="Version light"
        title="Refonte de présentation commerciale"
        beforeImage="/images/placeholder.jpg"
        afterImage="/images/placeholder.jpg"
        beforeLabel="Version initiale"
        afterLabel="Version Vizion"
        variant="light"
      />

      {/* CaseStudiesCarousel */}
      <SectionDivider title="Case Studies Carousel" id="CaseStudiesCarousel" />
      <CaseStudiesCarousel
        surtitre="Nos réalisations"
        title="Cas clients & résultats concrets"
        cases={sampleCaseStudies}
        ctaText="Lire le cas complet"
        variant="dark"
      />

      {/* ExpandableCards */}
      <SectionDivider title="Expandable Cards" id="ExpandableCards" />
      <ExpandableCards
        surtitre="Notre accompagnement"
        title="Une approche"
        titleHighlight="complète"
        description="Cliquez sur chaque carte pour en savoir plus sur nos services."
        cards={sampleExpandableCards}
        columns={2}
        variant="dark"
      />

      {/* HorizontalRoadmap */}
      <SectionDivider title="Horizontal Roadmap" id="HorizontalRoadmap" />
      <HorizontalRoadmap
        surtitre="Votre parcours"
        title="Les étapes de votre"
        titleHighlight="transformation"
        milestones={sampleRoadmapMilestones}
        variant="dark"
      />

      {/* HoverRevealGrid */}
      <SectionDivider title="Hover Reveal Grid" id="HoverRevealGrid" />
      <HoverRevealGrid
        surtitre="Expertises avancées"
        title="Des compétences"
        titleHighlight="pointues"
        description="Survolez chaque expertise pour découvrir nos réalisations."
        items={sampleHoverRevealItems}
        columns={2}
        variant="dark"
      />

      {/* ImageSlider */}
      <SectionDivider title="Image Slider" id="ImageSlider" />
      <ImageSlider
        surtitre="En coulisses"
        title="Notre travail en images"
        slides={sampleImageSlides}
        aspectRatio="16/9"
        showThumbnails={true}
        showCounter={true}
        autoplayInterval={5000}
        variant="dark"
      />

      {/* StickyScrollReveal */}
      <SectionDivider title="Sticky Scroll Reveal" id="StickyScrollReveal" />
      <StickyScrollReveal
        surtitre="Notre processus"
        title="Comment nous"
        titleHighlight="travaillons"
        items={sampleStickyRevealItems}
        variant="dark"
      />

      {/* TabbedShowcase */}
      <SectionDivider title="Tabbed Showcase" id="TabbedShowcase" />
      <TabbedShowcase
        surtitre="Nos piliers"
        title="Les fondations de votre"
        titleHighlight="succès commercial"
        description="Trois piliers pour construire un marketing qui vend."
        tabs={sampleTabbedShowcaseTabs}
        variant="dark"
      />

      {/* TabbedFeatures */}
      <SectionDivider title="Tabbed Features" id="TabbedFeatures" />
      <TabbedFeatures
        surtitre="Par taille d'entreprise"
        title="Un accompagnement adapté à"
        titleHighlight="votre structure"
        features={sampleTabbedFeatures}
        variant="light"
      />

      {/* TeamCarousel */}
      <SectionDivider title="Team Carousel" id="TeamCarousel" />
      <TeamCarousel
        surtitre="L'équipe"
        title="Les experts derrière Vizion"
        description="Une équipe de spécialistes du marketing B2B et de l'automatisation."
        members={sampleTeamMembers}
        ctaText="Nous contacter"
        ctaHref="/contact"
      />

      {/* ================================================================== */}
      {/* SEO-OPTIMIZED CONTENT SECTIONS */}
      {/* ================================================================== */}

      {/* SEO - Marketing Produit B2B */}
      <SectionDivider title="SEO: Marketing Produit B2B" id="SEO-Marketing-Produit" />
      <PageHero
        surtitre="Expertise"
        title="Marketing produit"
        titleHighlight="pour entreprises B2B"
        description="Définissez un positionnement différenciant et une architecture de message qui convertit. Le marketing produit est la fondation de toute stratégie commerciale efficace."
        primaryCta={{ text: "Découvrir notre approche", href: "/services/marketing-produit" }}
        variant="dark"
      />
      <FeatureCards
        surtitre="Marketing produit B2B"
        title="Construisez les fondations de votre"
        titleHighlight="croissance commerciale"
        description="Le marketing produit définit comment votre offre est perçue sur le marché. C'est la clé d'un positionnement qui génère des opportunités qualifiées."
        features={marketingProduitFeatures}
        columns={3}
        variant="light"
      />
      <TwoColSection
        surtitre="Pourquoi le marketing produit ?"
        title="Sans positionnement clair,"
        titleHighlight="vos commerciaux improvisent"
        paragraphs={[
          "Combien de fois vos commerciaux réinventent-ils leur pitch ? Combien de prospects repartent confus sur ce que vous faites vraiment ?",
          "Le marketing produit structure votre discours commercial. Il donne à vos équipes les mots justes pour convaincre. Il aligne toute l'entreprise sur une vision commune de la valeur que vous apportez.",
        ]}
        image="/images/placeholder.jpg"
        imagePosition="right"
        cta={{ text: "Structurer notre discours", href: "/contact" }}
        variant="dark"
      />

      {/* SEO - Sales Enablement */}
      <SectionDivider title="SEO: Sales Enablement" id="SEO-Sales-Enablement" />
      <PageHero
        surtitre="Sales enablement"
        title="Équipez vos commerciaux pour"
        titleHighlight="gagner plus de deals"
        description="Présentations, battle cards, calculateurs de ROI : donnez à vos équipes les outils pour convaincre les décideurs et raccourcir les cycles de vente."
        primaryCta={{ text: "Découvrir nos outils", href: "/services/sales-enablement" }}
        variant="dark"
      />
      <AccordionList
        surtitre="Outils de sales enablement"
        title="Tout ce dont vos commerciaux ont"
        titleHighlight="besoin pour vendre"
        description="Des outils conçus pour chaque étape du cycle de vente, de la découverte au closing."
        items={salesEnablementAccordion}
        defaultOpen={[0]}
        showNumbers={true}
        variant="light"
      />
      <NumberCounter
        surtitre="Impact du sales enablement"
        title="Des résultats mesurables sur vos"
        titleHighlight="performances commerciales"
        counters={[
          { value: 65, suffix: "%", label: "Productivité", description: "Gain de productivité commerciale" },
          { value: 40, suffix: "%", label: "Cycle de vente", description: "Réduction du cycle moyen" },
          { value: 28, suffix: "%", label: "Taux de closing", description: "Amélioration du win rate" },
          { value: 3, prefix: "x", label: "Contenu utilisé", description: "Plus de contenu utilisé par les commerciaux" },
        ]}
        columns={4}
        variant="accent"
      />

      {/* SEO - IA & Marketing */}
      <SectionDivider title="SEO: IA appliquée au Marketing" id="SEO-IA-Marketing" />
      <PageHero
        surtitre="Innovation"
        title="L'intelligence artificielle au service du"
        titleHighlight="marketing B2B"
        description="Vizion intègre l'IA dans ses méthodologies pour accélérer l'exécution sans sacrifier la qualité stratégique. Génération de contenu, enrichissement de données, personnalisation à l'échelle."
        primaryCta={{ text: "Explorer nos solutions IA", href: "/services/ia-marketing" }}
        variant="dark"
      />
      <TimelineSection
        surtitre="IA & Marketing B2B"
        title="Comment l'IA transforme le"
        titleHighlight="marketing et les ventes"
        description="L'IA n'est pas une solution miracle. Déployée intelligemment, elle démultiplie la capacité d'exécution de vos équipes."
        steps={iaMarketingTimeline}
        variant="light"
      />
      <TwoColSection
        surtitre="Notre approche de l'IA"
        title="L'IA comme levier,"
        titleHighlight="pas comme argument"
        paragraphs={[
          "Chez Vizion, nous utilisons l'IA là où elle apporte une valeur ajoutée réelle, pas de manière systématique. Nous restons critiques sur ses limites et transparents sur son utilisation.",
          "Concrètement, l'IA nous permet de créer des lead magnets en une fraction du temps habituel, de trier et enrichir des listes de prospection, et de personnaliser les approches commerciales à l'échelle.",
        ]}
        image="/images/placeholder.jpg"
        imagePosition="left"
        variant="dark"
      />

      {/* SEO - PME & ETI */}
      <SectionDivider title="SEO: Accompagnement PME & ETI" id="SEO-PME-ETI" />
      <PageHero
        surtitre="PME & ETI"
        title="Marketing B2B pour"
        titleHighlight="PME et ETI"
        description="Vous n'avez pas les ressources d'un grand groupe ? Nous apportons l'expertise d'une direction marketing externalisée, calibrée pour votre taille et vos enjeux."
        primaryCta={{ text: "Découvrir nos offres", href: "/contact" }}
        variant="dark"
      />
      <ComparisonTable
        surtitre="Pourquoi externaliser ?"
        title="Direction marketing interne vs"
        titleHighlight="accompagnement Vizion"
        leftLabel="Recrutement interne"
        rightLabel="Vizion"
        rows={[
          { feature: "Coût mensuel", left: "8 000€ - 15 000€", right: "4 500€ - 8 500€" },
          { feature: "Délai de montée en compétence", left: "6-12 mois", right: "Immédiat" },
          { feature: "Réseau d'experts", left: false, right: true },
          { feature: "Méthodologies éprouvées", left: false, right: true },
          { feature: "Flexibilité", left: false, right: true },
        ]}
        highlightColumn="right"
        variant="dark"
      />
      <IconGrid
        surtitre="Profil de nos clients"
        title="Nous accompagnons les entreprises qui"
        titleHighlight="veulent grandir"
        items={[
          { icon: Briefcase, title: "PME de 10 à 50 collaborateurs", description: "Première structuration marketing, besoin d'expertise pour accélérer." },
          { icon: TrendingUp, title: "ETI de 50 à 250 collaborateurs", description: "Professionnalisation du marketing, alignement avec les ventes." },
          { icon: Rocket, title: "Scale-ups en croissance", description: "Industrialisation des processus, préparation à l'international." },
          { icon: Layers, title: "Filiales de groupes", description: "Autonomisation marketing, différenciation locale." },
        ]}
        variant="light"
      />

      {/* SEO - Toulouse */}
      <SectionDivider title="SEO: Agence Marketing Toulouse" id="SEO-Toulouse" />
      <PageHero
        surtitre="Occitanie"
        title="Agence marketing B2B à"
        titleHighlight="Toulouse"
        description="Basée à Toulouse, Vizion accompagne les entreprises B2B de la région Occitanie et au-delà. Proximité, réactivité et expertise au service de votre croissance."
        breadcrumbs={[{ label: "Accueil", href: "/" }, { label: "Toulouse" }]}
        primaryCta={{ text: "Nous rencontrer", href: "/contact" }}
        variant="dark"
      />
      <TwoColSection
        surtitre="Pourquoi Toulouse ?"
        title="Au cœur d'un écosystème"
        titleHighlight="tech & industrie"
        paragraphs={[
          "Toulouse est la capitale de l'aéronautique, du spatial et des deeptech. C'est aussi un bassin dynamique de PME et ETI industrielles qui ont besoin d'un marketing à la hauteur de leur expertise technique.",
          "Chez Vizion, nous comprenons ces enjeux. Nous parlons le langage de l'ingénieur comme celui du commercial. Nous savons traduire la complexité technique en proposition de valeur accessible.",
        ]}
        image="/images/placeholder.jpg"
        imagePosition="right"
        badge={{ text: "Toulouse", subtext: "Occitanie" }}
        variant="light"
      />
      <FeatureCards
        surtitre="Nos interventions en région"
        title="Des clients dans toute"
        titleHighlight="l'Occitanie"
        features={[
          { icon: MapPin, title: "Toulouse & métropole", description: "Rencontres régulières, ateliers sur site, proximité au quotidien.", tags: ["Présentiel", "Ateliers"] },
          { icon: Globe, title: "Occitanie & Sud-Ouest", description: "Interventions à Montpellier, Bordeaux, et dans toute la région.", tags: ["Régional", "Hybride"] },
          { icon: Rocket, title: "France & international", description: "Accompagnement à distance pour les clients hors région.", tags: ["Remote", "International"] },
        ]}
        columns={3}
        variant="dark"
      />

      {/* SEO - ROI Marketing */}
      <SectionDivider title="SEO: ROI du Marketing B2B" id="SEO-ROI" />
      <PageHero
        surtitre="Performance"
        title="Mesurer le ROI de votre"
        titleHighlight="investissement marketing"
        description="Le marketing B2B doit être mesurable. Nous définissons des KPIs clairs et suivons les résultats pour optimiser en continu votre retour sur investissement."
        primaryCta={{ text: "Calculer mon ROI potentiel", href: "/contact" }}
        variant="dark"
      />
      <NumberCounter
        surtitre="ROI moyen de nos clients"
        title="Des résultats qui justifient"
        titleHighlight="l'investissement"
        counters={[
          { value: 3, prefix: "x", label: "ROI moyen", description: "Sur 12 mois d'accompagnement" },
          { value: 340, suffix: "%", label: "Leads", description: "Augmentation moyenne des leads" },
          { value: 45, suffix: "%", label: "Cycle", description: "Réduction du cycle de vente" },
          { value: 6, suffix: " mois", label: "Payback", description: "Délai de rentabilisation moyen" },
        ]}
        columns={4}
        variant="accent"
      />
      <ProcessSteps
        surtitre="Notre approche du ROI"
        title="Comment nous mesurons la"
        titleHighlight="performance marketing"
        steps={[
          { id: "1", number: "01", title: "Baseline", description: "Nous mesurons votre situation de départ : leads, taux de conversion, cycle de vente, CAC.", bullets: ["Audit des métriques existantes", "Définition des KPIs cibles", "Mise en place du tracking"] },
          { id: "2", number: "02", title: "Attribution", description: "Nous mettons en place un modèle d'attribution pour comprendre l'impact de chaque action.", bullets: ["Tracking multi-touch", "Intégration CRM", "Rapports automatisés"] },
          { id: "3", number: "03", title: "Optimisation", description: "Nous analysons les données et ajustons la stratégie pour maximiser le ROI.", bullets: ["Revues mensuelles", "Tests A/B", "Réallocation budgétaire"] },
        ]}
        layout="zigzag"
        variant="dark"
      />

      {/* SEO - Transformation Marketing */}
      <SectionDivider title="SEO: Transformation Marketing" id="SEO-Transformation" />
      <PageHero
        surtitre="Transformation"
        title="Transformer votre marketing pour"
        titleHighlight="accompagner votre croissance"
        description="Lancement de produit, repositionnement, accélération, restructuration : nous accompagnons les entreprises dans leurs moments de transformation."
        primaryCta={{ text: "Préparer ma transformation", href: "/contact" }}
        variant="dark"
      />
      <HorizontalRoadmap
        surtitre="Parcours de transformation"
        title="Les grandes étapes de votre"
        titleHighlight="évolution marketing"
        milestones={[
          { id: "1", phase: "Phase 1", title: "Diagnostic", description: "État des lieux complet de votre marketing actuel", status: "completed" as const },
          { id: "2", phase: "Phase 2", title: "Vision", description: "Définition de la cible et de la feuille de route", status: "completed" as const },
          { id: "3", phase: "Phase 3", title: "Quick wins", description: "Premiers résultats visibles en 4-8 semaines", status: "in-progress" as const },
          { id: "4", phase: "Phase 4", title: "Fondations", description: "Mise en place des assets structurants", status: "upcoming" as const },
          { id: "5", phase: "Phase 5", title: "Scale", description: "Industrialisation et montée en puissance", status: "upcoming" as const },
        ]}
        variant="light"
      />
      <FAQAccordion
        surtitre="Questions sur la transformation"
        title="Réussir sa transformation"
        titleHighlight="marketing"
        description="Les réponses aux questions que se posent les dirigeants avant de se lancer."
        faqs={transformationFAQs}
        ctaText="Discuter de votre projet"
        ctaHref="/contact"
        variant="dark"
      />

      {/* Final CTA */}
      <CTASection
        badge="Prêt à transformer votre marketing ?"
        title="Discutons de votre"
        titleHighlight="projet"
        description="Un premier échange de 30 minutes pour comprendre vos enjeux et voir comment Vizion peut vous accompagner."
        primaryCta={{ text: "Réserver un créneau", href: "/contact" }}
        secondaryCta={{ text: "Voir nos cas clients", href: "/cas-clients" }}
        trustElements={[
          { icon: Calendar, text: "30 min d'échange gratuit" },
          { icon: CheckCircle, text: "Sans engagement" },
          { icon: HeartHandshake, text: "Conseils personnalisés" },
        ]}
      />

      {/* Footer spacer */}
      <div className="h-20" />
    </div>
  );
}
