import { Building2, Code, Briefcase, Factory, MapPin, Wallet, Users, Rocket, Zap } from "lucide-react";

export const sectorIconMap: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  Building2, Code, Briefcase, Factory, MapPin, Wallet, Users, Rocket, Zap,
};

// Filtres par type d'entreprise (pour la page /cas-clients)
export const companyTypes = [
  { id: "all", label: "Tous", icon: null },
  { id: "Franchise", label: "Franchise", icon: Building2 },
  { id: "PME", label: "PME", icon: Briefcase },
  { id: "ETI", label: "ETI", icon: Factory },
  { id: "Scale-up", label: "Scale-up", icon: Rocket },
  { id: "Start-up", label: "Start-up", icon: Zap },
];

// Legacy export for backward compatibility
export const sectors = companyTypes;
