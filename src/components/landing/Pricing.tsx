import { Button, Card } from '../ui';
import { PRICING_TIERS } from '../../config/site';

export function Pricing() {
  return (
    <section id="pricing" className="py-24 bg-gray-50">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900">Simple, transparent pricing</h2>
          <p className="mt-4 text-lg text-gray-600">Start free. Scale as your team grows.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {PRICING_TIERS.map((tier) => (
            <Card
              key={tier.name}
              padding="lg"
              className={tier.highlighted ? 'ring-2 ring-indigo-600 relative' : ''}
            >
              {tier.highlighted && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-indigo-600 text-white text-xs font-medium px-3 py-1 rounded-full">
                  Most Popular
                </div>
              )}
              <h3 className="text-lg font-semibold text-gray-900">{tier.name}</h3>
              <div className="mt-4 flex items-baseline">
                <span className="text-4xl font-bold text-gray-900">{tier.price}</span>
                {tier.period && <span className="ml-1 text-gray-500">{tier.period}</span>}
              </div>
              <p className="mt-2 text-sm text-gray-600">{tier.description}</p>
              <ul className="mt-6 space-y-3">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-start text-sm text-gray-700">
                    <span className="text-indigo-600 mr-2 mt-0.5">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
              <Button
                variant={tier.highlighted ? 'primary' : 'secondary'}
                className="w-full mt-8"
              >
                {tier.cta}
              </Button>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
