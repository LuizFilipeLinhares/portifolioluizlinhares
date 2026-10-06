import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { TccSection } from './components/TccSection';
import { Experience } from './components/Experience';
import { Certifications } from './components/Certifications';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ResumeModal } from './components/ResumeModal';

export default function App() {
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('lf_theme');
      if (savedTheme) {
        return savedTheme === 'dark';
      }
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return false;
  });

  const [isResumeOpen, setIsResumeOpen] = useState(false);

  useEffect(() => {
    const root = document.documentElement;
    if (darkMode) {
      root.classList.add('dark');
      localStorage.setItem('lf_theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('lf_theme', 'light');
    }
  }, [darkMode]);

  const scrollToProjects = () => {
    const el = document.getElementById('projetos');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToContact = () => {
    const el = document.getElementById('contato');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-neutral-50 dark:bg-neutral-950 text-neutral-900 dark:text-neutral-100 flex flex-col font-sans transition-colors duration-200">
      {/* Navigation */}
      <Navbar
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        onOpenResume={() => setIsResumeOpen(true)}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        <Hero
          onScrollToProjects={scrollToProjects}
          onScrollToContact={scrollToContact}
        />
        <About />
        <Skills />
        <Projects />
        <TccSection />
        <Experience />
        <Certifications />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Quick Resume Inspection Modal */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />
    </div>
  );
}
