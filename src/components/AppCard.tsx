import React from 'react';
import { LucideIcon } from 'lucide-react';

interface AppCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  link: string;
  color: string;
}

export function AppCard({ title, description, icon, link, color }: AppCardProps) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative rounded-xl overflow-hidden shadow-lg transform transition-all duration-300 hover:scale-105"
    >
      <div className={`absolute inset-0 bg-gradient-to-br ${color} opacity-90 group-hover:opacity-100 transition-opacity backdrop-blur-sm`} />
      <div className="relative p-8">
        <div className="flex items-center justify-between mb-4">
          <div className="p-2 bg-white/10 rounded-lg backdrop-blur-sm">
            {icon}
          </div>
        </div>
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-200">{description}</p>
      </div>
    </a>
  );
}