import React from 'react';
import { motion } from 'framer-motion';
import { Maximize2 } from 'lucide-react';
import { CertificationItem } from '../types/portfolio';

interface CertificationCardProps {
  cert: CertificationItem;
  onClick?: () => void;
}

export const CertificationCard: React.FC<CertificationCardProps> = ({ cert, onClick }) => {
  return (
    <motion.button
      type="button"
      onClick={onClick}
      whileHover={{ y: -2 }}
      transition={{ duration: 0.15, ease: 'easeOut' }}
      className="group text-left w-full rounded-lg border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 overflow-hidden flex flex-col cursor-pointer hover:border-blue-300 dark:hover:border-blue-800 hover:shadow-md transition-[border-color,box-shadow]"
    >
      {/* Miniatura do certificado */}
      {cert.imageUrl && (
        <div className="relative aspect-[4/3] w-full overflow-hidden bg-neutral-100 dark:bg-neutral-950 border-b border-neutral-200 dark:border-neutral-800">
          <img
            src={cert.imageUrl}
            alt={`Miniatura do certificado: ${cert.title}`}
            loading="lazy"
            className="w-full h-full object-cover object-top transition-transform duration-300 group-hover:scale-[1.04]"
          />
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/35 transition-colors duration-200 flex items-center justify-center">
            <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 inline-flex items-center gap-1.5 text-[11px] font-semibold text-white bg-black/60 px-2.5 py-1 rounded-full">
              <Maximize2 className="w-3 h-3" />
              Ver certificado
            </span>
          </div>
        </div>
      )}

      <div className="p-4 flex flex-col justify-between flex-1 space-y-3">
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
          <div className="pt-2 border-t border-neutral-100 dark:border-neutral-800 text-[11px] font-mono text-neutral-400 truncate">
            {cert.certificateCode}
          </div>
        )}
      </div>
    </motion.button>
  );
};
