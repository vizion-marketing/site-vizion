import { groq } from "next-sanity";

// ============================================================
// Posts
// ============================================================

export const ALL_POSTS_QUERY = groq`
  *[_type == "post" && !draft] | order(date desc) {
    _id,
    title,
    "slug": slug.current,
    description,
    date,
    dateModified,
    author,
    category,
    tags,
    featuredImage,
    featuredImageUrl,
    body,
    resources,
    faq,
    ctaTitle,
    ctaDescription,
    ctaLink,
    "url": "/blog/" + slug.current
  }
`;

export const POST_BY_SLUG_QUERY = groq`
  *[_type == "post" && slug.current == $slug && !draft][0] {
    _id,
    title,
    "slug": slug.current,
    description,
    date,
    dateModified,
    author,
    category,
    tags,
    featuredImage,
    featuredImageUrl,
    draft,
    body,
    resources,
    faq,
    ctaTitle,
    ctaDescription,
    ctaLink,
    "url": "/blog/" + slug.current
  }
`;

export const ALL_POST_SLUGS_QUERY = groq`
  *[_type == "post" && !draft].slug.current
`;

// ============================================================
// Clients
// ============================================================

export const ALL_CLIENTS_QUERY = groq`
  *[_type == "client" && !draft] | order(order asc) {
    _id,
    name,
    "slug": slug.current,
    companyType,
    sector,
    sectorIcon,
    logo,
    headline,
    description,
    size,
    location,
    website,
    mainImage,
    testimonial,
    highlightMetrics,
    featured,
    order,
    metaTitle,
    metaDescription,
    "url": "/cas-clients/" + slug.current,
    "caseStudyCount": count(*[_type == "caseStudy" && client._ref == ^._id && !draft])
  }
`;

export const CLIENT_BY_SLUG_QUERY = groq`
  *[_type == "client" && slug.current == $slug && !draft][0] {
    _id,
    name,
    "slug": slug.current,
    companyType,
    sector,
    sectorIcon,
    logo,
    headline,
    description,
    size,
    location,
    website,
    mainImage,
    testimonial,
    highlightMetrics,
    galleryImages[] { _key, asset, hotspot, crop, title, caption },
    featured,
    order,
    metaTitle,
    metaDescription,
    "url": "/cas-clients/" + slug.current
  }
`;

export const ALL_CLIENT_SLUGS_QUERY = groq`
  *[_type == "client" && !draft].slug.current
`;

export const FEATURED_CLIENTS_QUERY = groq`
  *[_type == "client" && !draft && featured == true] | order(order asc) {
    _id,
    name,
    "slug": slug.current,
    companyType,
    sector,
    sectorIcon,
    logo,
    headline,
    description,
    mainImage,
    testimonial,
    highlightMetrics,
    "url": "/cas-clients/" + slug.current,
    "firstMetric": *[_type == "caseStudy" && client._ref == ^._id && !draft] | order(order asc) [0].metrics[0]
  }
`;

// ============================================================
// Menu — Cas Clients (lightweight for header mega menu)
// ============================================================

export const MENU_CASE_STUDIES_QUERY = groq`
  *[_type == "caseStudy" && !draft] | order(publishedAt desc) [0...3] {
    _id,
    title,
    "slug": slug.current,
    "company": client->name,
    "companyType": client->companyType,
    "sector": client->sector,
    "clientSlug": client->slug.current,
    "heroImageUrl": heroImage.asset->url,
    metrics[0...2],
    "url": "/cas-clients/" + client->slug.current + "/" + slug.current
  }
`;

export const MENU_CLIENTS_QUERY = groq`
  *[_type == "client" && !draft] | order(order asc) {
    _id,
    name,
    "slug": slug.current,
    sector,
    "logoUrl": logo.asset->url,
    "url": "/cas-clients/" + slug.current,
    "caseStudyCount": count(*[_type == "caseStudy" && client._ref == ^._id && !draft])
  }
`;

// ============================================================
// Case Studies
// ============================================================

