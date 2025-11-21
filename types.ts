import { LucideIcon } from 'lucide-react';

export interface FlowExample {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  steps: string[];
  kpi: string;
}

export interface PricingTier {
  name: string;
  price: string;
  periodicity?: string;
  features: string[];
  cta: string;
  highlight?: boolean;
  description?: string;
}

export interface Testimonial {
  id: number;
  quote: string;
  author: string;
  role: string;
  image: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}