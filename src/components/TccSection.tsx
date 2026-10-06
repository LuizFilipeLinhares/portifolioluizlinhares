import React from 'react';
import { motion, useInView, animate } from 'framer-motion';
import { TCC_CASE_STUDY } from '../data/portfolioData';
import { Section } from './ui/Section';
import { Github, GitBranch, ShieldCheck, TestTube2, BadgeCheck } from 'lucide-react';
import { SkillBadge } from './ui/SkillBadge';
import { PERSONAL_INFO } from '../data/portfolioData';

const STEP_ICONS = [GitBranch, ShieldCheck, TestTube2, BadgeCheck];

const AnimatedMetric: React.FC<{ value: string }> = ({ value }) => {
  const ref = React.useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.6 });
  const [display, setDisplay] = React.useState(value);

  // Extrai a parte numérica (ex.: "12", "~8s", "~1min35s") para animar a contagem
  const numericMatch = value.match(/\d+/);

  React.useEffect(() => {
    if (!isInView || !numericMatch) {
      setDisplay(value);
      return;
    }
    const target = parseInt(numericMatch[0], 10);
    const controls = animate(0, target, {
      duration: 1.1,
      ease: 'easeOut',
      onUpdate: (latest) => {
        setDisplay(value.replace(numericMatch[0], String(Math.round(latest))));
      },
    });
    return () => controls.stop();
  }, [isInView]);

  return <span ref={ref}>{display}</span>;
};

export const TccSection: React.FC = () => {
  return (
    <Section id="tcc">
      <div className="max-w-4xl space-y-8">
        {/* Section Header */}
        <div className="space-y-1">
          <div className="text-xs font-mono text-neutral-500 dark:text-neutral-400">
            04 / TCC &amp; PESQUISA
          </div>
          <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-neutral-900 dark:text-white">
            {TCC_CASE_STUDY.title}
          </h2>
          <p className="text-xs sm:text-sm font-mono text-neutral-500 dark:text-neutral-400">
            {TCC_CASE_STUDY.subtitle} · {TCC_CASE_STUDY.status}
          </p>
        </div>

        {/* Problema & abordagem */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div className="p-4 rounded-lg border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 space-y-1.5">
            <span className="text-[11px] font-mono font-semibold uppercase tracking-wider text-neutral-400 dark:text-neutral-500">
              Problema
            </span>
            <p className="text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed">
              {TCC_CASE_STUDY.problem}
            </p>
          </div>
          <div className="p-4 rounded-lg border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 space-y-1.5">
            <span className="text-[11px] font-mono font-semibold uppercase tracking-wider text-neutral-400 dark:text-neutral-500">
              Abordagem
            </span>
            <p className="text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed">
              {TCC_CASE_STUDY.approach}
            </p>
          </div>
        </div>

        {/* Pipeline de arquitetura */}
        {TCC_CASE_STUDY.architectureSteps.length > 0 && (
          <div className="space-y-3">
            <span className="text-xs font-mono text-neutral-500 dark:text-neutral-400 font-semibold uppercase tracking-wider">
              Esteira de CI/CD
            </span>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
              {TCC_CASE_STUDY.architectureSteps.map((step, i) => {
                const Icon = STEP_ICONS[i % STEP_ICONS.length];
                return (
                  <motion.div
                    key={step.number}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.35, delay: i * 0.08 }}
                    className="relative p-3.5 rounded-lg border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 space-y-1.5"
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-[10px] text-neutral-400">{step.number}</span>
                      <Icon className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
                    </div>
                    <div className="text-sm font-semibold text-neutral-900 dark:text-white">
                      {step.title}
                    </div>
                    <p className="text-[11px] text-neutral-500 dark:text-neutral-400 leading-snug">
                      {step.description}
                    </p>
                    {i < TCC_CASE_STUDY.architectureSteps.length - 1 && (
                      <span className="hidden lg:block absolute top-1/2 -right-3 w-3 h-px bg-neutral-300 dark:bg-neutral-700" />
                    )}
                  </motion.div>
                );
              })}
            </div>
          </div>
        )}

        {/* Indicadores-chave, com contagem animada */}
        {TCC_CASE_STUDY.keyIndicators.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
            {TCC_CASE_STUDY.keyIndicators.map((ind) => (
              <div
                key={ind.label}
                className="p-4 rounded-lg border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-950 text-center space-y-1"
                title={ind.explanation}
              >
                <div className="font-mono text-2xl sm:text-3xl font-bold text-blue-600 dark:text-blue-400">
                  <AnimatedMetric value={ind.metric} />
                </div>
                <div className="text-xs text-neutral-600 dark:text-neutral-400">{ind.label}</div>
              </div>
            ))}
          </div>
        )}

        {/* Tecnologias utilizadas */}
        <div className="space-y-2 pt-2">
          <span className="text-xs font-mono text-neutral-500 dark:text-neutral-400 font-semibold uppercase tracking-wider">
            Tecnologias Utilizadas
          </span>
          <div className="flex flex-wrap gap-1.5">
            {TCC_CASE_STUDY.technologies.map((t) => (
              <SkillBadge key={t.name} name={t.name} />
            ))}
          </div>
        </div>

        {TCC_CASE_STUDY.conclusionNote && (
          <p className="text-xs text-neutral-500 dark:text-neutral-400 italic">
            {TCC_CASE_STUDY.conclusionNote}
          </p>
        )}

        {/* Link para repositório */}
        <div className="pt-2">
          <a
            href={`${PERSONAL_INFO.github}/tcc-devops-testes`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-medium text-neutral-800 dark:text-neutral-200 bg-neutral-100 hover:bg-neutral-200 dark:bg-neutral-800 dark:hover:bg-neutral-700 border border-neutral-200 dark:border-neutral-700 rounded-md transition-colors"
          >
            <Github className="w-3.5 h-3.5" />
            <span>Repositório do Projeto no GitHub</span>
          </a>
        </div>
      </div>
    </Section>
  );
};
