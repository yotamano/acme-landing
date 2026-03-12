import type { NavItem, PricingTier, Testimonial } from '../types';

export const SITE_NAME = 'Acme';
export const SITE_TAGLINE = 'Ship products faster with your whole team.';
export const SITE_DESCRIPTION =
  'Acme is the modern collaboration platform that brings designers, PMs, and developers together — powered by AI.';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Features', href: '#features' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Dashboard', href: '/dashboard' },
];

export const PRICING_TIERS: PricingTier[] = [
  {
    name: 'Starter',
    price: '$0',
    period: '/month',
    description: 'For individuals and small side projects.',
    features: ['Up to 3 projects', '1 team member', 'Basic analytics', 'Community support'],
    cta: 'Get Started Free',
  },
  {
    name: 'Pro',
    price: '$29',
    period: '/month',
    description: 'For growing teams shipping real products.',
    features: [
      'Unlimited projects',
      'Up to 10 members',
      'AI-powered merge',
      'Zone ownership',
      'Priority support',
    ],
    highlighted: true,
    cta: 'Start Pro Trial',
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: '',
    description: 'For organizations with advanced compliance needs.',
    features: [
      'Everything in Pro',
      'Unlimited members',
      'SSO & SAML',
      'Audit logs',
      'Dedicated success manager',
      'SLA guarantee',
    ],
    cta: 'Contact Sales',
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    quote: 'Acme let our designers push CSS changes directly — no more Figma-to-code bottleneck.',
    author: 'Sarah Chen',
    role: 'Design Lead',
    company: 'Vercel',
  },
  {
    quote: 'Our PMs update copy and feature flags without waiting for a sprint. Absolute game changer.',
    author: 'Alex Rivera',
    role: 'Product Manager',
    company: 'Linear',
  },
  {
    quote: 'The AI merge resolved 94% of our conflicts automatically. We ship 3x faster now.',
    author: 'Jordan Park',
    role: 'Engineering Manager',
    company: 'Stripe',
  },
];
