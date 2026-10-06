import React from 'react';
import { ArrowUp, Github, Linkedin, Mail } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-950 py-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pb-6 border-b border-neutral-100 dark:border-neutral-900">
          <div>
            <div className="font-semibold text-sm text-neutral-900 dark:text-white">
              {PERSONAL_INFO.name}
            </div>
            <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-0.5">
              Engenharia de software focada em qualidade de código, automação de testes e soluções eficientes.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="p-1.5 text-neutral-500 hover:text-neutral-900 dark:hover:text-white transition-colors"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="p-1.5 text-neutral-500 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              aria-label="E-mail"
              className="p-1.5 text-neutral-500 hover:text-neutral-900 dark:hover:text-white transition-colors"
            >
              <Mail className="w-4 h-4" />
            </a>

            <div className="h-3 w-px bg-neutral-200 dark:bg-neutral-800 mx-1" />

            <button
              type="button"
              onClick={scrollToTop}
              className="inline-flex items-center gap-1 text-xs text-neutral-500 hover:text-neutral-900 dark:hover:text-white transition-colors cursor-pointer"
            >
              <span>Topo</span>
              <ArrowUp className="w-3 h-3" />
            </button>
          </div>
        </div>

        <div className="pt-4 flex flex-col sm:flex-row items-center justify-between text-[11px] text-neutral-400 dark:text-neutral-500 font-mono gap-2">
          <div>&copy; {currentYear} {PERSONAL_INFO.name}. Todos os direitos reservados.</div>
          <div>{PERSONAL_INFO.email} · {PERSONAL_INFO.location}</div>
        </div>
      </div>
    </footer>
  );
};
