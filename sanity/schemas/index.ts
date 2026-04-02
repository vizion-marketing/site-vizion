// Document schemas
import { post } from "./post";
import { clientSchema } from "./client";
import { caseStudy } from "./caseStudy";
import { service } from "./service";
import { formation } from "./formation";
import { page } from "./page";

// Object schemas
import { testimonial } from "./objects/testimonial";
import { metric } from "./objects/metric";
import { faq } from "./objects/faq";
import { processStep } from "./objects/processStep";
import { painPoint } from "./objects/painPoint";
import { feature } from "./objects/feature";
import { approachPhase } from "./objects/approachPhase";
import { resource } from "./objects/resource";
import { comparisonRow } from "./objects/comparisonRow";
import { deliverableVisual } from "./objects/deliverableVisual";
import { blockContent } from "./objects/blockContent";

export const schemaTypes = [
  // Documents
  post,
  clientSchema,
  caseStudy,
  service,
  formation,
  page,
  // Objects
  testimonial,
  metric,
  faq,
  processStep,
  painPoint,
  feature,
  approachPhase,
  resource,
  comparisonRow,
  deliverableVisual,
  blockContent,
];
