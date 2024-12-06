export interface Feature {
  title: string;
  description: string;
  icon: string;
}

export interface CaseStudy {
  title: string;
  institution: string;
  description: string;
  image: string;
  stats?: Array<{ value: string; label: string }>;
  link?: string;
  citation?: string;
}

export interface TechStackItem {
  title: string;
  description: string;
  icon: string;
}

export interface PricingTier {
  name: string;
  price: string;
  period: string;
  description: string;
  disclaimer?: string;
  features: string[];
}

export interface ResearchHighlight {
  title: string;
  authors: string;
  journal: string;
  year: string;
  highlights: string[];
  abstract: string;
  link: string;
}