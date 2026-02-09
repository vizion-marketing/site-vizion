import { PreviewClient } from "./PreviewClient";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Preview — Section Library",
  robots: "noindex, nofollow",
};

export default function PreviewSectionsPage() {
  return <PreviewClient />;
}
