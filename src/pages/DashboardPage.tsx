import { Sidebar } from '../components/dashboard/Sidebar';
import { MetricCard } from '../components/dashboard/MetricCard';
import { ProjectTable } from '../components/dashboard/ProjectTable';
import { DASHBOARD_METRICS, SAMPLE_PROJECTS } from '../config/dashboard';

export function DashboardPage() {
  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar />
      <main className="flex-1 p-8">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
          <p className="text-gray-600 mt-1">Welcome back. Here&apos;s what&apos;s happening today.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {DASHBOARD_METRICS.map((metric) => (
            <MetricCard key={metric.label} metric={metric} />
          ))}
        </div>
        <ProjectTable projects={SAMPLE_PROJECTS} />
      </main>
    </div>
  );
}
