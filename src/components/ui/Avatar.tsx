interface AvatarProps {
  name: string;
  src?: string;
  size?: 'sm' | 'md' | 'lg';
}

const sizeStyles = {
  sm: 'w-6 h-6 text-xs',
  md: 'w-8 h-8 text-sm',
  lg: 'w-10 h-10 text-base',
};

const colors = [
  'bg-indigo-500', 'bg-emerald-500', 'bg-amber-500',
  'bg-rose-500', 'bg-cyan-500', 'bg-purple-500',
];

function getInitials(name: string): string {
  return name.split(' ').map(n => n[0]).join('').toUpperCase().slice(0, 2);
}

function getColor(name: string): string {
  let hash = 0;
  for (const ch of name) hash = ch.charCodeAt(0) + ((hash << 5) - hash);
  return colors[Math.abs(hash) % colors.length];
}

export function Avatar({ name, src, size = 'md' }: AvatarProps) {
  if (src) {
    return <img src={src} alt={name} className={`${sizeStyles[size]} rounded-full object-cover`} />;
  }
  return (
    <div className={`${sizeStyles[size]} ${getColor(name)} rounded-full flex items-center justify-center text-white font-medium`}>
      {getInitials(name)}
    </div>
  );
}
