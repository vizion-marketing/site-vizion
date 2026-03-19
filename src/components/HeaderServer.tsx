import { Header } from "./Header";
import { getMenuCaseStudies } from "@/lib/sanity/caseStudies";
import { getMenuClients } from "@/lib/sanity/clients";

export async function HeaderServer() {
  const [menuCaseStudies, menuClients] = await Promise.all([
    getMenuCaseStudies(),
    getMenuClients(),
  ]);

  return (
    <Header
      menuCaseStudies={menuCaseStudies}
      menuClients={menuClients}
    />
  );
}
