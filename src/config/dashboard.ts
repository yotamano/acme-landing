import type { Metric, Project } from '../types';

export const DASHBOARD_METRICS: Metric[] = [
  { label: 'Active Projects', value: '12', change: 8.2, trend: 'up' },
  { label: 'Team Members', value: '24', change: 4.1, trend: 'up' },
  { label: 'Deploys This Week', value: '47', change: -2.3, trend: 'down' },
  { label: 'Merge Success Rate', value: '96%', change: 1.8, trend: 'up' },
];

export const SAMPLE_PROJECTS: Project[] = [
  {
    id: 'proj-001',
    name: 'Marketing Redesign',
    status: 'active',
    progress: 72,
    members: ['sarah', 'alex', 'jordan'],
    createdAt: '2025-11-15',
  },
  {
    id: 'proj-002',
    name: 'Checkout Flow v2',
    status: 'active',
    progress: 45,
    members: ['sarah', 'mike'],
    createdAt: '2025-12-01',
  },
  {
    id: 'proj-003',
    name: 'Admin Dashboard',
    status: 'paused',
    progress: 88,
    members: ['jordan', 'alex'],
    createdAt: '2025-10-20',
  },
  {
    id: 'proj-004',
    name: 'Onboarding Wizard',
    status: 'completed',
    progress: 100,
    members: ['sarah', 'alex', 'mike', 'jordan'],
    createdAt: '2025-09-10',
  },
];
