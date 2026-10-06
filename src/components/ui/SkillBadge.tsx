import React from 'react';

interface SkillBadgeProps {
  name: string;
  highlight?: boolean;
}

export const SkillBadge: React.FC<SkillBadgeProps> = ({ name, highlight }) => {
  return (
    <span
      className={`inline-flex items-center px-2.5 py-1 rounded text-xs font-mono transition-colors ${
        highlight
          ? 'bg-blue-50 text-blue-700 border border-blue-200 dark:bg-blue-950/40 dark:text-blue-300 dark:border-blue-900/60 font-medium'
          : 'bg-neutral-100 text-neutral-800 border border-neutral-200/80 dark:bg-neutral-900 dark:text-neutral-300 dark:border-neutral-800'
      }`}
    >
      {name}
    </span>
  );
};
