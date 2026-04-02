import type { StructureBuilder } from "sanity/structure";

export const deskStructure = (S: StructureBuilder) =>
  S.list()
    .title("Contenu")
    .items([
      S.listItem()
        .title("Articles de blog")
        .schemaType("post")
        .child(S.documentTypeList("post").title("Articles de blog")),
      S.listItem()
        .title("Clients")
        .schemaType("client")
        .child(S.documentTypeList("client").title("Clients")),
      S.listItem()
        .title("Etudes de cas")
        .schemaType("caseStudy")
        .child(S.documentTypeList("caseStudy").title("Etudes de cas")),
      S.listItem()
        .title("Services")
        .schemaType("service")
        .child(S.documentTypeList("service").title("Services")),
      S.listItem()
        .title("Formations")
        .schemaType("formation")
        .child(S.documentTypeList("formation").title("Formations")),
      S.divider(),
      S.listItem()
        .title("Pages")
        .schemaType("page")
        .child(S.documentTypeList("page").title("Pages")),
    ]);
