import React from 'react';
import { TIMELINE } from '../data/portfolioData';
import { Section } from './ui/Section';

export const Experience: React.FC = () => {
  return (
    <Section id="experiencia">
      <div className="space-y-8">
        {/* Section Header */}
        <div className="space-y-1">
          <div className="text-xs font-mono text-neutral-500 dark:text-neutral-400">
            05 / EXPERIÊNCIA &amp; FORMAÇÃO
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-neutral-900 dark:text-white">
            Experiência &amp; Formação
          </h2>
        </div>

        {/* Clean Minimal List */}
        <div className="border-l border-neutral-200 dark:border-neutral-800 ml-2 sm:ml-3 pl-5 sm:pl-6 space-y-8">
          {TIMELINE.map((item) => (
            <div key={item.id} className="relative space-y-1.5">
              {/* Dot */}
              <div className="absolute -left-[25px] sm:-left-[29px] top-1.5 w-2.5 h-2.5 rounded-full bg-neutral-900 dark:bg-white" />

              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                <div>
                  <h3 className="text-base font-semibold text-neutral-900 dark:text-white">
                    {item.title}
                  </h3>
                  <div className="text-xs text-neutral-500 dark:text-neutral-400 font-mono">
                    {item.institution}
                  </div>
                </div>

                <div className="text-xs font-mono text-neutral-500 dark:text-neutral-400">
                  {item.period}
                </div>
              </div>

              <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed pt-0.5">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};
