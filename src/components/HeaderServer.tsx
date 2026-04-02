import { Header } from "./Header";
import { getMenuCaseStudies } from "@/lib/sanity/caseStudies";
import { getMenuClients } from "@/lib/sanity/clients";
import { getMenuPosts } from "@/lib/sanity/posts";

export async function HeaderServer() {
  const [menuCaseStudies, menuClients, menuPosts] = await Promise.all([
    getMenuCaseStudies(),
    getMenuClients(),
    getMenuPosts(),
  ]);

  return (
    <Header
      menuCaseStudies={menuCaseStudies}
      menuClients={menuClients}
      menuPosts={menuPosts}
    />
  );
}
