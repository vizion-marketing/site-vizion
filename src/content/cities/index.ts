export type { CityMeta, CityPageData, CityContent } from "./types";

export const CITY_SLUGS = [
  "agence-marketing-montpellier",
  "agence-marketing-albi",
  "agence-marketing-auch",
  "agence-marketing-agen",
  "agence-marketing-castres",
  "agence-marketing-rodez",
  "agence-marketing-communication-mazamet",
] as const;

export type CitySlug = (typeof CITY_SLUGS)[number];

export async function getCityData(routeSlug: string) {
  const cityMap: Record<string, () => Promise<{ default: import("./types").CityPageData }>> = {
    "agence-marketing-montpellier": () => import("./montpellier"),
    "agence-marketing-albi": () => import("./albi"),
    "agence-marketing-auch": () => import("./auch"),
    "agence-marketing-agen": () => import("./agen"),
    "agence-marketing-castres": () => import("./castres"),
    "agence-marketing-rodez": () => import("./rodez"),
    "agence-marketing-communication-mazamet": () => import("./mazamet"),
  };

  const loader = cityMap[routeSlug];
  if (!loader) return null;
  const mod = await loader();
  return mod.default;
}
