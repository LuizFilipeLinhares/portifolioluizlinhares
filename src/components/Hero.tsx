import React, { useState, useEffect } from 'react';
import { motion, useMotionValue, useSpring, useTransform, useReducedMotion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { ArrowDown, Github, Linkedin, Mail, Camera, User } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { Button } from './ui/Button';

interface HeroProps {
  onScrollToProjects: () => void;
  onScrollToContact: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onScrollToProjects, onScrollToContact }) => {
  const shouldReduceMotion = useReducedMotion();
  const [isDesktop, setIsDesktop] = useState(false);

  // Subtle mouse-following coordinate physics for the single special geometric accent
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 30, stiffness: 100, mass: 0.5 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  // Very subtle parallax displacement: maximum 10px shift
  const accentTranslateX = useTransform(smoothX, [-0.5, 0.5], [-10, 10]);
  const accentTranslateY = useTransform(smoothY, [-0.5, 0.5], [-10, 10]);

  useEffect(() => {
    const checkDesktop = () => {
      setIsDesktop(window.innerWidth >= 1024 && !window.matchMedia('(pointer: coarse)').matches);
    };

    checkDesktop();
    window.addEventListener('resize', checkDesktop);

    const handleMouseMove = (e: MouseEvent) => {
      if (!isDesktop || shouldReduceMotion) return;
      // Normalize mouse coordinates from -0.5 to 0.5 across the viewport
      const x = e.clientX / window.innerWidth - 0.5;
      const y = e.clientY / window.innerHeight - 0.5;
      mouseX.set(x);
      mouseY.set(y);
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('resize', checkDesktop);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [isDesktop, shouldReduceMotion, mouseX, mouseY]);

  return (
    <section id="inicio" className="min-h-[85vh] flex items-center pt-24 pb-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Lado Esquerdo: Identidade, Cargo, Apresentação e Botões (7 Colunas) */}
          <div className="lg:col-span-7 space-y-6">
            {/* Status / Área */}
            <motion.div
              initial={shouldReduceMotion ? false : { opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="flex items-center gap-2 text-xs font-mono text-neutral-500 dark:text-neutral-400"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-500" />
              <span>Engenharia de Software</span>
              <span aria-hidden="true">·</span>
              <span>Full-stack</span>
              <span aria-hidden="true">·</span>
              <span>DevOps &amp; QA</span>
            </motion.div>

            {/* Nome & Cargo */}
            <motion.div
              initial={shouldReduceMotion ? false : { opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.1 }}
              className="space-y-2"
            >
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-neutral-900 dark:text-white leading-[1.15]">
                Olá, sou <span className="text-blue-600 dark:text-blue-500">Luiz Filipe Linhares</span>.
              </h1>
              <p className="text-base sm:text-lg font-medium text-neutral-700 dark:text-neutral-300">
                {PERSONAL_INFO.headline}
              </p>
            </motion.div>

            {/* Breve Apresentação */}
            <motion.p
              initial={shouldReduceMotion ? false : { opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.18 }}
              className="text-sm sm:text-base text-neutral-600 dark:text-neutral-400 leading-relaxed max-w-xl"
            >
              {PERSONAL_INFO.shortBio}
            </motion.p>

            {/* Botões e Links Sociais */}
            <motion.div
              initial={shouldReduceMotion ? false : { opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.25 }}
              className="flex flex-wrap items-center gap-3 pt-2"
            >
              <Button variant="primary" size="md" onClick={onScrollToProjects}>
                <span>Ver projetos</span>
                <ArrowDown className="w-3.5 h-3.5" />
              </Button>

              <Button variant="secondary" size="md" onClick={onScrollToContact}>
                Entre em contato
              </Button>

              <div className="h-5 w-px bg-neutral-300 dark:bg-neutral-800 mx-2 hidden sm:block" />

              <div className="flex items-center gap-1.5">
                <a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub de Luiz Filipe Linhares"
                  className="p-2 text-neutral-600 dark:text-neutral-400 hover:text-neutral-950 dark:hover:text-white rounded-md hover:bg-neutral-100 dark:hover:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 transition-colors"
                >
                  <Github className="w-4 h-4" />
                </a>
                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn de Luiz Filipe Linhares"
                  className="p-2 text-neutral-600 dark:text-neutral-400 hover:text-blue-600 dark:hover:text-blue-400 rounded-md hover:bg-neutral-100 dark:hover:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 transition-colors"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  aria-label="E-mail de Luiz Filipe Linhares"
                  className="p-2 text-neutral-600 dark:text-neutral-400 hover:text-neutral-950 dark:hover:text-white rounded-md hover:bg-neutral-100 dark:hover:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 transition-colors"
                >
                  <Mail className="w-4 h-4" />
                </a>
              </div>
            </motion.div>

            {/* Stack Anchor */}
            <motion.div
              initial={shouldReduceMotion ? false : { opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.45, delay: 0.32 }}
              className="pt-4 border-t border-neutral-200/80 dark:border-neutral-800/80 flex flex-wrap items-center gap-2.5 text-xs text-neutral-500 dark:text-neutral-400"
            >
              <span className="font-medium text-neutral-700 dark:text-neutral-300">Stack:</span>
              <span className="font-mono">React</span>
              <span aria-hidden="true">·</span>
              <span className="font-mono">NestJS</span>
              <span aria-hidden="true">·</span>
              <span className="font-mono">Docker</span>
              <span aria-hidden="true">·</span>
              <span className="font-mono">GitHub Actions</span>
              <span aria-hidden="true">·</span>
              <span className="font-mono">Selenium</span>
            </motion.div>

            {/* Mini terminal com efeito de digitação — reforça a identidade "pipeline" */}
            <motion.div
              initial={shouldReduceMotion ? false : { opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.38 }}
              className="max-w-md rounded-lg border border-neutral-200 dark:border-neutral-800 bg-neutral-950 dark:bg-black overflow-hidden"
              aria-hidden="true"
            >
              <div className="flex items-center gap-1.5 px-3 py-2 bg-neutral-900/80 border-b border-neutral-800">
                <span className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
                <span className="w-2.5 h-2.5 rounded-full bg-amber-500/70" />
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/70" />
                <span className="ml-2 text-[10px] font-mono text-neutral-500">luiz@dev: ~/portfolio</span>
              </div>
              <div className="px-3.5 py-3 font-mono text-xs sm:text-[13px] text-emerald-400 min-h-[2.5rem] flex items-center">
                <span className="text-neutral-500 mr-1.5">$</span>
                {shouldReduceMotion ? (
                  <span>npm run build &amp;&amp; npm run deploy</span>
                ) : (
                  <TypeAnimation
                    sequence={[
                      'npm run build', 900,
                      'npm run build && npm test', 900,
                      'npm run build && npm test && npm run deploy', 1400,
                      '', 400,
                    ]}
                    wrapper="span"
                    speed={55}
                    deletionSpeed={70}
                    repeat={Infinity}
                    cursor
                  />
                )}
              </div>
            </motion.div>
          </div>

          {/* Lado Direito: Espaço para Foto Profissional + Detalhe Geométrico Sutil (5 Colunas) */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end relative">
            <div className="relative w-full max-w-[280px] sm:max-w-[320px]">
              
              {/* O ÚNICO DETALHE VISUAL DIFERENCIADO: Moldura geométrica sutil com leve resposta ao mouse */}
              <motion.div
                style={
                  isDesktop && !shouldReduceMotion
                    ? { x: accentTranslateX, y: accentTranslateY }
                    : undefined
                }
                className="absolute -inset-3.5 border border-dashed border-neutral-300/80 dark:border-neutral-700/80 rounded-2xl pointer-events-none transition-opacity duration-300"
                aria-hidden="true"
              >
                {/* Marcadores de canto sutis estilo blueprint/arquitetura */}
                <span className="absolute -top-1.5 -left-1.5 font-mono text-[10px] text-neutral-400 select-none">+</span>
                <span className="absolute -top-1.5 -right-1.5 font-mono text-[10px] text-neutral-400 select-none">+</span>
                <span className="absolute -bottom-1.5 -left-1.5 font-mono text-[10px] text-neutral-400 select-none">+</span>
                <span className="absolute -bottom-1.5 -right-1.5 font-mono text-[10px] text-neutral-400 select-none">+</span>
                
                <span className="absolute -bottom-5 right-2 font-mono text-[9px] text-neutral-400 dark:text-neutral-600 select-none hidden sm:inline">
                  SYS // ENG.PORTRAIT
                </span>
              </motion.div>

              {/* Card da Foto Profissional */}
              <motion.div
                initial={shouldReduceMotion ? false : { opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.15 }}
                className="relative aspect-[4/5] rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 overflow-hidden shadow-sm flex flex-col items-center justify-center p-6 text-center group"
              >
                {PERSONAL_INFO.photoUrl ? (
                  /* Quando Luiz inserir a URL da foto em portfolioData.ts, esta tag carrega a imagem real */
                  <img
                    src={PERSONAL_INFO.photoUrl}
                    alt={`Foto profissional de ${PERSONAL_INFO.name}`}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                ) : (
                  /* Estrutura visual elegante e limpa enquanto aguarda a inserção da foto */
                  <div className="space-y-4 max-w-[220px]">
                    <div className="w-16 h-16 rounded-full bg-neutral-100 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 flex items-center justify-center mx-auto text-neutral-500 dark:text-neutral-400">
                      <User className="w-8 h-8 stroke-[1.5]" />
                    </div>

                    <div className="space-y-1">
                      <div className="text-xs font-semibold text-neutral-900 dark:text-white">
                        {PERSONAL_INFO.name}
                      </div>
                      <p className="text-[11px] font-mono text-neutral-500 dark:text-neutral-400">
                        Foto Profissional
                      </p>
                    </div>

                    <p className="text-[10px] text-neutral-400 dark:text-neutral-500 leading-tight border-t border-neutral-100 dark:border-neutral-800/80 pt-2 font-mono">
                      Substitua facilmente em <code className="text-neutral-700 dark:text-neutral-300">src/data/portfolioData.ts</code>
                    </p>
                  </div>
                )}
              </motion.div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
