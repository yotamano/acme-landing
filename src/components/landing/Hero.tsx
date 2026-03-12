import { Button } from '../ui';
import { SITE_TAGLINE, SITE_DESCRIPTION } from '../../config/site';

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-indigo-50 to-white py-24 sm:py-32">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <h1 className="text-5xl font-bold tracking-tight text-gray-900 sm:text-6xl">
          {SITE_TAGLINE}
        </h1>
        <p className="mt-6 text-lg leading-8 text-gray-600 max-w-2xl mx-auto">
          {SITE_DESCRIPTION}
        </p>
        <div className="mt-10 flex items-center justify-center gap-4">
          <Button size="lg">Start Building Free</Button>
          <Button variant="secondary" size="lg">Watch Demo</Button>
        </div>
      </div>
    </section>
  );
}
