import type { LucideIcon } from "lucide-react";
import * as LucideIcons from "lucide-react";

const icons = LucideIcons as unknown as Record<string, LucideIcon>;

/**
 * Converts a Lucide icon name string (e.g., "TrendingUp") to its component reference.
 * Returns undefined if the icon name is not found.
 */
export function resolveIcon(name: string | undefined): LucideIcon | undefined {
  if (!name) return undefined;
  return icons[name];
}