export const ALL_CASE_STUDIES_QUERY = groq`
  *[_type == "caseStudy" && !draft] | order(order asc) {
    _id,
    title,
    "slug": slug.current,
    description,
    "companyType": client->companyType,
    "sector": client->sector,
    "sectorIcon": client->sectorIcon,
    "company": client->name,
    "clientSlug": client->slug.current,
    heroImage,
    projectDuration,
    projectYear,
    metrics,
    featured,
    order,
    publishedAt,
    dateModified,
    metaTitle,
    metaDescription,
    "url": "/cas-clients/" + client->slug.current + "/" + slug.current
  }
`;

export const CASE_STUDIES_FOR_CLIENT_QUERY = groq`
  *[_type == "caseStudy" && client->slug.current == $clientSlug && !draft] | order(order asc) {
    _id,
    title,
    "slug": slug.current,
    description,
    "companyType": client->companyType,
    "sector": client->sector,
    "sectorIcon": client->sectorIcon,
    "company": client->name,
    "clientSlug": client->slug.current,
    heroImage,
    projectDuration,
    projectYear,
    metrics,
    featured,
    order,
    publishedAt,
    dateModified,
    metaTitle,
    metaDescription,
    "url": "/cas-clients/" + client->slug.current + "/" + slug.current
  }
`;

export const CASE_STUDY_BY_SLUG_QUERY = groq`
  *[_type == "caseStudy" && slug.current == $slug && client->slug.current == $clientSlug && !draft][0] {
    _id,
    title,
    "slug": slug.current,
    description,
    "companyType": client->companyType,
    "sector": client->sector,
    "sectorIcon": client->sectorIcon,
    "company": client->name,
    "companyLogo": client->logo,
    "clientSlug": client->slug.current,
    heroImage,
    projectDuration,
    projectYear,
    context,
    challenges,
    approachPhases,
    metrics,
    testimonial,
    deliverables,
    galleryImages[] { _key, asset, hotspot, crop, title, caption },
    publishedAt,
    dateModified,
    featured,
    order,
    metaTitle,
    metaDescription,
    "url": "/cas-clients/" + client->slug.current + "/" + slug.current
  }
`;

export const ALL_CASE_STUDY_PARAMS_QUERY = groq`
  *[_type == "caseStudy" && !draft] {
    "caseSlug": slug.current,
    "clientSlug": client->slug.current
  }
`;

// ============================================================
// Reverse lookup: services referencing a given case study
// ============================================================

export const SERVICES_FOR_CASE_STUDY_QUERY = groq`
  *[_type == "service" && references($caseStudyId)] {
    _id,
    title,
    "slug": slug.current,
    icon,
    "url": "/services/" + slug.current
  }
`;

// ============================================================
// Services
// ============================================================

export const ALL_SERVICES_QUERY = groq`
  *[_type == "service"] | order(order asc) {
    _id,
    title,
    "slug": slug.current,
    metaTitle,
    metaDescription,
    heroTitle,
    heroSubtitle,
    heroBadge,
    heroImage,
    icon,
    category,
    metrics,
    publishedAt,
    order,
    "url": "/services/" + slug.current
  }
`;

export const SERVICE_BY_SLUG_QUERY = groq`
  *[_type == "service" && slug.current == $slug][0] {
    ...,
    "slug": slug.current,
    "url": "/services/" + slug.current,
    "relatedCaseStudies": relatedCaseStudies[]-> {
      _id,
      title,
      "slug": slug.current,
      "company": client->name,
      "companyType": client->companyType,
    "sector": client->sector,
      metrics,
      "clientSlug": client->slug.current,
      "url": "/cas-clients/" + client->slug.current + "/" + slug.current
    }
  }
`;

// ============================================================
// Sitemap
// ============================================================

export const SITEMAP_QUERY = groq`
  {
    "posts": *[_type == "post" && !draft] {
      "url": "/blog/" + slug.current,
      "lastModified": coalesce(dateModified, date)
    },
    "clients": *[_type == "client" && !draft] {
      "url": "/cas-clients/" + slug.current
    },
    "caseStudies": *[_type == "caseStudy" && !draft] {
      "url": "/cas-clients/" + client->slug.current + "/" + slug.current,
      "lastModified": coalesce(dateModified, publishedAt)
    },
    "services": *[_type == "service"] {
      "url": "/services/" + slug.current,
      "lastModified": publishedAt
    }
  }
`;
