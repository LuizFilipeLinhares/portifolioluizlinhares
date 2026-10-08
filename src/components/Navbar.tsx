import React, { useState, useEffect } from 'react';
import { Sun, Moon, Menu, X, FileText, ArrowUpRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { PERSONAL_INFO } from '../data/portfolioData';
import { Logo } from './ui/Logo';

interface NavbarProps {
  darkMode: boolean;
  setDarkMode: (val: boolean | ((prev: boolean) => boolean)) => void;
  onOpenResume: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ darkMode, setDarkMode, onOpenResume }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('inicio');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = ['inicio', 'sobre', 'competencias', 'projetos', 'tcc', 'experiencia', 'certificacoes', 'contato'];
      const scrollPosition = window.scrollY + 140;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Início', href: '#inicio', id: 'inicio' },
    { label: 'Sobre', href: '#sobre', id: 'sobre' },
    { label: 'Competências', href: '#competencias', id: 'competencias' },
    { label: 'Projetos', href: '#projetos', id: 'projetos' },
    { label: 'TCC / Pesquisa', href: '#tcc', id: 'tcc' },
    { label: 'Trajetória', href: '#experiencia', id: 'experiencia' },
    { label: 'Certificações', href: '#certificacoes', id: 'certificacoes' },
    { label: 'Contato', href: '#contato', id: 'contato' },
  ];

  const handleLinkClick = (href: string) => {
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'bg-neutral-50/90 dark:bg-neutral-950/90 backdrop-blur-md border-b border-neutral-200/80 dark:border-neutral-800/80 shadow-2xs'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14 sm:h-16">
          {/* Brand Wordmark */}
          <a
            href="#inicio"
            onClick={(e) => {
              e.preventDefault();
              handleLinkClick('#inicio');
            }}
            className="flex items-center gap-2 text-sm font-semibold tracking-tight text-neutral-900 dark:text-white hover:opacity-80 transition-opacity"
          >
            <Logo className="w-7 h-7 rounded-[7px] shrink-0" />
            <span className="hidden sm:inline font-sans">{PERSONAL_INFO.name}</span>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-5 text-xs font-medium text-neutral-600 dark:text-neutral-400">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleLinkClick(link.href);
                  }}
                  className={`relative py-1.5 transition-colors whitespace-nowrap ${
                    isActive
                      ? 'text-neutral-950 dark:text-white font-semibold'
                      : 'text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-200'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <motion.span
                      layoutId="activeNavIndicator"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600 dark:bg-blue-400 rounded-full"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Actions: Theme Toggle + Resume + Mobile Hamburger */}
          <div className="flex items-center gap-2 sm:gap-2.5">
            <button
              type="button"
              onClick={() => setDarkMode((prev) => !prev)}
              aria-label={darkMode ? 'Ativar modo claro' : 'Ativar modo escuro'}
              className="p-1.5 text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white rounded-md border border-neutral-200 dark:border-neutral-800 hover:bg-neutral-100 dark:hover:bg-neutral-900 transition-colors"
            >
              {darkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>

            <button
              type="button"
              onClick={onOpenResume}
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-neutral-800 dark:text-neutral-200 bg-neutral-100 hover:bg-neutral-200 dark:bg-neutral-800 dark:hover:bg-neutral-700 border border-neutral-200 dark:border-neutral-700 rounded-md transition-colors whitespace-nowrap cursor-pointer"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Currículo</span>
            </button>

            <a
              href="#contato"
              onClick={(e) => {
                e.preventDefault();
                handleLinkClick('#contato');
              }}
              className="hidden md:inline-flex items-center gap-1 px-3 py-1.5 text-xs font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-md transition-colors whitespace-nowrap"
            >
              <span>Fale comigo</span>
              <ArrowUpRight className="w-3 h-3" />
            </a>

            {/* Mobile Hamburger Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              aria-label={mobileMenuOpen ? 'Fechar menu' : 'Abrir menu'}
              className="lg:hidden p-1.5 text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white rounded-md border border-neutral-200 dark:border-neutral-800"
            >
              {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden bg-neutral-50/98 dark:bg-neutral-950/98 border-b border-neutral-200 dark:border-neutral-800 px-4 pt-2 pb-5 space-y-1 shadow-md"
          >
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleLinkClick(link.href);
                  }}
                  className={`block px-3 py-2 text-xs font-medium rounded-md transition-colors ${
                    isActive
                      ? 'bg-blue-50 dark:bg-blue-950/40 text-blue-600 dark:text-blue-400 font-semibold'
                      : 'text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-900'
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
            <div className="pt-3 border-t border-neutral-200 dark:border-neutral-800 flex gap-2">
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenResume();
                }}
                className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2 text-xs font-medium text-neutral-800 dark:text-neutral-200 bg-neutral-100 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-md"
              >
                <FileText className="w-3.5 h-3.5" />
                <span>Currículo</span>
              </button>
              <a
                href="#contato"
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick('#contato');
                }}
                className="flex-1 inline-flex items-center justify-center gap-1 px-3 py-2 text-xs font-medium text-white bg-blue-600 rounded-md"
              >
                <span>Fale comigo</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
