import React from 'react';
import { ABOUT_DETAILS } from '../data/portfolioData';
import { Section } from './ui/Section';

export const About: React.FC = () => {
  return (
    <Section id="sobre">
      <div className="max-w-3xl space-y-6">
        {/* Section Header */}
        <div className="space-y-1">
          <div className="text-xs font-mono text-neutral-500 dark:text-neutral-400">
            01 / SOBRE MIM
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-neutral-900 dark:text-white">
            Sobre mim
          </h2>
        </div>

        {/* Único parágrafo direto e natural */}
        <p className="text-base text-neutral-700 dark:text-neutral-300 leading-relaxed">
          {ABOUT_DETAILS.text}
        </p>

        {/* Resumo objetivo */}
        <div className="pt-4 border-t border-neutral-200/80 dark:border-neutral-800/80 grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
          {ABOUT_DETAILS.highlights.map((item) => (
            <div key={item.label} className="space-y-1">
              <span className="font-mono text-neutral-500 dark:text-neutral-400">
                {item.label}
              </span>
              <p className="font-medium text-neutral-900 dark:text-white">
                {item.value}
              </p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};
