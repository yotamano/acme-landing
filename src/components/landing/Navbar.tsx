import { Button } from '../ui';
import { SITE_NAME, NAV_ITEMS } from '../../config/site';

export function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
      <div className="mx-auto max-w-6xl px-6 flex items-center justify-between h-16">
        <a href="/" className="text-xl font-bold text-gray-900">{SITE_NAME}</a>
        <div className="hidden md:flex items-center gap-8">
          {NAV_ITEMS.map((item) => (
            <a key={item.label} href={item.href} className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
              {item.label}
            </a>
          ))}
        </div>
        <div className="flex items-center gap-3">
          <Button variant="ghost" size="sm">Sign In</Button>
          <Button size="sm">Get Started</Button>
        </div>
      </div>
    </nav>
  );
}
