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
    sector,
    sectorIcon,
    logo,
    headline,
    description,
    size,
    location,
    website,
    mainImage,
    secondaryImage,
    carouselTitle,
    carouselStat,
    testimonial,
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
    sector,
    sectorIcon,
    logo,
    headline,
    description,
    size,
    location,
    website,
    mainImage,
    secondaryImage,
    carouselTitle,
    carouselStat,
    testimonial,
    body,
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
    sector,
    sectorIcon,
    logo,
    mainImage,
    secondaryImage,
    carouselTitle,
    carouselStat,
    testimonial,
    "url": "/cas-clients/" + slug.current
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
    sector,
    sectorIcon,
    company,
    "clientSlug": client->slug.current,
    heroImage,
    executiveSummary,
    projectDuration,
    projectYear,
    metrics,
    featured,
    order,
    publishedAt,
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
    sector,
    sectorIcon,
    company,
    "clientSlug": client->slug.current,
    heroImage,
    executiveSummary,
    projectDuration,
    projectYear,
    metrics,
    featured,
    order,
    publishedAt,
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
    sector,
    sectorIcon,
    company,
    "clientSlug": client->slug.current,
    companyLogo,
    heroImage,
    executiveSummary,
    projectDuration,
    projectYear,
    context,
    challenges,
    approachPhases,
    metrics,
    resultsDetails,
    testimonial,
    deliverables,
    body,
    publishedAt,
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
      company,
      sector,
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
      "lastModified": publishedAt
    },
    "services": *[_type == "service"] {
      "url": "/services/" + slug.current,
      "lastModified": publishedAt
    }
  }
`;
