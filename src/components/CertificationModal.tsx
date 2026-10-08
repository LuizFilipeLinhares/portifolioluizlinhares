import React, { useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { X, ExternalLink, Calendar, BadgeCheck } from 'lucide-react';
import { CertificationItem } from '../types/portfolio';

interface CertificationModalProps {
  cert: CertificationItem | null;
  onClose: () => void;
}

export const CertificationModal: React.FC<CertificationModalProps> = ({ cert, onClose }) => {
  // Fecha com a tecla Esc
  useEffect(() => {
    if (!cert) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [cert, onClose]);

  return (
    <AnimatePresence>
      {cert && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.18 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/70 backdrop-blur-xs overflow-y-auto"
          onClick={onClose}
          role="dialog"
          aria-modal="true"
          aria-label={`Certificado: ${cert.title}`}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 10 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-2xl bg-white dark:bg-neutral-900 border border-neutral-300 dark:border-neutral-800 rounded-2xl shadow-2xl max-h-[92vh] flex flex-col overflow-hidden"
          >
            {/* Barra superior */}
            <div className="flex items-center justify-between px-5 py-3.5 border-b border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-950/70">
              <div className="flex items-center gap-2 text-xs font-mono text-neutral-500 dark:text-neutral-400">
                <BadgeCheck className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
                <span>CERTIFICADO</span>
              </div>
              <button
                type="button"
                onClick={onClose}
                aria-label="Fechar certificado"
                className="p-1.5 text-neutral-400 hover:text-neutral-900 dark:hover:text-white rounded-md hover:bg-neutral-200 dark:hover:bg-neutral-800 cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Conteúdo */}
            <div className="overflow-y-auto">
              {cert.imageUrl && (
                <div className="bg-neutral-100 dark:bg-neutral-950 p-3 sm:p-5">
                  <img
                    src={cert.imageUrl}
                    alt={`Certificado: ${cert.title}, emitido por ${cert.issuer}`}
                    className="w-full h-auto rounded-lg border border-neutral-200 dark:border-neutral-800 shadow-sm"
                  />
                </div>
              )}

              <div className="p-5 sm:p-6 space-y-3">
                <div className="flex items-center justify-between text-xs font-mono text-neutral-500 dark:text-neutral-400">
                  <span>{cert.area}</span>
                  <span className="inline-flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    {cert.date}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-neutral-900 dark:text-white leading-snug">
                  {cert.title}
                </h3>
                <p className="text-sm font-medium text-blue-600 dark:text-blue-400">{cert.issuer}</p>

                {cert.description && (
                  <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed pt-1">
                    {cert.description}
                  </p>
                )}

                {(cert.certificateCode || cert.verificationUrl) && (
                  <div className="pt-3 mt-3 border-t border-neutral-100 dark:border-neutral-800 flex flex-wrap items-center justify-between gap-2">
                    {cert.certificateCode && (
                      <span className="text-[11px] font-mono text-neutral-400">{cert.certificateCode}</span>
                    )}
                    {cert.verificationUrl && cert.verificationUrl !== '#' && (
                      <a
                        href={cert.verificationUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-medium text-neutral-700 dark:text-neutral-300 hover:text-blue-600 dark:hover:text-blue-400"
                      >
                        <span>Validar certificado</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    )}
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
