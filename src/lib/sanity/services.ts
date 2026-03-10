import { sanityFetch } from "./fetch";
import {
  ALL_SERVICES_QUERY,
  SERVICE_BY_SLUG_QUERY,
  SERVICES_FOR_CASE_STUDY_QUERY,
} from "../../../sanity/lib/queries";
import type { Service } from "../../../sanity/lib/types";

export async function getAllServices(): Promise<Service[]> {
  return sanityFetch<Service[]>(
    ALL_SERVICES_QUERY,
    {},
    { tags: ["services"] },
  );
}

export async function getServiceBySlug(
  slug: string,
): Promise<Service | null> {
  return sanityFetch<Service | null>(
    SERVICE_BY_SLUG_QUERY,
    { slug },
    { tags: ["services"] },
  );
}

export interface RelatedService {
  _id: string;
  title: string;
  slug: string;
  icon: string;
  url: string;
}

export async function getServicesForCaseStudy(
  caseStudyId: string,
): Promise<RelatedService[]> {
  return sanityFetch<RelatedService[]>(
    SERVICES_FOR_CASE_STUDY_QUERY,
    { caseStudyId },
    { tags: ["services"] },
  );
}
