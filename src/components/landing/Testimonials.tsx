import { Card } from '../ui';
import { TESTIMONIALS } from '../../config/site';

export function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-white">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900">Loved by teams everywhere</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t) => (
            <Card key={t.author} padding="lg">
              <blockquote className="text-gray-700 text-sm leading-relaxed">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <div className="mt-4 pt-4 border-t border-gray-100">
                <p className="font-semibold text-gray-900 text-sm">{t.author}</p>
                <p className="text-gray-500 text-xs">{t.role}, {t.company}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
