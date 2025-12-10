export interface Service {
  id: string;
  title: string;
  description: string;
  shortDescription: string;
  benefits: string[];
  included: string[];
  deliverables: string[];
  pricing: string;
  icon: string;
  slug: string;
}

export interface Location {
  id: string;
  city: string;
  region: string;
  description: string;
  nearbyAreas: string[];
  typicalProjects: string[];
}

export interface Trade {
  id: string;
  name: string;
  description: string;
  deliverables: string[];
  icon: string;
}

export interface Testimonial {
  id: string;
  name: string;
  company: string;
  role: string;
  content: string;
  rating: number;
  project: string;
}

export interface PricingTier {
  id: string;
  name: string;
  price: string;
  description: string;
  features: string[];
  popular?: boolean;
}

export interface CaseStudy {
  id: string;
  title: string;
  client: string;
  problem: string;
  solution: string;
  results: string[];
  image: string;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  publishDate: string;
  readTime: string;
  tags: string[];
  slug: string;
}

export interface ContactForm {
  name: string;
  company: string;
  email: string;
  phone?: string;
  projectType: string;
  message: string;
  location: string;
  files?: FileList;
}