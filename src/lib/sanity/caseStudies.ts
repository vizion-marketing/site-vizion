import { sanityFetch } from "./fetch";
import {
  ALL_CASE_STUDIES_QUERY,
  CASE_STUDIES_FOR_CLIENT_QUERY,
  CASE_STUDY_BY_SLUG_QUERY,
  ALL_CASE_STUDY_PARAMS_QUERY,
  MENU_CASE_STUDIES_QUERY,
  CASE_STUDIES_FOR_SERVICE_QUERY,
} from "../../../sanity/lib/queries";
import type { CaseStudy, MenuCaseStudy, ServiceCaseStudy } from "../../../sanity/lib/types";

export async function getAllCaseStudies(): Promise<CaseStudy[]> {
  return sanityFetch<CaseStudy[]>(
    ALL_CASE_STUDIES_QUERY,
    {},
    { tags: ["caseStudies"] },
  );
}

export async function getCaseStudiesForClient(
  clientSlug: string,
): Promise<CaseStudy[]> {
  return sanityFetch<CaseStudy[]>(
    CASE_STUDIES_FOR_CLIENT_QUERY,
    { clientSlug },
    { tags: ["caseStudies"] },
  );
}

export async function getCaseStudyBySlug(
  clientSlug: string,
  slug: string,
): Promise<CaseStudy | null> {
  return sanityFetch<CaseStudy | null>(
    CASE_STUDY_BY_SLUG_QUERY,
    { clientSlug, slug },
    { tags: ["caseStudies"] },
  );
}

export async function getAllCaseStudyParams(): Promise<
  { clientSlug: string; caseSlug: string }[]
> {
  return sanityFetch<{ clientSlug: string; caseSlug: string }[]>(
    ALL_CASE_STUDY_PARAMS_QUERY,
    {},
    { tags: ["caseStudies"] },
  );
}

export async function getCaseStudiesForService(
  serviceSlug: string,
): Promise<ServiceCaseStudy[]> {
  return sanityFetch<ServiceCaseStudy[]>(
    CASE_STUDIES_FOR_SERVICE_QUERY,
    { serviceSlug },
    { tags: ["caseStudies"] },
  );
}

export async function getMenuCaseStudies(): Promise<MenuCaseStudy[]> {
  return sanityFetch<MenuCaseStudy[]>(
    MENU_CASE_STUDIES_QUERY,
    {},
    { tags: ["caseStudies"] },
  );
}
