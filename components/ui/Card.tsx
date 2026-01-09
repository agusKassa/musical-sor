import { ReactNode } from 'react';
import { LucideIcon } from 'lucide-react';

interface CardProps {
  icon?: LucideIcon;
  title: string;
  children: ReactNode;
}

export function Card({ icon: Icon, title, children }: CardProps) {
  return (
    <div className="bg-card p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
      <div className="flex items-center gap-4 mb-4">
        {Icon && (
          <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
            <Icon className="w-6 h-6 text-primary" />
          </div>
        )}
        <h3 className="text-xl font-semibold">{title}</h3>
      </div>
      <div className="text-muted-foreground">{children}</div>
    </div>
  );
}
