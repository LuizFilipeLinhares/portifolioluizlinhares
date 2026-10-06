import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { CertificationItem } from '../types/portfolio';

interface CertificationCardProps {
  cert: CertificationItem;
}

export const CertificationCard: React.FC<CertificationCardProps> = ({ cert }) => {
  return (
    <motion.div
      whileHover={{ y: -2 }}
      transition={{ duration: 0.15, ease: 'easeOut' }}
      className="p-4 rounded-lg border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 flex flex-col justify-between space-y-3"
    >
      <div className="space-y-1">
        <div className="flex items-center justify-between text-xs font-mono text-neutral-500 dark:text-neutral-400">
          <span>{cert.area}</span>
          <span>{cert.date}</span>
        </div>

        <h4 className="text-sm font-semibold text-neutral-900 dark:text-white leading-snug">
          {cert.title}
        </h4>

        <p className="text-xs text-neutral-500 dark:text-neutral-400">
          {cert.issuer}
        </p>
      </div>

      {cert.certificateCode && (
        <div className="pt-2 border-t border-neutral-100 dark:border-neutral-800 flex items-center justify-between text-[11px] font-mono text-neutral-400">
          <span>{cert.certificateCode}</span>
          {cert.verificationUrl && cert.verificationUrl !== '#' && (
            <a
              href={cert.verificationUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-600 dark:text-neutral-300 hover:text-blue-600 dark:hover:text-blue-400 inline-flex items-center gap-1"
            >
              <span>Validar</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          )}
        </div>
      )}
    </motion.div>
  );
};
