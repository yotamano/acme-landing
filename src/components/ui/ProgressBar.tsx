interface ProgressBarProps {
  value: number;
  max?: number;
  size?: 'sm' | 'md';
  color?: 'indigo' | 'green' | 'yellow' | 'red';
}

const colorStyles = {
  indigo: 'bg-indigo-600',
  green: 'bg-green-500',
  yellow: 'bg-yellow-500',
  red: 'bg-red-500',
};

const sizeStyles = {
  sm: 'h-1.5',
  md: 'h-2.5',
};

export function ProgressBar({ value, max = 100, size = 'sm', color = 'indigo' }: ProgressBarProps) {
  const pct = Math.min(100, Math.max(0, (value / max) * 100));
  return (
    <div className={`w-full bg-gray-200 rounded-full overflow-hidden ${sizeStyles[size]}`}>
      <div
        className={`${colorStyles[color]} ${sizeStyles[size]} rounded-full transition-all duration-300`}
        style={{ width: `${pct}%` }}
      />
    </div>
  );
}
