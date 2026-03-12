import { Card } from '../ui';
import type { Metric } from '../../types';

interface MetricCardProps {
  metric: Metric;
}

export function MetricCard({ metric }: MetricCardProps) {
  const trendColor = metric.trend === 'up' ? 'text-green-600' : metric.trend === 'down' ? 'text-red-600' : 'text-gray-500';
  const arrow = metric.trend === 'up' ? '↑' : metric.trend === 'down' ? '↓' : '→';

  return (
    <Card>
      <p className="text-sm font-medium text-gray-500">{metric.label}</p>
      <div className="mt-2 flex items-baseline gap-2">
        <p className="text-3xl font-bold text-gray-900">{metric.value}</p>
        <span className={`text-sm font-medium ${trendColor}`}>
          {arrow} {Math.abs(metric.change)}%
        </span>
      </div>
    </Card>
  );
}
