export interface User {
  id: string;
  name: string;
  email: string;
  role: 'admin' | 'member' | 'viewer';
  avatarUrl?: string;
}

export interface Project {
  id: string;
  name: string;
  status: 'active' | 'paused' | 'completed';
  progress: number;
  members: string[];
  createdAt: string;
}

export interface Metric {
  label: string;
  value: string;
  change: number;
  trend: 'up' | 'down' | 'flat';
}

export interface NavItem {
  label: string;
  href: string;
  icon?: string;
}

export interface PricingTier {
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  highlighted?: boolean;
  cta: string;
}

export interface Testimonial {
  quote: string;
  author: string;
  role: string;
  company: string;
}
