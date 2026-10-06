import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';

interface SectionProps {
  id?: string;
  className?: string;
  children: React.ReactNode;
}

export const Section: React.FC<SectionProps> = ({ id, className = '', children }) => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.section
      id={id}
      initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className={`py-20 sm:py-24 border-t border-neutral-200/80 dark:border-neutral-800/80 ${className}`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {children}
      </div>
    </motion.section>
  );
};
