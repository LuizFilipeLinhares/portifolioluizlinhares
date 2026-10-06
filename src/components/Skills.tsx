import React from 'react';
import { SKILL_GROUPS } from '../data/portfolioData';
import { Section } from './ui/Section';
import { SkillBadge } from './ui/SkillBadge';

export const Skills: React.FC = () => {
  return (
    <Section id="competencias">
      <div className="space-y-8">
        {/* Section Header */}
        <div className="space-y-1">
          <div className="text-xs font-mono text-neutral-500 dark:text-neutral-400">
            02 / COMPETÊNCIAS
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-neutral-900 dark:text-white">
            Competências
          </h2>
          <p className="text-sm text-neutral-600 dark:text-neutral-400">
            Tecnologias e ferramentas organizadas por área.
          </p>
        </div>

        {/* Grouped Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {SKILL_GROUPS.map((group) => (
            <div
              key={group.id}
              className="p-5 rounded-lg border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 space-y-3"
            >
              <h3 className="text-xs font-mono uppercase tracking-wider text-neutral-500 dark:text-neutral-400 font-semibold">
                {group.category}
              </h3>

              {/* Discrete Badges */}
              <div className="flex flex-wrap gap-1.5">
                {group.skills.map((skill) => (
                  <SkillBadge
                    key={skill.name}
                    name={skill.name}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};
