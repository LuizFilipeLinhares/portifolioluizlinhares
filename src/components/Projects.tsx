import React, { useState } from 'react';
import { PROJECTS } from '../data/portfolioData';
import { ProjectCategory } from '../types/portfolio';
import { Section } from './ui/Section';
import { ProjectCard } from './ProjectCard';

export const Projects: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>('todos');

  const filteredProjects =
    activeCategory === 'todos'
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === activeCategory);

  const categories = [
    { id: 'todos', label: 'Todos' },
    { id: 'desenvolvimento', label: 'Desenvolvimento' },
    { id: 'qa', label: 'QA & DevOps' },
  ];

  return (
    <Section id="projetos">
      <div className="space-y-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div className="space-y-1">
            <div className="text-xs font-mono text-neutral-500 dark:text-neutral-400">
              03 / PROJETOS
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-neutral-900 dark:text-white">
              Projetos
            </h2>
            <p className="text-sm text-neutral-600 dark:text-neutral-400">
              Projetos práticos em desenvolvimento full-stack, automação de testes e DevOps.
            </p>
          </div>

          {/* Clean Segmented Category Tabs */}
          <div className="flex items-center gap-1 p-1 bg-neutral-100 dark:bg-neutral-900 rounded-md border border-neutral-200 dark:border-neutral-800 overflow-x-auto self-start sm:self-auto">
            {categories.map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveCategory(tab.id as ProjectCategory)}
                className={`px-3 py-1.5 text-xs font-medium rounded transition-colors whitespace-nowrap cursor-pointer ${
                  activeCategory === tab.id
                    ? 'bg-white dark:bg-neutral-800 text-neutral-900 dark:text-white shadow-2xs font-semibold'
                    : 'text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              isFeatured={project.featured && activeCategory === 'todos'}
            />
          ))}
        </div>
      </div>
    </Section>
  );
};
