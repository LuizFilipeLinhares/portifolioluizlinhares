import React from 'react';
import { X, Printer, Download, Mail, Github, Linkedin, ExternalLink, CheckCircle2 } from 'lucide-react';
import { PERSONAL_INFO, TIMELINE, SKILL_GROUPS, CERTIFICATIONS, TCC_CASE_STUDY } from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/70 backdrop-blur-xs overflow-y-auto">
      <div className="relative w-full max-w-4xl bg-white dark:bg-neutral-900 border border-neutral-300 dark:border-neutral-800 rounded-2xl shadow-2xl max-h-[92vh] flex flex-col overflow-hidden">
        {/* Modal Controls Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-950/70">
          <div className="flex items-center gap-2 text-xs font-mono text-neutral-500 dark:text-neutral-400">
            <span>DOCUMENTO PROFISSIONAL</span>
            <span aria-hidden="true">·</span>
            <span>CURRÍCULO SINTÉTICO</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-neutral-700 dark:text-neutral-300 bg-white dark:bg-neutral-900 border border-neutral-300 dark:border-neutral-700 rounded-md hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors cursor-pointer"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Imprimir / Salvar PDF</span>
            </button>
            <button
              type="button"
              onClick={onClose}
              aria-label="Fechar currículo"
              className="p-1.5 text-neutral-400 hover:text-neutral-900 dark:hover:text-white rounded-md hover:bg-neutral-200 dark:hover:bg-neutral-800 cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable Resume Body */}
        <div className="p-6 sm:p-10 overflow-y-auto space-y-8 print:p-0 print:m-0 text-neutral-900 dark:text-neutral-100">
          {/* Header */}
          <div className="border-b border-neutral-200 dark:border-neutral-800 pb-6 space-y-2">
            <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-neutral-900 dark:text-white">
              {PERSONAL_INFO.name}
            </h1>
            <p className="text-sm font-medium text-blue-600 dark:text-blue-400">
              {PERSONAL_INFO.headline}
            </p>
            <div className="flex flex-wrap items-center gap-4 text-xs text-neutral-600 dark:text-neutral-400 font-mono pt-1">
              <span>{PERSONAL_INFO.email}</span>
              <span aria-hidden="true">·</span>
              <span>{PERSONAL_INFO.location}</span>
              <span aria-hidden="true">·</span>
              <a href={PERSONAL_INFO.github} target="_blank" rel="noreferrer" className="hover:underline">
                GitHub
              </a>
              <span aria-hidden="true">·</span>
              <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noreferrer" className="hover:underline">
                LinkedIn
              </a>
            </div>
          </div>

          {/* Profile Summary */}
          <div className="space-y-2">
            <h2 className="text-xs font-bold font-mono uppercase tracking-wider text-neutral-400 dark:text-neutral-500">
              Resumo Profissional
            </h2>
            <p className="text-xs sm:text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed">
              {PERSONAL_INFO.shortBio}
            </p>
          </div>

          {/* Academic & Professional Trajectory */}
          <div className="space-y-4">
            <h2 className="text-xs font-bold font-mono uppercase tracking-wider text-neutral-400 dark:text-neutral-500">
              Trajetória Profissional &amp; Formação
            </h2>
            <div className="space-y-4">
              {TIMELINE.map((item) => (
                <div key={item.id} className="space-y-1">
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between text-xs">
                    <span className="font-bold text-neutral-900 dark:text-white text-sm">
                      {item.title} — <span className="font-medium text-neutral-600 dark:text-neutral-400">{item.institution}</span>
                    </span>
                    <span className="font-mono text-neutral-500">{item.period}</span>
                  </div>
                  <p className="text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed">
                    {item.description}
                  </p>
                  <ul className="space-y-0.5 pt-1 text-xs text-neutral-600 dark:text-neutral-300 list-disc list-inside">
                    {item.responsibilities.map((resp, i) => (
                      <li key={i}>{resp}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Academic Highlight: TCC */}
          <div className="space-y-2 p-4 rounded-lg bg-neutral-50 dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-800">
            <h2 className="text-xs font-bold font-mono uppercase tracking-wider text-blue-600 dark:text-blue-400">
              Projeto / Pesquisa Acadêmica de Destaque (TCC)
            </h2>
            <div className="font-bold text-sm text-neutral-900 dark:text-white">
              {TCC_CASE_STUDY.title}
            </div>
            <p className="text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed">
              {TCC_CASE_STUDY.approach}
            </p>
          </div>

          {/* Core Technical Skills */}
          <div className="space-y-3">
            <h2 className="text-xs font-bold font-mono uppercase tracking-wider text-neutral-400 dark:text-neutral-500">
              Competências Técnicas
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              {SKILL_GROUPS.map((group) => (
                <div key={group.id} className="p-3 rounded border border-neutral-200 dark:border-neutral-800 bg-neutral-50/50 dark:bg-neutral-950/40">
                  <div className="font-bold text-neutral-900 dark:text-white mb-1">
                    {group.category}
                  </div>
                  <div className="text-neutral-600 dark:text-neutral-400 font-mono text-[11px] leading-relaxed">
                    {group.skills.map((s) => s.name).join(' · ')}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div className="space-y-2">
            <h2 className="text-xs font-bold font-mono uppercase tracking-wider text-neutral-400 dark:text-neutral-500">
              Certificações &amp; Cursos
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
              {CERTIFICATIONS.map((cert) => (
                <div key={cert.id} className="flex items-start justify-between py-1 border-b border-neutral-100 dark:border-neutral-800">
                  <span className="font-medium text-neutral-900 dark:text-white">{cert.title}</span>
                  <span className="font-mono text-neutral-500 shrink-0 ml-2">{cert.date}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
