import React, { useState } from 'react';
import { CERTIFICATIONS } from '../data/portfolioData';
import { CertificationItem } from '../types/portfolio';
import { Section } from './ui/Section';
import { CertificationCard } from './CertificationCard';
import { CertificationModal } from './CertificationModal';
import { ChevronDown, ChevronUp } from 'lucide-react';

export const Certifications: React.FC = () => {
  const [showAll, setShowAll] = useState(false);
  const [selectedCert, setSelectedCert] = useState<CertificationItem | null>(null);
  const displayedCerts = showAll ? CERTIFICATIONS : CERTIFICATIONS.slice(0, 4);

  return (
    <Section id="certificacoes">
      <div className="space-y-8">
        {/* Section Header */}
        <div className="space-y-1">
          <div className="text-xs font-mono text-neutral-500 dark:text-neutral-400">
            06 / CERTIFICAÇÕES
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-neutral-900 dark:text-white">
            Certificações &amp; Cursos
          </h2>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {displayedCerts.map((cert) => (
            <CertificationCard
              key={cert.id}
              cert={cert}
              onClick={() => setSelectedCert(cert)}
            />
          ))}
        </div>

        {/* View all toggle */}
        {CERTIFICATIONS.length > 4 && (
          <div className="pt-2 text-center">
            <button
              type="button"
              onClick={() => setShowAll((prev) => !prev)}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-medium text-neutral-700 dark:text-neutral-300 bg-neutral-100 hover:bg-neutral-200 dark:bg-neutral-800 dark:hover:bg-neutral-700 rounded-md transition-colors cursor-pointer"
            >
              <span>{showAll ? 'Ver menos' : `Ver todas (${CERTIFICATIONS.length})`}</span>
              {showAll ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
            </button>
          </div>
        )}
      </div>

      <CertificationModal cert={selectedCert} onClose={() => setSelectedCert(null)} />
    </Section>
  );
};
