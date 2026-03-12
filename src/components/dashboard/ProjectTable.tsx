import { Badge, ProgressBar, Avatar, Card } from '../ui';
import type { Project } from '../../types';

interface ProjectTableProps {
  projects: Project[];
}

const statusVariant = {
  active: 'success' as const,
  paused: 'warning' as const,
  completed: 'info' as const,
};

export function ProjectTable({ projects }: ProjectTableProps) {
  return (
    <Card padding="none">
      <div className="px-6 py-4 border-b border-gray-200">
        <h3 className="text-lg font-semibold text-gray-900">Projects</h3>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-gray-100">
              <th className="text-left text-xs font-medium text-gray-500 uppercase tracking-wider px-6 py-3">Name</th>
              <th className="text-left text-xs font-medium text-gray-500 uppercase tracking-wider px-6 py-3">Status</th>
              <th className="text-left text-xs font-medium text-gray-500 uppercase tracking-wider px-6 py-3">Progress</th>
              <th className="text-left text-xs font-medium text-gray-500 uppercase tracking-wider px-6 py-3">Team</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {projects.map((project) => (
              <tr key={project.id} className="hover:bg-gray-50 transition-colors">
                <td className="px-6 py-4">
                  <p className="text-sm font-medium text-gray-900">{project.name}</p>
                  <p className="text-xs text-gray-500">Created {project.createdAt}</p>
                </td>
                <td className="px-6 py-4">
                  <Badge variant={statusVariant[project.status]}>{project.status}</Badge>
                </td>
                <td className="px-6 py-4 w-40">
                  <div className="flex items-center gap-2">
                    <ProgressBar value={project.progress} />
                    <span className="text-xs text-gray-500 w-8">{project.progress}%</span>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <div className="flex -space-x-2">
                    {project.members.map((m) => (
                      <Avatar key={m} name={m} size="sm" />
                    ))}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Card>
  );
}
