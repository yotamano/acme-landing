import { Card } from '../ui';

const FEATURES = [
  {
    title: 'Zone Ownership',
    description: 'Every team member gets their own territory. Designers own components and styles, PMs own content and config. No stepping on toes.',
    icon: '🗂',
  },
  {
    title: 'AI Conflict Resolution',
    description: 'When changes overlap, our AI merges them intelligently — with plain-language explanations so non-technical users understand what happened.',
    icon: '🤖',
  },
  {
    title: 'Save / Publish / Sync',
    description: 'A simple 3-step mental model that replaces git\'s complexity. Save your work, publish to the team, sync their latest changes.',
    icon: '🔄',
  },
  {
    title: 'Design System Guardrails',
    description: 'Keep your tokens, spacing, and color palette consistent. Conductor feeds your design system conventions to every agent.',
    icon: '🎨',
  },
  {
    title: 'Real-Time Awareness',
    description: 'See who\'s working on what, get notified of overlapping changes, and coordinate without meetings.',
    icon: '👀',
  },
  {
    title: 'Works With Any AI Agent',
    description: 'MCP-native protocol works with Claude, Cursor, Copilot, and any agent that speaks the standard.',
    icon: '🔌',
  },
];

export function Features() {
  return (
    <section id="features" className="py-24 bg-white">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900">Everything your team needs</h2>
          <p className="mt-4 text-lg text-gray-600">
            A coordination layer purpose-built for AI-native, cross-functional teams.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {FEATURES.map((f) => (
            <Card key={f.title} padding="lg">
              <div className="text-3xl mb-4">{f.icon}</div>
              <h3 className="text-lg font-semibold text-gray-900">{f.title}</h3>
              <p className="mt-2 text-gray-600 text-sm leading-relaxed">{f.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
