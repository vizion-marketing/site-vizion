import { Building2, Code, Briefcase, Factory, MapPin, Wallet, Users } from "lucide-react";

export const sectorIconMap: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  Building2, Code, Briefcase, Factory, MapPin, Wallet, Users,
};

export const sectors = [
  { id: "all", label: "Tous", icon: null },
  { id: "Franchise", label: "Franchise", icon: Building2 },
  { id: "SaaS B2B", label: "SaaS B2B", icon: Code },
  { id: "Services B2B", label: "Services B2B", icon: Briefcase },
  { id: "Industrie B2B", label: "Industrie B2B", icon: Factory },
  { id: "Business Local", label: "Business Local", icon: MapPin },
];

export const sectorIcons: Record<string, React.ReactNode> = {
  "Franchise": <Building2 className="w-4 h-4" />,
  "SaaS B2B": <Code className="w-4 h-4" />,
  "Services B2B": <Briefcase className="w-4 h-4" />,
  "Business Local": <MapPin className="w-4 h-4" />,
  "Industrie B2B": <Factory className="w-4 h-4" />,
};
