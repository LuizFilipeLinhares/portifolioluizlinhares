import React from 'react';
import { motion } from 'framer-motion';
import { Github, ArrowUpRight } from 'lucide-react';
import { Project } from '../types/portfolio';
import { SkillBadge } from './ui/SkillBadge';

interface ProjectCardProps {
  project: Project;
  isFeatured?: boolean;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, isFeatured = false }) => {
  return (
    <motion.div
      whileHover={{ y: -3, scale: 1.01 }}
      transition={{ duration: 0.2, ease: 'easeOut' }}
      className={`rounded-lg border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 p-5 flex flex-col justify-between space-y-4 shadow-2xs hover:shadow-xs transition-shadow ${
        isFeatured ? 'md:col-span-2' : ''
      }`}
    >
      <div className="space-y-2">
        <div className="flex items-center justify-between text-xs font-mono text-neutral-500 dark:text-neutral-400">
          <span>{project.categoryLabel}</span>
          {project.statusBadge && (
            <span className="text-blue-600 dark:text-blue-400">{project.statusBadge}</span>
          )}
        </div>

        <h3 className="text-base font-bold text-neutral-900 dark:text-white leading-snug">
          {project.title}
        </h3>

        <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 line-clamp-2 leading-relaxed">
          {project.shortDescription}
        </p>
      </div>

      <div className="space-y-3 pt-2">
        {/* Tecnologias */}
        <div className="flex flex-wrap gap-1.5">
          {project.technologies.map((tech) => (
            <SkillBadge key={tech} name={tech} />
          ))}
        </div>

        {/* Links */}
        <div className="pt-2 border-t border-neutral-100 dark:border-neutral-800 flex items-center justify-between text-xs">
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-neutral-700 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white font-medium transition-colors"
          >
            <Github className="w-3.5 h-3.5" />
            <span>Repositório GitHub</span>
          </a>

          {project.liveUrl && (
            <a
              href={project.liveUrl}
              className="inline-flex items-center gap-1 text-blue-600 dark:text-blue-400 hover:underline font-medium"
            >
              <span>Ver detalhes</span>
              <ArrowUpRight className="w-3 h-3" />
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};
