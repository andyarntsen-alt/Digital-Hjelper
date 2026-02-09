'use client';

import { ChevronDownIcon } from '@/components/icons';

interface CollapsibleSectionProps {
  title: string;
  children: React.ReactNode;
  className?: string;
  variant?: 'default' | 'green' | 'blue' | 'yellow';
}

const variantClasses = {
  default: 'bg-gray-50 border-gray-200',
  green: 'bg-green-50 border-green-200',
  blue: 'bg-blue-50 border-blue-200',
  yellow: 'bg-yellow-50 border-yellow-200',
};

export default function CollapsibleSection({
  title,
  children,
  className = '',
  variant = 'default',
}: CollapsibleSectionProps) {
  return (
    <details className={`border rounded-xl group ${variantClasses[variant]} ${className}`}>
      <summary className="cursor-pointer list-none flex justify-between items-center p-4 sm:p-5 select-none">
        <h2 className="text-lg font-semibold text-gray-900">{title}</h2>
        <ChevronDownIcon className="h-5 w-5 text-gray-400 transform transition-transform group-open:rotate-180 flex-shrink-0" />
      </summary>
      <div className="px-4 sm:px-5 pb-4 sm:pb-5">
        {children}
      </div>
    </details>
  );
}
