export type NavTab = 
  | 'HOME' 
  | 'ABOUT US' 
  | 'SERVICES' 
  | 'TEACHER'
  | 'CONTACTS';

export interface HeroSlide {
  id: string;
  tagline1: string;
  tagline2: string;
  subtitle: string;
  highlightText: string;
  ctaText: string;
  ctaLink?: string;
  image: string;
  imageAlt: string;
  description?: string;
}

export interface PromoCard {
  id: string;
  title: string;
  subtitle?: string;
  image: string;
  alt: string;
  snippet: string;
  fullContent: string;
  highlights: string[];
}

export interface InsuranceItem {
  id: string;
  name: string;
  category: string;
  description: string;
  typicalCoverage: string;
  startingAt: string;
  benefits: string[];
}

export interface Agent {
  id: string;
  name: string;
  title: string;
  city: string;
  state: string;
  zip: string;
  phone: string;
  email: string;
  rating?: number;
  reviewsCount?: number;
  experienceYears?: number;
  specialties: string[];
  photo: string;
  address: string;
  hideBookingButton?: boolean;
}

export interface BlogPost {
  id: string;
  title: string;
  date: string;
  author: string;
  category: string;
  readTime: string;
  snippet: string;
  content: string[];
  tags: string[];
}
